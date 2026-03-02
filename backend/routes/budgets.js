const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Budget = require("../models/Budget");
const auth = require("../middleware/auth");

router.use(auth);

router.get("/", async (req, res) => {
  const budgets = await Budget.find({ userId: req.user.id }).sort({ category: 1 });
  res.json(budgets);
});

// Create/update budget by category
router.post("/", async (req, res) => {
  try {
    const category = String(req.body.category || "").trim();
    const allocated = Number(req.body.allocated || 0);

    if (!category) return res.status(400).json({ message: "Category is required" });
    if (!Number.isFinite(allocated) || allocated < 0) {
      return res.status(400).json({ message: "Allocated amount must be 0 or greater" });
    }

    const budget = await Budget.findOneAndUpdate(
      { userId: req.user.id, category },
      { $set: { allocated } },
      { new: true, upsert: true }
    );

    res.status(201).json(budget);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

router.put("/:id", async (req, res) => {
  const budget = await Budget.findOne({ _id: req.params.id, userId: req.user.id });
  if (!budget) return res.status(404).json({ message: "Budget not found" });

  if (req.body.allocated !== undefined) {
    const allocated = Number(req.body.allocated);
    if (!Number.isFinite(allocated) || allocated < 0) {
      return res.status(400).json({ message: "Allocated amount must be 0 or greater" });
    }
    budget.allocated = allocated;
  }
  const saved = await budget.save();
  res.json(saved);
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid budget id" });
    }

    const deleted = await Budget.findOneAndDelete({ _id: id, userId: req.user.id });
    if (!deleted) return res.status(404).json({ message: "Budget not found" });

    res.json({ message: "Budget deleted" });
  } catch (e) {
    res.status(500).json({ message: e.message || "Failed to delete budget" });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");
const auth = require("../middleware/auth");

router.use(auth);

// Summary
router.get("/summary", async (req, res) => {
  const txs = await Transaction.find({ userId: req.user.id });
  let income = 0, expenses = 0;
  for (const t of txs) {
    if (t.type === "income") income += Number(t.amount || 0);
    else expenses += Number(t.amount || 0);
  }
  res.json({ income, expenses, balance: income - expenses });
});

// Pie chart: spending by category
router.get("/spending-by-category", async (req, res) => {
  const data = await Transaction.aggregate([
    { $match: { userId: req.user.id, type: "expense" } },
    { $group: { _id: "$category", total: { $sum: "$amount" } } },
    { $sort: { total: -1 } }
  ]);
  res.json(data);
});

// Line chart: monthly trends
router.get("/monthly-trends", async (req, res) => {
  const data = await Transaction.aggregate([
    { $match: { userId: req.user.id } },
    {
      $group: {
        _id: { month: { $month: "$date" }, type: "$type" },
        total: { $sum: "$amount" }
      }
    },
    { $sort: { "_id.month": 1 } }
  ]);
  res.json(data);
});

// CRUD
router.get("/", async (req, res) => {
  const items = await Transaction.find({ userId: req.user.id }).sort({ date: -1 });
  res.json(items);
});

router.post("/", async (req, res) => {
  const tx = await Transaction.create({ ...req.body, userId: req.user.id });
  res.status(201).json(tx);
});

router.delete("/:id", async (req, res) => {
  const deleted = await Transaction.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  if (!deleted) return res.status(404).json({ message: "Transaction not found" });
  res.json({ message: "Transaction deleted" });
});

module.exports = router;

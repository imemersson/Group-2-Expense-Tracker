# Expense Tracker

<<<<<<< HEAD
Full-stack expense tracker built with HTML/CSS/JavaScript, Node.js, Express, and MongoDB.
=======

<img width="1916" height="910" alt="Login" src="https://github.com/user-attachments/assets/c250d841-6145-425c-8a72-6ff48607b038" />
<img width="1913" height="911" alt="Dashboard" src="https://github.com/user-attachments/assets/a0a34901-ff50-482b-9006-7459698d9614" />
<img width="1912" height="909" alt="Budget" src="https://github.com/user-attachments/assets/64f3d6e2-3b67-46d4-8302-5e8b7b45a45e" />
<img width="1911" height="910" alt="Category" src="https://github.com/user-attachments/assets/1af06e04-56b6-4024-9c33-4e6ccf5313f1" />
<img width="1914" height="909" alt="Transactions" src="https://github.com/user-attachments/assets/d45e5216-7d97-49ff-b04c-bcdffbf19f1e" />
<img width="1916" height="908" alt="Profile setting" src="https://github.com/user-attachments/assets/ec4f747b-549f-4576-b4c9-23f7b5ea685f" />

A complete expense tracking web application built with HTML, CSS, JavaScript, Node.js, Express, and MongoDB.
>>>>>>> 876b8ef916b26c707aad85e075beed6199b348a8

## Core Features
- Expense and income tracking
- Budget management by category
- Category management
- Dashboard charts and export
- Google OAuth + JWT authentication
- Firebase Storage profile image upload (private objects + signed URL retrieval)
- RBAC-protected admin endpoints

## Backend Setup
1. Install dependencies:

```bash
cd backend
npm install
<<<<<<< HEAD
```

2. Create `backend/.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
SESSION_SECRET=your_session_secret
FRONTEND_URL=http://localhost:5000
CORS_ORIGIN=http://localhost:5000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
FIREBASE_STORAGE_BUCKET=your_project.appspot.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_service_account_email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

3. Run the server:

```bash
npm run dev
```

4. Open:
- `http://localhost:5000/index.html`

## Milestone 2 Documents
- Integration plan: `docs/milestone-2-integration-plan.md`
- Basic testing results template: `docs/basic-testing-results.md`
=======
>>>>>>> 876b8ef916b26c707aad85e075beed6199b348a8

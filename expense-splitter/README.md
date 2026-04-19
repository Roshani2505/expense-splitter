# 💸 Smart Expense Splitter

A modern, intuitive web application to manage and split shared expenses among friends, roommates, or teams.
Built with a clean UI, real-time calculations, and smart insights to simplify group expense tracking.

---

## 🚀 Live Demo

https://expense-splitter-xi-eight.vercel.app/

---

## 📌 Problem Statement

Managing shared expenses manually often leads to confusion about:

* Who paid?
* Who owes whom?
* How much to settle?

This application solves the problem by providing a **simple, fast, and user-friendly expense splitting system**.

---

## ✨ Features

### 👥 Group & Members

* Add multiple members to a group
* Dynamic member management

### 💸 Expense Management

* Add expenses with:

  * Title
  * Amount
  * Paid by
  * Participants
* Equal expense splitting

### ⚖️ Smart Balance Calculation

* Automatic balance updates
* Real-time calculation of:

  * Who owes whom
  * Exact settlement amounts

### 🔄 Settlement System

* Minimizes number of transactions
* Displays:

  * `A pays B ₹X`

### 📊 AI-Powered Features (Lightweight)

* Smart expense categorization (Food, Travel, Rent, etc.)
* Spending insights by category

### 📋 Sharing Features

* Copy settlement summary to clipboard
* Share summary via WhatsApp

### 💾 Data Persistence

* Uses **LocalStorage** to save:

  * Members
  * Expenses
* Data remains even after refresh

### 🎨 UI/UX

* Dark theme with animated gradient background 🌌
* Glassmorphism-style cards
* Responsive dashboard layout
* Smooth animations

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Styling:** CSS (Custom, Glassmorphism + Gradient UI)
* **State Management:** React Hooks
* **Storage:** Browser LocalStorage
* **Deployment:** Vercel / Netlify

---

## 🧠 Architecture Overview

* Component-based structure:

  * `AddMember`
  * `AddExpense`
  * `ExpenseList`
  * `BalanceSummary`
  * `Insights`
* Central state managed in `App.jsx`
* Utility-based AI logic (`utils/ai.js`)
* No backend used (optimized for speed and simplicity)

---

## ⚖️ Design Decision

> This project uses **LocalStorage instead of a backend** to ensure rapid development within the 24-hour constraint.

The architecture is designed to be easily extendable to:

* Node.js backend
* Database (MongoDB/Firebase)
* Multi-user support

---

## 📂 Folder Structure

```bash
src/
 ├── components/
 │    ├── AddMember.jsx
 │    ├── AddExpense.jsx
 │    ├── ExpenseList.jsx
 │    ├── BalanceSummary.jsx
 │    ├── Insights.jsx
 │
 ├── utils/
 │    ├── ai.js
 │
 ├── App.jsx
 ├── App.css
 ├── main.jsx
```

---

## ⚙️ Setup Instructions

```bash
# Clone the repository
git clone https://github.com/Roshani2505/expense-splitter

# Navigate to project
cd expense-splitter

# Install dependencies
npm install

# Run the app
npm run dev
```

---

## 🌐 Deployment

Deploy easily on:

* Vercel
* Netlify

---

## 📹 Demo Video

https://drive.google.com/file/d/1JTCavrmplabEhEgQAm3GPCC8kwNveQww/view?usp=sharing

---

## 🔮 Future Enhancements

* Custom expense splitting
* User authentication
* Cloud database integration
* Real-time multi-user sync
* Charts & analytics dashboard

---

## 👨‍💻 Author

**ROSHANI**

---

## ⭐ Acknowledgment

Built as part of an internship assignment within a 24-hour time constraint, focusing on:

* Clean UI
* Efficient logic
* Practical usability

---

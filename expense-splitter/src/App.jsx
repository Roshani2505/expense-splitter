import { useState, useEffect } from "react";
import AddMember from "./components/AddMember";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import BalanceSummary from "./components/BalanceSummary";
import Insights from "./components/Insights";

function App() {
  // 🔹 Load from LocalStorage initially
  const [members, setMembers] = useState(() => {
    const saved = localStorage.getItem("members");
    return saved ? JSON.parse(saved) : [];
  });

  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  // 🔹 Save whenever data changes
  useEffect(() => {
    localStorage.setItem("members", JSON.stringify(members));
  }, [members]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
  <div className="container fade-in">
    <h1>💸 Smart Expense Splitter</h1>

    {/* TOP ROW */}
    <div className="top-grid">
      <AddMember members={members} setMembers={setMembers} />
      <AddExpense
        members={members}
        expenses={expenses}
        setExpenses={setExpenses}
      />
      <BalanceSummary members={members} expenses={expenses} />
    </div>

    {/* BOTTOM ROW */}
    <div className="bottom-grid">
      <ExpenseList expenses={expenses} />
      <Insights expenses={expenses} />
    </div>
  </div>
);
}

export default App;
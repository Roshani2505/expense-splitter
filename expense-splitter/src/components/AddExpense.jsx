import { useState } from "react";
import { categorizeExpense } from "../utils/ai";

function AddExpense({ members, expenses, setExpenses }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);

  const toggleMember = (member) => {
    if (selectedMembers.includes(member)) {
      setSelectedMembers(selectedMembers.filter((m) => m !== member));
    } else {
      setSelectedMembers([...selectedMembers, member]);
    }
  };

  const addExpense = () => {
    if (!title || !amount || !paidBy || selectedMembers.length === 0) return;

   const newExpense = {
  id: Date.now(),
  title,
  amount: parseFloat(amount),
  paidBy,
  participants: selectedMembers,
  category: categorizeExpense(title), // 🔥 AI added
};

    setExpenses([...expenses, newExpense]);

    // reset
    setTitle("");
    setAmount("");
    setPaidBy("");
    setSelectedMembers([]);
  };

  return (
    <div className="card">
      <h2>Add Expense</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={paidBy} onChange={(e) => setPaidBy(e.target.value)}>
        <option value="">Paid By</option>
        {members.map((m, i) => (
          <option key={i} value={m}>
            {m}
          </option>
        ))}
      </select>

      <div>
        <p>Split Between:</p>
        {members.map((m, i) => (
          <label key={i}>
            <input
              type="checkbox"
              checked={selectedMembers.includes(m)}
              onChange={() => toggleMember(m)}
            />
            {m}
          </label>
        ))}
      </div>

      <button onClick={addExpense}>Add Expense</button>
    </div>
  );
}

export default AddExpense;
function ExpenseList({ expenses }) {
  return (
    <div className="card">
      <h2>Expenses</h2>

      {expenses.length === 0 && <p>No expenses yet</p>}

      <ul>
        {expenses.map((exp) => (
          <li key={exp.id}>
  <strong>{exp.title}</strong> ({exp.category})
  <br />
  ₹{exp.amount} • Paid by {exp.paidBy}
</li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
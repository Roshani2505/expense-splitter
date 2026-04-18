function Insights({ expenses }) {
  const categoryTotals = {};

  expenses.forEach((exp) => {
    if (!categoryTotals[exp.category]) {
      categoryTotals[exp.category] = 0;
    }
    categoryTotals[exp.category] += exp.amount;
  });

  return (
    <div className="card">
      <h2>📊 Insights</h2>

      {Object.entries(categoryTotals).length === 0 ? (
        <p>No data yet</p>
      ) : (
        <ul>
          {Object.entries(categoryTotals).map(([cat, amt]) => (
            <li key={cat}>
              {cat}: ₹{amt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Insights;
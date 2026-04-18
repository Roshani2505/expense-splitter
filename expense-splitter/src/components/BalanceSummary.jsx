function BalanceSummary({ members, expenses }) {
  const balances = {};

  // Step 1: Initialize balances
  members.forEach((m) => {
    balances[m] = 0;
  });

  // Step 2: Calculate balances
  expenses.forEach((exp) => {
    const splitAmount = exp.amount / exp.participants.length;

    exp.participants.forEach((p) => {
      balances[p] -= splitAmount;
    });

    balances[exp.paidBy] += exp.amount;
  });

  // Step 3: Separate creditors & debtors
  const creditors = [];
  const debtors = [];

  Object.entries(balances).forEach(([person, balance]) => {
    if (balance > 0) creditors.push({ person, amount: balance });
    if (balance < 0) debtors.push({ person, amount: -balance });
  });

  // Step 4: Settlement logic
  const settlements = [];
  let i = 0,
    j = 0;

  while (i < debtors.length && j < creditors.length) {
    const debtor = debtors[i];
    const creditor = creditors[j];

    const minAmount = Math.min(debtor.amount, creditor.amount);

    settlements.push({
      from: debtor.person,
      to: creditor.person,
      amount: minAmount,
    });

    debtor.amount -= minAmount;
    creditor.amount -= minAmount;

    if (debtor.amount === 0) i++;
    if (creditor.amount === 0) j++;
  }

  // 📋 Copy Summary
  const copySummary = () => {
    let text = "💸 Expense Settlement:\n\n";

    settlements.forEach((s) => {
      text += `${s.from} pays ${s.to} ₹${s.amount.toFixed(2)}\n`;
    });

    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  // 📤 WhatsApp Share
  const shareWhatsApp = () => {
    let text = "💸 Expense Settlement:\n\n";

    settlements.forEach((s) => {
      text += `${s.from} pays ${s.to} ₹${s.amount.toFixed(2)}\n`;
    });

    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="card">
      <h2>Balance Summary</h2>

      {/* Net Balances */}
      <h3 style={{ marginTop: "10px" }}>Net Balances</h3>
      <ul>
        {Object.entries(balances).map(([person, balance]) => (
          <li
            key={person}
            className={balance >= 0 ? "positive" : "negative"}
          >
            {person}: ₹{balance.toFixed(2)}
          </li>
        ))}
      </ul>

      {/* Settlements */}
      <h3 style={{ marginTop: "15px" }}>Settlements</h3>

      {settlements.length === 0 ? (
        <p>All settled 🎉</p>
      ) : (
        <ul>
          {settlements.map((s, index) => (
            <li key={index}>
              {s.from} pays {s.to} ₹{s.amount.toFixed(2)}
            </li>
          ))}
        </ul>
      )}

      {/* Buttons */}
      {settlements.length > 0 && (
        <>
          <button onClick={copySummary}>📋 Copy Summary</button>
          <button onClick={shareWhatsApp}>📤 Share on WhatsApp</button>
        </>
      )}
    </div>
  );
}

export default BalanceSummary;
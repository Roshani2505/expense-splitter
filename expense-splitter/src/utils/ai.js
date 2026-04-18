export function categorizeExpense(title) {
  const text = title.toLowerCase();

  if (text.includes("pizza") || text.includes("food") || text.includes("burger") || text.includes("dinner")) {
    return "Food 🍕";
  }

  if (text.includes("uber") || text.includes("taxi") || text.includes("bus") || text.includes("travel")) {
    return "Travel 🚕";
  }

  if (text.includes("rent") || text.includes("room") || text.includes("flat")) {
    return "Rent 🏠";
  }

  if (text.includes("movie") || text.includes("netflix") || text.includes("game")) {
    return "Entertainment 🎬";
  }

  return "Other 🛒";
}
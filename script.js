// Initialize a chart for income and expenses
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("chart").getContext("2d");
  
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
          {
            label: "Income",
            data: [3000, 3200, 3400, 3500, 3700],
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            tension: 0.4,
          },
          {
            label: "Expenses",
            data: [2000, 2100, 2200, 2300, 2400],
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
    });
  
    // Interactive buttons for adding and removing expenses
    const expenseList = document.getElementById("expense-list");
    document.getElementById("add-expense").addEventListener("click", () => {
      const newExpense = document.createElement("li");
      newExpense.textContent = `New Expense - $${Math.floor(Math.random() * 500) + 50}`;
      expenseList.appendChild(newExpense);
    });
  
    document.getElementById("remove-expense").addEventListener("click", () => {
      if (expenseList.lastChild) {
        expenseList.removeChild(expenseList.lastChild);
      }
    });
  });
  
var ctx = document.getElementById("incomeChart").getContext("2d");
ctx.canvas.height = 200;
var incomeChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Income",
        data: [12000, 15000, 8000, 15000, 20000, 15000, 18000],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  },
});

ctx = document.getElementById("expensesChart").getContext("2d");
ctx.canvas.height = 200;
var expensesChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Expenses",
        data: [2000, 3000, 2500, 3500, 2000, 3000, 4000],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  },
});

ctx = document.getElementById("expensesByCategoryChart");
var expensesByCategoryChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Food", "Transport", "fuel", "Entertain", "Groceries", "Tool"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

ctx = document.getElementById("expensesByCategoryBarChart");
var expensesByCategoryBarChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Food", "Transport", "fuel", "Entertain", "Groceries", "Tool"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    indexAxis: "y",
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

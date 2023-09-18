

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Food",
      data: [20000,40000,50000,250000,400000,500000,900000],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
    },
    {
      label: "Transport",
      data: [20000,40000,50000,250000,400000,500000,900000],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
    },
    {
      label: "Entertain",
      data: [60000,80000,40000,550000,700000,100000,200000],
      backgroundColor: "#299b63",
    },
  ],
};

var ctx = document.getElementById("expanseByCategoryChart").getContext("2d");
ctx.canvas.height = 200;
var expanseByCategoryChart = new Chart(ctx, {
  type: "bar",
  data: data,
  options: {
    plugins: {
      title: {
        display: true,
        text: "Chart.js Bar Chart - Stacked",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
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
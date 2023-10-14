

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

fetch('/transaction/v1/expenses/bycategory', {
  method: 'GET', // Use the appropriate HTTP method
  headers: {
    'Content-Type': 'application/json',
  },
  
})
  .then(response => response.json())
  .then(data => {
    // Get the data from the response
    const chartData = data.data;

    // Create the chart using Chart.js
    const ctx = document.getElementById('expanseByCategoryChart').getContext('2d');
    const expanseByCategoryChart = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        scales: {
          x: {
            stacked: true, // Stack bars on the x-axis (months)
          },
          y: {
            stacked: true, // Stack bars on the y-axis (categories)
          },
        },
      },
    });
  })
  .catch(error => {
    console.error('Error:', error);
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
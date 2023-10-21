
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





$(document).ready(function () {
  // Function to fetch data using jQuery AJAX
  function fetchData(selectedMonth, selectedYear) {
    $.ajax({
      url: '/transaction/v1/expenses/filtermonth', // Replace with the correct route URL
      method: 'GET',
      data: { selectedMonth: selectedMonth, selectedYear: selectedYear },
      success: function (data) {
        createBarChart(data);
      },
      error: function (error) {
        console.error('Error:', error);
      }
    });
  }

  // Function to create a bar chart with Chart.js
  // Function to create a bar chart with Chart.js
function createBarChart(data) {
   // Get the canvas elements for the bar chart and pie chart
   const barChartCanvas = document.getElementById("expensesByCategoryBarChart").getContext("2d");
   const pieChartCanvas = document.getElementById("expensesByCategoryChart").getContext("2d");
 
   // Check if a chart already exists on the canvas for the bar chart
   const existingBarChart = Chart.getChart(barChartCanvas);
 
   // If an existing bar chart is found, destroy it
   if (existingBarChart) {
     existingBarChart.destroy();
   }
 
   // Check if a chart already exists on the canvas for the pie chart
   const existingPieChart = Chart.getChart(pieChartCanvas);
 
   // If an existing pie chart is found, destroy it
   if (existingPieChart) {
     existingPieChart.destroy();
   }
 
   // Check if the data object has the expected structure
   if (data && data.status === "success" && Array.isArray(data.data)) {
     const chartData = {
       labels: data.data.map(item => item.category),
       datasets: [
         {
           label: "Total Amount",
           data: data.data.map(item => item.total_amount),
           backgroundColor: "rgba(75, 192, 192, 0.2)",
           borderColor: "rgba(75, 192, 192, 1)",
           borderWidth: 1,
         },
       ],
     };
 
     const chartOptions = {
       scales: {
         y: {
           beginAtZero: true,
         },
       },
     };
 
     // Create the bar chart
     const barChart = new Chart(barChartCanvas, {
       type: "bar",
       data: chartData,
       options: chartOptions,
     });
 
     // Create the pie chart
     const pieChart = new Chart(pieChartCanvas, {
       type: "pie",
       data: {
         labels: chartData.labels,
         datasets: [
           {
             label: "Total Amount",
             data: chartData.datasets[0].data,
             backgroundColor: chartData.datasets[0].backgroundColor,
             borderColor: chartData.datasets[0].borderColor,
             borderWidth: chartData.datasets[0].borderWidth,
           },
         ],
       },
     });
   } else {
     console.error("Data is not in the expected format.");
   }
 }

  // Handle filter button click
  $('#filterButton').on('click', function () {
    const selectedMonth = $('#year').val();
    const selectedYear = $('#month').val();

    if (selectedMonth && selectedYear) {
      fetchData(selectedMonth, selectedYear);
    } else {
      alert('Please select both a month and a year.');
    }
  });
});

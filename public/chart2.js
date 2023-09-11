const ctx_dougnut = document.getElementById('doughnutChart');

  new Chart(ctx_dougnut, {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      responsive:true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
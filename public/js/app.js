// // Toggle Mode
// document.getElementById('toggle-mode').addEventListener('click', () => {
//   document.body.classList.toggle('dark-mode');
// });

// // Last 5 investments
// fetch('/api/investments')
//   .then(res => res.json())
//   .then(data => {
//     const tbody = document.querySelector('#last-investments tbody');
//     tbody.innerHTML = '';
//     data.slice(-5).reverse().forEach(inv => {
//       const row = `<tr>
//         <td>${inv.company}</td>
//         <td>${inv.symbol}</td>
//         <td>₹${inv.amount_invested}</td>
//         <td>₹${inv.current_value}</td>
//       </tr>`;
//       tbody.innerHTML += row;
//     });
//   });

// // Portfolio status for both top section and card values
// //fetch('/api/portfolio-status'
//   //.then(res => res.json())
//   //.then(data => {
//     //const profit = data.profit_loss;
//     //const total = data.total_invested;
//     //const current = data.total_current;

//     // Set top section
//     //const statusDiv = document.getElementById('portfolio-status');
//     //let color = 'text-secondary';
//     //if (profit > 0) color = 'text-success';
//     //else if (profit < 0) color = 'text-danger';

//     //statusDiv.innerHTML = `
//       //<h5>Total Invested: ₹${total}</h5>
//       //<h5>Current Value: ₹${current}</h5>
//       //<h5 class="${color}">Profit/Loss: ₹${profit}</h5>
//     //`;

//     // Update card values
//     //document.getElementById('total-invested').innerText = `₹${total}`;
//     //const currentValueElem = document.getElementById('current-value');
//     //currentValueElem.innerText = `₹${current}`;

//     // Set green/red dynamically
//     //currentValueElem.classList.remove('text-success', 'text-danger', 'text-secondary');
//     //currentValueElem.classList.add(profit >= 0 ? 'text-success' : 'text-danger');
//   //});

// // Portfolio summary section
// fetch('/api/portfolio-status')
//   .then(res => res.json())
//   .then(data => {
//     const profit = data.profit_loss;
//     const total = data.total_invested;
//     const current = data.total_current;

//     // Update values
//     document.getElementById('total-invested').innerText = `₹${total}`;
//     document.getElementById('current-value').innerText = `₹${current}`;

//     const profitElem = document.getElementById('profit-loss');
//     profitElem.innerText = `₹${profit}`;

//     // Apply color based on value
//     profitElem.classList.remove('text-success', 'text-danger', 'text-secondary');
//     if (profit > 0) profitElem.classList.add('text-success');
//     else if (profit < 0) profitElem.classList.add('text-danger');
//     else profitElem.classList.add('text-secondary');
//   });

// // Sector Pie Chart
// fetch('/api/chart-data')
//   .then(res => res.json())
//   .then(data => {
//     const labels = data.map(d => d.sector);
//     const values = data.map(d => d.total);
//     new Chart(document.getElementById('sectorChart'), {
//       type: 'pie',
//       data: {
//         labels: labels,
//         datasets: [{
//           label: 'Sectors',
//           data: values,
//           backgroundColor: [
//             '#007bff', '#28a745', '#ffc107', '#dc3545', '#6f42c1',
//             '#20c997', '#fd7e14', '#17a2b8', '#6610f2'
//           ]
//         }]
//       },
//       options: {
//         responsive: true,
//         plugins: {
//           legend: { position: 'bottom' }
//         }
//       }
//     });
//   });

// // Dummy profit chart (replace with DB data if needed)
// new Chart(document.getElementById('profitLossChart'), {
//   type: 'line',
//   data: {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//     datasets: [{
//       label: 'Monthly Profit',
//       data: [3000, 2000, 5000, 4000, 6000, 4500],
//       borderColor: '#28a745',
//       fill: false,
//       tension: 0.1
//     }]
//   }
// });





// // ==============================
// // Light/Dark Mode Toggle
// // ==============================
// document.addEventListener('DOMContentLoaded', () => {
//   const themeIcon = document.getElementById('theme-icon');
//   if (themeIcon) {
//     themeIcon.addEventListener('click', () => {
//       document.body.classList.toggle('dark-mode');
//       document.body.classList.toggle('light-mode');

//       if (document.body.classList.contains('dark-mode')) {
//         themeIcon.textContent = '🌙';
//         localStorage.setItem('theme', 'dark');
//       } else {
//         themeIcon.textContent = '🌞';
//         localStorage.setItem('theme', 'light');
//       }
//     });
//   }

//   // Load All Data
//   loadLastInvestments();
//   loadPortfolioStatus();
//   loadSectorPieChart();
//   loadProfitLossChart();
// });

// // ==============================
// // 1. Last 5 Investments
// // ==============================
// function loadLastInvestments() {
//   fetch('/api/investments')
//     .then(res => res.json())
//     .then(data => {
//       const tbody = document.querySelector('#last-investments tbody');
//       if (!tbody) return;

//       tbody.innerHTML = '';
//       data.slice(-5).reverse().forEach(inv => {
//         const row = `
//           <tr>
//             <td>${inv.company}</td>
//             <td>${inv.symbol}</td>
//             <td>₹${inv.amount_invested}</td>
//             <td>₹${inv.current_value}</td>
//           </tr>`;
//         tbody.innerHTML += row;
//       });
//     })
//     .catch(err => console.error('Error fetching investments:', err));
// }

// // ==============================
// // 2. Portfolio Summary (Top Stats)
// // ==============================
// function loadPortfolioStatus() {
//   fetch('/api/portfolio-status')
//     .then(res => res.json())
//     .then(data => {
//       const profit = data.profit_loss;
//       const total = data.total_invested;
//       const current = data.total_current;

//       document.getElementById('total-invested').innerText = `₹${total}`;
//       document.getElementById('current-value').innerText = `₹${current}`;

//       const profitElem = document.getElementById('profit-loss');
//       profitElem.innerText = `₹${profit}`;
//       profitElem.classList.remove('text-success', 'text-danger', 'text-secondary');
//       if (profit > 0) profitElem.classList.add('text-success');
//       else if (profit < 0) profitElem.classList.add('text-danger');
//       else profitElem.classList.add('text-secondary');
//     })
//     .catch(err => console.error('Error fetching portfolio status:', err));
// }

// // ==============================
// // 3. Sector Pie Chart
// // ==============================
// function loadSectorPieChart() {
//   fetch('/api/chart-data')
//     .then(res => res.json())
//     .then(data => {
//       const labels = data.map(d => d.sector);
//       const values = data.map(d => d.total);

//       const ctx = document.getElementById('sectorChart');
//       if (!ctx) return;

//       new Chart(ctx, {
//         type: 'pie',
//         data: {
//           labels,
//           datasets: [{
//             data: values,
//             backgroundColor: [
//               '#007bff', '#28a745', '#ffc107', '#dc3545',
//               '#6f42c1', '#20c997', '#fd7e14', '#17a2b8', '#6610f2'
//             ],
//             borderWidth: 1,
//             borderColor: '#fff',
//             hoverOffset: 10
//           }]
//         },
//         options: {
//           responsive: true,
//           plugins: {
//             legend: { position: 'bottom' },
//             tooltip: { enabled: true }
//           }
//         }
//       });
//     })
//     .catch(err => console.error('Error loading sector chart:', err));
// }

// // ==============================
// // 4. Monthly Profit/Loss Line Chart (Dummy)
// // ==============================
// function loadProfitLossChart() {
//   const ctx = document.getElementById('profitLossChart');
//   if (!ctx) return;

//   new Chart(ctx, {
//     type: 'line',
//     data: {
//       labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//       datasets: [{
//         label: 'Monthly Profit',
//         data: [3000, 2000, 5000, 4000, 6000, 4500],
//         borderColor: '#28a745',
//         backgroundColor: 'rgba(40, 167, 69, 0.2)',
//         fill: true,
//         tension: 0.3,
//         pointBackgroundColor: '#fff',
//         pointBorderColor: '#28a745',
//         pointRadius: 5,
//         pointHoverRadius: 7
//       }]
//     },
//     options: {
//       responsive: true,
//       plugins: {
//         legend: { display: true },
//         tooltip: { mode: 'index', intersect: false }
//       },
//       scales: {
//         y: {
//           beginAtZero: true,
//           grid: {
//             color: 'rgba(255,255,255,0.1)'
//           }
//         },
//         x: {
//           grid: {
//             display: false
//           }
//         }
//       }
//     }
//   });
// }






document.addEventListener('DOMContentLoaded', () => {
  const themeIcon = document.getElementById('theme-icon');

  // Toggle theme on click
  if (themeIcon) {
    themeIcon.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      document.body.classList.toggle('light-mode');

      const isDark = document.body.classList.contains('dark-mode');
      themeIcon.textContent = isDark ? '🌙' : '🌞';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  // Apply saved theme on load
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    document.getElementById('theme-icon').textContent = '🌞';
  } else {
    document.body.classList.add('dark-mode');
    document.getElementById('theme-icon').textContent = '🌙';
  }

  // Load data
  loadLastInvestments();
  loadPortfolioStatus();
  loadSectorPieChart();
  loadProfitLossChart();
});

// ==============================
// 1. Last 5 Investments
// ==============================
function loadLastInvestments() {
  fetch('/api/investments')
    .then(res => res.json())
    .then(data => {
      const tbody = document.querySelector('#last-investments tbody');
      if (!tbody) return;

      tbody.innerHTML = '';
      data.slice(-5).reverse().forEach(inv => {
        const row = `
          <tr>
            <td>${inv.company}</td>
            <td>${inv.symbol}</td>
            <td>₹${(inv.amount_invested || 0).toLocaleString()}</td>
            <td>₹${(inv.current_value || 0).toLocaleString()}</td>
          </tr>`;
        tbody.innerHTML += row;
      });
    })
    .catch(err => console.error('Error fetching investments:', err));
}

// ==============================
// 2. Portfolio Summary (Top Cards)
// ==============================
function loadPortfolioStatus() {
  fetch('/api/portfolio-status')
    .then(res => res.json())
    .then(data => {
      const total = data.total_invested || 0;
      const current = data.total_current || 0;
      const profit = data.profit_loss || 0;

      document.getElementById('total-invested').innerText = `₹${total.toLocaleString()}`;
      document.getElementById('current-value').innerText = `₹${current.toLocaleString()}`;

      const profitElem = document.getElementById('profit-loss');
      profitElem.innerText = `₹${profit.toLocaleString()}`;

      profitElem.classList.remove('text-success', 'text-danger', 'text-secondary');
      if (profit > 0) profitElem.classList.add('text-success');
      else if (profit < 0) profitElem.classList.add('text-danger');
      else profitElem.classList.add('text-secondary');
    })
    .catch(err => console.error('Error fetching portfolio status:', err));
}

// ==============================
// 3. Sector Pie Chart
// ==============================
function loadSectorPieChart() {
  fetch('/api/chart-data')
    .then(res => res.json())
    .then(data => {
      const labels = data.map(d => d.sector);
      const values = data.map(d => d.total);

      const ctx = document.getElementById('sectorChart');
      if (!ctx) return;

      new Chart(ctx, {
        type: 'pie',
        data: {
          labels,
          datasets: [{
            label: 'Sectors',
            data: values,
            backgroundColor: [
              '#007bff', '#28a745', '#ffc107', '#dc3545',
              '#6f42c1', '#20c997', '#fd7e14', '#17a2b8', '#6610f2'
            ],
            borderWidth: 1,
            borderColor: '#fff',
            hoverOffset: 10
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'bottom' },
            tooltip: { enabled: true }
          }
        }
      });
    })
    .catch(err => console.error('Error loading sector chart:', err));
}

// ==============================
// 4. Monthly Profit/Loss Chart (Dummy)
// ==============================
function loadProfitLossChart() {
  const ctx = document.getElementById('profitLossChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Monthly Profit',
        data: [3000, 2000, 5000, 4000, 6000, 4500], // Dummy data
        borderColor: '#28a745',
        backgroundColor: 'rgba(40, 167, 69, 0.2)',
        fill: true,
        tension: 0.3,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#28a745',
        pointRadius: 5,
        pointHoverRadius: 7
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
        tooltip: { mode: 'index', intersect: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(255,255,255,0.1)'
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      }
    }
  });
}

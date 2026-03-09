// Back button
document.getElementById('backBtn').addEventListener('click', () => {
  window.location.href = 'dashboard.html';
});

// Fetch habits from localStorage
const habits = JSON.parse(localStorage.getItem('habits')) || [];

// Calculate stats
const totalHabits = habits.length;
const completedHabits = habits.filter(h => h.completed).length;
const currentStreak = calculateStreak(habits);

// Update cards
document.getElementById('totalHabits').textContent = totalHabits;
document.getElementById('completedHabits').textContent = completedHabits;
document.getElementById('currentStreak').textContent = currentStreak;

// Function to calculate current streak (consecutive completed habits)
function calculateStreak(habits) {
  let count = 0;
  for(let i = habits.length-1; i>=0; i--) {
    if(habits[i].completed) count++;
    else break;
  }
  return count;
}

// Prepare chart data (example: habits completed per day for last 7 days)
const last7Days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const completedPerDay = [2,3,1,4,2,5,3]; // replace with dynamic calculation if needed

// Render chart
const ctx = document.getElementById('habitChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: last7Days,
    datasets: [{
      label: 'Habits Completed',
      data: completedPerDay,
      backgroundColor: '#4caf50',
      borderRadius: 5
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1
        }
      }
    }
  }
});
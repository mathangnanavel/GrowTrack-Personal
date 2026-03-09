// Fetch habits from localStorage
const habits = JSON.parse(localStorage.getItem('habits')) || [];

// Update stats
const totalHabits = habits.length;
const completedHabits = habits.filter(h => h.completed).length;
const currentStreak = calculateStreak(habits);

document.getElementById('totalHabits').textContent = totalHabits;
document.getElementById('completedHabits').textContent = completedHabits;
document.getElementById('currentStreak').textContent = currentStreak;

// Function to calculate current streak
function calculateStreak(habits) {
  let count = 0;
  for(let i = habits.length-1; i>=0; i--){
    if(habits[i].completed) count++;
    else break;
  }
  return count;
}
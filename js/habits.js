const habitNameInput = document.getElementById('habitName');
const addHabitBtn = document.getElementById('addHabitBtn');
const habitList = document.getElementById('habitList');
const progressBar = document.getElementById('progressBar');
const completedCountEl = document.getElementById('completedCount');
const totalCountEl = document.getElementById('totalCount');

let habits = JSON.parse(localStorage.getItem('habits')) || [];

// Render Habits
function renderHabits() {
  habitList.innerHTML = '';
  let completedCount = 0;

  habits.forEach((habit, index) => {
    const li = document.createElement('li');
    li.textContent = habit.name;
    if(habit.completed) {
      li.classList.add('completed');
      completedCount++;
    }

    // Toggle completed on click
    li.addEventListener('click', () => {
      habits[index].completed = !habits[index].completed;
      saveAndRender();
    });

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.textContent = '❌';
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent marking completed
      habits.splice(index, 1);
      saveAndRender();
    });

    li.appendChild(delBtn);
    habitList.appendChild(li);
  });

  updateProgress(completedCount);
}

// Save and Render
function saveAndRender() {
  localStorage.setItem('habits', JSON.stringify(habits));
  renderHabits();
}

// Add Habit
addHabitBtn.addEventListener('click', () => {
  const name = habitNameInput.value.trim();
  if(name) {
    habits.push({name, completed: false});
    habitNameInput.value = '';
    saveAndRender();
  }
});

// Update Progress
function updateProgress(completed) {
  const total = habits.length;
  const percent = total ? (completed / total) * 100 : 0;
  progressBar.style.width = percent + '%';
  completedCountEl.textContent = completed;
  totalCountEl.textContent = total;
}
// Back to dashboard
const backBtn = document.getElementById('backBtn');
backBtn.addEventListener('click', () => {
  window.location.href = 'dashboard.html'; // navigate back
});

// Initial Render
renderHabits();
// Back button
document.getElementById('backBtn').addEventListener('click', () => {
  window.location.href = 'dashboard.html';
});

// Generate simple calendar for current month
const calendar = document.getElementById('calendar');
const daysInMonth = 30; // Example
const completedDays = ['2026-03-02','2026-03-04']; // Example completed days

for(let i=1;i<=daysInMonth;i++){
  const dayDiv = document.createElement('div');
  dayDiv.classList.add('calendar-day');
  const dateStr = `2026-03-${i.toString().padStart(2,'0')}`;
  dayDiv.dataset.date = dateStr;
  dayDiv.textContent = i;

  if(completedDays.includes(dateStr)){
    dayDiv.classList.add('completed');
  }

  dayDiv.addEventListener('click', () => {
    dayDiv.classList.toggle('completed');
  });

  calendar.appendChild(dayDiv);
}
const themeToggle = document.getElementById('themeToggle');

// Load theme from localStorage
let theme = localStorage.getItem('theme') || 'light';
document.body.className = theme;

themeToggle.addEventListener('click', () => {
  theme = (theme === 'light') ? 'dark' : 'light';
  document.body.className = theme;
  localStorage.setItem('theme', theme);
});

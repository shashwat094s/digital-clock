function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'
  hours = hours.toString().padStart(2, '0');

  const currentTime = `${hours}:${minutes}:${seconds} ${ampm}`;

  // Date display (format: Day, Month Date, Year)
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const currentDate = now.toLocaleDateString('en-US', dateOptions);

  document.getElementById('clock').textContent = currentTime;
  document.getElementById('date').textContent = currentDate;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to avoid delay

// Theme Toggle
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeToggleButton.textContent = 'Switch to Light Mode';
  } else {
    themeToggleButton.textContent = 'Switch to Dark Mode';
  }
});

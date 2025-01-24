// Create a div to display the clock
const clockElement = document.createElement('div');
clockElement.id = 'clock';
document.body.appendChild(clockElement);

// Function to format the time as HH:MM:SS
function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Function to update the clock
function updateClock() {
    const now = new Date(); 
    clockElement.textContent = formatTime(now);
}

function styleClock() {
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.height = '100vh';
    clockElement.style.fontSize = '48px';
}

// Update the clock every second
setInterval(updateClock, 1000);

updateClock();

styleClock();
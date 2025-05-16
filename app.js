const hourHand = document.querySelector('.hourHand');
const minutHand = document.querySelector('.minutHand');
const secondHand = document.querySelector('.secondHand');

const time = document.querySelector('.time');
const clock = document.querySelector('.clock');


// Add 60 tick marks (for each minute/second, i.e., every 6 degrees)
for (let i = 0; i < 60; i++) {
  const tick = document.createElement('div');
  tick.classList.add('tick');

  // Add a class for hour ticks
  if (i % 5 === 0) {
    tick.classList.add('hour-tick');
  }

  // Rotate and position each tick
  tick.style.transform = `rotate(${i * 6}deg) translate(-50%, -170px)`;
  clock.appendChild(tick);
}


function setDate() {
    const date = new Date();

    const second = date.getSeconds();
    const minute = date.getMinutes();
    let hour = date.getHours();

    // Calculate AM or PM
    const ampm = hour >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    let displayHour = hour % 12;
    displayHour = displayHour === 0 ? 12 : displayHour;

    // Rotation calculation
    const secondDeg = (second / 60) * 360;
    const minuteDeg = (minute / 60) * 360 + (second / 60) * 6;
    const hourDeg = (hour % 12) / 12 * 360 + (minute / 60) * 30;

    // Apply rotation
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    minutHand.style.transform = `rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

    // Format and display digital time in 12-hour format
    time.innerHTML = `<span><strong>${String(displayHour).padStart(2, '0')}</strong> : ${String(minute).padStart(2, '0')} : <small>${String(second).padStart(2, '0')}</small> ${ampm}</span>`;
    
}

setInterval(setDate, 1000);



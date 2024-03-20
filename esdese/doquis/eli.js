// Assuming you want to rotate an element with the ID "hour" based on a variable called "hour":
const hour = 90; // Replace with the actual value of the hour (in degrees)
const hourElement = document.getElementById("hour");
hourElement.style.transform = `rotate(${hour}deg)`;

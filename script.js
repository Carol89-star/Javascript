function changeText() {
  const welcomeText = document.getElementById("welcome-text");
  const button = document.getElementById("change-text-btn");
  
  // Change text content
  welcomeText.innerText = "JavaScript is Dynamic and Fun!";
  
  // Add a pulsating animation
  welcomeText.classList.add("pulse-animation");
  
  // Change button color randomly
  button.style.backgroundColor = getRandomColor();
}

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


let darkmode=localStorage.getItem('darkmode')
const themeSwitch=document.getElementById('theme-switch')

const enableDarkmode=()=>{
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode','active')
}

const disableDarkmode=()=>{
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode',null)
}

if(darkmode==="active") enableDarkmode()

themeSwitch.addEventListener("click",()=>{
  darkmode= localStorage.getItem('darkmode')
 darkmode !=="active"? enableDarkmode():disableDarkmode()
})


const days=document.querySelectorAll('days');
const hours=document.querySelectorAll('hours');
const minutes=document.querySelectorAll('minutes');
const seconds=document.querySelectorAll('seconds');

const currentYear = new Date().getFullYear();

// Correct string interpolation with backticks
const newYearTime = new Date(`January 01, ${currentYear + 1} 00:00:00`);

// update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Assuming you have HTML elements with the IDs 'days', 'hours', 'minutes', and 'seconds'
  document.getElementById('days').innerHTML = d;
  document.getElementById('hours').innerHTML = h < 10 ? '0' + h : h;
  document.getElementById('minutes').innerHTML = m < 10 ? '0' + m : m;
  document.getElementById('seconds').innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);

const quotes = [
"Believe you can and you're halfway there. – Theodore Roosevelt",
"The only way to do great work is to love what you do. – Steve Jobs",
"Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
"The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
"The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
"Life is what happens when you're busy making other plans. – John Lennon",
"In the end, we only regret the chances we didn’t take. – Lewis Carroll",
"Don't watch the clock; do what it does. Keep going. – Sam Levenson",
"The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson"];

// Function to get a random quote from the array
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Function to display the random quote
function displayQuote() {
  const quoteElement = document.getElementById('quote');
  quoteElement.textContent = getRandomQuote();
}

// Event listener for the "Get Quote" button
document.getElementById('new-quote-btn').addEventListener('click', displayQuote);

// Display a random quote when the page loads
window.onload = displayQuote;
// === Part 1: JavaScript Basics ===

// Variable declarations and types
let userName = '';
let isGreeted = false;

// Get DOM elements for interaction
const nameInput = document.getElementById('nameInput');
const greetBtn = document.getElementById('greetBtn');
const greeting = document.getElementById('greeting');

// Conditional: greet user
greetBtn.addEventListener('click', function() {
  userName = nameInput.value.trim();
  if (userName.length > 0) {
    greeting.textContent = "Hello, " + userName + "!";
    isGreeted = true;
  } else {
    greeting.textContent = "Please enter your name.";
    isGreeted = false;
  }
});

// === Part 2: Custom Functions ===

// Function 1: Calculate sum of two numbers
function calculateSum(a, b) {
  return a + b;
}

// Function 2: Format fruit names (capitalize)
function formatFruit(name) {
  if (!name) return '';
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

// DOM for sum calculator
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const sumBtn = document.getElementById('sumBtn');
const sumResult = document.getElementById('sumResult');

sumBtn.addEventListener('click', function() {
  const a = Number(num1.value);
  const b = Number(num2.value);
  if (!isNaN(a) && !isNaN(b)) {
    const sum = calculateSum(a, b);
    sumResult.textContent = `Sum: ${sum}`;
  } else {
    sumResult.textContent = "Please enter valid numbers.";
  }
});

// === Part 3: Loop Examples ===

// Loop 1: For loop to display numbers 1-5
const showNumbersBtn = document.getElementById('showNumbersBtn');
const numberList = document.getElementById('numberList');

showNumbersBtn.addEventListener('click', function() {
  numberList.innerHTML = ''; // Clear list
  for (let i = 1; i <= 5; i++) {
    const li = document.createElement('li');
    li.textContent = i;
    numberList.appendChild(li);
  }
});

// Loop 2: forEach loop to display formatted fruit names
const showFruitsBtn = document.getElementById('showFruitsBtn');
const fruitList = document.getElementById('fruitList');
const fruits = ['apple', 'banana', 'cherry', 'date'];

showFruitsBtn.addEventListener('click', function() {
  fruitList.innerHTML = ''; // Clear list
  fruits.forEach(function(fruit) {
    const li = document.createElement('li');
    li.textContent = formatFruit(fruit);
    fruitList.appendChild(li);
  });
});

// === Part 4: DOM Interactions ===
// 1. Change text content (greeting, sumResult)
// 2. Add list items dynamically (.appendChild in loops)
// 3. Listen to button clicks and input events (addEventListener on buttons)
// script.js - Functional Logic with Scope, Parameters, Return Values, and Animation Triggers

// Part 2: Demonstrating Global vs Local Scope
let globalVar = 10; // Global variable accessible everywhere

function localScopeDemo() {
  let localVar = 20; // Local variable, scoped only to this function
  console.log("Global variable inside function:", globalVar); // 10 (accesses global)
  console.log("Local variable inside function:", localVar); // 20
  // Note: localVar is not accessible outside this function
}
console.log("Global variable outside function:", globalVar); // 10
// localVar would be undefined here, demonstrating scope isolation

// Part 2: Custom Function with Parameters and Return Value
function calculateSum(a, b) {
  // Takes two parameters, performs calculation, returns result
  // This function is reusable for any addition logic (e.g., controlling DOM changes or animations)
  return a + b; // Returns a useful value
}

// Part 2: Reusing Functions for DOM Changes
// Example: Use calculateSum to update a progress value or trigger based on result
function updateResultDisplay(num1, num2) {
  const result = calculateSum(num1, num2); // Reuse the function
  document.getElementById("result").textContent = `Sum: ${result}`;
  // Could extend this to trigger an animation if result > 10, for example
  return result; // Function returns the result for further use
}

// Event Listeners for Part 2 Demos
document.addEventListener("DOMContentLoaded", function () {
  // Calculate button: Demonstrates parameters (from inputs) and return value
  document.getElementById("calcBtn").addEventListener("click", function () {
    const num1 = parseInt(document.getElementById("num1").value) || 0;
    const num2 = parseInt(document.getElementById("num2").value) || 0;
    updateResultDisplay(num1, num2); // Passes parameters, uses return value
  });

  // Scope demo button
  document.getElementById("scopeBtn").addEventListener("click", localScopeDemo);
});

// Part 3: Reusable Functions to Trigger CSS Animations Dynamically
// Function to toggle animation class on an element (reusable for any ID)
function toggleAnimation(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.toggle("triggered"); // Adds/removes class to trigger CSS animation
    // Demonstrates functional thinking: reusable for multiple elements
  }
}

// Functions for modal (reusable for open/close logic)
function openModal() {
  document.getElementById("modal").classList.add("show"); // Triggers CSS slide/fade
}

function closeModal() {
  document.getElementById("modal").classList.remove("show"); // Triggers CSS reverse transition
}

// Event Listeners for Part 3
document.getElementById("triggerBtn").addEventListener("click", function () {
  toggleAnimation("animateBox"); // Reuses the toggle function
});

document.getElementById("openModalBtn").addEventListener("click", openModal);

document.getElementById("closeModal").addEventListener("click", closeModal);

// Close modal if clicking outside
document.getElementById("modal").addEventListener("click", function (event) {
  if (event.target === this) {
    closeModal();
  }
});

// Comments above each section/part clearly label understanding of scope (local/global isolation),
// parameters (inputs to functions), return values (outputs for reuse), and JS triggering CSS via class manipulation.

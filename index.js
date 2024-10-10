// Array of tutorial titles
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// Function to convert tutorial titles to title case
function titleCased() {
  return tutorials.map(tutorial => {
    // Split the title into words
    return tutorial
      .split(' ')
      // Capitalize the first letter of each word
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      // Join the words back into a single string
      .join(' ');
  });
}

// Output the result to the console
console.log(titleCased());

/*
 Expected Output:
 [
  "What Does The This Keyword Mean?",
  "What Is The Constructor OO Pattern?",
  "Implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What Is NaN And How Can We Check For It",
  "What Is The Difference Between StopPropagation And PreventDefault?",
  "Immutable State And Pure Functions",
  "What Is The Difference Between == And ===?",
  "What Is The Difference Between Event Capturing And Bubbling?",
  "What Is JSONP?"
 ]
*/

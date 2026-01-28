// ===============================
// Task 1: Constants (do not change)
// ===============================
const MAX_POINTS = 100;
const COURSE_NAME = "JavaScript Fundamentals";
const IS_ACTIVE = true;

// ===============================
// Task 2: Variables (can change)
// ===============================
let currentScore = 85;
let totalAttempts = 1;

// ===============================
// Task 3: Arithmetic operations
// ===============================

// Calculate percentage score
let percentage = (currentScore / MAX_POINTS) * 100;

// Increase total attempts
totalAttempts += 1;

// Calculate late penalty (10% of MAX_POINTS)
let penalizedScore = currentScore - (MAX_POINTS * 0.1);

// ===============================
// Task 4: Comparison operations
// ===============================

// Check if passing
let isPassing = currentScore >= 70;

// Check for perfect score (exact match)
let isPerfectScore = percentage === 85;

// ===============================
// Task 5: Logical operators
// ===============================

// Can proceed only if course is active AND passing
let canProceed = IS_ACTIVE && isPassing;

// ===============================
// Task 6: Weighted average calculation
// ===============================
const assignment1Score = 50;
const assignment1Possible = 100;
const assignment2Score = 190;
const assignment2Possible = 200;

// Calculate totals
let totalEarned = assignment1Score + assignment2Score;
let totalPossible = assignment1Possible + assignment2Possible;

// Calculate weighted average percentage
let weightedAverage = (totalEarned / totalPossible) * 100;

// ===============================
// Display results (do not modify)
// ===============================
console.log("=== Exercise 1 Results ===");
console.log(
    "Weighted Average:",
    weightedAverage ? weightedAverage.toFixed(2) + "%" : "Not calculated"
);
console.log("Can Proceed:", canProceed);
console.log("Is Passing:", isPassing);
console.log("Penalized Score:", penalizedScore);

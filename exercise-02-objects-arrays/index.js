// Exercise 2: Objects and Arrays Basics

// Task 1: Create objects
// TODO: Create a course object with properties: id (number), name (string)
// Example: { id: 101, name: "JavaScript Fundamentals" }
const course = {
    id: 101,
    name: "JavaScript Fundamentals"
};

// TODO: Create an assignment object with properties:
// id, name, due_at (date string), points_possible
// Example: { id: 1, name: "Variables Quiz", due_at: "2024-01-15", points_possible: 50 }
const assignment1 = {
    id: 1,
    name: "Variables Quiz",
    due_at: "2024-01-15",
    points_possible: 50
};

// Task 2: Access object properties
// TODO: Access the course name using dot notation and store it in a variable
const courseName = course.name;


// TODO: Access the assignment points_possible using bracket notation
const maxPoints = assignment1["points_possible"];

// Task 3: Modify object properties
// TODO: Change the assignment's points_possible to 100
// assignment1.points_possible = 100;

// TODO: Add a new property 'course_id' to assignment1 with value 101
// assignment1.course_id = 101;

// Task 4: Create and manipulate arrays
// TODO: Create an array called assignments containing assignment1 and at least one more assignment object
const assignment2 = {
    id: 2,
    name: "Objects Quiz",
    due_at: "2024-01-22",
    points_possible: 75
}

const assignments = [
    assignment1,
    assignment2
];
// TODO: Access the first assignment from the array
const firstAssignment = assignments[0];


// TODO: Access the name of the second assignment
const secondAssignmentName = assignments[1].name;

// Task 5: Add and remove array items
// TODO: Add a new assignment object to the end of the assignments array using push()
assignments.push({
    id: 3,
    name: "Arrays Quiz",
    due_at: "2024-01-29",
    points_possible: 80
});

// TODO: Remove the last assignment using pop() and store it in a variable
const removedAssignment = assignments.pop(); // Replace null

// Task 6: Create a learner submission object
// TODO: Create a submission object with structure:
// { learner_id, assignment_id, submission: { submitted_at, score } }
const learnerSubmission = {
    learner_id: 501,
    assignment_id: 1,
    submission: {
        submitted_at: "2024-01-14",
        score: 92
    }
};

// Task 7: Create an array of submissions
// TODO: Create an array with at least 2 learner submission objects
const submissions = [
    learnerSubmission,
    {
        learner_id: 502,
        assignment_id: 2,
        submission: {
            submitted_at: "2024-01-21",
            score: 88
        }
    }
];
// Display results (don't modify this part)
console.log("=== Exercise 2 Results ===");
console.log("Course:", course);
console.log("Assignment 1:", assignment1);
console.log("Assignments Array:", assignments);
console.log("Learner Submissions:", submissions);
console.log("First Assignment Name:", firstAssignment?.name);
console.log("Removed Assignment:", removedAssignment);

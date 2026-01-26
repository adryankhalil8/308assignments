const submissions = [
    { assignment_id: 1, score: 85 },
    { assignment_id: 2, score: 90 }
];

const assignments = [
    { id: 1, points_possible: 100 },
    { id: 2, points_possible: 100 }
];

// For each submission, find its assignment
for (let i = 0; i < submissions.length; i++) {
    for (let j = 0; j < assignments.length; j++) {
        if (submissions[i].assignment_id === assignments[j].id) {
            const percentage = submissions[i].score / assignments[j].points_possible;
            console.log(`Assignment ${assignments[j].id}: ${percentage * 100}%`);
        }
    }
}
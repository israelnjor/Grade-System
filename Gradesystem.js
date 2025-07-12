let score = prompt("Enter your test score (0 - 100):");
score = Number(score);  // Convert string input to number


if ( score >=90) {
    alert('Grade: A');
} else if (score >= 80) {
    alert('Grade: B');
} else if (score >= 70) {
    alert('Grade: C');
} else if (score >= 60) {
    alert('Grade: D');
} else {
    alert('Grade: F');
}


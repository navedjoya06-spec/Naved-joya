const prices = [120, 250, 300, 450, 600];

const filteredPrices = prices.filter(price => price > 250);
const discountedPrices = filteredPrices.map(price => price * 0.9);

console.log("Original prices:", prices);
console.log("Discounted prices:", discountedPrices);


const expenses = [
	{ category: "Food", amount: 300 },
	{ category: "Transport", amount: 150 },
	{ category: "Shopping", amount: 400 },
];

const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);
console.log(`Total Expense: ₹${totalExpense}`);


const scores = [45, 80, 90, 35, 60, 75];

const passingScores = scores.filter(score => score >= 50);
const scoresWithBonus = passingScores.map(score => score + 10);
const totalScore = scoresWithBonus.reduce((total, score) => total + score, 0);

console.log("Passing scores with bonus:", scoresWithBonus);
console.log("Total score:", totalScore);


const students = [
	{ name: "Aman", marks: 85 },
	{ name: "Sara", marks: 42 },
	{ name: "Riya", marks: 68 },
	{ name: "John", marks: 49 },
];

const passedStudents = students.filter(student => student.marks >= 50);
const studentsWithBonus = passedStudents.map(student => ({
	name: student.name,
	finalScore: student.marks + 5,
}));

studentsWithBonus.forEach(student => {
	console.log(`${student.name}: ${student.finalScore}`);
});

const classAverage = studentsWithBonus.reduce(
	(total, student) => total + student.finalScore,
	0
) / studentsWithBonus.length;

console.log(`Class Average: ${classAverage}`);
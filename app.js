let Name = window.prompt("Enter your Name");
const gender = window.prompt("Enter your gender (female/male)");
const age = window.prompt("enter your age");

if (gender != null) {
    switch (gender.toLowerCase()) {
        case 'male':
            Name = "Mr." + Name;
            break;
        case 'female':
            Name = "Ms." + Name;
            break;
        default:
            break;
    }
}
if (age <= 0) {
    alert("Age can't be ZERO");
}

if (confirm("Would like to skip the welcoming ?") == false) {
    alert(`Welcome To TODOlist ${Name}`)
};


alert('Answer This 3 Question (Yes/No)');

const questions = ['Do you Live In Jordan?', 'Do You Sleep Early?', 'Do you Eat Apple?'];
let answers = [];

function checkQuestion(questions) {
    for (let index = 0; index < questions.length; index++) {
        let answer = prompt(questions[index]);
        if (answer === 'Yes') {
            answers.push(answer);
        } else if (answer === 'No') {
            answers.push(answer);
        } else {
            answers.push('invalid');
        }
    }
    logAnswers(answers);
}

function logAnswers(answers) {
    for (let index = 0; index < answers.length; index++) {
        console.log(answers[index]);
    }
}
checkQuestion(questions);
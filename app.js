//As a user, I would like to answer more questions, so you should add new three (Yes/No) questions.

let question01 = prompt("Are You A Human ?")
let question02 = prompt("Did You Live In Amman ?")
let question03 = prompt("Do You Live underwater?") 

//If the input was empty consider the answer to be an "invalid" string.

function checkValue(question) 
{
    if (question!="Yes"&& question!="No") 
    {
     question="invalid";   
    }
    return question
}

checkValue(question01)
checkValue(question02)
checkValue(question03)


//Consider putting all the answers into an array.
let answerArray = []
answerArray.push(question01)
answerArray.push(question02)
answerArray.push(question03)

//Traverse the array and print the items on the console.

for (let index = 0; index < answerArray.length; index++) {
    const element = answerArray[index];
    console.log(element);
}
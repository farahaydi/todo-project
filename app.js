let namee =prompt("Enter Your Name Here :")
// console.log(namee);



let gender =prompt("Enter Your Gender :")
if (gender=="Male"|| gender=="male" || gender=="m") 
{
    gender="Male";
}
else if (gender=="Female" || gender=="female" || gender=="f") {
    gender="Female";
} else {
    prompt("Enter Your  gender Again:")
}
// console.log(gender);

let age =prompt("Enter Your Age :");

if (age <=0) {
alert("Your Age Isn't True")
}

let welcome = confirm("Do Not Skip The Welcoming Message? ")

if (gender=="Male" && welcome==true) 
{
    alert("Welcome Mr "+namee)
}
else if(gender=="Female" && welcome==true)
{
    alert("Welcome Ms "+namee)
}
else
{
    alert("Welcome "+namee)
}

//Suhaib Siddiqui
//September 30 2022 
// Rock Paper Scissors
console.log("Welcome To Rock Paper Scissors.");

const User = prompt("Choose Rock Paper or Scissors (Type Capital No spaces)");
var Computer = Math.random();
if (Computer < 0.34){
    Computer = "Rock";
}
else if (Computer <= 0.67){
    Computer = "Paper";
}
else{
    Computer = "Scissors";
}
console.log("Computer chooses: " + Computer); 
console.log("User chooses: " + User);


if (Computer == User){
    console.log("Its a tie");
}
else if(Computer == "paper" && User =="Scissors")
    console.log("User Wins");
else if(Computer == "Rock" && User =="Paper")
    console.log("User Wins");
else if(Computer == "Scissors" && User =="Rock")
    console.log("User Wins");
else{
console.log("Computer Wins");
}
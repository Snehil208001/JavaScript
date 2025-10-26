//Q1.print all even number from 0 to 100

for(let i =0;i<=100;i++){
    if(i % 2 == 0){
        console.log("i = " ,i);
    }
    
}

/*
Q2. Create a game where you start with any random game number.Ask the user to keep 
guessing the game number untill the user enters correct value 
*/

let  gameNum = 25;

let prom = prompt("Guess the game nummber:")

console.log(prom);

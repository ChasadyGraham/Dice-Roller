//Math.random( ) returns a random number between 0 and 1. Then we multiply it by 6 and add 1. This will give us a random number between 1 and 7. 
//Math.floor takes whatever number is in the parentheses, and rounds it down to the nearest whole number. This will give us a random number between 1 and 6.  ;(This means our die variable will always be a random number between 1 and 6 every time we run the code. )             
// pick a random number between 1 and 6 for our roll of the die

// This time if either die roll is 1 then score should be 0 
function 

var dice = ['⚀''⚁' '⚂''⚃'  ⚄ ⚅', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];

var dice1 = Math.floor(Math.random()*6 + 1);
var dice2 = Math.floor(Math.random()*6 + 1);
var score = dice1 + dice2;

console.log(dice1, dice[dice1-1])

function diceRoll() {
if (dice1 === 1 || dice2 === 1) {
  (score = 0);
  //we need to check if there are doubles.  
} else if (dice1 === dice2) {
  //If so, score should be double the sum of the two dice
  score = 2 * (dice1 + dice2)
    //Otherwise, the score is just the sum of the two die.
} else {
  score = dice1 + dice2;

}
}

console.log("You rolled a "+dice1+" and a "+dice2+" for a score of "+score);
//var dice1 = Math.floor(Math.random()*6 + 1);
//var die2 = Math.floor(Math.random()*6 + 1);
//var score;
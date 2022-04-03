//Generally js ignores error, but to stop that
'use strict';
//DOM Manipulation
//DOM is document object model every html page is a document
//in console only javascript runs
//In js everything is treated as object
//Document is html document so get the element with id as user-score
//and do manipulations in document objects-DOM
//document.getElementById('user-score').textContent='45';
// document.getElementById('user-score');
// document.getElementById('comp-score');
//WE need what user have selected rock paper scissor
//Print input to consoles
//array
const weapons=['rock','paper','scissor'];
let userChoice;
let compChoice;
let userScore=0;
let compScore=0;

const showResult = function(result)
{

    document.getElementById(`user-choice`).textContent=`Your Choice: ${userChoice}`;   
    document.getElementById(`comp-choice`).textContent=`System Selected: ${userChoice}`;   
    document.getElementById(`result`).textContent=`${result}`;   
   
    console.log(`Result : ${result}`);

};
const game=function(input){
   
    userChoice=input;
    let randomNumber = Math.trunc(Math.random()*3);
    compChoice =weapons[randomNumber];
    //For rock
    if(userChoice=='rock')
    {
    if(compChoice === 'rock')
    { showResult('DRAW');
    }
    else if(compChoice === 'paper')
    {  
        showResult('YOU LOOSE');
        compScore++;
      
    }
    else if(compChoice === 'scissor')
    {
        showResult('YOU WON');
        userScore++;
    }
    }
   //For paper
    if(userChoice=='paper')
    {
    if(compChoice === 'paper')
    { showResult('DRAW');
    }
    else if(compChoice === 'scissor')
    {  
        showResult('YOU LOOSE');
        compScore++;
      
    }
    else if(compChoice === 'rock')
    {
        showResult('YOU WON');
        userScore++;
    }
    }
   //For scissor

    if(userChoice=='scissor')
    {
    if(compChoice === 'scissor')
    { showResult('DRAW');
    }
    else if(compChoice === 'rock')
    {  
        showResult('YOU LOOSE');
        compScore++;
      
    }
    else if(compChoice === 'paper')
    {
        showResult('YOU WON');
        userScore++;
    }
    }
    document.getElementById('user-score').textContent=compScore;
    document.getElementById('comp-score').textContent=userScore;
};
//use random feature for comp to plays 




















const randomnumber = console.log(parseInt(Math.random()* 100 + 1));
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessslot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')
let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if(guess<1){
        alert('please enter a valid number')
    } else if(guess>100){
        alert('please enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayguess(guess)
            displayMessage(`Game Over. Random Number was ${randomnumber}`)
        }
    }
}
function checkguess(guess){

}

function displayguess(){
    //
}
function displayMessage(message){
    //
}
function newGame(){
    //
}
function endGame(){
    //
}
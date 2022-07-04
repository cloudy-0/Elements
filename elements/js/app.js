const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('img')


let computerChoice
let userChoice
let result


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=> {
userChoice= e.target.id
userChoiceDisplay.innerHTML= userChoice
generateComputerChoice()
getResult()

}
))




function generateComputerChoice (){
    const randomNumber = Math.floor(Math.random()*3)+1
    console.log(randomNumber)

    if (randomNumber === 1) {computerChoice = 'fire'}
    if (randomNumber === 2) {computerChoice = 'water'}
    if (randomNumber === 3) {computerChoice = 'air'}
    computerChoiceDisplay.innerHTML = computerChoice
}



function getResult () {

if (computerChoice===userChoice) {result='Draw'}

if (computerChoice === 'fire' && userChoice === 'air') {result = 'computer win'}
if (computerChoice === 'fire' && userChoice === 'water') {result = 'you win'}

if (computerChoice === 'water' && userChoice === 'fire') {result = 'computer win'}
if (computerChoice === 'water' && userChoice === 'air') {result = 'you win'}

if (computerChoice === 'air' && userChoice === 'water') {result = 'computer win'}
if (computerChoice === 'air' && userChoice === 'fire') {result = 'you win'}

resultDisplay.innerHTML= result
}

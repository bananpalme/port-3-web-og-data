'use strict'

let getCheckBtn = document.querySelector('.check')
let score = document.querySelector('.score')
let highscore = document.querySelector('.highscore')
let correctNumber = document.querySelector('.number')

const getRandomNumber = () => {
    return Math.floor(Math.random() * 19 + 1)
}

let randomNumber = getRandomNumber()

score.innerHTML = 0
highscore.innerHTML = 10000

console.log(~~randomNumber)


const checkValue = () => {
    let getInput = document.querySelector('.guess')
    if (/^\d+$/.test(getInput.value)) {
        if (~~getInput.value === ~~randomNumber) {
            if (~~score.innerHTML < ~~highscore.innerHTML) {
                highscore.innerHTML = score.innerHTML
                console.log('yahoo! new highscore!')
            }
            score.innerHTML = 0
            getInput.value = ' '
            correctNumber.innerHTML = ~~randomNumber
        } else if (~~getInput.value >= 0 && ~~getInput.value <= 20){
            score.innerHTML++
            getInput.value = ' '
        } else {
            alert('Only numbers between 0 and 20!')
        }
    } else {
        alert('Please enter a valid number!')
        getInput.value = ''
    }
}

getCheckBtn.addEventListener('click', checkValue)

let againBtn = document.querySelector('.again')

const tryAgain = () => {
    score.innerHTML = 0
    highscore.innerHTML = 10000
    randomNumber = getRandomNumber()
    console.log('try again')
    console.log(~~randomNumber)
    correctNumber.innerHTML = '?'
}

againBtn.addEventListener('click', tryAgain)
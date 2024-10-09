'use strict'

const getCheckBtn = document.querySelector('.check')
const score = document.querySelector('.score')
const highscore = document.querySelector('.highscore')
const correctNumber = document.querySelector('.number')
const scoreContainer = document.querySelector('.right')

const getRandomNumber = () => {
    return Math.floor(Math.random() * 20 + 1)
}
let randomNumber = getRandomNumber()

score.innerHTML = '0'
highscore.innerHTML = ''

console.log(randomNumber)

let historyParagraph = document.createElement('p')
historyParagraph.textContent = '🤔 Gættede: '
historyParagraph.style.wordWrap = 'break-word'

scoreContainer.append(historyParagraph)

let guessedNumbers = []

const checkValue = () => {
    const getInput = document.querySelector('.guess')

    if (/^\d+$/.test(getInput.value)) {
        if (Number(getInput.value) === Number(randomNumber)) {
            score.innerHTML++
            if (highscore.innerHTML === '') {
                highscore.innerHTML = score.innerHTML
            }
            if (Number(score.innerHTML) < Number(highscore.innerHTML)) {
                highscore.innerHTML = score.innerHTML
                console.log('yahoo! new highscore!')
            }
            score.innerHTML = '0'
            getInput.value = ' '
            correctNumber.innerHTML = randomNumber
        } else if (Number(getInput.value) >= 0 && Number(getInput.value) <= 20){
            score.innerHTML++
            addToHistory(getInput.value)
            getInput.value = ' '
        } else {
            alert('Only numbers between 0 and 20!')
        }
    } else {
        alert('Please enter a number!')
        getInput.value = ''
    }
}

getCheckBtn.addEventListener('click', checkValue)

let againBtn = document.querySelector('.again')

const tryAgain = () => {
    score.innerHTML = '0'
    highscore.innerHTML = ''
    randomNumber = getRandomNumber()
    console.log('try again')
    console.log(randomNumber)
    correctNumber.innerHTML = '?'
    guessedNumbers = []
    historyParagraph.textContent = '🤔 Gættede: '
}

againBtn.addEventListener('click', tryAgain)

const addToHistory = (guess) => {
    guessedNumbers.push(guess)
    historyParagraph.textContent = `🤔 Gættede: ${guessedNumbers}`
}




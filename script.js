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

const showConfetti = () => {
    const confettiGif = document.createElement('img')
    confettiGif.src = 'https://cdn.pixabay.com/animation/2024/05/02/07/43/07-43-00-535_512.gif'
    confettiGif.style.width = '100vw'
    confettiGif.style.height = '100vh'
    confettiGif.style.position = 'fixed';
    confettiGif.style.top = '0';

    document.body.append(confettiGif)

    setTimeout(() => {
        document.body.removeChild(confettiGif)
    }, 5000)
}

let correctAnswerAudio = new Audio('./assets/answer-correct.mp3')
correctAnswerAudio.volume = 0.1

let wrongAnswerAudio = new Audio('./assets/sad-bomboclat.mp3')
wrongAnswerAudio.volume = 0.05

const checkValue = () => {
    const getInput = document.querySelector('.guess')

    if (getInput.value !== '' && !isNaN(Number(getInput.value))) {
        if (Number(getInput.value) === Number(randomNumber)) {
            score.innerHTML++
            showConfetti()
            correctAnswerAudio.play()
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
            wrongAnswerAudio.play()
            guessedNumbers.push(getInput.value)
            historyParagraph.textContent = `🤔 Gættede: ${guessedNumbers}`
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



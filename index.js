const inputEl = document.querySelector('input')
const buttonEl = document.querySelector('button')
const timerEl = document.querySelector('span')

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return seconds => {
    function updateTimer() {
      if (seconds <= 0 && timerId) {
        clearInterval(timerId)
        timerEl.innerHTML = 'hh:mm:ss'
      } else {
        seconds--
        updateTimerElement(seconds)
      }
    }

    updateTimerElement(seconds)

    const timerId = setInterval(updateTimer, 1000)
  }
}

const animateTimer = createTimerAnimator()

inputEl.addEventListener('input', event => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  validateInput()
})

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value)

  animateTimer(seconds)

  inputEl.value = ''
})

function updateTimerElement(seconds) {
  const parsedTime = parseSeconds(seconds)

  timerEl.innerHTML = `${formatTwoDigitNumber(
    parsedTime.hours,
  )}:${formatTwoDigitNumber(parsedTime.minutes)}:${formatTwoDigitNumber(
    parsedTime.seconds,
  )}`
}

function parseSeconds(seconds) {
  let remainingSeconds = seconds % 3600

  return {
    hours: Math.floor(seconds / 3600),
    minutes: Math.floor(remainingSeconds / 60),
    seconds: remainingSeconds % 60,
  }
}

function validateInput() {
  const inputValue = inputEl.value.trim()
  const digitsOnly = /^\d*$/.test(inputValue)

  if (!digitsOnly) {
    inputEl.value = inputValue.replace(/[^\d]/g, '')
  }
}

function formatTwoDigitNumber(number) {
  return number < 10 ? `0${number}` : `${number}`
}

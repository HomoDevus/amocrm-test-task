const inputEl = document.querySelector('input')
const buttonEl = document.querySelector('button')
const timerEl = document.querySelector('span')

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return seconds => {
    let startTime = null
    let isRunning = false

    function updateTimer(currentTime) {
      if (!startTime) startTime = currentTime
      const leftTime = currentTime - startTime

      if (leftTime >= seconds * 1000) {
        timerEl.innerHTML = 'hh:mm:ss'
        buttonEl.disabled = false
        isRunning = false
      } else {
        updateTimerElement(seconds - Math.floor(leftTime / 1000))
        requestAnimationFrame(updateTimer)
      }
    }

    if (!isRunning && Boolean(seconds)) {
      isRunning = true
      buttonEl.disabled = true
      requestAnimationFrame(updateTimer)
    }
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

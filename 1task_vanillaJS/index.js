const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
const TIMER_FINISHED_MESSAGE = 'Время закончилось!';

const createTimerAnimator = () => {
  return (seconds) => {
    const timer = setInterval(() => {
      const SECONDS_IN_HOUR = 3600;
      const SECONDS_IN_MINUTE = 60;
      const { floor } = Math;
      const hours = floor(seconds / SECONDS_IN_HOUR);
      const minutes = floor((seconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
      const secondsTwo = floor(seconds % SECONDS_IN_MINUTE);

      if (seconds <= 0) {
        clearInterval(timer);
        timerEl.textContent = TIMER_FINISHED_MESSAGE;
      } else {
        timerEl.textContent = `${hours}:${minutes}:${secondsTwo}`;
      }

      seconds--;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

const clearNonDigits = (event) => {
  inputEl.value = inputEl.value.replace(/[^\d.]/g, '');
};

const startTimer = () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = '';
};

inputEl.addEventListener('input', clearNonDigits);
buttonEl.addEventListener('click', startTimer);

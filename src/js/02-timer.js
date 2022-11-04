import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
const startBtn = document.querySelector('[data-start]');


let selectedDate = 0;
let timeDiff = null;
let intervalId = 0;




const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //   console.log(selectedDates[0]);
      selectedDate = Date.parse(selectedDates[0]);
    //   console.log(selectedDate);

      if (selectedDate < Date.now()) {
          alert("Please choose a date in the future");
      }

        timeDiff = selectedDate - Date.now();
        console.log(timeDiff);    
      console.log(timeDiff);
      
      days.textContent = `${convertMs(timeDiff).days}`.padStart(2, 0);
      hours.textContent = `${convertMs(timeDiff).hours}`.padStart(2, 0);
      minutes.textContent = `${convertMs(timeDiff).minutes}`.padStart(2, 0);
        seconds.textContent = `${convertMs(timeDiff).seconds}`.padStart(2, 0);

      clearInterval(intervalId);
  },
};

flatpickr("#datetime-picker", options);

startBtn.addEventListener('click', onStart);



function onStart() {
    intervalId = setInterval(counter, 1000);
    function counter() {
        const a = selectedDate - Date.now();
        if (a <= 1000) {
            clearInterval(intervalId);
            
        }
        console.log(convertMs(a));
         days.textContent = `${convertMs(a).days}`.padStart(2, 0);
      hours.textContent = `${convertMs(a).hours}`.padStart(2, 0);
      minutes.textContent = `${convertMs(a).minutes}`.padStart(2, 0);
        seconds.textContent = `${convertMs(a).seconds}`.padStart(2, 0);
        
    }
}





function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


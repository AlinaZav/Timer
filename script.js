let countdown;
const timerDisplay = document.querySelector('.timer_display-left');
const endTime = document.querySelector('.timer_display-end');
const buttons = document.querySelectorAll('[data-time]');

function timer (seconds){
    clearInterval(countdown);
    const currentTime = Date.now();
    const endTime = currentTime + seconds * 1000;

    displayTamer(seconds);
    displayEndTime(endTime);

   countdown = setInterval(() =>{
        const secondsLeft = Math.round((endTime - Date.now()) / 1000);

        if(secondsLeft < 0){
            clearInterval(countdown);
            return;
        }

        displayTamer(secondsLeft);

    }, 1000);
}

function displayTamer(seconds){
    
    const minuts = Math.floor(seconds / 60);
    const remaindeerSeconds = seconds % 60;

    const display = `${minuts}:${remaindeerSeconds < 10 ? '0' : ''}${remaindeerSeconds}`;
    timerDisplay.textContent = display;
    document.title  = display;
}

function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minuts = end.getMinutes();
    
    endTime.textContent = `Вернуться ${hour}:${minuts < 10 ? '0' : ''}${minuts}`;

}

function startTimer(){

    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.timerForm.addEventListener('submit',function(e){
    e.preventDefault();

    const minuts = parseInt(this.minutes.value);
    timer(minuts* 60);

    this.reset();

})
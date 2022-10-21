const timeLeftDisplay = document.querySelector('#time-left');
const resultDisplay = document.querySelector('#result');
const startPauseButton = document.querySelector('#start-pause-button');
const resetButton = document.querySelector('#reset-button');
const squares = document.querySelectorAll('.grid div');
const logsLeft = document.querySelectorAll('.log-left');
const logsRight = document.querySelectorAll('.log-right');
const carsLeft = document.querySelectorAll('.car-left');
const carsRight = document.querySelectorAll('.car-right');
// console.log(squares.length)
let currentIndex = 84;
const width = 10;
let timerId;
let outcomeTimerId;
let currentTime = 20;
/* *************************** FROG ******************************** */ 
function moveFrog(e) {
    squares[currentIndex].classList.remove('frog');
    switch (e.key) {
        case 'ArrowLeft':
            console.log('move left');  
            if(currentIndex % width !==0){
                currentIndex --;
            } 
            break;
        case 'ArrowRight':
            console.log('move right'); 
            if(currentIndex % width < width - 1){
                currentIndex ++;
            }  
            break;
        case 'ArrowUp':
            console.log('move up');  
            if(currentIndex - width >= 0){
                currentIndex -= width;
            } 
            break;
        case 'ArrowDown':
            console.log('move down'); 
            if(currentIndex + width < (width * width) - width){
                currentIndex += width;
            } 
            break;
    
        default:
            break;
    }
    squares[currentIndex].classList.add('frog');
}
/* *************************** ELEMENTS ******************************** */ 
// MOVEMENT
function autoMoveElements() {
    currentTime --;
    timeLeftDisplay.textContent = currentTime;
    logsLeft.forEach(item => moveLogLeft(item));
    logsRight.forEach(item => moveLogRight(item));
    carsLeft.forEach(item=>moveCarLeft(item));
    carsRight.forEach(item=>moveCarRight(item));
    lose();
    win();
}
// LOG
function moveLogLeft(logLeft) {
    switch (true) {
        case logLeft.classList.contains('l1'):
            logLeft.classList.remove('l1');
            logLeft.classList.add('l2');
            break;
        case logLeft.classList.contains('l2'):
            logLeft.classList.remove('l2');
            logLeft.classList.add('l3');
            break;
        case logLeft.classList.contains('l3'):
            logLeft.classList.remove('l3');
            logLeft.classList.add('l4');
            break;
        case logLeft.classList.contains('l4'):
            logLeft.classList.remove('l4');
            logLeft.classList.add('l5');
            break;
        case logLeft.classList.contains('l5'):
            logLeft.classList.remove('l5');
            logLeft.classList.add('l1');
            break;
        default:
            break;
    }
}
function moveLogRight(logRight) {
    switch (true) {
        case logRight.classList.contains('l1'):
            logRight.classList.remove('l1');
            logRight.classList.add('l5');
            break;
        case logRight.classList.contains('l2'):
            logRight.classList.remove('l2');
            logRight.classList.add('l1');
            break;
        case logRight.classList.contains('l3'):
            logRight.classList.remove('l3');
            logRight.classList.add('l2');
            break;
        case logRight.classList.contains('l4'):
            logRight.classList.remove('l4');
            logRight.classList.add('l3');
            break;
        case logRight.classList.contains('l5'):
            logRight.classList.remove('l5');
            logRight.classList.add('l4');
            break;
        default:
            break;
    }
}
// CAR
function moveCarLeft(carLeft) {
    switch (true) {
        case carLeft.classList.contains('c1'):
            carLeft.classList.remove('c1');
            carLeft.classList.add('c2');
            break;
        case carLeft.classList.contains('c2'):
            carLeft.classList.remove('c2');
            carLeft.classList.add('c3');
            break;
        case carLeft.classList.contains('c3'):
            carLeft.classList.remove('c3');
            carLeft.classList.add('c1');
            break;
        default:
            break;
    }
}
function moveCarRight(carRight) {
    switch (true) {
        case carRight.classList.contains('c1'):
            carRight.classList.remove('c1');
            carRight.classList.add('c3');
            break;
        case carRight.classList.contains('c2'):
            carRight.classList.remove('c2');
            carRight.classList.add('c1');
            break;
        case carRight.classList.contains('c3'):
            carRight.classList.remove('c3');
            carRight.classList.add('c2');
            break;
        default:
            break;
    }
}
// TIMER
/* *************************** RESULT ******************************** */ 
function checkOutcomes() {
    win();
    lose();
}
function lose(){
    if(
        squares[currentIndex].classList.contains('c1') ||
        squares[currentIndex].classList.contains('l3') ||
        squares[currentIndex].classList.contains('l4') ||
        squares[currentIndex].classList.contains('l5') ||
        currentTime <= 0
        ){
        resultDisplay.textContent = 'You Lose';
        clearInterval(timerId);
        clearInterval(outcomeTimerId);
        squares[currentIndex].classList.remove('frog');
        document.removeEventListener('keyup',moveFrog);
        startPauseButton.style.display='none';
    }
}
function win(){
    if(squares[currentIndex].classList.contains('ending-block')){
        resultDisplay.textContent = 'You Win';
        clearInterval(timerId);
        clearInterval(outcomeTimerId);
        document.removeEventListener('keyup',moveFrog)
    }
}
/* *************************** START / PAUSE / RESET ******************************** */ 
startPauseButton.addEventListener('click', () => {
    if (timerId) {
      startPauseButton.textContent = 'Start';
      clearInterval(timerId); 
      clearInterval(outcomeTimerId);
      outcomeTimerId = null; 
      timerId = null; 
      document.removeEventListener('keyup',moveFrog);
    }
    else{
        startPauseButton.textContent = 'Pause';
        timerId = setInterval(autoMoveElements,700);
        outcomeTimerId = setInterval(checkOutcomes,50);
        document.addEventListener('keyup',moveFrog);
    }
});
resetButton.addEventListener('click',()=>{
    location.reload();
})
function leftArrow() {
    if (timerId) {
        squares[currentIndex].classList.remove('frog');
        console.log('move left');  
        if(currentIndex % width !==0){
            currentIndex --;
        }
        squares[currentIndex].classList.add('frog');
    }

}
function rightArrow() {
    if(timerId){
        squares[currentIndex].classList.remove('frog');
        console.log('move right'); 
        if(currentIndex % width < width - 1){
            currentIndex ++;
        }
        squares[currentIndex].classList.add('frog');
    }

}
function upArrow() {
    if(timerId){
        squares[currentIndex].classList.remove('frog');
        console.log('move up');  
        if(currentIndex - width >= 0){
            currentIndex -= width;
        }
        squares[currentIndex].classList.add('frog');
    }
}
function downArrow() {
    if (timerId) {
        squares[currentIndex].classList.remove('frog');
        console.log('move down'); 
        if(currentIndex + width < (width * width) - width){
            currentIndex += width;
        }
        squares[currentIndex].classList.add('frog');
    }

}
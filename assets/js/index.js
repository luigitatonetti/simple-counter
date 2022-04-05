//Creating elements
const container = document.querySelector('#container')
const display = document.createElement('h1');
const plusButton = document.createElement('button');
const minusButton = document.createElement('button');
const resetButton = document.createElement('button');

display.className = 'display';
plusButton.className = 'plusButton';
minusButton.className = 'minusButton';
resetButton.className = 'resetButton';

//Appending 
container.appendChild(display);
container.appendChild(minusButton);
container.appendChild(resetButton);
container.appendChild(plusButton);

let total = 0;

//Adding text
display.innerText = total;
plusButton.innerText = '+';
minusButton.innerText = '-';
resetButton.innerText = 'Reset';

//Functions
function increase() {
    total++;
    display.innerText = total;
}
function decrease() {
    if(total==0) return;
    total--;
    display.innerText = total;
}
function reset() {
    total = 0;
    display.innerText = total;
}

let number = 5;
plusButton.addEventListener('click', increase);
minusButton.addEventListener('click', decrease);
resetButton.addEventListener('click', reset);
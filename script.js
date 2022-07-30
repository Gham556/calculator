
const add = function(a, b) {
    return a + b
      
  };

  const subtract = function(a, b) {
	return a - b
};

const divide = function(a, b) {
    return a / b 
};

const mult = function(a, b) {
    return a * b
};


const numberButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.op');
const display = document.querySelector('.display');
const equals = document.querySelector('.equals');


numberButtons.forEach((number) =>{
    number.addEventListener('click', store);
});

operatorButtons.forEach((number) =>{
    number.addEventListener('click', operate);
});

equals.addEventListener('click', end);

function store() { 
    
    numberButtons.forEach((number) =>{
        number.removeEventListener('click', reset)});
    display.textContent += this.textContent;
};

function operate() {
    initialNum = display.textContent;
    display.textContent = this.textContent;
    numberButtons.forEach((number) =>{
        number.removeEventListener('click', store)
        number.addEventListener('click', reset);
    });
    return initialNum;
};

function reset () {
    operator = display.textContent; 
    display.textContent = this.textContent
    numberButtons.forEach((number) =>{
        number.addEventListener('click', store);
        number.removeEventListener('click', reset)});
   ;
    return operator
}

function end () {
    thig = operate() + reset() + display.textContent;
    display.textContent = thig
};
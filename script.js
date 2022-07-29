
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
// numberButtons.forEach().addEventListener('click', store);

numberButtons.forEach((number) =>{
    number.addEventListener('click', store);
});


function store(press) {
    press = this.textContent;
    display.textContent += press;
}

const operate = function(numOne, operator, num2) {
        result = numOne, operator, num2 
}


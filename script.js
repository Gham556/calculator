
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

// numberButtons.forEach().addEventListener('click', store);


console.log(numberButtons)
console.log(operatorButtons)

numberButtons.forEach(setEvent);

function setEvent() {
    addEventListener('click', store)
}

function store() {
    
}

const operate = function(numOne, operator, num2) {
        result = numOne, operator, num2 
}



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


numberButtons.forEach((number) =>{
    number.addEventListener('click', store);
});

operatorButtons.forEach((number) =>{
    number.addEventListener('click', operate)
})

function store() { 
    display.textContent += this.textContent;
}

function operate() {
    initialNum = display.textContent;
    display.textContent = this.textContent;

}



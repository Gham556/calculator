const numberButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.op');
const display = document.querySelector('.display');
const equals = document.querySelector('.equals');

const equation = [];

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
    const initialNum = parseInt(display.textContent);
    display.textContent = this.textContent;
    numberButtons.forEach((number) =>{
        number.removeEventListener('click', store)
        number.addEventListener('click', reset);
    });
    operatorButtons.forEach((number) =>{
        number.addEventListener('click', operate);
    });
   equation.push(initialNum)
}
function reset () {
   const operator = (display.textContent); 
    display.textContent = this.textContent
    numberButtons.forEach((number) =>{
        number.addEventListener('click', store);
        number.removeEventListener('click', reset)});
   ;
   equation.push(operator)
}

function end () {
    equation.push(parseInt(display.textContent))
    switch(equation[1]) {
        case '+': 
        display.textContent = equation[0] + equation[2];
        break; 
        case '-': 
        display.textContent = equation[0] - equation[2];
        case '*':
            display.textContent = equation[0] * equation[2];
        case '/':
            display.textContent = equation[0] / equation[2];    
    }   




    
}


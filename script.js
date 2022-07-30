const numberButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.op');
const display = document.querySelector('.display');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

const equation = [];

numberButtons.forEach((number) =>{
    number.addEventListener('click', store);
});

operatorButtons.forEach((number) =>{
    number.addEventListener('click', operate);
});

equals.addEventListener('click', end);

clear.addEventListener('click', clearArray)

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
    switcher();

   function switcher() {

        switch(equation[1]) {
        case '+': 
        display.textContent = equation[0] + equation[2];
        equation.unshift(parseInt(display.textContent));
            equation.splice(1,3);
            if (equation.length > 1){
                switcher();
            };
            console.log(equation)
            break
        case '-': 
        display.textContent = equation[0] - equation[2];
        equation.unshift(parseInt(display.textContent));
            equation.splice(1,3);
            if (equation.length > 1){
                switcher();
            };
            console.log(equation)
        break
        case '*':
            display.textContent = equation[0] * equation[2];
            equation.unshift(parseInt(display.textContent));
                equation.splice(1,3);
                if (equation.length > 1){
                    switcher();
                };
                console.log(equation)
            break

        case '/':
            display.textContent = equation[0] / equation[2]; 
            equation.unshift(parseInt(display.textContent));
                equation.splice(1,3);
                if (equation.length > 1){
                    switcher();
                };
                console.log(equation)
            break   
    }   
   
}

}

function clearArray() {
    for(i in equation) {
        equation.splice(i);
        console.log(equation)
        }
    display.textContent = equation    
}


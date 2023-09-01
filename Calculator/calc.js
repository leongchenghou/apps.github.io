let calculation = '';
display();

function updateCalculation(symbol) {
  if (symbol === '') {
    calculation = '';
  } else if (symbol === '='){
    if (calculation.length > 0){
      calculation = eval(calculation);    
    }
  } else if (symbol === 'DEL'){
    calculation = localStorage.getItem('calculation');
    calculation = calculation.slice(0, -1)
  } else {
    calculation += symbol;
  }
  localStorage.setItem('calculation', calculation);
  return display();
}

function display(){
  document.querySelector('.js-display')
    .innerHTML = calculation;
}

document.body.addEventListener('keydown', event => {
  if (event.key === 'c') {
    updateCalculation('');
  } else if (event.key === '/') {
    updateCalculation('/');
  } else if (event.key === '*') {
    updateCalculation('*');
  } else if (event.key === 'Backspace') {
    updateCalculation('DEL');
  } else if (event.key === '7') {
    updateCalculation('7');
  } else if (event.key === '8') {
    updateCalculation('8');
  } else if (event.key === '9') {
    updateCalculation('9');
  } else if (event.key === '-') {
    updateCalculation('-');
  } else if (event.key === '4') {
    updateCalculation('4');
  } else if (event.key === '5') {
    updateCalculation('5');
  } else if (event.key === '6') {
    updateCalculation('6');
  } else if (event.key === '+') {
    updateCalculation('+');
  } else if (event.key === '1') {
    updateCalculation('1');
  } else if (event.key === '2') {
    updateCalculation('2');
  } else if (event.key === '3') {
    updateCalculation('3');
  } else if (event.key === '%') {
    updateCalculation('%');
  } else if (event.key === '0') {
    updateCalculation('0');
  } else if (event.key === '.'){
    updateCalculation(',');
  } else if (event.key === 'Enter' || event.key === '='){
    updateCalculation('=');
  }
});
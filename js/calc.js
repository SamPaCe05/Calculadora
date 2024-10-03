import { div, mult, porcentaje, restar, sumatoria } from './functions/calcF.mjs'
let number = '';
let ans = []
const preResult = document.querySelector('.preResult')

const buttons = document.querySelectorAll('.number')

buttons.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        if (!['X', '+', '-', '÷', '%', '-/+'].includes()) {
            number += item.textContent;
            preResult.textContent = number;
        }
    })
})
const opper = document.querySelectorAll('.opper')

opper.forEach(item => {
    item.addEventListener('click', (e) => {
        preResult.textContent = ''
        ans.push(Number(number))
        number = ''
        ans.push(item.textContent)
    })
})
const equal = document.querySelector('.igual');

equal.addEventListener('click', (e) => {
  ans.push(Number(number));
  ans = ans.filter(i => i !== 0);

  const [a, signal, b] = ans;

  let res;
  switch (signal) {
    case 'X':
      res = mult(a, b);
      break;
    case '+':
      res = sumatoria(a, b);
      break;
    case '-':
      res = restar(a, b);
      break;
    case '÷':
      res = div(a, b);
      break;
    case '%':
      res = porcentaje(a, b);
      break;
    default:
      res = "0";
  }

  if (isNaN(res)) {
    res = "Syntax ERROR";
  }

  preResult.textContent = res;
  ans = [res];
  number = '';
});

const clean = document.querySelector('.clean')

clean.addEventListener('click', () => {
    preResult.textContent = ''; number = ''; ans = []
})

const punto = document.querySelector('.decimal')
punto.addEventListener('click', (e) => {
    if (number !== '' && number.includes('.') == false) {
        number += '.'
        preResult.textContent = number
    }
})

const signals = document.querySelector('.signals')
signals.addEventListener('click', (e) => {

    if (number !== 0 && number !== '') {
        number = -1 * Number(number)
        number = String(number)
        preResult.textContent = number
    } else {
        preResult.textContent = ''
    }
})
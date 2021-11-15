let number1 = prompt('Введите первое число')
let number2 = prompt('Введите второе число')

let plus = parseInt(number1) + parseInt(number2);
let minus = number1 - number2;
let mnog = number1 * number2;
let dil = number1 / number2;
let proc = number1 % number2;
let kvadr1 = number1 ** 2;
let kvadr2 = number2 ** 2;

console.log(parseInt(number1) + '+' + parseInt(number2) + '=' + plus);
console.log(number1 + '-' + number2 + '=' + minus);
console.log(number1 + '*' + number2 + '=' + mnog);
console.log(number1 + '/' + number2 + '=' + dil);
console.log(number1 + '%' + number2 + '=' + proc);
console.log(number1 + '**' + '2' + '=' + kvadr1);
console.log(number2 + '**' + '2' + '=' + kvadr2);

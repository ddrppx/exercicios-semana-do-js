// 03
// Gere um novo array com cada um dos números abaixo elevados ao quadrado e 
// exiba o novo array no console.

const numbers = [5, 7, 3]

const newArray = numbers.map(num => Math.pow(num, 2))

console.log(newArray);
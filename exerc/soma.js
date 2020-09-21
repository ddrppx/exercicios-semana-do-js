// 02 
// Exiba no console quantos números abaixo de 501 o array abaixo possui.

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691];

var soma = 0;
const sum = crazyNumbers.map(num => {
  if (num < 501) {
    soma += num;
  }
});

console.log(soma)
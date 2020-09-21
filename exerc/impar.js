//01
// Gere um novo array com apenas os números ímpares do 
// array abaixo e exiba o novo array no console.

const randomNumbers = [10, 30, 15, 25, 50, 40, 5]

    //Filter()
const impares = randomNumbers.filter(num => num % 2 === 0);

    // Map()
const imparMAP = randomNumbers.map(num => {
    if (num % 2 === 1) {
        return num;
    }
});

console.log(impares);


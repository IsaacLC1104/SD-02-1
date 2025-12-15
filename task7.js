// Refer to Task 7 in your Instructions to complete this task

const prompt = require("prompt-sync")();
const numero = prompt("Ingresa el numero limite del arreglo: ");
const numeros = [];

function showPrimeOdd(numero) {

  for (let i = 1; i <= numero; i++) {


    if (i > 1 && i % 2 !== 0 && i > 30) {
      numeros.push("BigPrimeOdd");
    } else if (i > 1 && i % 2 !== 0) {
      numeros.push("PrimeOdd");

    } else {
      numeros.push(i);
    }

  }
  return numeros;
}

console.log(showPrimeOdd(numero));

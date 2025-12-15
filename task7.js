// Refer to Task 7 in your Instructions to complete this task

const prompt = require("prompt-sync")();
const numero = prompt("Ingresa el numero limite del arreglo: ");
const numeros = [];

function Prime(prime) {

  if (prime <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(prime); i++) {
    if (prime % i === 0) {
      return false;
    }
  }

  return true;

}



function showPrimeOdd(numero) {

  for (let i = 1; i <= numero; i++) {


    if (Prime(numero) && i % 2 !== 0 && i > 30) {
      numeros.push("BigPrimeOdd");
    } else if (Prime(numero) && i % 2 !== 0) {
      numeros.push("PrimeOdd");

    } else {
      numeros.push(i);
    }

  }
  return numeros;
}

console.log(showPrimeOdd(numero));

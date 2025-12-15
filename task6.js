// Refer to Task 6 in your Instructions to complete this task
const prompt = require("prompt-sync")();
const numero = prompt("Ingresa el numero limite del arreglo: ");
const numeros = [];

function showFizzBuzzWoof(numero) {

  for (let i = 1; i <= numero; i++) {

    if (i % 3 === 0 && i % 5 === 0 & i % 7 === 0) {
      numeros.push("FizzBuzzWoof");
    }
    else if (i % 3 === 0 && i % 5 === 0) {
      numeros.push("FizzBuzz");
    }
    else if (i % 3 === 0) {
      numeros.push("Fizz");
    }
    else if (i % 5 === 0) {
      numeros.push("Buzz");
    }
    else if (i % 7 === 0) {
      numeros.push("Woof");
    }
    else {
      numeros.push(i);
    }

  }
  return numeros;
}

console.log(showFizzBuzzWoof(numero));

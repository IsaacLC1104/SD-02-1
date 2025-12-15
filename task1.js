// Refer to Task 1 in your Instructions to complete this task
const prompt = require("prompt-sync")();
const name = prompt("Ingresa tu nombre");


function showNumbers(numero) {
    const numeros = []

    for (let i = 1; i <= numero; i++) {
        numeros.push(i);

    }
    return numeros;
}


console.log(showNumbers(105));


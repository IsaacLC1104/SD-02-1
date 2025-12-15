// Refer to Task 3 in your Instructions to complete this task

function showFizzBuzz(numero) {
  const numeros = []

  for (let i = 1; i <= numero; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      numeros.push("FizzBuzz");
    }
    else if (i % 3 === 0) {
      numeros.push("Fizz");
    }
    else if (i % 5 === 0) {
      numeros.push("Buzz");
    }
    else {
      numeros.push(i);
    }

  }
  return numeros;
}

console.log(showFizzBuzz(105));

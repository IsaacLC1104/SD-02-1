// Refer to Task 2 in your Instructions to complete this task

function showFizz(numero) {
  const numeros = []

  for (let i = 1; i <= numero; i++) {

    if (i % 3 === 0) {
      numeros.push("Fizz");
    } else {
      numeros.push(i);
    }

  }
  return numeros;
}

console.log(showFizz(105));


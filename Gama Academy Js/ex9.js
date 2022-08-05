/* Utilizando os conceitos que estudamos, vamos criar um programa que irá imprimir 'FizzBuzz'para números divisiveis por 3 e 5, para números divisíveis por 3 irá impirmir 'Fizz' e para números divisíveis por 5 irá imprimir 'Buzz' e por fim, se não cumprir nenhum dos casos acima imprime o próprio número. */

let resultado = fizzbuzz(50);
console.log(resultado);
function fizzbuzz(a) {
  if (typeof a !== "number") {
    return "não é um numero";
  }
  if (a % 3 === 0 && a % 5 === 0) {
    return "FizzBuzz";
  }
  if (a % 3 === 0) {
    return "Fizz";
  }
  if (a % 5 === 0) {
    return "Buzz";
  }
}

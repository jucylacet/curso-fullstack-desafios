/*
25 - Crie um script que declare uma função que receba um array de strings 
como parâmetro e retorne um novo array onde cada string esteja em letras maiúsculas. 
Utilize a função `toUpperCase()` para converter as strings.
*/

function maiusculas(array) {
  return array.map((string) => string.toUpperCase());
};

console.log(maiusculas(["laranja", "banana", "manga", "morango", "abacaxi"]));
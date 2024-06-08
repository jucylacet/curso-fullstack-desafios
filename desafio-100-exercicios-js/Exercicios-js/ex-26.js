/*
26 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array onde cada string esteja em letras minúsculas. 
Utilize a função `toLowerCase()` para converter as strings.
*/

function minusculas(array) {
  return array.map((string) => string.toLowerCase());
};

console.log(minusculas([ "Laranja", "BANANA", "UvA", "MORANgo"]));
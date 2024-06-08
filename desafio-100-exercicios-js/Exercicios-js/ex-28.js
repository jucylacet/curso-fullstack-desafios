/*
28 - Crie um script que declare uma função que receba um array de números 
como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 3.
*/

const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
function multiplos(numeros){
  return numeros.filter(numero => numero % 3 == 0);
}
console.log(multiplos(numeros));



/*
36 - Crie um script que declare uma função que receba um array de números como parâmetro e 
retorne um novo array contendo apenas os números que são múltiplos de 5.
*/

const numeros = [ 12, 15, 10, 25, 26, 30, 40, 55, 75 ];

const multiplos = (numeros) => {
  return numeros.filter(numero => numero % 5 == 0);
};

console.log(multiplos(numeros));
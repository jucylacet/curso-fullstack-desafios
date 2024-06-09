/*
40 - Crie um script que declare uma função que receba um array de números como parâmetro 
e retorne um novo array contendo apenas os números que são maiores que 10.
*/
const numeros = [ 5, 10, 33, 43, 53, 63, 73, 83, 93, 103 ];

const maiorQueDez = (numeros) => {
  return numeros.filter(numero => numero > 10);
};

console.log(maiorQueDez(numeros));
/*
39 - Crie um script que declare uma função que receba um array de números como parâmetro 
e retorne um novo array onde cada número seja convertido para uma string com duas casas decimais. 
Utilize a função `toFixed()` para formatar os números.
*/

const numeros = [ 13, 23, 33, 43, 53, 63, 73, 83, 93, 103 ];

const converter = (numeros) => {
  return numeros.map(numero => numero.toFixed(2));
};
console.log(converter(numeros).toString());
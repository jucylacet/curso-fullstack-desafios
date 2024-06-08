/*
27 - Crie um script que declare uma função que receba um array de números como parâmetro e 
retorne um novo array onde cada número seja elevado ao quadrado.
 */

function quadrado(array){
  return array.map(numero => numero * numero);
}
console.log(quadrado([2, 4, 6]));
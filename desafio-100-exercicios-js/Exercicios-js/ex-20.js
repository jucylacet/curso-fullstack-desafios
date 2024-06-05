/*
20 - Crie um script que declare uma função que receba um array de números como parâmetro 
e retorne a média dos números do array.
*/

const numeros = [2, 5, 7, 12, 37, 38, 49, 55, 42, 59, 65, 66, 98, 12];

function mediaNumeros(numeros) {
  let soma = 0;
  for (const numero of numeros) {
    soma += numero;
}
  return soma / numeros.length;
} 
console.log(`A média dos números é: ${mediaNumeros(numeros).toFixed(2)}`);

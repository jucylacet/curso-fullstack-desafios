/*
18 - Crie um script que declare uma função que receba um array de números como parâmetro e 
retorne o maior número do array. Utilize a função `Math.max()` para encontrar o maior número.
---------------------------------------------------------------------------------------------------
19 - Crie um script que declare uma função que receba um array de números como parâmetro e 
retorne o menor número do array. Utilize a função `Math.min()` para encontrar o menor número.
*/

const numeros = [2, 5, 7, 12, 37, 38, 49, 55, 42, 59, 65, 66, 98, 12];

function maiorNumero(numeros) {
  let maior = Math.max(...numeros);
  return maior;
}
console.log(`O maior número é: ${maiorNumero(numeros)}`);

function menorNumero(numeros) {
  let menor = Math.min(...numeros);
  return menor;
}
console.log(`O menor número é: ${menorNumero(numeros)}`);
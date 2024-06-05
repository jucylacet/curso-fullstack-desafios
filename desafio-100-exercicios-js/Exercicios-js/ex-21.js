/*
21 - Crie um script que declare um array de números e utilize a função `filter()` 
para criar um novo array contendo apenas os números pares. Imprima o novo array.
*/

const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const pares = numeros.filter(numero => numero % 2 === 0);

console.log(`Os números pares do array sao: ${pares}`);
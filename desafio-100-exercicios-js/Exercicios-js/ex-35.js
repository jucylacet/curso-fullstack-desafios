/*
35 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array 
onde cada número seja decrementado em 1.
*/
const arrayNumeros = [10, 20, 30 , 40, 50, 60, 70, 80, 90, 100];

const decremento = (arrayNumeros) => {
  return arrayNumeros.map((numeros) => {
    return numeros - 1;
  });
};

console.log(decremento(arrayNumeros));
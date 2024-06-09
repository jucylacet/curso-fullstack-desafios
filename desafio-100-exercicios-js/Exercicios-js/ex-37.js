/*
37 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array onde cada string esteja invertida. 
Utilize a função `reverse()` para inverter as strings.
*/

const twilight = [ "Bella", "Edward", "Jacob", "Charlie", "Jasper", "Carlisle" ];

const inverter = (twilight) => {
  return twilight.map(str => str.split('').reverse().join(''));
};

console.log(inverter(twilight));

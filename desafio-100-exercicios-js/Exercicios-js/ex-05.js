/*
5 - Crie um script que contenha duas funções, uma usando a sintaxe tradicional e outra usando arrow function. 
Ambas as funções devem receber um parâmetro carreira e retornar uma string 
concatenada usando template literals `${var}`. 
Retorno: "Meu objetivo de carreira é me tornar um [parametro carreira]".
*/
const carreira = "Desenvolvedor Web";

function objetivoCarreira(carreira) {
  return `Meu objetivo de carreira é me tornar um ${carreira}`
}

const objetivoDeCarreira = (carreira) => {
  return `Meu objetivo de carreira é me tornar um ${carreira}`
}

console.log(objetivoCarreira(carreira));
console.log(objetivoDeCarreira(carreira))
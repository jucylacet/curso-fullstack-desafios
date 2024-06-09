/*
38 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array contendo apenas as strings que terminam com a letra "a".
*/

const nomes = ["Ana", "Maria", "Cabrito", "Pablo", "Ada", "Abel"];

const filtroNomes = (nomes) => {
  return nomes.filter((nome) => nome.endsWith("a"));
};

console.log(filtroNomes(nomes));
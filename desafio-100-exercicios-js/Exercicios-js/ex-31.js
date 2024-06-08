/*
31 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno 
e possui as propriedades `nome`, `idade` e `notas` (um array de números). 
Utilize um loop `for` para imprimir o nome de cada aluno.
*/
const alunos = [{
  nome: "Ana",
  idade: 12,
  notas: [7.0, 6.5, 7.8]
}, 
{
  nome: "Maria",
  idade: 15,
  notas: [8.0, 7.5, 9.8]
},
{
  nome: "Pedro",
  idade: 18,
  notas: [9.0, 8.5, 10.8]
}];

for (let i =0; i < alunos.length; i++){
  console.log(alunos[i].nome);
}
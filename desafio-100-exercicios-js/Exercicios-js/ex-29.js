/*
29 - Crie um script que declare uma função que receba um array de strings 
como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "A".
*/

const alunos = ["Ana", "Maria", "Cabrito", "Pablo", "Ada", "Abel"];

function inicial (alunos) {
 return alunos.filter(aluno => aluno[0] === "A");
}
console.log(inicial(alunos));
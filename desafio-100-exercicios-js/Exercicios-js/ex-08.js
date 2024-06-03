/*
8 - Faça um script que contenha um array chamado notas, esse array armazena 3 notas de um aluno. 
O programa deve imprimir:
- A primeira nota do aluno é: …
- A segunda nota do aluno é: …
- A terceira nota do aluno é: …
- A média do aluno é: …
- O aluno está: APROVADO ou REPROVADO (APROVADO quando a média for maior ou igual a 7).
*/

const notas = [7.10, 8.5, 6.5];
var media = (notas[0]+notas[1]+notas[2])/notas.length;
var resultado;

if (media >= 7) {
  resultado = "APROVADO";
} else {
  resultado = "REPROVADO";
}

console.log(`A primeira nota do aluno é: ${notas[0]}`);
console.log(`A segunda nota do aluno é: ${notas[1]}`);
console.log(`A terceira nota do aluno é: ${notas[2]}`);
console.log(`A media final do aluno foi: ${media.toFixed(2)} e seu resultado: ${resultado}`);
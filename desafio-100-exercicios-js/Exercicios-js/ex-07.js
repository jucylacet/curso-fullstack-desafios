/*
7 - Crie um script que combine o uso de objetos literais, arrays e cálculos simples para armazenar e manipular 
informações pessoais e acadêmicas de uma pessoa. O script deve realizar as seguintes tarefas:
- nome: O nome do aluno.
- cpf: O CPF do aluno.
- cidade: A cidade onde o aluno mora.
- notas: Um array com 4 notas do aluno.
Imprima o nome, CPF e cidade do aluno. Imprima cada uma das notas do array notas. 
Calcule a média das notas do aluno e imprima. Selecione uma das notas aleatoriamente, 
convertê-la de uma escala de 0-10 para uma escala de 0-100 (nota convertida = nota × 10). 
Utilize a sintaxe notas[Math.floor(Math.random() * notas.length)] para selecionar uma nota aleatória do array. 
Utilize template literals para a concatenação de strings.
*/

const aluno = {
  nome: "Maria",
  cpf: "123.456.789-00",
  cidade: "João Pessoa",
  notas: [7, 8, 9, 10],
};

const media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2] + aluno.notas[3]) / 4;

console.log(`Nome: ${aluno.nome}\nCPF: ${aluno.cpf}\nCidade: ${aluno.cidade}`);
console.log(`Nota 1: ${aluno.notas[0]}\nNota 2: ${aluno.notas[1]}\nNota 3: ${aluno.notas[2]}\nNota 4: ${aluno.notas[3]}\nMédia do aluno: ${media}`);

const random = aluno.notas[Math.floor(Math.random() * aluno.notas.length)];
console.log(`Sua nota aletória convertida: ${random * 10}`);
/* 1 - Crie um script que tenha três variáveis:
var nome;
let sobreNome;
const cpf;
Nome e cpf devem estar em um escopo global. sobreNome deve estar dentro de uma função. 
A execução do programa deve imprimir o nome completo na ordem correta (com quebra de linha): 
Nome Sobrenome CPF. 
Outra linha com uma mensagem concatenando os valores.*/

var nome = "Maria";
const cpf = "123.456.789-00";

function sobreNome() {
    let sobreNome = "Silva";
    return sobreNome;
}

console.log(`${nome}\n${sobreNome()}\n${cpf}`);
console.log(`O nome completo é: ${nome} ${sobreNome()} e o seu CPF: ${cpf}`);
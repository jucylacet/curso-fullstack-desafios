/* 
2 - Crie um script que simule um sistema de registro de produtos. O script deve ter três variáveis:
var produto;
let categoria;
const codigoProduto;

As variáveis produto e codigoProduto devem estar em um escopo global. 
A variável categoria deve estar dentro de uma função. 
A execução do programa deve imprimir os detalhes do produto na ordem correta (com quebra de linha): 
Produto Categoria Código do Produto.
*/

var produto = "Notebook";
const codigoProduto = "Note-001";

function categoria() {
    let categoria = "Informática";
    return categoria;
}
console.log(`Detalhes da compra:\n Produto: ${produto}\n Categoria: ${categoria()}\n Código: ${codigoProduto}`);
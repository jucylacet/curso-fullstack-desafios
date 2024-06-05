/*
13 - Crie um script que declare uma variável var largura e atribua a ela um valor numérico. 
Declare uma função que calcule a largura ao cubo e imprima o resultado.
*/

var largura = 2.5;
function cubo() {
  const larguraCubo = largura * largura * largura;
  return larguraCubo;
}
console.log(`A largura ao cubo é: ${cubo()}`);
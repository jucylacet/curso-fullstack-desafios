/*
12 - Crie um script que declare uma variável let altura e atribua a ela um valor numérico. 
Em seguida, declare uma função que calcule a altura ao quadrado e imprima o resultado.
*/

function quadrado() {
  let altura = 1.8;
  const  alturaQuadrado = altura * altura;
  return alturaQuadrado;
}
console.log(`A altura ao quadrado é: ${quadrado()}`);
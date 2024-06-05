/*
14 - Crie um script que declare uma variável const base e atribua a ela um valor numérico. 
Declare uma função que calcule a área de um triângulo usando a base e uma altura fornecida 
como parâmetro e imprima o resultado.
*/

const base = 3.4;
function areaTriangulo(base, altura) {
  let area = (base * altura) / 2;
  return area;
} 
console.log(`A área do triângulo é: ${areaTriangulo(base, 4)}`);
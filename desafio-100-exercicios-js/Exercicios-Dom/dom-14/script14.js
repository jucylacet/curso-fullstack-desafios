const verificar = () => {
  const numeros = document.getElementById('adivinhe-numero').value;
  const array = numeros.split(',');

  const minNumber = Math.min(...array);
  const maxNumber = Math.max(...array);

  document.getElementById('resultado').innerHTML = `
      <p>Menor número: ${minNumber}</p>
      <p>Maior número: ${maxNumber}</p>
  `;
}
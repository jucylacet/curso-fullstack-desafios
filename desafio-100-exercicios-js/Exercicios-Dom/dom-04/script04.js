const somar = () => {
  const numeroDigitado = parseInt(document.getElementById('numero-digitado').value);
  const resultado = document.getElementById('resultado');
  let soma = 0;
  for (let i = 1; i <= numeroDigitado; i++) {
    soma += i;
  }
  resultado.innerHTML = `A soma dos números de 1 a ${numeroDigitado} é ${soma}`
}
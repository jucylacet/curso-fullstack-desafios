const converter = () => {
  const numeroDigitado = document.getElementById('numero-digitado').value;
  const resultado = document.getElementById('resultado');
  let binario = '';
  let decimal = parseInt(numeroDigitado);
  while (decimal > 0) {
    binario = (decimal % 2) + binario;
    decimal = Math.floor(decimal / 2);
  }
  resultado.innerHTML = `O número ${numeroDigitado} em binário é ${binario}`
}
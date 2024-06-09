const fatorial = () => {
  const numeroDigitado = document.getElementById('numero-digitado').value;
  let fatorial = 1;
  for (let i = 1; i <= numeroDigitado; i++){
    fatorial *= i;
  }
  document.getElementById('resultado').innerHTML = `O fatorial de ${numeroDigitado} é ${fatorial}`
}
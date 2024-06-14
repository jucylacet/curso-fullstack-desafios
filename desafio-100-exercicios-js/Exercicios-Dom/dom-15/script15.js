const verificar = () => {
  const numeroDigitado = parseInt(document.getElementById('numero-digitado').value);
  const resultado = document.getElementById('resultado');
  let sum = 0;
  
  for (let i = 1; i < numeroDigitado; i++) {
    if (numeroDigitado % i === 0) {
      sum += i;
    }
}

  if (sum === numeroDigitado) {
     resultado.innerHTML = `${numeroDigitado} é um número perfeito.`;
      } else {
     resultado.innerHTML = `${numeroDigitado} não é um número perfeito.`;
   }
}
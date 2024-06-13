const fibonacci = () => {
  const numeroDigitado = document.getElementById('numero-digitado').value;
  const resultado = document.getElementById('resultado');
  let fibonacci = [0, 1];
  for (let i = 2; i < numeroDigitado; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }
  resultado.innerHTML = `A sequência de Fibonacci para o número ${numeroDigitado} é ${fibonacci.join(', ')}`
}

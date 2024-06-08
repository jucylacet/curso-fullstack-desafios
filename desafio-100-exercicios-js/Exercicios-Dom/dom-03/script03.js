const randomNumber = Math.floor(Math.random() * 100) + 1;
verificar = () => {
  const adivinhe = document.getElementById('adivinhe-numero').value;
  const resultado = document.getElementById('resultado');

  if (adivinhe > randomNumber) {
    resultado.innerHTML = 'O número inserido é maior. Tente novamente.';
  } else if (adivinhe < randomNumber) {
    resultado.innerHTML = 'O número inserido é menor.Tente novamente.';
  } else {
    resultado.innerHTML = `Parabéns, voce acertou! O número foi ${randomNumber}`;
  }
}
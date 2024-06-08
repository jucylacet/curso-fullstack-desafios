const verifica = () => {
  const numero = parseInt(document.getElementById('numero').value);

if (primo(numero)) {
  document.getElementById('resultado').innerHTML = `O número ${numero} é primo`;
} else {
  document.getElementById('resultado').innerHTML = `O número ${numero} não é primo`;
}
}
const primo = (num) => {
    if (num < 2) {
      return false;
    }
    for (let i =2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
}






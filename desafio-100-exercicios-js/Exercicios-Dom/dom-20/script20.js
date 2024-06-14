var numeroSecreto = Math.round(Math.random() * 100);

const chutar = () => {
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("numero-digitado").value);
  if (chute == numeroSecreto) {
    resultado.innerHTML = "Parabéns, voce acertou!";
  } else if (chute > numeroSecreto) {
    resultado.innerHTML = "O número inserido é maior. Tente novamente.";
  } else if (chute < numeroSecreto) {
    resultado.innerHTML = "O número inserido é menor. Tente novamente.";
  }
}

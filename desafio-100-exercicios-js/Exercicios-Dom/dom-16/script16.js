const verificar = () => {
  const numero = parseInt(document.getElementById("numero-digitado").value);
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = "";

  for (let i = 1; i <= numero; i++) {
    resultado.innerHTML += `${i} - ${i % 2 === 0 ? "par" : "ímpar"}<br>`
  }
}

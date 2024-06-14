const calcularTempoDobro = () => {
  const taxaJurosAnual = parseFloat(document.getElementById('taxa-juros').value)
  const taxaJurosDecimal = taxaJurosAnual / 100;
  const tempoDobro = Math.log(2) / Math.log(1 + taxaJurosDecimal);

  document.getElementById('resultado').innerHTML = `Tempo necessário para dobrar o investimento: aproximadamente ${tempoDobro.toFixed(2)} anos.`;
}
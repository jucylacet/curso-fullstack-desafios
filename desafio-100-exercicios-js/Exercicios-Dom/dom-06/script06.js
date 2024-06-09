const findNames = () => {
  const nomesDigitados = document.getElementById('nomes-digitados').value;
  const resultado = document.getElementById('resultado');

  const nomes = nomesDigitados.split(',').map((nome) => nome.trim()).filter(nome => nome);

  let nomeMaisLongo = nomes[0];
  let nomeMaisCurto = nomes[0];

  for (let nome of nomes) {
    if (nome.length > nomeMaisLongo.length) {
      nomeMaisLongo = nome;
    }
    if (nome.length < nomeMaisCurto.length) {
      nomeMaisCurto = nome;
    }
  }
  resultado.innerHTML = `O nome mais longo: ${nomeMaisLongo} <br> O nome mais curto: ${nomeMaisCurto}`
}
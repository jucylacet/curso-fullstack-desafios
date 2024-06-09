const contador = () => {
  const textoDigitado = document.getElementById('textoDigitado').value;
  const resultado = document.getElementById('resultado');
  const vogais = textoDigitado.match(/[aeiou]/gi).length;
  const consoantes = textoDigitado.length - vogais;
  resultado.innerHTML = `Vogais: ${vogais} <br> Consoantes: ${consoantes}`
}
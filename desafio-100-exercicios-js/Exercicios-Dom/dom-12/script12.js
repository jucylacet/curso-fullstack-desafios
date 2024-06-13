const palindromo = () => {
  const palavra = document.getElementById('palavra-digitada').value;
  const palavraInvertida = palavra.split('').reverse().join('');
  if (palavra === palavraInvertida) {
    document.getElementById('resultado').innerHTML = `A palavra "${palavra}" é um palíndromo.`;
  } else {
    document.getElementById('resultado').innerHTML = `A palavra "${palavra}" não é um palíndromo.`;
  }
}
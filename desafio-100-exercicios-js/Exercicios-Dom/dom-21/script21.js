const calcularIdade = () => {
  const dataNascimento = document.getElementById('data-nascimento').value;
  const data = new Date(dataNascimento);
  const anoNascimento = data.getFullYear();
  const anoAtual = new Date().getFullYear();
  const idade = anoAtual - anoNascimento;
  if (idade < 30) {
    document.getElementById('resultado').innerHTML = `A sua idade é: ${idade} anos, você é xóvem`;
  } else {
    document.getElementById('resultado').innerHTML = `A sua idade é: ${idade} anos, você é velho`;
  }
}
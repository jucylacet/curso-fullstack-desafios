const media = () => {
  const nota1 = parseFloat(document.getElementById('nota1').value);
  const nota2 = parseFloat(document.getElementById('nota2').value);
  const nota3 = parseFloat(document.getElementById('nota3').value);
  const nota4 = parseFloat(document.getElementById('nota4').value);
  const resultado = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(2);
  if (resultado >= 7) {
    document.getElementById('resultado').innerHTML = `A média foi ${resultado} e o aluno foi Aprovado`;
  } else {
    document.getElementById('resultado').innerHTML = `A média foi ${resultado} e o aluno foi Reprovado`;
  }
}

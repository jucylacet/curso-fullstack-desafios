function sortNumbers() {
  const numbersInput = document.getElementById('numbersInput').value;
  const numbersArray = numbersInput.split(',').map(num => parseFloat(num.trim()));

  if (numbersArray.some(isNaN)) {
      alert('Por favor, insira apenas números separados por vírgula.');
      return;
  }

  const sortedNumbers = numbersArray.sort((a, b) => a - b);
  document.getElementById('result').textContent = `Números ordenados: ${sortedNumbers.join(', ')}`;
}
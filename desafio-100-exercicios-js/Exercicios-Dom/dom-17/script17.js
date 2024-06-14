function insert(value) {
  document.getElementById('display').value += value;
}

function limpar() {
  document.getElementById('display').value = 0;
}

function calcular() {
  const result = eval(document.getElementById('display').value);
  document.getElementById('display').value = result;
}

function potencia() {
  const value = parseFloat(document.getElementById('display').value);
  document.getElementById('display').value = value * value;
}

function raiz() {
  const value = parseFloat(document.getElementById('display').value);
  document.getElementById('display').value = Math.sqrt(value);
}
let produtos = [];
let precos = [];

function adicionarItem() {
  const produto = document.getElementById('produtoInput').value;
  const preco = parseFloat(document.getElementById('precoInput').value);

    produtos.push(produto);
    precos.push(preco);

    document.getElementById('produtoInput').value = '';
    document.getElementById('precoInput').value = '';
    exibirListaProdutos();
}

function exibirListaProdutos() {
  let listaHTML = '<b>Lista de Produtos:</b><br>';
    for (let i = 0; i < produtos.length; i++) {
      listaHTML += `${produtos[i]} - R$ ${precos[i].toFixed(2)}<br>`;
    }
    document.getElementById('listaProdutos').innerHTML = listaHTML;
}

function calcularTotal() {
  if (produtos.length === 0) {
    alert('Adicione pelo menos um item antes de calcular o total.');
    return;
  }

  let total = 0;
    for (let i = 0; i < precos.length; i++) {
      total += precos[i];
    }

  let desconto = 0;
  let totalDescontado = total;

  if (total > 100) {
    desconto = total * 0.1;
    totalDescontado = total - desconto;
  }

  document.getElementById('totalCompra').innerHTML = `<b>Total da Compra:</b> R$ ${total.toFixed(2)}`;
  document.getElementById('descontoAplicado').innerHTML = `<b>Desconto Aplicado:</b> R$ ${desconto.toFixed(2)}`;
  document.getElementById('totalDescontado').innerHTML = `<b>Total com Desconto:</b> R$ ${totalDescontado.toFixed(2)}`;
}
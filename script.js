// Função de compra via Pix
document.getElementById('btn-pix').onclick = function() {
  const lista = document.getElementById('itens-carrinho');
  if (itensCarrinho.length === 0) {
    document.getElementById('pix-msg').textContent = 'Adicione produtos ao carrinho antes de finalizar a compra.';
    return;
  }
  let total = itensCarrinho.reduce((acc, item) => acc + item.preco, 0);
  document.getElementById('pix-msg').innerHTML = `Envie <b>R$ ${total.toFixed(2)}</b> para a chave Pix <b>cauarocha10109@gmail.com</b> e envie o comprovante para nosso contato!`;
};

const itensCarrinho = [];

function adicionarCarrinho(nome, preco) {
  itensCarrinho.push({ nome, preco });
  atualizarCarrinho();
}

function removerItemCarrinho(idx) {
  itensCarrinho.splice(idx, 1);
  atualizarCarrinho();
}

function getImagemProduto(nome) {
  if (nome === 'Mesa de Escritório') {
    return 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80';
  } else if (nome === 'Cama Empresarial') {
    return 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80';
  } else if (nome === 'Armário Empresarial') {
    return 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80';
  }
  return '';
}

function atualizarCarrinho() {
  const lista = document.getElementById('itens-carrinho');
  lista.innerHTML = '';
  let total = 0;
  itensCarrinho.forEach((item, idx) => {
    total += item.preco;
    const li = document.createElement('li');
    const img = getImagemProduto(item.nome);
  li.innerHTML = `${img ? `<img src='${img}' alt='${item.nome}' style='width:40px;height:40px;object-fit:cover;border-radius:8px;margin-right:10px;vertical-align:middle;box-shadow:0 2px 8px #0a0;'>` : ''}<strong>${item.nome}</strong> <br><span style='color:#0a0;'>R$ ${item.preco.toFixed(2)}</span> <button onclick=\"removerItemCarrinho(${idx})\" style=\"margin-left:10px;background:#0a0;color:#fff;border:none;border-radius:4px;padding:2px 8px;cursor:pointer;\">Remover</button>`;
    lista.appendChild(li);
  });
  if (itensCarrinho.length > 0) {
    const totalLi = document.createElement('li');
    totalLi.style.marginTop = '8px';
    totalLi.innerHTML = `<strong>Total: R$ ${total.toFixed(2)}</strong>`;
    lista.appendChild(totalLi);
  }
}

document.getElementById('limpar-carrinho').onclick = function() {
  itensCarrinho.length = 0;
  atualizarCarrinho();
};

// Scroll suave para navegação
const links = document.querySelectorAll('nav a');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

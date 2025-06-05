let totalGeral = 0;
limpar();


function adicionar(){
    //recuperar os valores dos inputs(nome do produto,quantidade, valor)
    let produto = document.getElementById('produto').value;

    let nomeDoProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    //calcular o valor unitario pela quantidade por produto
    let preco = valorUnitario*quantidade;

    //adicionar o produto ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul">R$ ${preco}</span>
        </section>`
    
    //atualizar o valor total da compra
    totalGeral += preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.innerHTML = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
    document.getElementById('produto').innerHTML = `<select class="produto-input" name="produto" id="produto">
            <option value="">Selecione o produto</option>
            <option value="Fone de ouvido - R$100">Fone de ouvido - R$100</option>
            <option value="Celular - R$1400">Celular - R$1400</option>
            <option value="Oculus VR - R$5000">Oculus VR - R$5000</option>
          </select>`
}
class Produto {

    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        return this.preco - (this.preco * this.desconto / 100);
    }

    exibir() {
        const precoFinal = this.aplicarDesconto();

        return `
            <div class="produto">
                <h3>${this.nome}</h3>

                <p>Categoria: ${this.categoria}</p>

                <p>Preço com desconto: R$ ${precoFinal.toFixed(2)}</p>

                <button onclick="excluirProduto('${this.nome}')">
                    Excluir
                </button>

                <hr>
            </div>
        `;
    }
}


// Pegando os elementos da página

const formulario = document.getElementById("formProduto");
const listaProdutos = document.getElementById("listaProdutos");


// Array para armazenar os produtos

let produtos = JSON.parse(localStorage.getItem("produtos")) || [];


// Função para exibir os produtos

function exibirProdutos() {

    listaProdutos.innerHTML = "";

    produtos.forEach(function(produto) {

        const novoProduto = new Produto(
            produto.nome,
            produto.preco,
            produto.categoria,
            produto.desconto
        );

        listaProdutos.innerHTML += novoProduto.exibir();
    });
}


// Cadastrar produto

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const preco = Number(document.getElementById("preco").value);
    const categoria = document.getElementById("categoria").value;
    const desconto = Number(document.getElementById("desconto").value);


    // Validação

    if (
        nome === "" ||
        preco <= 0 ||
        categoria === "" ||
        desconto < 0
    ) {

        alert("Preencha todos os campos corretamente!");

        return;
    }


    // Criando o produto

    const produto = new Produto(
        nome,
        preco,
        categoria,
        desconto
    );


    // Adicionando o produto ao array

    produtos.push(produto);


    // Salvando no localStorage

    localStorage.setItem("produtos", JSON.stringify(produtos));


    // Atualizando a tela

    exibirProdutos();


    // Limpando o formulário

    formulario.reset();

    alert("Produto cadastrado com sucesso!");
});


// Excluir produto

function excluirProduto(nomeProduto) {

    produtos = produtos.filter(function(produto) {

        return produto.nome !== nomeProduto;

    });


    // Atualiza o localStorage

    localStorage.setItem("produtos", JSON.stringify(produtos));


    // Atualiza a tela

    exibirProdutos();
}


// Recuperar produtos automaticamente ao abrir a página

exibirProdutos();
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
        const precoComDesconto = this.aplicarDesconto();

        return `
            <div class="produto">
                <h3>${this.nome}</h3>

                <p>
                    <strong>Categoria:</strong> 
                    ${this.categoria}
                </p>

                <p>
                    <strong>Preço com desconto:</strong> 
                    R$ ${precoComDesconto.toFixed(2)}
                </p>

                <button onclick="excluirProduto(this)">
                    Excluir
                </button>

                <hr>
            </div>
        `;
    }
}

const formulario = document.getElementById("formProduto");
const listaProdutos = document.getElementById("listaProdutos");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const preco = Number(document.getElementById("preco").value);
    const categoria = document.getElementById("categoria").value;
    const desconto = Number(document.getElementById("desconto").value);

    if (
        nome === "" ||
        preco <= 0 ||
        categoria === "" ||
        desconto < 0
    ) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    const produto = new Produto(
        nome,
        preco,
        categoria,
        desconto
    );

    listaProdutos.innerHTML += produto.exibir();

    formulario.reset();
});

function excluirProduto(botao) {
    botao.parentElement.remove();
}
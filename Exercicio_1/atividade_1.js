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
                <h2>${this.nome}</h2>

                <p>
                    <strong>Categoria:</strong>
                    ${this.categoria}
                </p>

                <p>
                    <strong>Preço:</strong>
                    R$ ${precoFinal.toFixed(2)}
                </p>
            </div>
        `;
    }
}


const formulario = document.getElementById("formProduto");
const produtoCadastrado = document.getElementById("produtoCadastrado");


formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const preco = Number(document.getElementById("preco").value);
    const categoria = document.getElementById("categoria").value;
    const desconto = Number(document.getElementById("desconto").value);

    localStorage.setItem("produto", JSON.stringify(produto));

    if (nome === "" || preco <= 0 || categoria === "") {

        alert("Preencha todos os campos corretamente!");

        return;
    }

    const produto = new Produto(
        nome,
        preco,
        categoria,
        desconto
    );

    // Mostra apenas um produto por vez
    produtoCadastrado.innerHTML = produto.exibir();

    formulario.reset();
});
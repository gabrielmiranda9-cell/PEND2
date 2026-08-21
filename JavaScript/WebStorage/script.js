const nome = document.getElementById("nome");
const botaoSalvar = document.getElementById("botaoSalvar");
const botaoRecuperar = document.getElementById("botaoRecuperar");
const botaoExcluir  = document.getElementById("botaoExcluir");

const Resultado = document.getElementById("resultado");

//salvar

botaoSalvar.addEventListener("click", function() {
    localStorage.setItem("nome", nome.value);

    resultado.textContent = "Nome salvo com sucesso!";

});

//recuperar
botaoRecuperar.addEventListener("click", function() {
    localStorage.removeItem("nome");

    resultado.textContent = "Nome recuperado com sucesso: $(nomeRecuperado)";

});

//excluir
botaoExcluir.addEventListener("click", function() {
    localStorage.removeItem("nome");
    resultado.textContent = "Nome excluído com sucesso!";
});
const tarefas = document.querySelectorAll(".tarefa");
const concluido = document.getElementById("concluido");
const mensagem = document.getElementById("mensagem");

// Começa a arrastar
tarefas.forEach(function(tarefa) {

    tarefa.addEventListener("dragstart", function(event) {

        event.dataTransfer.setData("text", event.target.innerText);

    });

});

// Passa por cima da área de destino
concluido.addEventListener("dragover", function(event) {

    event.preventDefault();

    concluido.classList.add("destaque");

});

// Sai da área de destino
concluido.addEventListener("dragleave", function() {

    concluido.classList.remove("destaque");

});

// Solta a tarefa
concluido.addEventListener("drop", function(event) {

    event.preventDefault();

    const texto = event.dataTransfer.getData("text");

    // Cria a tarefa na área concluído
    const novaTarefa = document.createElement("div");

    novaTarefa.classList.add("tarefa");

    novaTarefa.innerText = texto;

    concluido.appendChild(novaTarefa);

    // Remove a tarefa da área "A Fazer"
    tarefas.forEach(function(tarefa) {

        if (tarefa.innerText === texto) {
            tarefa.remove();
        }

    });

    // Remove o destaque
    concluido.classList.remove("destaque");

    // Mostra uma mensagem
    mensagem.innerText = "Tarefa concluída com sucesso!";

});
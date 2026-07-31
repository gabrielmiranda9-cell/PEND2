const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem");

    if(nome === "" || email === ""){
        mensagem.innerHTML = "Preencha todos os campos!";
        mensagem.style.color = "red";
    }
    else{
        mensagem.innerHTML =
        `Olá ${nome}, seu contato foi enviado com sucesso!`;
        mensagem.style.color = "green";
    }

});
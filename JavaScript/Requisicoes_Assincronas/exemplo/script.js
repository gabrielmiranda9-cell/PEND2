const botao = document.getElementById("buscarUsuarios");
const resultado = document.getElementById("resultado");

// botao.addEventListener("click", () => {
// // fetch + then + catch
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(resposta => resposta.json())
//     .then(dados => {
//         //  console.log(dados);
//         resultado.innerHTML = "";

//         dados.forEach(usuario => {

//             resultado.innerHTML += `
//                 <p>
//                     <strong>${usuario.nome}</strong><br>
//                     ${usuario.email}
//                 </p>
//                 <hr>
//             `;
//         });
//     })
//     .catch(erro => {
//         console.error("Ocorreu um erro:", erro);
//     })
// })

//Async/Await
botao.addEventListener("click", async () => {
    try {
        const resposta = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const dados = await resposta.json();

        resultado.innerHTML = "";

        dados.forEach(usuario => {
            resultado.innerHTML += `
                <p>
                    <strong>${usuario.name}</strong><br>
                    ${usuario.email}
                </p>
                <hr>
            `;
        });
    } catch (erro) {
        resultado.innerHTML = "<p>Ocorreu um erro ao buscar os usuários.</p>";
        console.error("Ocorreu um erro:", erro);
    }
});
const botao = document.getElementById("buscarUsuarios");
const resultado = document.getElementById("resultado");
const idUsuario = document.getElementById("idUsuario");


// botao.addEventListener("click", () => {
// //fetch + then + catch
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(resposta => resposta.json())
//     .then(dados => {
//         console.log(dados);
//         resultado.innerHTML = "";

//         dados.forEach(usuario => {

//             resultado.innerHTML += `
//                 <p>
//                     <strong>${usuario.nome}</strong><br>
//                     ${usuario.email}
//                 </p>
//                 <hr>9
//             `;
//         });

//     })
//     .catch(erro => {
//         console.log("Erro:", erro);
//     })
// });

//ASYNC / AWAIT
// botao.addEventListener("click", async () =>{
//     try {
//         const resposta = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );

//         const dados = await resposta.json();

//         resultado.innerHTML = "";

//         dados.forEach(usuario => {
//             resultado.innerHTML += `
//             <p>
//                 <strong>${usuario.name}</strong><br>
//                 ${usuario.email}
//             </p>
//             <hr>
//             `;
//         });

//     } catch (erro) {

//         resultado.innerHTML = "Erro ao buscar usuários.";
//         console.log("Erro:", erro);
//     }
// });

//COM CAMPO DE BUSCA

botao.addEventListener("click", async () =>{

    const id = idUsuario.value;

    if (id === "") {
        resultado.innerHTML = "Digite um ID";
        return;
    }

    try {
        const resposta = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        const dados = await resposta.json();

        resultado.innerHTML = `
        <p>
            <strong>${dados.name}</strong><br>
            Email: ${dados.email}<br>
            Cidade: ${dados.address.city}<br>
            Telefone: ${dados.phone}]]
        </p>
        <hr>
        `;

    } catch (erro) {

        resultado.innerHTML = "Erro ao buscar usuários.";
        console.log("Erro:", erro);
    }
});
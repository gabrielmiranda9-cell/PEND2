// ==========================================
// GEOLOCALIZAÇÃO
// ==========================================

const btnLocalizacao = document.querySelector("#btnLocalizacao");

const latitude = document.querySelector("#latitude");
const longitude = document.querySelector("#longitude");
const precisao = document.querySelector("#precisao");

const mensagemLocalizacao =
    document.querySelector("#mensagemLocalizacao");


btnLocalizacao.addEventListener("click", function () {

    if (!navigator.geolocation) {

        mensagemLocalizacao.textContent =
            "Geolocalização não é suportada pelo navegador.";

        return;
    }

    mensagemLocalizacao.textContent =
        "Obtendo localização...";


    navigator.geolocation.getCurrentPosition(

        function (posicao) {

            const lat = posicao.coords.latitude;
            const long = posicao.coords.longitude;
            const accuracy = posicao.coords.accuracy;


            latitude.textContent = lat;
            longitude.textContent = long;
            precisao.textContent = accuracy + " metros";


            mensagemLocalizacao.textContent =
                "✓ Localização obtida com sucesso!";

        },


        function (erro) {

            console.log(
                "Não foi possível obter a localização:",
                erro
            );

            mensagemLocalizacao.textContent =
                "Não foi possível obter a localização.";

        }

    );

});



// ==========================================
// CÂMERA
// ==========================================

const btnCamera = document.querySelector("#btnCamera");

const video = document.querySelector("#camera");

const mensagemCamera =
    document.querySelector("#mensagemCamera");


btnCamera.addEventListener("click", function () {

    mensagemCamera.textContent =
        "Solicitando acesso à câmera...";


    navigator.mediaDevices.getUserMedia({

        video: true

    })

    .then(function (stream) {

        video.srcObject = stream;

        mensagemCamera.textContent =
            "✓ Câmera ativada com sucesso!";

        btnCamera.textContent =
            "Câmera Ativa";

    })

    .catch(function (erro) {

        console.log(
            "Não foi possível acessar a câmera:",
            erro
        );

        mensagemCamera.textContent =
            "Não foi possível acessar a câmera.";

    });

});
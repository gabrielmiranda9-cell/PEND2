async function buscarClima() {

    let cidade = document.getElementById("cidade").value;
    let resultado = document.getElementById("resultado");

    if (cidade == "") {
        resultado.innerHTML = "<p>Digite uma cidade.</p>";
        return;
    }

    resultado.innerHTML = "<p>Buscando...</p>";

    try {

        // Procura a cidade
        let respostaCidade = await fetch(
            "https://geocoding-api.open-meteo.com/v1/search?name=" 
            + encodeURIComponent(cidade) 
            + "&count=1&language=pt&format=json"
        );

        let dadosCidade = await respostaCidade.json();

        if (!dadosCidade.results) {
            resultado.innerHTML = "<p>Cidade não encontrada.</p>";
            return;
        }

        let local = dadosCidade.results[0];

        let latitude = local.latitude;
        let longitude = local.longitude;

        // Consulta o clima
        let respostaClima = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude="
            + latitude
            + "&longitude="
            + longitude
            + "&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code&timezone=auto"
        );

        let dadosClima = await respostaClima.json();

        let clima = dadosClima.current;

        resultado.innerHTML = `
            <h2>${local.name}</h2>

            <p>${local.country}</p>

            <div class="info">
                Temperatura: ${clima.temperature_2m} °C
            </div>

            <div class="info">
                Sensação térmica: ${clima.apparent_temperature} °C
            </div>

            <div class="info">
                Umidade: ${clima.relative_humidity_2m}%
            </div>

            <div class="info">
                Vento: ${clima.wind_speed_10m} km/h
            </div>

            <div class="info">
                Clima: ${verClima(clima.weather_code)}
            </div>
        `;

    } catch (erro) {

        resultado.innerHTML = 
            "<p>Erro ao consultar o clima.</p>";

        console.log(erro);
    }
}


function verClima(codigo) {

    if (codigo == 0) {
        return "Céu limpo";
    }

    if (codigo == 1 || codigo == 2) {
        return "Poucas nuvens";
    }

    if (codigo == 3) {
        return "Nublado";
    }

    if (codigo >= 45 && codigo <= 48) {
        return "Neblina";
    }

    if (codigo >= 51 && codigo <= 67) {
        return "Chuva";
    }

    if (codigo >= 80 && codigo <= 82) {
        return "Pancadas de chuva";
    }

    if (codigo >= 95) {
        return "Tempestade";
    }

    return "Não informado";
}
function dadostela(dados) {
    document.querySelector(`.titulo-cidade`).innerHTML="Tempo em "+ dados.name
    document.querySelector(`.graus`).innerHTML= Math.floor(dados.main.temp) + "°C"
    document.querySelector(`.previsao-texto`).innerHTML =`${dados.weather[0].description}`
    document.querySelector(`.icon-previsao`).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(`.umidade`).innerHTML = "Umidade Relativa do Ar " + dados.main.humidity + "%"

    
}


const key= "7fecc202c17cec2166a338d38ab3680b"

async function buscardados(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json())
    dadostela(dados)
}



function cliquebotao(){
    const cidade = document.querySelector(`.input-cidade`).value
    buscardados(cidade)

}


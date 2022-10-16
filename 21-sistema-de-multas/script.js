function limiteVel(){
    let txtv = document.querySelector("input#txtvel")
    let resultado = document.querySelector("div#resultado")

    let vel = Number(txtv.value)

    resultado.innerHTML = `<p class="mt-2">Sua velocidade é de <strong>${vel}Km/h</strong></p>`

    if(vel > 60){
        resultado.innerHTML += `<img src="./assets/images/speed-limit.png" alt="Limite de Velocidade" width="100px">`
        resultado.innerHTML += `<p class="mt-2 text-danger"><strong>Você está acima do limite permitido! MULTADO!</strong></p>`
    } else {
        resultado.innerHTML += `<img src="./assets/images/car.jpg" alt="Carro" width="200px">`
        resultado.innerHTML += `<p class="mt-2 text-success"><strong>PARABÉNS! Você está dentro do limite permitido!</strong></p>`
    }
}


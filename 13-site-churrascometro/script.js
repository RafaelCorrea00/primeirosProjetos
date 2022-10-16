let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular(){
    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let carne = 400
    let cerveja = 1200
    let bebidas = 1000

    if(duracao >= 6){
        carne = 650
        cerveja = 2000
        bebidas = 1500
    }

    let totCarne = Math.ceil(((carne * adultos) + ((carne/2) * criancas))/1000)
    let totCerveja = Math.ceil((cerveja * adultos)/355)
    let totBebidas = Math.ceil(((bebidas * adultos) + ((bebidas/2) * criancas))/2000)

    resultado.innerHTML = `<p>${totCarne} Kg de Carne</p>`
    resultado.innerHTML += `<p>${totCerveja} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${totBebidas} Garrafas 2L de Bebidas</p>`
}

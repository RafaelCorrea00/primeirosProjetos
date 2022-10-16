var h = 0
var m = 0
var s = 0

var iniciar

function troca(){
    let seg = document.getElementById("segundos")
    seg.innerHTML = " " + s
    s++
    if (s == 60){
        s = 0
        m++
    }

    let min = document.getElementById("minutos")
    min.innerHTML = m
    if(m == 60){
        m = 0
        h++
    }

    let hor = document.getElementById("horas")
    hor.innerHTML = " " + h
    if(h == 24){
        h = 0
    }
}

function start(){
    iniciar = setInterval(troca, 1000)
}

function stop(){
    clearInterval(iniciar)
}

function reset(){
    clearInterval(iniciar)
    let seg = document.getElementById("segundos")
    seg.innerHTML = "00 segundos"
    s = 0
    let min = document.getElementById("minutos")
    min.innerHTML = "00 minutos"
    m = 0
    let hor = document.getElementById("horas")
    hor.innerHTML = "00 horas"
    h = 0
}
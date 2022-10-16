var s = 100
var m = 0
var h = 0

var interval

function tempo(){
    let seg = document.getElementById("segundos")
    seg.innerHTML = s
    s++

    let min = document.getElementById("minutos")
    min.innerHTML = m

    let hor = document.getElementById("horas")
    hor.innerHTML = h

    if(s == 5999){
        s = 100
        m++
    }

    if(m == 59){
        m = 0
        h++
    }
    if(h == 24){
        s = 100
        m = 0
        h = 0
    }
}



function timer(){
    interval = setInterval(tempo, 10)
}

function parar(){
    clearInterval(interval)
}

function zerar(){
    clearInterval(interval)
    let seg = document.getElementById("segundos")
    seg.innerHTML = "0"
    s = 100
    let min = document.getElementById("minutos")
    min.innerHTML = "0"
    m = 0
    let hor = document.getElementById("horas")
    hor.innerHTML = "0"
    h = 0
}

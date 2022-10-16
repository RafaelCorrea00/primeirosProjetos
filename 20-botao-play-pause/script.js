let btn = document.getElementById("botao")
let msc = document.getElementById("musica")

btn.innerHTML = '<img src="./assets/images/play-btn.png" alt="play">'

btn.addEventListener("click", tocar)

function tocar(){
    if(btn.innerHTML === '<img src="./assets/images/play-btn.png" alt="play">'){
        btn.innerHTML = '<img src="./assets/images/pause-btn.png" alt="play">'
        msc.play()
    } else if (btn.innerHTML === '<img src="./assets/images/pause-btn.png" alt="play">'){
        btn.innerHTML = '<img src="./assets/images/play-btn.png" alt="play">'
        msc.pause()
    }
}

function parar(){
    msc.pause()
    msc.currentTime = 0
    if (btn.innerHTML === '<img src="./assets/images/pause-btn.png" alt="play">'){
        btn.innerHTML = '<img src="./assets/images/play-btn.png" alt="play">'
    }
}

function aumentar(){
    msc.volume += 0.2
}

function diminuir(){
    msc.volume -= 0.2
}
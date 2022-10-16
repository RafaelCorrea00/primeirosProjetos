
let music = document.getElementById("audio1")

function play(){
    music.play()
}

function pause(){
    music.pause()
}

function stop(){
    music.pause()
    music.currentTime = 0
}

function carregar(){
    var titulo = document.getElementById("titulo")
    var dma = document.getElementById("dma")
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var rodape = document.getElementById("rodape")
    var data = new Date()
    var dia = `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
    var hora = data.getHours()
    var min = data.getMinutes()
    dma.innerHTML = dia
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`
    if(hora >= 0 && hora < 12){
        // BOM DIA !
        img.src = "./images/manha.png"
        document.body.style.background = "lightyellow"
    }else if(hora >= 12 && hora < 18){
        // BOA TARDE!
        img.src = "./images/tarde.png"
        document.body.style.background = "lightsalmon"
    } else {
        //BOA NOITE!
        titulo.style.color = "rgb(255, 255, 255)"
        img.src = "./images/noite.png"
        document.body.style.background = "rgb(40, 42, 53)"
        rodape.style.color = "rgb(255, 255, 255)"
        rodape.addEventListener("mouseover", ()=>{
            rodape.style.color = "rgb(70, 142, 236)"
        })
        rodape.addEventListener("mouseout", ()=>{
            rodape.style.color = "rgb(255, 255, 255)"
        })
    }
}





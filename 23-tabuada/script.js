function tabuada(){
    let txttab = document.querySelector("#txttab")
    let res = document.querySelector("#res")

    res.innerHTML = ""

    if($(txttab)[0].value == ""){
        $("#erro").removeClass("hide")
    }else{
        let n = Number(txttab.value)
        let c = 1
        for(c; c <= 10; c++){
            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${n * c}`
            res.appendChild(item)
        }
    }

    let bgColor = [
        "bg-primary",
        "bg-secondary",
        "bg-success",
        "bg-danger",
        "bg-info"
    ]

    let bodyBG = document.querySelector("body")
    let randomBG = parseInt(Math.random() * 5)
    bodyBG.setAttribute("class", bgColor[randomBG])
}
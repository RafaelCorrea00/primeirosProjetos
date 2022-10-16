function sortear(){
    let np = 50
    let ns = Math.floor(Math.random() * np)
    let h2 = document.getElementById("rifa")
    h2.innerHTML = nomes[ns]
    console.log ("Nome sorteado: " + nomes[ns] + " | " + " Número: " + ns)

    let td = document.getElementsByTagName("td")
    console.log(td[ns].id)
    console.log(nomes[ns])
    
    if(nomes[ns] == td[ns].id){
        td[ns].style.backgroundColor = "gold"
        td[ns].style.fontWeight = "Bold"
    }
}

function limpar(){
    let h2 = document.getElementById("rifa")
    h2.innerHTML = "<br>"
    console.clear()
    
    let t = document.getElementsByTagName("td")
    for(let i in t){
        t[i].style.backgroundColor = "#00FA9A"
        t[i].style.fontWeight = "400"
    }
}

var nomes = [
    "Rosemeire", "Denise", "Elisabeth", "Claudete", "Regina",
    "Celeste", "Aurora", "Rosângela", "Lourdes", "Isaura",
    "Mônica", "Leonor", "Janete", "Raquel", "Virginia",
    "Camila", "Roseli", "Valéria", "Adelaíde", "Salete",
    "Zulmira", "Sheila", "Cleuza", "Antonia", "Joelma",
    "Iolanda", "Miriam", "Olinda", "Norma", "Luciana",
    "Alessandra", "Clarice", "Sônia", "Dirce", "Marlene",
    "Jaqueline", "Noêmia", "Margarida", "Patrícia", "Estela",
    "Dinorá", "Márcia", "Rosana", "Silvana", "Neuza",
    "Margarete", "Eugênia", "Renata", "Nazaré", "Mirtez"
]

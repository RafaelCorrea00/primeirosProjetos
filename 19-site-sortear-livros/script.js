function sortearLivros(){
    let livros = [
        "Ellk", "Crisântemo Kell", "Sonara", "Epifania", "Ponto Cruz",
        "Aliança de Fogo", "Nuvens de Metal e Estrelas", "Noites de Cobras e Sonhos", "Nações de Pedras e Deuses", "Delta",
        "Sensorial", "Rosa Negra", "Fios de Luar", "Paraíso Profano", "Pecado Sagrado",
        "A Rebelião do Oceano", "Paixão Pagã", "Código Nisis", "Feitiço da Noite", "Perdição Sublime",
        "Promessa Perversa", "Jardim de Estrelas"
    ]

    let sort = parseInt(Math.random() * 22) // aumentar esse n° caso mais livros sejam lançados
    let title = document.getElementById("title")
    title.innerHTML = livros[sort]

    let image = document.getElementById("cover")
    image.src = "./assets/images/books/img" + sort + ".jpg"
}
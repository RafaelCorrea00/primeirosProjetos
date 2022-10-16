function repeticao(){
    let repet = [
        "3 x 8", "3 x 10", "3 x 12", "3 x 15", "3 x 20",
        "4 x 8", "4 x 10", "4 x 12", "4 x 15", "4 x 20",
        "5 x 8", "5 x 10", "5 x 12", "5 x 15", "5 x 20",
    ];

    let seriePeito = parseInt(Math.random() * 15);
    let serieCostas = parseInt(Math.random() * 15);
    let seriePernas = parseInt(Math.random() * 15);
    let serieAbdomen = parseInt(Math.random() * 15);

    let rptPeito = document.getElementById("rptPeito");
    rptPeito.innerHTML = repet[seriePeito];

    let rptCostas = document.getElementById("rptCostas");
    rptCostas.innerHTML = repet[serieCostas];

    let rptPernas = document.getElementById("rptPernas");
    rptPernas.innerHTML = repet[seriePernas];

    let rptAbdomen = document.getElementById("rptAbdomen");
    rptAbdomen.innerHTML = repet[serieAbdomen];
}

function treinoPeito(){
    let flexao = [
        "Joelhos Apoiados", "Tradicional", "Uma Perna", "Trocando Pernas", "Militar",
        "Punho Fechado", "Diamante", "Arqueiro", "Máquina de Escrever", "Aberta",
        "Jack Lalanne", "Um Braço", "Um Braço com Palma", "Um Braço e Uma Perna", "Extensão de Triceps Vertical",
        "Extensão de Triceps Horizontal", "Russa", "Mão Tocando no Joelho", "Joelho Tocando no Cotovelo", "Em T",
        "Punho Invertido", "Indo Para Prancha Isométrica", "Joystick", "Dorso do Punho", "Tradicional + Dorso do Punho",
        "Jackie Chan Drunken Master", "Tocando no Ombro", "Cotovelo Reverso", "Ponte", "Hindu",
        "Em V", "Em V Declinada", "Parada de Mão", "Espartano", "Jacaré",
        "Lagartinho do Deserto", "Curtinha", "Grilo", "Com Palma", "Palma Atrás",
        "Duas Palmas", "Três Palmas", "Superman", "Pulando Corda", "Caindo e Levantando",
        "Palma por Baixo da Perna", "Toque Duplo no Joelho", "Aztec", "Tornado 360", "Ponta dos Dedos",
        "Três Dedos Cada Mão", "Dois Dedos", "Remada no Solo com Halteres", "Posterior de Ombro", "Pliometria com Bola",
        "Com Elástico", "Deslizando para um Lado", "Deslizando para os Dois Lados", "Instável na Bola", "Apoiando Pernas na Bola",
        "Uma Perna na Bola", "Negativa", "Negativa com Palma", "Rotação de Tronco", "Declinada",
        "Marcando um Ponto Alto", "Negativa com 4 Cadeiras", "Explosão + Negativa", "Giro de Tronco com Bastão", "Extensão de Triceps no Bastão",
    ];

    let rdmPeito = parseInt(Math.random() * 70);

    let peito = document.getElementById("peito");
    peito.innerHTML = flexao[rdmPeito];

    let imgPeito = document.getElementById("imgPeito");
    imgPeito.src = "./images/peito/peito" + JSON.stringify(rdmPeito) + ".gif";
    console.log(imgPeito);
    console.log(JSON.stringify(rdmPeito));
}

function treinoCostas(){
    let puxada = [
        "Supinada", "Pronada", "A Nuca", "2 Dedos", "Em L",
        "Em L 90°", "Pronada/Supinada", "Pronada [Abre|Fecha]", "Com Palma", "Dando Tchau",
        "Banger Supinada", "Neutra", "Banger Pronada", "Pulsos", "Mista",
        "Unilateral", "Escalador", "Máquina de Escrever", "Lado a Lado", "Gironda Sternum Chins",
        "Adução de Escapula", "Com Toalha", "Com Kimono [Lapela]", "Com Kimono [Manga]", "Muscle Up",
    ];
    
    let rdmCostas = parseInt(Math.random() * 25);
    
    let costas = document.getElementById("costas");
    costas.innerHTML = puxada[rdmCostas]

    let imgCostas = document.getElementById("imgCostas");
    imgCostas.src = "./images/costas/costas" + JSON.stringify(rdmCostas) + ".gif";
}

function treinoPernas(){
    let agachamento = [
        "Simples", "Com Salto", "Sumô", "Aberto e Fechado", "Isométrico",
        "Afundo Lateral", "Afundo", "Afundo com Salto[Alternado]", "Unilateral com Apoio", "Unilateral",
        "Isométrico Unilateral"
    ];
    
    let rdmPernas = parseInt(Math.random() * 11);
    
    let pernas = document.getElementById("pernas");
    pernas.innerHTML = agachamento[rdmPernas];

    let imgPernas = document.getElementById("imgPernas");
    imgPernas.src = "./images/pernas/pernas" + JSON.stringify(rdmPernas) + ".gif";
}

function treinoAbdomen(){
    let abdominal = [
        "Básica", "Um Braço", "Cotovelos", "Um Cotovelo", "Uma Perna",
        "Prancha Dois Apoios", "Lateral", "Crunch", "Alpinista", "Joelho|Cotovelo",
        "Serpente", "Jacks", "Levantando Pernas", "Tocando Ombro", "Desce e Sobe",
        "Lagartinho do Deserto", "Abdução Lateral", "Inversa", "Cão Descendente", "Em X",
        "Jack Lalanne", "Subindo Quadril", "Giro de Quadril", "Abdução Alternada", "Travando em Baixo Aberto",
        "Travando em Baixo Fechado", "Cotovelos com Peso", "Lateral com Peso", "Cotovelos no Bosu", "Pés no Bosu",
        "Um Pé no Bosu", "Lateral no Bosu", "Braços na Bola", "Cotovelos na Bola", "Pés na Bola",
        "Elevação dos Joelhos", "Elevação dos Joelhos Lateral", "Elevação das Pernas", "Elevaçãos com Amplitude Máxima", "Cadeirinha",
        "Cadeirinha Movimentando Pernas", "Cadeirinha Abertura Unilateral", "Volta ao Mundo", "Para-Brisa", "Saco de Pancada",
        "Com Pernas Elevadas", "Lateral Tocando os Pés", "Abd Elevação de Pernas", "Pedalada", "Cruzado",
        "Oblíquo"
    ];
    
    let rdmAbdominal = parseInt(Math.random() * 51);
    
    let abdomen = document.getElementById("abdomen");
    abdomen.innerHTML = abdominal[rdmAbdominal];

    let imgAbdomen = document.getElementById("imgAbdomen");
    imgAbdomen.src = "./images/abdomen/abdomen" + JSON.stringify(rdmAbdominal) + ".gif";
}

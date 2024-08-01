let dificuldade
let quantidadePuffs
var valorfinal

dificuldade = JSON.parse(localStorage.getItem('preferenciadificuldade'))
quantidadePuffs = JSON.parse(localStorage.getItem('quantidadepods'))

let porcentagem
let vetorVariaveisRotina = []

quantidadePuffs = Number(quantidadePuffs)
dificuldade = Number(dificuldade)

switch (quantidadePuffs) {
    case 1:
        quantidadePuffs = 5000
        break
    case 2:
        quantidadePuffs = 10000
        break
    case 3:
        quantidadePuffs = 15000
        break
    case 4:
        quantidadePuffs = 20000
        break
    case 5:
        quantidadePuffs = 25000
        break
    case 6:
        quantidadePuffs = 30000
        break
    case 7:
        quantidadePuffs = 35000
        break
    default:
        break
}

switch (dificuldade) {
    case 1:
        porcentagem = 0.02
        break
    case 2:
        porcentagem = 0.05
        break
    case 3:
        porcentagem = 0.10
        break
}


let puffsDia = quantidadePuffs

for (let i = 0; i < 14; i++) {
    vetorVariaveisRotina.push(Math.round(puffsDia))
    puffsDia -= puffsDia * porcentagem
    puffsDia = Math.round(puffsDia)
}


if(vetorVariaveisRotina != null){

    // Atualiza os elementos HTML com os valores calculados
    for (let i = 0; i < 14; i++) {
        let elementoDia = 'lblDia' + (i + 1)
        document.getElementById(elementoDia).innerHTML = vetorVariaveisRotina[i]
    }
}
else{
    vetorVariaveisRotina = ['0','0','0','0','0','0','0','0','0','0','0','0','0','0']
}

function botaoloja(){
    window.location.href = "../loja/loja.html"
}

function limparLocalStorage() {
    localStorage.clear()
}

// Adiciona um listener para o evento keydown
    document.addEventListener('keydown', function(event) {
    // Verifica se a tecla pressionada foi a tecla "L" (código da tecla 76)
    if (event.key === 'q' || event.key === 'Q') {
        limparLocalStorage()
    }
})

//Selects
let elementoSelect1 = document.getElementById('qtd1')
let elementoSelect2 = document.getElementById('qtd2')
let elementoSelect3 = document.getElementById('qtd3')
// Labels Valores Total/SubTotal
let elementoLblSubTotal = document.getElementById('subtotal')
let elementoLblTotal = document.getElementById('total')
 //valores Items
let itemUm = 40
let itemDois = 30
let itemTres = 65
let frete = 10
let taxa = 2
let subTotalSelct1 = 0
let subTotalSelct2 = 0
let subTotalSelct3 = 0
let subTotal = 0
let total = 0





function botaoRotina(){

    window.location.href =  "../rotina/rotina.html"
}

function Pagamento(){

   alert('Error, Serviço Indisponivel No Momento!!')

}
function AttPagamento(){
    CaucularTotal()
    
    elementoLblSubTotal.innerHTML = subTotal.toFixed(2)
}

function CaucularTotal(){
    
    subTotalSelct1 = Number(elementoSelect1.value * itemUm)
    subTotalSelct2 = Number(elementoSelect2.value * itemDois)
    subTotalSelct3 = Number(elementoSelect3.value * itemTres)
    subTotal = Number(subTotalSelct1 + subTotalSelct2 + subTotalSelct3)
   

    total = subTotal + taxa + frete

    elementoLblTotal.innerHTML = total.toFixed(2)

}
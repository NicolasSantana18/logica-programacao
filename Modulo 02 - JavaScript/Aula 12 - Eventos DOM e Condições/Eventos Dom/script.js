let caixa = document.getElementById("mouse")

function entradaMouse() {
  caixa.style.backgroundColor = "red"  
}

function saidaMouse() {
    caixa.style.backgroundColor = "blue"
}

function mudaHtml(){
    let nome = document.querySelector("#nome").value
    caixa.innerHTML = nome
}
const alunos = []

function cadastro(nome, n1){

    let nome = (document.getElementById("nome").value)
    let n1 = parseInt(document.getElementById("nota").value)

    if (n1 >= 7) {
        alunos.push(`nome: ${nome} - nota: ${n1} - APROVADO`)
    }
    else {
        alunos.push(`nome: ${nome} - nota: ${n1} - REPROVADO`)
    }

    document.getElementById("lista").innerHTML = alunos.join("<br>")
}
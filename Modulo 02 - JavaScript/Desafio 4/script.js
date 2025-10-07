const alunos = []

function cadastro(){

    let nome = (document.getElementById("nome").value)
    let n1 = parseInt(document.getElementById("nota").value)

    let aluno = {
        nome: nome,
        nota: n1
    };

    alunos.push(aluno)

    document.getElementById("lista").innerHTML = alunos
}
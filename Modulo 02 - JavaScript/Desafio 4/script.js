const alunos = [];

function cadastro(){

    let nome = (document.getElementById("nome").value);
    let nota = parseInt(document.getElementById("nota").value);

    let aluno = {
        nome: nome,
        nota: nota
    };

    alunos.push(aluno);

    document.getElementById("lista").innerHTML = alunos
}
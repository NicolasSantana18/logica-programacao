const alunos = [];

function cadastro(){

    let nome = document.getElementById("nome").value;
    let nota = parseInt(document.getElementById("nota").value);

    let aluno = {
        nome: nome,
        nota: nota
    }

    alunos.push(aluno);

    
    exibirValores(alunos)
}

function exibirValores(alunos){
    const listaAlunos = document.getElementById("listaAlunos")
    listaAlunos.innerHTML = ""
    alunos.forEach(aluno => {
        listaAlunos.innerHTML += aluno.nome + "-" + aluno.nota + "<br>"
        
    });

}
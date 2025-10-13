const alunos = [];

function cadastro(){

    let nome = document.getElementById("nome").value;
    let nota = parseInt(document.getElementById("nota").value);

    let aluno = {
        nome: nome,
        nota: nota
    }

    alunos.push(aluno);

    if (nome && !isNaN(nota)) {
        nome.value = ""
        nota.value = ""
    } else {
        alert("Preencha todos os campos")
    }

    
    exibirValores(alunos)

}

function exibirValores(alunos){
    const listaAlunos = document.getElementById("listaAlunos")
    listaAlunos.innerHTML = ""
    alunos.forEach(aluno => {
        listaAlunos.innerHTML += "<br>" + "<strong>Nome:</strong> " + aluno.nome + " - " + "<strong>Nota:</strong> " + aluno.nota + "<br>"

        if (aluno.nota >= 7){
            listaAlunos.style.backgroundColor = "green"
    }
        else if (aluno.nota < 7 ) {
            listaAlunos.style.backgroundColor = "red"
        }
        });

}

function esconder(){
    let nome = document.getElementById("nome").value = "";
    let nota = parseInt(document.getElementById("nota").value = "");

    nome.value = ""
    nota.value = ""
}
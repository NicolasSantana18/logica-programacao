//window.document.body.style.backgroundColor = "black"

//window.alert("Seja Bem Vindo")

//Mensagem de Longin ao entrar no site
//window.prompt("Login")
//window.prompt("Senha")

//Mensagem após realizar o site
//window.confirm("Site com Vírus, deseja continuar?")

let paragrafo1 = document.getElementsByTagName("p")[0]
paragrafo1.innerHTML = "USANDO O TAG NAME"
paragrafo1.style.backgroundColor = "red"

let paragrafo2 = document.getElementById("paragrafo2")
paragrafo2.innerHTML = "USANDO O ID"
paragrafo2.style.backgroundColor = "green"


let paragrafo3 = document.getElementsByClassName("paragrafo3")[0]
paragrafo3.innerHTML = "USANDO  A CLASSE"
paragrafo3.style.backgroundColor = "blue"


let paragrafo4 = document.querySelector("#paragrafo4")
paragrafo4.innerHTML = "USANDO O QUERY SELETOR"
paragrafo4.style.backgroundColor = "pink"

let paragrafo5 = document.querySelectorAll("p")[4]
paragrafo5.innerHTML = "USANDO O QUERY SELETOR ALL"
paragrafo5.style.backgroundColor = "purple"
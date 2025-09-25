function calcular() {
    let n1 = parseFloat(document.getElementById("num1").value)
    let n2 = parseFloat(document.getElementById("num2").value)
    let resul = document.getElementById("resultado")
    let op = document.getElementById("operacao").value

    if (op == "+") {
        soma = n1 + n2
        resul.innerHTML = "O resultado será: " + soma
    }
    else if (op == "-") {
        sub = n1 - n2
        resul.innerHTML = "O resultado será: " + sub
    }
    else if (op == "*") {
        multi = n1 * n2
        resul.innerHTML = "O resultado será: " + multi
    }
    else if (op == "/") {
        div = n1 / n2
        resul.innerHTML = "O resultado será: " + div
    }
}
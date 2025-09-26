let listaProdutos = [
    {nome: "Computador", frabricante: "Dell", valor: 5000},
    {nome: "Notebook", frabricante: "Acer", valor: 3000},
    {nome: "Monitor", frabricante: "LG", valor: 900},
    {nome: "Teclado", frabricante: "RedDragon", valor: 200},
    {nome: "Mouse", frabricante: "Logitech", valor: 600},
]

listaProdutos.forEach((produto) => {
    console.log(`O ${produto.nome} da ${produto.frabricante} é R$ ${produto.valor}`);
})


//filtrando
let listaProdutosCaros = listaProdutos.filter(produto => produto.valor > 1000)
console.log(listaProdutosCaros);

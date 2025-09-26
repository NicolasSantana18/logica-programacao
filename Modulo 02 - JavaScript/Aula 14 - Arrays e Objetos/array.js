//Array
let listaTimes = ["Santos", "São Paulo", "Palmeiras", "Corinthians"]

//acessar um item da lista
console.log(listaTimes[0])
console.log(listaTimes[1])
console.log(listaTimes[2])
console.log(listaTimes[3])

//Adicionar itens em um array
listaTimes.push("Ponte Preta")
listaTimes.push("Flamengo")
console.log(listaTimes)

//Verificar o tamanho da lista
console.log(listaTimes.length)

//adicionar um item na primeira posição
listaTimes.unshift("Fluminense")
listaTimes.unshift("Vasco")
console.log(listaTimes)

//Remover um item no inicio do array
listaTimes.shift()
console.log(listaTimes)

//Remover o ultimo elemento do Array
listaTimes.pop()
console.log(listaTimes)

//Encontrar a posição de um elemento
console.log(listaTimes.indexOf("Santos"))



let listaNomes = ["Marcos", "Diego", "Camila", "Mateus"]

//Removendo Itens
listaNomes.splice(0,1) //Mateus foi removido
console.log(listaNomes)

//Alterando Itens
listaNomes.splice(1,1, "Robson") //Substitui a Camila pelo Robson
console.log(listaNomes)

//Adicionar itens
listaNomes.splice(2,0, "Gabriel, Diogo")
console.log(listaNomes)
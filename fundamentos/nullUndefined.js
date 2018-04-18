let valor // Undefined = Nunca foi inicializada
console.log(valor)

valor = null // Null = Existe porém apresenta ausência de valor
console.log(valor)
//console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined // Evitar atribuir undefined
console.log(!!produto.preco)
console.log(produto)
//delete produto.preco
console.log(produto)

produto.preco =  null // Sem preço
console.log(!!produto.preco)
console.log(produto)
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
valores[7] = 3
console.log(valores)
console.log(valores.length)  //Retorna os valores do array

valores.push({id: 3}, false, null, 'teste') //Adiciona elementos ao array
console.log(valores)

console.log(valores.pop()) //retira o ultimo elemento do array

delete valores[0] //Retira do array o elemento que estiver no index solicitado
console.log(valores)

console.log(typeof valores)
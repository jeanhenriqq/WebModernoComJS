let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('Os verdadeiros')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!!{})
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar')
console.log(!!('' || null || 0 || ' '))
console.log(('' || null || 0 || 'dsadsa'))  // Nesse caso retorna o primeiro verdadeiro que encontrar, no caso é o dsadsa

let nome = ''
console.log(nome || 'Desconhecido')  // Caso a primeira não seja encontrada, use o outro valor como valor padrão
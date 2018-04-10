const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = ` 
    Olá
    ${nome}!`
console.log(concatenacao, template) // Template string, dentro dele é possível colocar quebra de linha, se usa variaveis com o '${}'

// Expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = s => s.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)

const lower = texto => texto.toLowerCase()
console.log(`Caramba, que trem ${lower('DOIDO')}`)
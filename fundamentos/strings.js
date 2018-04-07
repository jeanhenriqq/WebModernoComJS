const escola = "Cod3r"

console.log(escola.charAt(4))  //charAt vai dar a letra que está no indice 4 da string
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //Pega o valor do caracter na tabela ASCII ou UNICODE 
console.log(escola.indexOf('3')) //Pega o index do caracter que tiver dentro do parenteses

console.log(escola.substring(1)) //Começa a string a partir do index selecionado
console.log(escola.substring(0, 3)) //Começa a string no indice selecionado e imprime a quantidade de caracteres pedida após a virgula

console.log('Escola '.concat(escola).concat('!')) //Um modo de concatenar strings
console.log('Escola '+escola+ '!') 

console.log(escola.replace('d', 'e')) //Substituir o primeiro caracter ou número pelo apresentado depois da vírgula 

console.log('Ana,Maria,Pedro'.split('a')) //Quebra a string em um array, separando pelo caracter passado dentro do spli (Pode usar regex tb)
console.log('Ana,Maria,Pedro'.split(',')) //Quebra a string em um array, separando pelo caracter passado dentro do spli (Pode usar regex tb)
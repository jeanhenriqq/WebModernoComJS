const prod1 = {} //Criação de objeto sem definir nenhuma propriedade
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atibutos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    /*obj: {    //É possível ter objetos dentro de outros objetos, sendo eles únicos(nome) dentro do mesmo
            blabla: 1,
        obj: {
            blabla: 2
        }
    }*/
}

console.log(prod2)
//armazenando uma funcao dentro de uma variavel
const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(5, 4))


//retorno implícito

const subtracao = (a, b) => a - b
console.log(subtracao(10, 3))
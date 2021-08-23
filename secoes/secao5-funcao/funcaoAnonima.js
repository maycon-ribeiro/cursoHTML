// primeiro exemplo de função anônima
const soma = function(x, y){
    return x + y
}
// segundo exemplo de função anônima
const imprimiResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimiResultado(3, 4)
imprimiResultado(3, 4, soma)
imprimiResultado(3, 4, function (x, y) {
    return x - y
})
// exemplo função anônima com Arrow
imprimiResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Hello Word')
    }
}

pessoa.falar()
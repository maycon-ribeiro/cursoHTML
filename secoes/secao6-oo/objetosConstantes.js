// pessoa -> 123 {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome: 'Anna'} //Isso daria um erro

Object.freeze(pessoa)//o metodo freeze congela o objeto e seus dados não podem ser mudados

pessoa.nome = 'Maria'
pessoa.endereco = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao'})
console.log(pessoaConstante)
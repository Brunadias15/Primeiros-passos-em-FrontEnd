// Objetos

//Como criar
let pessoa = {
    nome: 'Bruna',
    idade: 26,
}

console.log(pessoa)
console.log(pessoa.nome) //acessando o elemento, através da sua chave
console.log(pessoa['nome']) //forma alternativa, gera o mesmo resultado

//Como adicionar um par de chav-valor
pessoa.altura = 1.77 //como não existe essa chave ele aadicona, se fosse uma chave que já existisse por exemplo "nome", se passar pessoa.nome e um novo valor, ele será substituido.

console.log(pessoa)
//Como remover
delete pessoa.idade
console.log(pessoa)

//Como percorrer
for(let chave in pessoa){
    console.log(chave)
}
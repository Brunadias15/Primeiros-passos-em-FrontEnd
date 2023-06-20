// Funcões

//Definição da função
function saudacao() {
    console.log('Olá mundo')
}

//Chamando a função
saudacao()

// Como enviar parametros para funções

function saudacao1(nome, sobrenome='Dias') {
    console.log(`Olá, ${nome} ${sobrenome}` )
}

saudacao1('bruna')

//Retorno da função
function soma(n1, n2) {
    return n1 + n2 
}

const resultado = soma(10, 20)

console.log(resultado / 2)

function maiorDoque50(numero) {
    if (numero > 50) {
        return true
    }
    return false
}
const n = maiorDoque50(60)
console.log(n)
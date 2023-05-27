// Laços condicionais
// para instalar biblioteca  npm install readline-sync

const input = require('readline-sync') // require está requerindo a biblioteca que está dentro dos parenteses ()

const numero_sorteado = 5;

let numero = Number(input.question('Qual numero voce escolhe? ')) //question le o que o usuário digitar e "Number" na frente converte para um numero.

// Repetição While - Enquanto
while (numero !== numero_sorteado) {
    console.log('Você errou. Tente novamente...')
    numero = Number(input.question('Qual numero voce escolhe? '))
}

console.log('Você acertou')

console.clear()

// Acumulador
let acumulador

acumulador = acumulador + 10
// as duas expressãoes fazem a mesma coisa, mas a debaixo é sintese usada normalmente.
acumulador += 2
acumulador++ //o ++ encrementa um a mais

//Estrutura For
//primeiro inicializo a variavel; condição de parada; A cada interação eu quero somar quanto/ Qual o passo da minha variavel
for(let i = 0; i < 10; i++){ 
    console.log('Repetição', i) //colocar i mostrará a posição na frente
} 

//O de cima crescente e o debaixo decrescente
for(let i = 12; i > 9; i--){
    console.log('Repetição', i) //colocar i mostrará a posição na frente
} 
console.clear()
// Laço numerico: FOR - Repetição controlada
let nota;
let soma=0;

for (let i = 1; i <= 3; i++) {
    nota = Number(input.question(`Informe a nota ${i} do aluno: `)) //para colocar a variavel no meio da frase use a crase `` antes e dps da frase e onde for inserir a váriavel use ${}
    
    soma = soma + nota //somando as notas

}
console.log(`A média do aluno é ${soma / 3}`)
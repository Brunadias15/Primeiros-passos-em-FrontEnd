// Operadores booleanos (true ou false)
const numero = 10

//Igualdade == (ou ===)
console.log(numero == 10)

// quando coloca == ele só compara o conteúdo, nesse caso vai ser verdadeiro
console.log(10 == "10")

//=== compara conteudo e tipo, então nesse caso vai ser falso, pois 10 é tipo number e "10" é tipo string
console.log(10 === "10")

//Desigualdade != (ou !==) Para a desigualdade é a mesma coisa descrita acima, use !== para comparar conteudo e tipo de variavel.
console.log(numero != 10)

// maior que >
console.log(numero > 20)

// maior ou igual  >=
console.log(numero >= 20)

// menor que <
console.log(numero < 20)

// menor que <=
console.log(numero <= 20)

//limpar tudo que foi escrito
console.clear()


// - conjunções lógicas

// AND => && Junção de condiçoes, só terá truee se satisfazer as duas condições, como no exemplo abaixo.
let idade = 26
let tenhoCNH = true

const possoDirigir = idade >= 18 && tenhoCNH === true

console.log("Posso dirigir:", possoDirigir)


// OR => || Quando temos duas consições, no caso menor de 18 OU/OR maior que 70 anos não precisa votar

idade = 40

const votoFacultativo = idade < 18 || idade >= 70

//NOT => ! Inverte o resultado do booleano, no caso abaixo a constantate é falsa, mas imprimiu com o ! na frente então invente e será verdadeira.
const estouGostandoDoCurso = false

console.log(!estouGostandoDoCurso)
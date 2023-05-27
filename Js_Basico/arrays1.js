// Estrutura de dados
//Arrays

// como criar
let arr = ['Bruna', 26, 1.77, true]
console.log(arr)

// como acessae os elementos - o indice começa pelo 0
console.log('Primeiro elemente:', arr[0])
console.log('2 elemente:', arr[1])
console.log('3 elemente:', arr[2])
console.log('4 elemente:', arr[3])

// como obter o tamanho
console.log('Tamanho do array:', arr.length)

//Percorrendo arrays
for (let i = 0; i < arr.length; i++ ){
    console.log(arr[i])
}

//cada intereação pega um elemnto desse array
for (let elemento of arr) {
    console.log(elemento)   
}

//percorrendo os indices do arrays
for (let indice in arr) {
    console.log(indice, arr[indice])
}


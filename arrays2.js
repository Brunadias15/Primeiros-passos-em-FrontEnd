// Arrays - Metodos de arrays

const arr1 = [30, 12, 45, 34, 29]
let arr2 = []

// Fatiamento: slice
console.log(arr1.slice(0, 2))
console.log(arr1.slice(2)) //como não definiu o final, ele pega qual iniciou e até o final do array

//Adicionando elementos: push | unshift
console.log("antes de adicionar:", arr2)
arr2.push(10, 20, 50) 
arr2.push(65) //push vai adicionar o numero dps de todos que já tem
console.log('depois de adicionar', arr2)

//unshift adiciona no começo
console.log("antes de adicionar com unshift: ", arr2)
arr2.unshift(1)
console.log("Depois de adicionar com unshift: ", arr2)

//Removendo elementos: pop | shift
console.log("antes de remover com o pop: ", arr2)

const elementoRemovido = arr2.pop() //ele salva o elemento removido
console.log("Depois  de remover com o pop: ", arr2) //por padrão ele remove o ultimo numero
console.log('O elemento removido foi', elementoRemovido)

// com o shift remove o primeiro elemento 
console.log("antes de remover com o shift: ", arr2)

arr2.shift()
console.log("Depois  de remover com o shift: ", arr2) 

// Concatenando arrays - juntando os arrays: concat
console.log(arr1.concat(arr2))

// Buscando elementos: indexOf | lastIndexOf
let indiceDoElemento12 = arr1.indexOf(12)
console.log(indiceDoElemento12)

/*Por padrão acaso tenha mais de um elemento com os mesmo valor, ele irá mostrar o indice do primeiro
Para mostrar o ultimo usa-se lastIndexOf*/

// Descobrindo a existência de um elemento: includes
console.log(arr1.includes(12))

//Invertendo arrays: reverse
const arr1Invertido = arr1.reverse()
console.log('arr1 invertido: ', arr1Invertido)
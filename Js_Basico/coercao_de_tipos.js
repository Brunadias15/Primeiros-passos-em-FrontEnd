// Coerção (conversão) de tipos

// - 1 Coerção Explícita (Manual)
const numero = 10;

console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(numero) //Converte para String

console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)
console.log(Number('1234')) //Converte para numero
console.log(parseFloat('12335.88')) //Converte para float
console.log(parseInt('12335.88')) //Converte para int
console.log(Boolean(0)) //Converte para booleano, apenas o 0 será falso, outros numeros verdadeiro

// - 2 Coerção Implícita (Automatica)
console.log(10 + '1') //Contatena, transforma tudo em string e junta, nesse caso vai dar 101
console.log('10' - 1) //Nas demais operações o JavaScript entende como número então ele faz a operação correta
console.log(10 - 'hdushdus') //Da erro na operação NaN - não é numero


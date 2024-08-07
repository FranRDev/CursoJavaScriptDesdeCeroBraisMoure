/* TIPOS DE DATOS PRIMITIVOS */

// Cadena de texto (string)
let nombre = "Fran Rodríguez"
let alias = 'FranRDev'
let correo = `fran@r.dev`

// Número (number)
let edad = 28 // Entero
let altura = 1.84 // Decimal

// Booleano (boolean)
let esProfesor = false
let esEstudiante = true

// No definido (undefined)
let valorNoDefinido
console.log(valorNoDefinido)

// Nulo (null)
let valorNulo = null

// Símbolo (symbol)
let miSimbolo = Symbol("miSimbolo")

// Entero grande (big int)
let miEnteroGrande = BigInt(64346848646848489464638468463436846846)
let miEnteroGrande2 = 64346848646848489464638468463436846846n

// Muestra de los tipos de datos
console.log(typeof nombre)
console.log(typeof alias)
console.log(typeof correo)

console.log(typeof edad)
console.log(typeof altura)

console.log(typeof esProfesor)
console.log(typeof esEstudiante)

console.log(typeof valorNoDefinido)

console.log(typeof valorNulo)

console.log(typeof miSimbolo)

console.log(typeof miEnteroGrande)
console.log(typeof miEnteroGrande2)
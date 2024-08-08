/* OPERADORES */

// Operadores aritméticos
let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División

console.log(a % b) // Módulo (resto división)
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a)

b-- // Decremento
console.log(b)

// Operadores de asignación
let variable = 2
console.log(variable)
variable += 2 // Suma con asignación
console.log(variable)

variable -= 2 // Resta con asignación
variable *= 2 // Multiplicación con asignación
variable /= 2 // División con asignación
variable %= 2 // Módulo con asignación
variable **= 2 // Exponente con asignación

// Operadores de comparación
console.log(a > b) // Mayor que
console.log(a < b) // Menor que
console.log(a >= b) // Mayor o igual que
console.log(a <= b) //Menor o igual que
console.log(a == b) // Igualdad por valor
console.log(a == 6)
console.log(a == "6")
console.log(a == a)
console.log(a === a) // Igualdad por identidad (tipo y valor) o igualdad estricta
console.log(a === 6)
console.log(a === "6")
console.log(a != 6) // Desigualdad por valor
console.log(a !== "6") // Desigualdad por identidad (tipo y valor) o desigualdad estricta
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)

/*
Valores verdaderos:
- Todos los números positivos y negativos menos el cero
- Todas las cadenas de texto menos las vacías
- El booleano true
*/

/*
Valores falsos:
- 0
- 0n (BigInt)
- null
- undefined
- NaN
- El booleano false
- Cadenas de texto vacías
*/

// Operadores lógicos

// And (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

// Or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)

console.log(5 > 10 && 15 > 20 || 30 < 40)

// Not (!)
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores ternarios

const estaLloviendo = false
estaLloviendo ? console.log("Está lloviendo") : console.log("No está lloviendo")
/* EJERCICIOS DE OPERADORES */

// 1. Crea una variable para cada operación aritmética

let suma = 2 + 4
console.log("Suma: " + suma)
let resta = 5 - 3
console.log("Resta: " + resta)
let multiplicacion = 4 * 4
console.log("Multiplicación: " + multiplicacion)
let division = 8 / 2
console.log("División: " + division)
let modulo = 10 % 2
console.log("Módulo: " + modulo)
let exponente = 9 ** 3
console.log("Exponente: " + exponente)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

suma += 2
console.log("Asignación suma: " + suma)
resta -= 1
console.log("Asignación resta: " + resta)
multiplicacion *= 2
console.log("Asignación multiplicación: " + multiplicacion)
division /= 2
console.log("Asignación división: " + division)
modulo %= 3
console.log("Asignación módulo: " + modulo)
exponente **= 4
console.log("Asignación exponente: " + exponente)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log("Comparaciones verdaderas")
console.log(suma >= resta)
console.log(division < multiplicacion)
console.log(modulo == 0)
console.log(modulo !== "0")
console.log(exponente != suma)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log("Comparaciones falsas")
console.log(suma == resta)
console.log(multiplicacion < division)
console.log(modulo === 1)
console.log(suma == undefined)
console.log(resta > exponente)

// 5. Utiliza el operador lógico and

console.log("Operador lógico AND (&&)")
console.log(suma != resta && multiplicacion != division)
console.log(resta > 5 && 5 < resta)

// 6. Utiliza el operador lógico or

console.log("Operador lógico OR (||)")
console.log(exponente != null || modulo != null)
console.log(suma < resta || multiplicacion < division)

// 7. Combina ambos operadores lógicos

console.log("Combinación AND y OR")
console.log(suma != null && suma > resta || resta > multiplicacion)
console.log(exponente < modulo || multiplicacion < division)

// 8. Añade alguna negación

console.log("Negaciones NOT (!)")
console.log(!suma < resta)
console.log(!modulo == undefined)

// 9. Utiliza el operador ternario

console.log("Operador ternario (? :)")
console.log(suma > resta ? "La suma es mayor que la resta" : "La resta es mayor que la suma")
console.log(exponente < modulo ? "El exponente es menor que el módulo" : "El módulo es menor que el exponente")

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log("Combinación operadores aritméticos, comparativos y lógicos")
console.log(resta + 50 > suma + 10 && modulo == 0 ? "Se cumple" : "No se cumple")
console.log(exponente / multiplicacion < resta || suma == modulo ? "Se cumple" : "No se cumple")
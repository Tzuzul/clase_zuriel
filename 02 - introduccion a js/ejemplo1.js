console.log("Ejemplo 1")

// Comentario

// Variables
var numero = 123 // Integer
var numeroDecimales = 123.5677 // Float o flotante
var texto = "Esto es un texto" // String o cadena de texto
var boolean = true // Boolean
var boolean = false

// JavaScript no es un lenguaje estrictamente tipado
// const y let
// const se utiliza para declarar variables constantes
// let se utilizar para declarar variables cambiantes

const PI = 3.14159

let total = 0
total = 100

console.log(total)

let suma = 10 + 5 + 3 // Operador aritmetico de suma
let resta = 10 - 5 - 3 // Operador aritmetico de suma
let multiplicacion = 10 * 5 // Operador aritmetico de multiplicacion
let division = 10 / 5 // Operador aritmetico de division

const edad = 18
if(edad>=18){ //Operador logico mayor o igual
    // Bloque de codigo
    console.log("Mayor de edad")
}else{
    // Bloque de codigo
    console.log("No mayor de edad")
}

// declaracion del contador; condicion de finalizacion ; incremento
for(let i=0; i<5; i++){
    console.log("Bucle for")
}

// Definicion
function sumar(a, b /*Parametros*/){
    //Bloque de codigo
    // Nos permiten reutilizar codigo y ser menos redundantes
    console.log('Funcion sumar ejecutada')
    let suma = a + b
    console.log('El resultado es: ', suma)
}

// Ejecucion
sumar(1,2)
sumar(3,7)
sumar(25,6.333)
sumar('abc','cba') // 'abccba'-> concatenar
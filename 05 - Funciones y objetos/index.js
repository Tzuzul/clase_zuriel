// Definicion o declaracion
// Varias formas de definir una funcion
function nombreFuncion(par1, par2){
    console.log(par1, par2)
}

// Funciones dentro de JS son objetos
const funcion2 = function(par1, par2){
    console.log(par1, par2)
}

// Arrow Functions
let sumar = (num1, num2) => {
    console.log(num1+num2)
}


let tomarDecision = (year) => {
    let edad = 2024-year
    if(edad>=18){
        console.log('Eres mayor de edad')
        console.log('Tu edad es:', edad)

        // Finalizar la funcion
        return edad
    }

    console.log('Procedimiento')
    console.log('Procedimiento')
    console.log('Procedimiento')
    console.log('Procedimiento')
}

// let yearForCumplir80 = (edad) => {
//     return 80 - edad
// }

// Si en la funcion solamente hacemos uso del return, podemos retirar las {} y la palabra return
// let yearForCumplir80 = (edad) => 80 - edad

// Si solo recibimos un parametro en la funcion, podemos retirar los ()
let yearForCumplir80 = edad => 80 - edad

// Ejecucion
nombreFuncion(1,2)
funcion2(3,4)
sumar(6,7)

let edad = tomarDecision(1998)
let restan = yearForCumplir80(edad)

console.log(edad)
console.log(restan)


// Objetos
// Sintaxis Object literal

const tzuzul = {
    name: 'Tzuzul Rosas',
    edad: 26,
    colorFavorito: 'Negro',
    saludar: function(){
        console.log('Hola')
    }
} // Objeto

// const zuriel = {
//     name: 'Zuriel',
//     edad: 26,
//     colorFavorito: 'Negro',
//     saludar: function(){
//         console.log('Hola')
//     }
// } // Objeto

tzuzul.saludar()


// Objetos y funciones

// Esperamos que user sea un objeto
function imprimirDatos(user){
    console.log('Nombre: ', user.name)
    console.log('Edad: ', user.edad)
    console.log('Color favorito: ', user.colorFavorito)

    return {
        name: user.name.toUpperCase(),
        color: user.colorFavorito.toUpperCase()
    }
}

let userMayus = imprimirDatos(tzuzul)

console.log(userMayus)
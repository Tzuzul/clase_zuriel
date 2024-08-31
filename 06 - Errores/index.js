// JavaScript no lanza tantas excepciones
// Dividir entre cero

let division = 100 / 0

console.log(division)

// Intentamos comparar datos de diferente tipo
if('HOLA'==25){
    console.log('Verdadero')
}else{
    console.log('Falso')
}

// Operaciones entre numeros y otros tipos
console.log(100/'hola')

// Valores truthy y falsy
'HOLA' // String --> String --> 'HOLA'
25 // Numero --> String --> '25'


if('15'==15){
    console.log('Verdadero')
}else{
    console.log('Falso')
}

'' // String --> Boolean --> false
15 // Numero --> Boolean --> true


// Intentar sumar strings

let concatenacion = 'Hola' + 'Tzuzul'

console.log(concatenacion)

// Objetos y propiedades: Error

let persona  = {
    name: 'Tzuzul',
    age: 26,
    direction: {
        city: 'CDMX',
        cp: '1231',
        street: '124fces'
    }
}

console.log(persona.direction)


// Operaciones elementos nulos: undefined y null
// Reactiva
try {
    console.log(persona.direction.city)
    
} catch (error) {
    console.log(error)
}

// Cuando tenemos un error nuestra ejecucion se detiene
console.log('Hola')
console.log('Hola')
console.log('Hola')
console.log('Hola')
console.log('Hola')
console.log('Hola')

try {
    console.log(zuriel)
} catch (error) {
    console.log('La variable no esta definida')
    // Preguntar que ingrese
}


// Generar errores

function imprimirDatos(user){
    console.log(user.name)
    console.log(user.age)
    // Proactivo
    // Existe direction?
    if(user.direction){
        console.log(user.direction.city)
    }else{
        throw new Error("C01356 - Direction does not exist");
    }
}

imprimirDatos(persona)
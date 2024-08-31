let edades = [15, 23, 60, 45, 10, 89] //Array de numeros - Array de Int

let personas = ['Juan 1','Juan 2','Juan 3','Juan 4','Juan 5']

// console.log(personas[0], 'tiene ',edades[0], 'años 😄')
// console.log(personas[1], 'tiene ',edades[1], 'años 😄')
// console.log(personas[0], 'tiene ',edades[0], 'años 😄')
// console.log(personas[0], 'tiene ',edades[0], 'años 😄')
// console.log(personas[0], 'tiene ',edades[0], 'años 😄')

// Longitud del array
console.log(edades.length)

for (let index = 0; index < edades.length; index++) {
    // const persona = personas[index];
    // const edad = edades[index];
    // console.log(persona, 'tiene ',edad, 'años 😄')

    console.log(personas[index], 'tiene ',edades[index], 'años 😄')
}

for (let index = edades.length - 1; index > -1; index--) {
    console.log(edades[index])
}

let arrayLet = [1,2,3,4,5]
const arrayConst = [1,2,3,4,5]

arrayLet[3] = 35
arrayConst[3] = 35

console.log(arrayLet)
console.log(arrayConst)

// Mutabilidad o inmutabilidad
// Arrays son mutables
// Tipos de datos primitivos son inmutables
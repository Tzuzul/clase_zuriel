let array = ["Tzuzul", 57683, true, {city:"CDMX"}]

let matriz = [ [1,2,3], ["a","b","c"], [true, false, true] ]




function crearMatriz(filas, columnas){

    // Crea una matriz aleatoria de 4x5 con números entre 1 y 10.
    let matriz = []

    // Crear filas
    for(let i=0;i<filas;i++){
        let nuevaFila = []

        // Generar numeros aleatorios y agregarlos a la nueva fila
        for(let j=0;j<columnas;j++){
            let numeroAleatorio = Math.floor(Math.random()*10) + 1

            // Listas -> push: Agregar un nuevo elemento a la lista al final
            nuevaFila.push(numeroAleatorio)
        }

        matriz.push(nuevaFila)
    }

    return matriz
}

//1. Crea una matriz aleatoria de 2x5 con números entre 1 y 10.
let matriz2x5 = crearMatriz(2,5)
let matriz4x5 = crearMatriz(4,5)
console.log(matriz2x5)
console.log(matriz4x5)

//2. Dada una matriz, accede al elemento en la segunda fila y tercera columna.

let elemento = matriz2x5[1][2]
console.log(elemento)

//3. Cambia todos los elementos de la primera fila de una matriz a 1.
function cambiarFila(fila, numero, matriz){

    //crear copia de matriz
    //let copiaMatriz = matriz.slice()
    let copiaMatriz = [...matriz]
    copiaMatriz[fila] = [...copiaMatriz[fila]]

    // matriz[fila].length
    // Nos obtiene el tamano de la fila especificado
    for(let i=0; i < copiaMatriz[fila].length ; i++ ){
        copiaMatriz[fila][i] = numero
    }

    return copiaMatriz
}

let matrizModificada = cambiarFila(0, 1, matriz4x5)
console.log(matriz4x5)
console.log(matrizModificada)

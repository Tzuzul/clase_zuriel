// Modelar un objeto
// 1. Clase: Plantilla

class Persona{
    //Funcion que recibe la informacion del objeto. Propiedades especificas de un objeto
    // que crearemos en un futuro
    constructor(nombre, edad){
        // Asignar esa informacion a este objeto
        // Atributos
        this.nombre = nombre
        this.edad = edad
    }

    //Metodos
    saludar(){
        console.log('Hola, mi nombre es', this.nombre)
    }

    despedir(){
        console.log('Adios')
    }

}


// 2. Crear objetos
const tzuzul = new Persona('Tzuzul', '26') // Objeto

console.log('Atributo nombre', tzuzul.nombre)

tzuzul.saludar()

// Hacer referencia al documento HTML
const texto = document.getElementById('texto')
console.log(texto)
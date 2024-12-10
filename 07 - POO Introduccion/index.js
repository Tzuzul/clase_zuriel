// Pilares

// Herencia -> Heredar atritubutos y metodos
// Encapsulamiento -> Privacidad
// Abstraccion -> Simplificar y modelar los objetos de la vida real
// Polimorfismo -> Hacer pasar a objetos como objetos de un tipo general

class Car{
    // Cuando queremos que existen atributos por defecto
    tires = 4
    // propiedades publicas y propiedades privados
    #speed = 20

    // Constructor: Metodo (function) que permite ingresar informacion en la creracion del objeto. Inicializacion.
    constructor(color, price, km, model){
        // this: esta clase
        this.color = color
        this.price = price
        this.km = km
        this.model = model
    }

    start(){
        console.log("El auto arranco")
    }

    backward(){
        console.log("El auto va en reversa a ", this.#speed)
    }


    static sonarAlarma(){
        console.log("Biiiip")
    }


}

// Creando instancias:
let audi = new Car("red",23000,1200,"Audi")
let ford = new Car("blue",20000,500,"Ford")

// Con ese objeto podemos utilizar metodos y atributos
audi.start()
ford.start()
audi.backward()

audi.speed = 3000
audi.backward()

// Utilizando metodos estaticos
Car.sonarAlarma()
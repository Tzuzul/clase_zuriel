
//Clase base o super clase
class FiguraGeometrica {
    constructor(color, textura){
        this.color = color
        this.textura = textura
    }

    // Metodos abstractos: Las subclases deben implementar su propia version de calculcarArea
    // Interface
    calcularArea(){
        throw new Error("Metodo no implementado")
    }
}

//Subclase
class Cuadrado extends FiguraGeometrica{
    constructor(lado, color){
        // El metodo super ejecuta el constructor de la super clase
        super(color, "lisa")
        this.lado = lado
    }

    calcularPerimetro(){
        return this.lado*4
    }

    // Esta es la implementacion del metodo abstracto de calcularArea
    calcularArea(){
        return this.lado*this.lado
    }
}

// class CuadradoRugoso extends Cuadrado{

// }

class Circulo extends FiguraGeometrica {
    constructor (radio, color, textura){
        super(color, textura)

        this.radio = radio
    }

    calcularPerimetro(){
        return 2*this.radio*Math.PI
    }

    calcularArea(){
        //return Math.PI * Math.pow(this.radio, 2)
        return Math.PI * this.radio ** 2
    }
}


let cuadrado = new Cuadrado(10, "rojo")

let circulo = new Circulo(10, "azul", "rugosa")

console.log(circulo.calcularArea())


function mostrarFigura(figura){

}

mostrarFigura(cuadrado)
mostrarFigura(cuadrado)
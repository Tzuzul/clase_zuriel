// Struct
// Class

class Node{
    next = null
    constructor(data){
        this.data = data
    }
}


// Estructura de datos
class LinkedList{
    constructor(){
        this.head = null
    }

    append(data){
        const newNode = new Node(data)

        if(!this.head){
            this.head = newNode
            return
        }

        // Recorremos la lista hasta el final
        let current = this.head
        while(current.next){
            current = current.next 
        }

        current.next = newNode
    }

    // Reto: Remover el ultimo elemento de la lista y retornar el ultimo elemento
    removeLast(){
        // 1. Verificamos que no esta vacia
        if(!this.head){
            return
        }

        // 1.5 Verificamos cuando solo hay un elemento
        if(!this.head.next){
            this.head = null
            return
        }

        // 2. Definimos current
        let current = this.head
        
        // 3. Recorremos lista con while
        while(current.next.next){
            current = current.next 
        }

        let last = current.next
        current.next = null

        return last

        /*
        //Solucion standar
/       / 2. Definimos current
        let current = this.head
        let previous
        
        // 3. Recorremos lista con while
        while(current.next){
            previous = current
            current = current.next 
        }

        previous.next = null

        return last

        */

    }

    print(){
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}

const linkedList = new LinkedList()

linkedList.append(5)
linkedList.append(15)
linkedList.append(25)
let removed = linkedList.removeLast()
console.log(removed)

linkedList.print()

let array = []
array.push(5)
array.push(15)
array.push(25)

console.log(array)

// Reto: Implementar el metodo append para una lista enlazada doble.
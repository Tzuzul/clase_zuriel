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

    // Reto: Remover el ultimo elemento de la lista

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

linkedList.print()

let array = []
array.push(5)
array.push(15)
array.push(25)

console.log(array)
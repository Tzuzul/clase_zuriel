class Node{
    next = null
    previous = null
    constructor(data){
        this.data = data
    }
}


class DoubleLinkedList{

    constructor(){
        this.head = null
        this.last = null
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
        newNode.previous = current
    }

    appendOptimized(data){
        const newNode = new Node(data)

        if(!this.head){
            this.head = newNode
            this.last = newNode
            return
        }

        newNode.previous = this.last
        this.last.next = newNode
        this.last = newNode
    }

    removeLast(){
        const last = this.last
        if(this.last){
            if(this.head==this.last){
                this.head = null
                this.last = null
            }else{
                this.last = this.last.previous
                this.last.next = null
                last.previous = null
            }

        }

        return last
    }
}


const linkedList = new DoubleLinkedList()

linkedList.appendOptimized(5)
linkedList.appendOptimized(15)
linkedList.appendOptimized(25)
linkedList.appendOptimized(35)
linkedList.appendOptimized(45)

console.log(linkedList.removeLast())

console.log(linkedList)
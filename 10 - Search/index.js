const array = [
    37, 82, 15, 6, 91, 54, 28, 73, 42, 99,
    12, 67, 3, 88, 21, 59, 78, 4, 95, 33,
    70, 18, 63, 85, 26, 47, 9, 51, 76, 39,
    98, 14, 61, 8, 56, 23, 45, 93, 30, 75,
    17, 65, 1, 80, 24, 49, 97, 36, 72, 20
]



function linealSearch(data, element){
    for(let i=0;i<data.length;i++){
        if(element===data[i]){
            return i
        }
    }

    return null
}

function binarySearch(data, element){

    if(data.length==1 && data[0]!== element){
        return -1
    }

    console.log(data)

    let mitad = Math.floor(data.length/2)

    if(data[mitad]==element){
        return mitad
    }

    // El objetivo se encuentra del lado derecho
    else if(element>=data[mitad]){
        // Recursividad
        let reducedData = data.slice(mitad)
        let index = binarySearch(reducedData, element)

        return index == -1 ? -1 : mitad + index

        // if(index == -1){
        //     return -1
        // }else{
        //     return mitad + index
        // }
    // El objetivo se encuentra del lado izquierdo
    }else{
        // Recursividad
        let reducedData = data.slice(0, mitad)
        return binarySearch(reducedData, element)
    }

}

function binarySearchLoop(data, element){
    let start = 0 // 5
    let end = data.length-1// 4

    while(start<=end){
        let half = Math.floor((start+end)/2) //4

        console.log(data.slice(start, end+1))

        if(data[half] == element){
            return half
        }else if(data[half]<element){
            start = half + 1
        }else{
            end = half -1
        }
    }

    return -1
}

const index = linealSearch(array, 23)
console.log(array[index])


//const sorted = data.sort(function(a,b){return a-b}) // Descendente
const sorted = array.sort(function(a,b){
    // ejemplo:
    // a es 5
    // b es 3
    // a-b= 2
    // El resultado es positivo, lo que significa que b va antes que a
   return a-b
}) // Ascendente
const indexB = binarySearch(sorted, 5)
console.log(sorted[indexB])

const indexBL = binarySearchLoop(sorted, 5)
console.log(sorted[indexBL])


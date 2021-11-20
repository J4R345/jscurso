
let num = [5,8,2,9,3]
console.log('...............')

num[3] = 6 // Acresenta o valor 6 na posição 3 do vetor num

num.push(7) // Acresenta o valor 7 ao vetor num

num.sort() // Coloca o vetor em ordem do menor para o maior

console.log(`Nosso vetor temm os seguintes valores: ${num}`)

console.log('...............')

console.log(`O vetor 'Num' tem ${num.length} Itens`)

console.log('...............')

console.log(`O Item 0 do Vetor é o primeiro "${num[0]}"`)

console.log('...............')

// IndexOf() > se o valor não for encontrado retoran a posição "-1"

let pos = num.indexOf(8) // Encontra o indice do valor 8

if(pos == -1){

    console.log('O valor não foi encontrado ...')
} else{
    
    console.log(`o valor procurado está na posição ${pos}`)

 }




console.log('...............')
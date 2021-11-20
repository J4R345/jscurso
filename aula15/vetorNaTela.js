
let valores =[8,1,7,4,2,9]

console.log('-----------------------')

console.log(`os Itens do vetor Valores são: ${valores}`)

/*
for(let pos=0; pos < valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

console.log('-----------------------')

valores.sort()

for(let pos in valores){

    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

} // Só funciona para Array e Objects >

console.log('-----------------------')
 
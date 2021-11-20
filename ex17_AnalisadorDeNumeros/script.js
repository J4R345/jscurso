

let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){

    if(Number(n) >= 1 && Number(n) <= 100){
    
        return true
   
    } else {
   
        return false
   
    }
}

function inLista (n, l) {

    if(l.indexOf(Number(n)) != -1) {

        return true

    } else {

        return false
    }
}

function adicionar() {

    if(isNumero(num.value) && !inLista(num.value, valores)){

      valores.push(Number(num.value))
      let item = document.createElement('option')
      item.text = `O número ${num.value} foi adicionado`
      lista.appendChild(item)
      res.innerHTML = ''

    } else {
        window.alert ('O Valor é inválido ou Já Foi adicionado na Lista')
    }
    num.value = ''
    num.focus()
}

function calcular() {

    if(valores.length == 0) {
    
        window.alert ('Adicione algum número antes de finalizar')
    
    } else {
        
        let tot = valores.length
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0
        
        for(let pos in valores) {

            soma += valores[pos]
            
            if(valores[pos] > maior)
            maior = valores[pos]

            if(valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / tot
        
        res.innerHTML = ''
        res.innerHTML += `<p>${tot} números foram adicionado (s) na Lista.</p>`
        res.innerHTML += `<p>O menor número da lista é o ${menor}.</p>`
        res.innerHTML += `<p>O maior número da lista é o ${maior}.</p>`
        res.innerHTML += `<p>A soma total dos números adicionados é ${soma}.</p>`
        res.innerHTML += `<p>A média dos números adicionados é ${media}.</p>`
        
    }
}
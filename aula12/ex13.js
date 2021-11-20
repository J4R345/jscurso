/*
Dias da Semana 
   0 = Domingo
   1 = Segunda
   2 = Terça
   3 = Quarta
   4 = Quinta
   5 = Sexta
   6 = Sabado
   */

var agora = new Date()
var diaSemana = agora.getDay()

console.log('Hoje é ...')
/* Switch só funciona com números inteiros ou Strings, tipo: (a, b, c, etc..) */
switch(diaSemana) {
        
        case 0:
            console.log('Domingo')
            break
        case 1:
            console.log('Segunda-Feira')
            break
        case 2:
            console.log('Terça-Feira')
            break
        case 3:
            console.log('Domingo')
            break
        case 4:
            console.log('Segunda-Feira')
            break
        case 5:
            console.log('Terça-Feira')
            break
        case 6:
            console.log('Terça-Feira')
            break
        default:
            console.log('Algo deu errado ...')
    }
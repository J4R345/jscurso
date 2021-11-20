
let amigo = {

 nome: 'Jose', 
 sexo: 'M', 
 peso: 66.5,

 emgordar(p=0){
 //    console.log('Engordou')
     this.peso += p
 }
}
 
 //console.log(typeof amigo)
 amigo.emgordar(2)
 console.log(`${amigo.nome} pesa ${amigo.peso} kg`)
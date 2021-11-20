
function carregar () {
    
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    //var hora = 10

    msg.innerHTML = `Agora são ${hora} horas.`
    
    if(hora >= 0 && hora < 12) {
        //Bom dia
        img.src='fotomanha.png'
        document.body.style.background = '#cf7868'
        saud.innerHTML = 'Bom dia!'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde
        img.src ='fototarde.png'
        document.body.style.background = '#c7b082'
        saud.innerHTML = 'Boa Tarde!'
    } else {
        //Boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#1c3356'
        saud.innerHTML = 'Boa Noite!'
        
    }
}

var fondo = document.querySelector('.padre')
var carro = document.querySelector('.rueda')
var sprites = document.querySelector('.sprites')
var carro2 = document.querySelector('.ruedasecu')
var luces = document.querySelector('.ocult')

fondo.addEventListener('click', adelante)

function adelante(){

    fondo.classList.add('fondo')
    carro.classList.add('llantitas')
    sprites.classList.add('sara')
    carro2.classList.add('llantitas')
    sprites.classList.remove('ocultar')
    luces.classList.remove('ocult')
}



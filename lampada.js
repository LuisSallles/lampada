const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

function lampOn() {
    lamp.src = 'imagens/lamp-on.jpg'
}


turnOn.addEventListener('click', lampOn)
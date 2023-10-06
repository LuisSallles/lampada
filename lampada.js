const lampOn = document.getElementById('turnOn') // Variables
const lampOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

function isBroken() { // Check if the lamp is broken, if broken, it return false(-1)
    return lamp.src.indexOf('broken') > -1
}

function turnOn() { // Turn on the lamp
    if(!isBroken()) {
    lamp.src = 'imagens/lamp-on.jpg'
    }
}

function turnOff() { // Turn Off the lamp
    if(!isBroken()) {
    lamp.src = 'imagens/lamp.jpg'
    }
}

function lampBroken() { // Double click, to broke the lamp
    lamp.src = 'imagens/lamp-broken.jpg'
}

lampOn.addEventListener('click', turnOn)
lampOff.addEventListener('click', turnOff)
lamp.addEventListener('mouseenter', turnOn)
lamp.addEventListener('mouseleave', turnOff)
lamp.addEventListener('dblclick', lampBroken)
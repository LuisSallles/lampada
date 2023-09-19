const result = document.getElementById('lamp-result')

function insertImg(on) {
    const img = document.createElement('img')
    img.setAttribute('id', 'lamp-off')
    img.setAttribute('src', 'imagens/lamp-off.jpg')
    if(on) {
        return result.appendChild(img)
    }
}

function turnOff() { // Here the lamp will turn off by click
    
}
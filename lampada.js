    const result = document.getElementById('lamp-result')

function lampCondition(lampOn, lampOff, result) {  // Function condition, if on = return Lamp On, if off = return Lamp off
    if(lampOn) {
        result.document.createElement('imagens/lamp-on.jpg')
        return 
    } else if (lampOff){
        result.document.createElement('imagens/lamp-off.jpg')
        return 
    }
}

function turnOn() { // Here the lamp will turn on by click
    let lampOn = document.getElementById('lamp-on')
    lampCondition(lampOn, result)
}

function turnOff() { // Here the lamp will turn off by click
    let lampOff = document.getElementById('lamp-off')
    lampCondition(lampOff, result)
}
const result = document.getElementById('lamp-result')

function lampCondition(lampOn, lampOff, result) {  // Function condition, if on = return Lamp On, if off = return Lamp off
    if(lampOn) {
        return alert('Turn On')
    } else {
        return alert('Turn Off')
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
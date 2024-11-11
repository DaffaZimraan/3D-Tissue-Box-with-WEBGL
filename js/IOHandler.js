window.freeze = false;

function onMouseClick(event) {
    window.freeze = !window.freeze;
}

function onKeydown(event) {
    if (event.keyCode === 32) { 
        window.freeze = true;
    }
}

function onKeyup(event) {
    if (event.keyCode === 32) { 
        window.freeze = false;
    }
}

document.addEventListener('click', onMouseClick, false);
document.addEventListener('keydown', onKeydown, false);
document.addEventListener('keyup', onKeyup, false);
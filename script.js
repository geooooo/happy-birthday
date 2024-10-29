window.onload = () => {
    const size = 300;
    const cat = window.document.querySelector(".cat");

    cat.style.left = `${window.innerWidth / 2 - size / 2}px`;
    cat.style.top = `${(window.innerHeight / 2 - size / 2) / 3}px`;

    const paramsX = { 
        cat,
        size,
        timer: null,
        x: null,
        isMoveForward: null,
    };

    const paramsY = { 
        cat,
        size,
        timer: null,
        y: null,
        isMoveForward: null,
    };

    window.onclick = (event) => {
        const { clientX: x, clientY: y } = event;

        paramsX.x = x;
        paramsX.isMoveForward = parseInt(cat.style.left) <= x;

        paramsY.y = y;
        paramsY.isMoveForward = parseInt(cat.style.top) <= y;

        move(paramsX, paramsY);
    };
};

function move(paramsX, paramsY) {
    const delay = 10;

    clearInterval(paramsX.timer);
    clearInterval(paramsY.timer);
    
    paramsX.cat.transform = "";
    paramsX.timer = null;
    paramsY.timer = null;

    paramsX.timer = setInterval(() => moveXAnimated(paramsX), delay);
    paramsY.timer = setInterval(() => moveYAnimated(paramsY), delay);
}

function moveXAnimated(params) {
    const step = 5;
    const left = parseInt(params.cat.style.left);
    
    if (params.isMoveForward) {
        if (left + step >= params.x - params.size / 2) {
            clearInterval(params.timer);
        } else {
            params.cat.style.left = `${left + step}px`;
        }
    } else {
        if (left - step <= params.x - params.size / 2) {
            clearInterval(params.timer);
        } else {
            params.cat.style.left = `${left - step}px`;
        }
    }
}

function moveYAnimated(params) {
    const step = 8;
    const top = parseInt(params.cat.style.top);
    
    if (params.isMoveForward) {
        if (top + step >= params.y - params.size / 2) {
            clearInterval(params.timer);
        } else {
            params.cat.style.top = `${top + step}px`;
        }
    } else {
        if (top - step <= params.y - params.size / 2) {
            clearInterval(params.timer);
        } else {
            params.cat.style.top = `${top - step}px`;
        }
    }
}
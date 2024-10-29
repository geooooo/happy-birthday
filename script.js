const catWidth = 300;
let isMoveRight = true;

window.onload = () => {
    const cat = window.document.querySelector(".cat");

    start(cat);
};

function start(cat) {
    const delay = 30;

    cat.style.left = "10px";

    setInterval(move, delay, cat);
}

function move(cat) {
    const step = 5;
    const left = parseInt(cat.style.left);
    const windowWidth = window.innerWidth;
    
    const isRightEdge = left + step >= windowWidth - catWidth;
    const isLeftEdge = left <= step;
    if (isRightEdge) {
        isMoveRight = false;
        cat.style.transform = "scale(-1, 1)";
    } else if (!isMoveRight && isLeftEdge) {
        cat.style.transform = "";
        isMoveRight = true;
    }
    
    if (isMoveRight) {
        cat.style.left = `${left + step}px`;
    } else {
        cat.style.left = `${left - step}px`;
    }
}
let btns = carusel.querySelectorAll('.arr');

let photo = photos.querySelector('img');

let width = photo.offsetWidth + 30 ;
let count = 1;

let list = photos.querySelector('ul');
let listElems = photos.querySelectorAll('li');

let position = 0;
let activeElem = 1;

function createDots(count) {
    let dots = carusel.querySelector('.dots');
    
    for(let i=0; i<count; i++) {
        let dot = document.createElement('div');
        dot.classList.add('dot');

        dots.appendChild(dot);
    }
    
}

// activate or disactivate dot
function AODDot(number, activate=true) {
    let dot = carusel.querySelectorAll('.dot')[number-1];
    if(activate) 
        dot.classList.add('active');
    else 
        dot.classList.remove('active');
    
}

function goRight() {
    // сдвиг вправо
    position -= width * count;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -width * (listElems.length - 2));
    
    activeElem += 1;
    // activeElem = Math.min(activeElem, 9);

    if(activeElem == listElems.length) {
        AODDot(activeElem-1, false);
        AODDot(activeElem, false);

        position = 0;
        activeElem = 1;

        AODDot(1);
        AODDot(2);
    } else {
        AODDot(activeElem-1, false);
        AODDot(activeElem+1);
    }

    list.style.marginLeft = position + 'px';
}

function goLeft() {
    // сдвиг влево
    position += width * count;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0)

    activeElem -= 1;
    
    if(activeElem == 0) {
        AODDot(activeElem+2, false);
        AODDot(activeElem+1, false);

        position = -width * (listElems.length - 2);
        activeElem = listElems.length-1;

        AODDot(activeElem+1);
        AODDot(activeElem);
    } else {
        AODDot(activeElem+2, false);
        AODDot(activeElem);
    }
    
    list.style.marginLeft = position + 'px';
}

createDots(listElems.length);

AODDot(1);
AODDot(2);

setInterval(goRight, 4000);

btns[0].addEventListener('click', goLeft);

btns[1].addEventListener('click', goRight);
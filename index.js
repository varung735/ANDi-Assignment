let bars = document.querySelector('#bars');
let div = document.getElementById('res-nav-links');

let isOpen = true;

bars.addEventListener('click', () => {
    if(isOpen) {
        div.classList.add('res-nav-links');
        div.classList.remove('nav-responsive');
        isOpen = false;
    }
    else{
        div.classList.remove('res-nav-links');
        div.classList.add('nav-responsive');
        isOpen = true;
    }
});
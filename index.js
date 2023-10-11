let bars = document.querySelector('#bars');
let div = document.getElementById('res-nav-links');

let isOpen = false;

bars.addEventListener('click', () => {
    if(isOpen) {
        isOpen = false;
        div.classList.add('res-nav-links');
        div.classList.remove('nav-responsive');
    }
    else{
        isOpen = true;
        div.classList.remove('res-nav-links');
        div.classList.add('nav-responsive');
    }
});
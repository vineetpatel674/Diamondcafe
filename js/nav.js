let burGar = document.querySelector('.res-bar');
let head = document.querySelector('.res-head');
let nav = document.querySelector('.res-nav');
let log = document.querySelector('.res-log')

burGar.addEventListener('click' ,naviHead);

function naviHead(){
    head.classList.toggle('res-he');
    nav.classList.toggle('res-na');
    log.classList.toggle('res-lo');
}
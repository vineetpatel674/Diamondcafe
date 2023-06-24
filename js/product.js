let Icon = document.getElementById('icon');
let faqText = document.querySelector('.faqh');
let faInput = document.querySelector('.fi');
let faqbox = document.getElementById('.fqb');


Icon.addEventListener('click' ,faqIconText);

function faqIconText(){
    faqText.classList.toggle('fa');
    faInput.classList.toggle('faqi');
    faInput.classList.toggle('faqbo');

}
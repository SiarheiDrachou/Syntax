// function askAge() {
//     let age = prompt('Your age?');
//     return age;
// }

let homeLink = document.querySelector('.header__link:first-of-type');

function getRandomNumber() {
    let random = Math.round(1 + Math.random()*9);
    alert(random);
}

homeLink.addEventListener('click', getRandomNumber);
homeLink.addEventListener('click', function (event) {
    console.log(event);
});
// homeLink.addEventListener('click', function () {
// console.log(Date());
// });

setTimeout(() => {
    homeLink.removeEventListener('click', getRandomNumber);
}, 5000);

let articleEl = document.querySelector('.article');
let sectionEl = document.querySelector('.section');
let blockEl = document.querySelector('.block');

// articleEl.addEventListener('click', function (event) {
//     console.log('article');
// });

// sectionEl.addEventListener('click', function (event) {
//     console.log('section');
// });

// blockEl.addEventListener('click', function (event) {
//     console.log('block');

//     // event.stopPropagation();
// });

// articleEl.addEventListener('click', function(event) {
//     if(event.target === blockEl) {
//         console.log('block');
//     }
//     else if(event.target === sectionEl) {
//         console.log('section');
//     }
//     else{
//         console.log('article');
//     }
// })

// let linkEl = document.querySelector('.habr-link');
// linkEl.addEventListener('click', function(event){
//     event.preventDefault();
// });

let menuIcon = document.querySelector('.header__menu-icon');
let headerLinksEl = document.querySelector('.header__links');
let closeIconEl = document.querySelector('.header__close-icon');
menuIcon.addEventListener('click', function(event) {
    headerLinksEl.classList.add('header__links--active');
});

closeIconEl.addEventListener('click', function(event) {
    headerLinksEl.classList.remove('header__links--active');
});

window.addEventListener('keydown', function(event) {
    if(!(event.ctrlKey === true && event.shiftKey === true)) {
        return false;
    }

    let headerEl = document.querySelector('.header');
    let headerStyles = headerEl.getBoundingClientRect();

    if(event.code === 'ArrowUp') {
        headerEl.style.height = headerStyles.height + 5 + 'px';
    }
    else if(event.code === 'ArrowDown') {
        headerEl.style.height = headerStyles.height - 5 + 'px';
    }
});

let submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
});

let userName = document.forms.messageForm.elements.userName;
userName.addEventListener('input', function(event) {
    if(!this.value) {
        this.classList.remove('form-field--error');
        return;
    }

    if(this.value.length < 5) {
        this.classList.add('form-field--error');
    }
    else {
        this.classList.remove('form-field--error');
    }
});
let menuIcon = document.querySelector('.header__drop-down-menu');
let headerMenuEl = document.querySelector('.header__list-menu');
let closeIconEl = document.querySelector('.close-img');
let headerLinksEl = document.querySelector('.header__link');

headerLinksEl.addEventListener('click', function (event) {
    headerMenuEl.classList.remove('header__list-menu--active');
    closeIconEl.style.display = "none";
});

menuIcon.addEventListener('click', function(event) {
    headerMenuEl.classList.add('header__list-menu--active');
    closeIconEl.style.display = "flex";    
});

closeIconEl.addEventListener('click', function(event) {
    headerMenuEl.classList.remove('header__list-menu--active');
    closeIconEl.style.display = "none";
});


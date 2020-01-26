let link = document.getElementById('target');

let paragraph = document.querySelector('main .card p');
let navbar = document.querySelectorAll('a');


// setTimeout (() => {
//     link.innerHTML = 'fake text';
// }, 4000);

// link.innerHTML = '<strong> Fake text </strong>';
// link.textContent = '<strong> Fake text </strong>';

let liElement = document.createElement('li');
liElement.innerHTML = '<a href="#"> Page 4 </a>';

let ulEl = document.querySelector(".navigation-bar ul");
ulEl.append(liElement);
ulEl.prepend(liElement);

//let mainEl = document.querySelector('main');
let mainEl = document.querySelector('.card');
let mainElem = mainEl.cloneNode(true);

mainEl.append(mainElem);

link.classList.add('red-text');
// link.classList.toggle('red-text');
let moneys, elMenu, linkEl;
let paginationEl = document.querySelector(".pagination");
let spinnerEl = document.querySelector('.preloader-wrapper');
spinnerEl.style.display = 'none';

function loader() {
    spinnerEl.style.display = 'flex';
}

function startSession() {
    if(localStorage.length == 0) {
        localStorage.setItem('value', 1);
        elMenu = paginationEl.children[localStorage.getItem('value')];
        elMenu.classList.add('active');
    } 
    else {
        elMenu = paginationEl.children[localStorage.getItem('value')];
        elMenu.classList.add('active');
    }
    if(localStorage.getItem('value') == 5) {
        linkEl = paginationEl.children[paginationEl.children.length - 1];
        linkEl.classList.add('disabled');
    }
    else if(localStorage.getItem('value') == 1) {
        linkEl = paginationEl.children[0];
        linkEl.classList.add('disabled');
    }
    readImage();
}

function listenerImageContainer(event) {
    if(localStorage.getItem('value') == 5) {
        linkEl = paginationEl.children[paginationEl.children.length - 1];
        linkEl.classList.add('disabled');
        linkEl = paginationEl.children[0];
        linkEl.classList.remove('disabled');
    }
    else if(localStorage.getItem('value') == 1) {
        linkEl = paginationEl.children[0];
        linkEl.classList.add('disabled');
        linkEl = paginationEl.children[paginationEl.children.length - 1];
        linkEl.classList.remove('disabled');
    }

    else if (localStorage.getItem('value') >1 && localStorage.getItem('value') < 5) {
        linkEl = paginationEl.children[0];
        linkEl.classList.remove('disabled');
        linkEl = paginationEl.children[paginationEl.children.length - 1];
        linkEl.classList.remove('disabled');
    }
    if((localStorage.getItem('value') == 1 && event.target.textContent.length == 12) || (localStorage.getItem('value') == 5 && event.target.textContent.length == 13)) {
        return ;
    }
    else if((localStorage.getItem('value') > 1 && event.target.textContent.length == 12)) {
        localStorage.setItem('value', parseInt(localStorage.getItem('value')) - 1);
        elMenu = paginationEl.children[localStorage.getItem('value')];
    }
    else if((localStorage.getItem('value') > 0 && localStorage.getItem('value') < 5) && event.target.textContent.length == 13) {
        localStorage.setItem('value', parseInt(localStorage.getItem('value')) + 1);
        elMenu = paginationEl.children[localStorage.getItem('value')];
    }
    
    else if (event.target.textContent < 12) {
        localStorage.setItem('value', event.target.textContent);
        elMenu = paginationEl.children[localStorage.getItem('value')];
    }
    for(let i = 0; i < paginationEl.children.length; i++) {
        linkEl = paginationEl.children[i];
        linkEl.classList.remove('active');
    }
    
    elMenu.classList.add('active');
    readImage();
}
paginationEl.addEventListener('click', listenerImageContainer);

function buildImageContainer(moneys) {
    let tbodyEl = document.querySelector(".row");
    tbodyEl.innerHTML = '';
    for(let i = 0; i<moneys.length; i++) {
        let rand = Math.round(100 + Math.random() * 100);
        moneys[i].height = rand;
        moneys[i].width = rand;
        rand = Math.round(1 + Math.random() * 1000);
        moneys[i].id = rand;
        moneys[i].download_url = `https://picsum.photos/id/${moneys[i].id}/${moneys[i].height}/${moneys[i].width}`;
        let card = `<div class="material-placeholder" style="">
                        <img class="materialboxed col l-3 s-2 m-1" src="${moneys[i].download_url}">
                    </div>`;
        tbodyEl.insertAdjacentHTML('beforeend', card);
        M.AutoInit();
    }       
}

async function readImage () {
    try {
        loader();
        let money = await fetch(`https://picsum.photos/v2/list?page=2&limit=10`);
        moneys = await money.json();
       buildImageContainer(moneys);
    }
    catch {
        alert("ERROR!!!")
    }
    finally {
       spinnerEl.remove();
    }
}

startSession();
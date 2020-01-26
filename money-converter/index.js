let btnEl = document.querySelector(".btn");
let theadEl = document.querySelector(".col");
let tbodyEl = document.querySelector(".table-body");
let optionEl = document.querySelector(".dropdown-menu");
let spinnerEl = document.querySelector('.spinner-border');
let tableEl = document.querySelector('.table');
spinnerEl.style.display = 'none';

function startSession() {
    if(localStorage.length == 0) {
        localStorage.setItem('value', 'USD');
        let elMenu = document.querySelector(`.${localStorage.getItem('value')}`);
        elMenu.classList.add('active');
    } 
    readMoney();
}

function buildTbody(arrKeys, arrValues) {
    btnEl.innerHTML = localStorage.getItem('value');
    theadEl.innerHTML = localStorage.getItem('value') + " Exchange rate";
    tbodyEl.innerHTML = '';
    for(let i = 0; i < arrValues.length; i++) {
        let tbodyTextEl =  `<tr class="row-${i+1}">
                                <th scope="row"> ${arrValues[i]} </th>
                                <td>${arrKeys[i]}</td>
                            </tr>`;
        tbodyEl.insertAdjacentHTML('beforeend', tbodyTextEl);
    };
    console.log(localStorage);
}

async function readMoney () {
    try {
        loader();
        let money = await fetch(`https://api.exchangerate-api.com/v4/latest/${localStorage.getItem('value')}`);
        let moneys = await money.json();
        let arrValues = Object.keys(moneys.rates);
        let arrKeys = Object.values(moneys.rates);
        buildTbody(arrKeys, arrValues);
    }
    catch {
        alert("ERROR!!!")
    }
    finally {
        spinnerEl.remove();
    }
}

function buildThead(event) {
    if(event.target.textContent.length == 3) {
        localStorage.setItem('value', event.target.textContent);
        let elMenu = event.target;
        for(let i = 0; i < optionEl.children.length; i++) {
            let linkEl = optionEl.children[i];
            linkEl.classList.remove('active');
        }
        elMenu.classList.add('active');
        readMoney();
    }
}
optionEl.addEventListener('click', buildThead);

function loader() {
    spinnerEl.style.display = 'flex';
}

startSession();
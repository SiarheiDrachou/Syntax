localStorage.setItem('value', 'USD');
let btnEl = document.querySelector(".btn");
let theadEl = document.querySelector(".col");
let tbodyEl = document.querySelector(".table-body");
let optionEl = document.querySelector(".dropdown-menu");
let spinnerEl = document.querySelector('.spinner-border');
let tableEl = document.querySelector('.table');
let arrValues = [];
let arrKeys = [];
spinnerEl.style.display = 'none';

function buildTbody() {
    btnEl.innerHTML = localStorage.getItem('value');
    theadEl.innerHTML = localStorage.getItem('value') + " Exchange rate";
    tbodyEl.innerHTML = '';
    for(let i = 0; i < 52; i++) {
        arrValues.push(localStorage.key(arrValues[i]));
        arrKeys.push(localStorage.getItem(arrValues[i]));
        let tbodyTextEl =  `<tr class="row-${i+1}">
                                <th scope="row"> ${arrValues[i]} </th>
                                <td>${arrKeys[i]}</td>
                            </tr>`;
        tbodyEl.insertAdjacentHTML('beforeend', tbodyTextEl);
    };

    buildThead()
}

async function readMoney () {
    try {
        loader();
        let money = await fetch(`https://api.exchangerate-api.com/v4/latest/${localStorage.getItem('value')}`);
        let moneys = await money.json();
        arrValues = Object.keys(moneys.rates);
        arrKeys = Object.values(moneys.rates);
        for(let j = 0; j < arrValues.length; j++) {
            localStorage.setItem(arrValues[j],arrKeys[j]); 
        };
        buildTbody();
    }
    catch {
        alert("ERROR!!!")
    }
    finally {
        spinnerEl.remove();
    }
}

function buildThead() {
    optionEl.addEventListener('click', function(event) {
        localStorage.setItem('value', event.target.textContent);
        let El = event.target;
        for(let i = 0; i < optionEl.children.length; i++) {
            let linkEl = optionEl.children[i];
            linkEl.classList.remove('active');
        }
        El.classList.add('active');
        btnEl.innerHTML = localStorage.getItem('value');
        theadEl.innerHTML = localStorage.getItem('value') + " Exchange rate";
        readMoney();
    });
}

function loader() {
    spinnerEl.style.display = 'flex';
}

readMoney();
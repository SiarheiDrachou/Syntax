// import { getDataFromServerCb } from './library.js';

// let user = {
//     name: 'Sergey',
//     age: 16,
//     email: 'Serg@mail.com'
// };
// console.log(user);

// let jsonUser = JSON.stringify(user, null, 4);
// console.log(jsonUser);

// let parsedUser = JSON.parse(jsonUser);
// console.log(parsedUser);

// getDataFromServerCb('vk.com', handleData);

// function handleData() {
//     console.log('готово');
// }

// let promise = new Promise(function (resolve, reject) {
//     resolve('выполнилось успешно');
//     reject(new error('ошибка!!!'));
// });

// promise
//     .then(
//         result => console.log(result),

//         error => console.error(error)
//     )
//     .finally(() => console.log('конец'));


// console.log(promise);



// function getDataFromServerCb(url) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             // resolve(`Данные с ${ url } получены`);
//             reject(new Error('ошибка!!!!!'));
//         }, 1500);
//     }); 
// }

// async function showResult() {
//     try{
//         let authors = await getDataFromServerCb('authors');
//         alert(authors);
//         let books = await getDataFromServerCb('books');
//         alert(books);
//         let description = await getDataFromServerCb('description');
//         alert(description);
//     }
//     catch(error) {
//         alert(error);
//     }
//     finally {
//         alert('мне всеравно, я выполнюсь')
//     }
// }

// showResult();



// getDataFromServerCb('authors')
//     .then(authors => {
//         console.log(authors);
//         return getDataFromServerCb('books');
//     })
//     .then(books => {
//         console.log(books);
//         return getDataFromServerCb('description');
//     })
//     .then(description => {
//         console.log(description);
//     })
//     .catch(error => {
//         alert(error);
//     });



async function readRepositories() {
    try {
        let response = await fetch("https://api.github.com/users/SiarheiDrachou/repos");
        let repositories = await response.json();
        buildCards(repositories);
    } 
    catch (error) {
        alert('error');
    }
    finally {
        setTimeout(() => {
            loaderEl.remove();
        }, 2000);
    }
        
    
}
let loaderEl = document.querySelector(".loader");
function loader() {
    loaderEl.insertAdjacentHTML("beforeend", `<div class="preloader-wrapper big active">
                                                <div class="spinner-layer spinner-blue">
                                                <div class="circle-clipper left">
                                                    <div class="circle"></div>
                                                </div><div class="gap-patch">
                                                    <div class="circle"></div>
                                                </div><div class="circle-clipper right">
                                                    <div class="circle"></div>
                                                </div>
                                                </div>

                                                <div class="spinner-layer spinner-red">
                                                <div class="circle-clipper left">
                                                    <div class="circle"></div>
                                                </div><div class="gap-patch">
                                                    <div class="circle"></div>
                                                </div><div class="circle-clipper right">
                                                    <div class="circle"></div>
                                                </div>
                                                </div>

                                                <div class="spinner-layer spinner-yellow">
                                                <div class="circle-clipper left">
                                                    <div class="circle"></div>
                                                </div><div class="gap-patch">
                                                    <div class="circle"></div>
                                                </div><div class="circle-clipper right">
                                                    <div class="circle"></div>
                                                </div>
                                                </div>

                                                <div class="spinner-layer spinner-green">
                                                <div class="circle-clipper left">
                                                    <div class="circle"></div>
                                                </div><div class="gap-patch">
                                                    <div class="circle"></div>
                                                </div><div class="circle-clipper right">
                                                    <div class="circle"></div>
                                                </div>
                                                </div>
                                            </div>
                                                ` );

}

function buildCards(repositories) {
let gridEl = document.querySelector(".grid");
loader();
setTimeout(() => {
    repositories.forEach(repository => {
        let card = `<div class="card hoverable">
                        <div class="card-image">
                            <img src="${ repository.owner.avatar_url }">
                        </div>
                        <div class="card-content text-darken-2">
                            <span class="card-title"> ${repository.name} </span>
                            <p> ${repository.description} </p>
                        </div>
                    </div>`;

        gridEl.insertAdjacentHTML('beforeend', card);
    });
}, 2000);
}

readRepositories();


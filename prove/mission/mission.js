
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let h1 = document.body.querySelector('h1');
let h2 = document.body.querySelector('h2');
let content = document.body.querySelector('content');
let p = document.body.querySelector('p');
let ol = document.body.querySelector('ol');


selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        logo.src = 'images/byui-logo-dark.png';
        document.body.style.backgroundColor = '#181818';
        h1.style.color = 'white';
        h2.style.color = 'rgb(0, 110, 182)';
        p.style.color = 'white';
        ol.style.color = 'white';


    } else {
        logo.src = 'images/byui-logo-light.webp';
        document.body.style.backgroundColor = 'white';
        h1.style.color = 'black';
        h2.style.color = 'rgb(0, 110, 182)';
        p.style.color = 'black';
        ol.style.color = 'black';

    }
}           
                    
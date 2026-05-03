
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        logo.src = 'images/byui-logo-dark.png';
    } else {
        // code for changes to colors and logo
    }
}           
                    
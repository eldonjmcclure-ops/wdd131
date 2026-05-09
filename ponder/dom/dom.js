let title = document.querySelector('h1');

console.log(title);

title.textContent = 'Web Page Components';

document.querySelector('#topics').style.color = 'red';

// const should be for things you are never going to change.
const topics = document.querySelector('#topics');

topics.style.color = 'purple'

const wrapper = document.getElementById("content");

wrapper.style.backgroundColor = 'lightblue';

let list = document.querySelector('.list')

list.style.border = '3px solid black';

let para = document.querySelector('p');

para.style.fontSize = '2em';

para.classList.add('background')

const dropdown = document.querySelector('#webdevlist')
const html = document.querySelector('#html')
const css = document.querySelector('#css')
const js = document.querySelector('#js')

dropdown.addEventListener('change', function(){
    let codeValue = dropdown.value;
    
    
    
    console.log(codeValue);
    document.getElementById(codeValue).style.color = 'red'
});
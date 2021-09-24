// Variables
const navBtn = document.getElementById('navBtn');
const navMenu = document.getElementById('navMenu');
const closeNavBtn = document.getElementById('closeMenuBtn');
const navLinks  = document.querySelector('ul');
const portBtn = document.getElementById('portBtn');

// Events
navBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);

// Functions
function openNav() {
    navMenu.style.display = 'flex';
    navMenu.style.animationName = 'navSlideDown';
    navMenu.style.animationDuration = '0.7s';
    navLinks.style.display = 'block';
};

function closeNav() {

    navMenu.style.animationName = 'navSlideUp';
    navMenu.style.animationDuration = '0.3s';
    navLinks.style.display = 'none';

    setTimeout(() => {
        navMenu.style.display = 'none';
    }, 300);

};


// Typewriter effect
let i = 0;
let speed = 75;
let txt = `Hi there.`;

function typeGreeting() {

    if(i < txt.length) {
        document.getElementById('greeting').innerHTML += txt.charAt(i);
        i++;

        setTimeout(typeGreeting, speed);
    }

};
window.onload = setTimeout(typeGreeting, 500);

let a = 0;
let txt2 = `I'M A WEB DEVELOPER.`;

function typeIntro() {
    if(a < txt2.length) {
        document.getElementById('intro').innerHTML += txt2.charAt(a);
        a++;
        setTimeout(typeIntro, speed);

        setTimeout(() => {
            portBtn.style.visibility = 'visible';
            portBtn.style.animationName = 'portBtnSlideUp';
            portBtn.style.animationDuration = '.7s';
            portBtn.style.animationTimingFunction = 'easeInOut'
        },1300);
    }
}
window.onload = setTimeout(typeIntro, 2000);


// Cursor
function cursor() {

    let h3 = document.querySelector('h3');
    let h1 = document.querySelector('#intro');

    h3.style.borderRight = '3px solid rgba(275,275,275,1)';
    h3.style.position = 'absolute';
    h3.style.left = '35%';
    h3.style.top = '2%';
    h3.style.paddingRight = '3px'

    h1.style.visibility = 'hidden';

    setInterval(() => {
        h3.style.borderRight = '3px solid rgba(275, 275, 275, 0)';
        h1.style.visibility = 'visible';
    }, 1800)

};
window.onload = cursor();



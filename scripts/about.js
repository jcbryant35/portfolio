// Variables
const navBtn = document.getElementById('navBtn');
const navMenu = document.getElementById('navMenu');
const closeNavBtn = document.getElementById('closeMenuBtn');
const navLinks  = document.querySelector('ul');

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

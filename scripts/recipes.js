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


// Lazy loading
window.addEventListener('load', setupObserver);

function setupObserver() {
    const options = {
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            console.log(entry.target);
            console.log(entry.isIntersecting);

            if(entry.isIntersecting) {
                entry.target.classList.add('appear');
            } else {    
                return;
            }
        })
    }, options);

    const h1 = document.querySelectorAll('h1');
    h1.forEach(item => {
        observer.observe(item);
    });

    const p = document.querySelectorAll('p');
    p.forEach(para => {
        observer.observe(para);
    });
};
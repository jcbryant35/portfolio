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


// Send form data to server
const form = document.getElementById('contactForm');
let sender = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('messageBox');
const url = `http://localhost:8080/email`;

form.addEventListener('submit', e => {
    e.preventDefault();

    let mail = {
        sender: sender.value,
        email: email.value,
        message: message.value
    };

    let JSONdata = JSON.stringify(mail);

    console.log(JSONdata);
    
    sendMail(JSONdata);
});

const sendMail = (JSONdata) => {

    fetch(url, {
        method: 'post',
        body: JSONdata,
        headers: {
            'Content-Type': 'application/json',
        }   
    })
    .then(response => response.json())
    .then(myData => console.log(myData))
    .catch(error => console.error(error))


    sender.value = '';
    email.value = '';
    message.value = '';

    setTimeout(() => {
        successMessage()
    }, 300)
};

// Success Message
function successMessage() {
    // message div
    const div = document.createElement('div');
    div.setAttribute('id', 'successDiv');
    // message text
    const h3 = document.createElement('h3');
    h3.innerHTML = 'Message Sent Successfully!';

    // div styles
    div.style.width = '100%';
    div.style.height = '10%';
    div.style.position = 'absolute';
    div.style.top = '0';
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';
    div.style.backgroundColor = 'rgb(45, 143, 143)';

    // h1 styles
    h3.style.color = 'white';
    h3.style.letterSpacing = '2px';
    h3.style.fontFamily = 'Montserrat';


    div.appendChild(h3)
    document.body.appendChild(div)
    
    hideMessage(div)
};

function hideMessage(div) {
    setTimeout(() => {
        div.style.display = 'none';
    },2500)
};
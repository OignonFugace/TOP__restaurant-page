import loadHomePage from './js/home.js';
import loadMenuPage from './js/menu.js';
import loadContactPage from './js/contact.js';
import './css/style.css';

function clearContent() {
    const mainContent = document.querySelector('#content');
    mainContent.innerHTML = '';
}

function setupTabs() {
    const siteWrapper = document.getElementById('site-wrapper');
    const mainContent = document.querySelector('#content');
    const navMenu = document.createElement('div');
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');

    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    contactButton.textContent = 'Contact';

    navMenu.classList.add('nav-menu');

    homeButton.onclick = () => {
        clearContent();
        loadHomePage();
    };
    menuButton.onclick = () => {
        clearContent();
        loadMenuPage();
    };
    contactButton.onclick = () => {
        clearContent();
        loadContactPage();
    };

    navMenu.appendChild(homeButton);
    navMenu.appendChild(menuButton);
    navMenu.appendChild(contactButton);

    siteWrapper.insertBefore(navMenu, mainContent);
}


window.onload = () => {
    setupTabs();
    loadHomePage();
}

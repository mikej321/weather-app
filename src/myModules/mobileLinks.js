import { linkNavigation } from "..";

function expandHamburger() {
    // helper function to animate the hamburger menu by toggling classes
    const menu = document.querySelector('.hamburger');
    const links = document.querySelector('.links');
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    menu.addEventListener('click', () => {
        if (links.hasAttribute('active')) {
            links.removeAttribute('active');
            line1.classList.remove('animateTop');
            line2.classList.remove('animateMiddle');
            line3.classList.remove('animateBottom');
        } else {
            line1.classList.add('animateTop');
            line2.classList.add('animateMiddle');
            line3.classList.add('animateBottom');        
            links.setAttribute('active', '');
        }
    })
    
}

export { expandHamburger }
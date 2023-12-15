import './styles/style.sass';
import { fetchWeather } from './myModules/search';
import { displayCurrentWindInfo } from './myModules/windInfoHome';
// date-fns imports
import { addDays, startOfDay, format } from 'date-fns';
import { checkForStorage } from './myModules/search';
import { expandHamburger } from './myModules/mobileLinks';
import { fetchForecastWeather, pickForecastArea, printForecastWeather } from './myModules/dailyForecast';
import { displayEtcInfoForecast } from './myModules/windInfoForecast';



const content = document.querySelector('.content');


window.onload = loadInitialContent()

function createNav() {
    // Creates the header and all of the headers content
    const header = document.createElement('header');
    content.append(header)

    const nav = document.createElement('nav');

    const navBar = document.createElement('div');
    navBar.classList.add('navbar')

    const title = document.createElement('h1');
    title.textContent = 'Temperate Weather';
    navBar.append(title);

    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    for (let i = 1; i < 4; i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        line.id = `line${i}`;
        hamburger.append(line);
    }
    navBar.append(hamburger);

    const links = document.createElement('ul');
    links.classList.add('links');
    
    const linkContainer1 = document.createElement('li');
    const link1 = document.createElement('a');
    link1.textContent = 'Home';
    link1.id = 'home';
    linkContainer1.append(link1);
    links.append(linkContainer1);

    const linkContainer2 = document.createElement('li');
    const link2 = document.createElement('a');
    link2.textContent = 'Forecast';
    link2.id = 'forecast';
    linkContainer2.append(link2);
    links.append(linkContainer2);
    

    const linkContainer3 = document.createElement('li');
    const link3 = document.createElement('a');
    link3.textContent = 'About';
    link3.id = 'about';
    linkContainer3.append(link3);
    links.append(linkContainer3);

    navBar.append(links)
    nav.append(navBar);
    header.append(nav);
}

function createMainContent() {
    // creates all of the main content on load
    const main = document.createElement('main');
    content.append(main);

    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');
    main.append(mainContent);

    const zipContainer = document.createElement('div');
    zipContainer.classList.add('zipContainer');
    mainContent.append(zipContainer);

    const zipCode = document.createElement('input');
    zipCode.setAttribute('type', 'text');
    zipCode.name = 'zipCode';
    zipCode.id = 'zipCode';
    zipCode.placeholder = 'Insert Zip or County Name Here';
    zipContainer.append(zipCode);

    const searchButton = document.createElement('button');
    searchButton.setAttribute('type', 'button');
    searchButton.textContent = 'Search';
    zipContainer.append(searchButton);

    const areaChoice = document.createElement('div');
    areaChoice.classList.add('areaChoice');
    mainContent.append(areaChoice);

    const temperatureInfo = document.createElement('div');
    temperatureInfo.classList.add('temperatureInfo');
    mainContent.append(temperatureInfo);

    const forecast = document.createElement('div');
    forecast.classList.add('forecast');
    mainContent.append(forecast);
}

function createFooter() {
    const footer = document.createElement('footer');
    content.append(footer);

    const attribution = document.createElement('a');
    attribution.href = 'https://github.com/mikej321';
    attribution.textContent = 'Michael Johnson';

    const footerContent = document.createElement('p');
    footerContent.textContent = `Made by `;
    footerContent.insertAdjacentElement('beforeend', attribution);

    footer.append(footerContent);
}

function loadInitialContent() {
    // helper function for initially loading content to the page
    createNav();
    createMainContent();
    createFooter();
    checkStorage();
}

function querySelectors() {
    // helper function that adds functionality to the search button to display weather on home page
    const searchButton = document.querySelector('.zipContainer > button');
    searchButton.addEventListener('click', displayCurrentWindInfo);
}

function querySelectorForecast() {
    // helper function that adds functionality to the search button to display weather on the forecast page
    const searchButton = document.querySelector('.zipContainer > button');
    searchButton.addEventListener('click', displayEtcInfoForecast);
}



function checkStorage() {
    // function that searches localStorage on home page to initially load
    
    // this is used to ensure that the user doesn't have to constantly type their info if they've already visited the page
    if (JSON.parse(localStorage.getItem('town')) !== null) {
        displayCurrentWindInfo();
    }
}

function checkForecastStorage() {
    // this is used to display the forecast information on load if the user has visited the page already
    if (JSON.parse(localStorage.getItem('town')) !== null) {
        displayEtcInfoForecast();
    }
}

function linkNavigation() {
    // an event listener for displaying the home and forecast page
    document.addEventListener('click', (event) => {
        let tarElement = event.target;
        if (tarElement.tagName == 'LI' && tarElement.firstChild.id == 'home') {
            while (content.firstChild) {
                content.removeChild(content.firstChild);
            }
            createNav();
            createMainContent();
            createFooter();
            querySelectors();
            expandHamburger();
            checkStorage();
        } else if (tarElement.tagName == 'LI' && tarElement.firstChild.id == 'forecast') {
            while (content.firstChild) {
                content.removeChild(content.firstChild);
            }
            createNav();
            createMainContent();
            createFooter();
            querySelectorForecast();
            checkForecastStorage()
            expandHamburger();
        } else if (tarElement.tagName == 'LI' && tarElement.firstChild.id == 'about') {
            while (content.firstChild) {
                content.removeChild(content.firstChild);
            }
            createNav();
            createMainContent();
            createFooter();
            expandHamburger();
        }
    }) 
}



// initial functions that run on load
querySelectors();
expandHamburger();
linkNavigation();
export { content, linkNavigation };

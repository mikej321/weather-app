import { content } from '../index';
import { eraseForecastInfo } from './forecast';


async function fetchArea() {
    // selectors for search functions
    const zipContainer = document.querySelector('.zipContainer');
    const searchBar = document.querySelector('#zipCode');
    const searchButton = document.querySelector('.zipContainer > button');
    const tempInfo = document.querySelector('.temperatureInfo');
    let input;

    if (tempInfo.hasAttribute('data-weather')) {
        eraseTempInfo();
        eraseForecastInfo();
    }
    // fetch properties for the area selection
    let areaArr = [];
    try {
        if (zipContainer.querySelector('.errorMessage')) {
            const errorMessage = document.querySelector('.errorMessage');
            zipContainer.removeChild(errorMessage);
        }

        if (searchBar.value !== '' && JSON.parse(localStorage.getItem('town')) !== null) {
            input = searchBar.value;
            setName(input);
        } else if (searchBar.value !== '' && JSON.parse(localStorage.getItem('town')) === null) {
            input = searchBar.value;
            setName(input);
        } else if (searchBar.value === '' && JSON.parse(localStorage.getItem('town')) !== null) {
            input = JSON.parse(localStorage.getItem('town'));
        } else {
            throw new Error('please enter a value');
        }           
    } catch (error) {
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('errorMessage');
        errorMessage.textContent = error;
        zipContainer.append(errorMessage);
        throw error;
    }

    let url = `https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=10&language=en&format=json`;
    let myResponse = await fetch(url, {
        mode: 'cors',
    });
    let myArea = await myResponse.json();
    /* everything that I want pulled from the JSON
    will be included in this loop. Feel free to update the values
    here if you need extra areas pulled from the JSON. */
    for (let area of myArea.results) {
        let stateName = area.admin1;
        let countyName = area.admin2;
        let countryName = area.country;
        let townName = area.name;
        let townLat = area.latitude;
        let townLon = area.longitude;
        /* some of the areas that show up in the search 
        have no zip, so if they don't, I have
        made a default value for those */
        let postCode = '';
        if (area.postcodes === undefined) {
            postCode = postCode;
        } else {
            postCode = area.postcodes.pop();
        }
        
        let areaObj = {
            stateName,
            countyName,
            countryName,
            townName,
            postCode,
            townLat,
            townLon,
        };
        // every area that is pulled will be pushed into an arr
        areaArr.push(areaObj);
    }
    return areaArr;
}

/* function that erases the choices on screen every time a new
search is performed */

function eraseAreaContents() {
    const areaChoice = document.querySelector('.areaChoice');
    while (areaChoice.firstChild) {
        areaChoice.removeChild(areaChoice.firstChild);
    }
}

function eraseTempInfo() {
    const tempInfo = document.querySelector('.temperatureInfo');
    while (tempInfo.firstChild) {
        tempInfo.removeChild(tempInfo.firstChild);
    }
    tempInfo.removeAttribute('data-weather');
}

async function fadeOut(ele) {
    let opacity = 1;
    let intervalID = setInterval(() => {
        if (opacity > 0) {
            opacity = opacity - 0.1;
            ele.style.opacity = opacity;
        }  else {
            clearInterval(intervalID);
        }
    })
}

async function fadeIn(ele) {
    let opacity = -0.1;
    let intervalID = setInterval(() => {
        if (opacity < 1) {
            opacity = opacity + 0.1;
            ele.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    })
}

async function pickArea() {
    const areaChoice = document.querySelector('.areaChoice');
    let areaArr = await fetchArea();
    eraseAreaContents();
    let newArr;

    if (JSON.parse(localStorage.getItem('choiceTown')) === null) {
        for (let [index, area] of areaArr.entries()) {
            areaChoice.setAttribute('data-choice', '');
            const areaEl = document.createElement('div');
            areaEl.classList.add('area');
            areaEl.dataset.choice = index;
            areaChoice.append(areaEl);
    
            const areaP = document.createElement('p');
            areaP.textContent = area.townName + ',' + ' ';
            areaEl.append(areaP);
    
            const stateSpan = document.createElement('span');
            stateSpan.classList.add('stateSpan');
            stateSpan.textContent = area.stateName + ' ';
            areaP.append(stateSpan);
    
            const zipSpan = document.createElement('span');
            zipSpan.classList.add('zipSpan');
            zipSpan.textContent = area.postCode;
            areaP.append(zipSpan);
        }
    
        const areas = document.querySelectorAll('.area');
        newArr = [areaArr, areas];
    } else if (JSON.parse(localStorage.getItem('choiceTown')) !== null) {
        newArr = areaArr;
    }

    return newArr;
}

async function pickedChoice() {
    const listOfTowns = await pickArea();
    function waitForChoice() {
        let choiceTown;
        if (JSON.parse(localStorage.getItem('choiceTown')) !== null) {
            return new Promise((resolve, reject) => {
                choiceTown = JSON.parse(localStorage.getItem('choiceTown'));
                resolve(choiceTown);
            })
        } else {
            return new Promise((resolve, reject) => {
                listOfTowns[1].forEach((town) => {
                    town.addEventListener('click', (event) => {
                        let tarEl = event.target;
                        choiceTown = listOfTowns[0][tarEl.dataset.choice];
                        localStorage.setItem('choiceTown', JSON.stringify(choiceTown));
                        resolve(choiceTown);
                    })
                })
            })
        }
    }
    let resolvedChoice = await waitForChoice();
    return resolvedChoice;
}

async function fetchWeather() {
    let userChoice = await pickedChoice();
    let myResponse = await fetch(`https://api.open-meteo.com/v1/dwd-icon?latitude=${userChoice.townLat}&longitude=${userChoice.townLon}&current=temperature_2m,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m,wind_gusts_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code,is_day,wind_speed_10m,wind_gusts_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch`, {
        mode: 'cors',
    });
    let myWeather = await myResponse.json();
    return [userChoice, myWeather];
}

function setName(town) {
    localStorage.clear();
    localStorage.setItem('town', JSON.stringify(town));
}

export { fetchWeather,
         eraseAreaContents,
         eraseTempInfo, 
         fadeOut, 
         fadeIn, 
         setName, 
         pickArea,
         pickedChoice,
};
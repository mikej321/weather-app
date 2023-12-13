import { setName, eraseAreaContents, } from "./search";
import { eraseForecastInfo } from "./forecast";
import Cloudy from '../assets/Cloud_Group.svg';
import Drizzle from '../assets/Drizzle.svg';
import HeavyRain from '../assets/Heavy_Rain.svg';
import HeavySnow from '../assets/Heavy_Snow.svg';
import LightDrizzle from '../assets/Light_Drizzle.svg';
import LightRain from '../assets/Light_Rain.svg';
import LightSnow from '../assets/Light_Snow.svg';
import ModerateDrizzle from '../assets/Moderate_Drizzle.svg';
import ModerateRain from '../assets/Moderate_Rain.svg';
import ModerateSnow from '../assets/Moderate_Snow.svg';
import StormCloud from '../assets/Storm_Cloud.svg';
import SunRay from '../assets/Sun_With_Ray.svg';
import Sun from '../assets/Sun.svg';
import ClearNightStars from '../assets/Clear Night Stars.svg';
import CloudyNight from '../assets/Cloudy Night.svg';
import PartlyCloudyDay from '../assets/Partly Cloudy.svg';

import { format, closestTo, parseISO, closestIndexTo, addDays, subDays } from "date-fns";

async function grabForecast() {
    const zipContainer = document.querySelector('.zipContainer');
    const searchBar = document.querySelector('#zipCode');
    const searchButton = document.querySelector('.zipContainer > button');
    let input;

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
            throw new Error('please enter a value to get your forecast');
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

    for (let area of myArea.results) {
        let stateName = area.admin1;
        let countyName = area.admin2;
        let countryName = area.country;
        let townName = area.name;
        let townLat = area.latitude;
        let townLon = area.longitude;
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

        areaArr.push(areaObj);
    }

    return areaArr;
}

async function pickForecastArea() {
    const areaChoice = document.querySelector('.areaChoice');
    let areaArr = await grabForecast();
    if (areaChoice.hasChildNodes) {
        eraseAreaContents();
    }
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

async function pickForecastChoice() {
    const listOfTowns = await pickForecastArea();
    function waitForForecastChoice() {
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
    let resolvedChoice = await waitForForecastChoice();
    return resolvedChoice;
}

async function fetchForecastWeather() {
    let userChoice = await pickForecastChoice();
    let myResponse = await fetch(`https://api.open-meteo.com/v1/dwd-icon?latitude=${userChoice.townLat}&longitude=${userChoice.townLon}&current=temperature_2m,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=14&hourly=temperature_2m,weather_code,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch`, {
        mode: 'cors',
    });
    let myWeather = await myResponse.json();
    return [userChoice, myWeather];
}

async function printForecastWeather() {
    let myWeather = await fetchForecastWeather();
    const areaChoice = document.querySelector('.areaChoice');
    const forecast = document.querySelector('.forecast');

    if (areaChoice.hasChildNodes) {
        eraseAreaContents();
    }

    if (forecast.hasChildNodes) {
        eraseForecastInfo();
    }

    forecast.setAttribute('data-weather', '');

    const today = new Date(myWeather[1]['current']['time']);
    
    const weekWeatherArr = myWeather[1]['daily'];
    console.log(weekWeatherArr)
    const weekArr = myWeather[1]['daily']['time'];
    let finishedWeekArr = [];

    for (let day of weekArr) {
        finishedWeekArr.push(parseISO(day));
    }

    const paneTitle = document.createElement('h2');
    paneTitle.textContent = `7 day forecast`;
    paneTitle.classList.add('paneTitle');
    forecast.append(paneTitle);

    for (let i = 1; i < 8; i++) {
        const maxTemp = Math.floor(weekWeatherArr['temperature_2m_max'][i]);
        const minTemp = Math.floor(weekWeatherArr['temperature_2m_min'][i]);
        const average = Math.floor((minTemp + maxTemp) / 2);
        const dailyWeatherCode = weekWeatherArr['weather_code'][i];

        const forecastPane = document.createElement('div');
        forecastPane.setAttribute('dailyForecast', '');
        forecastPane.classList.add('forecastPane');
        forecast.append(forecastPane);

        const dayDisplay = document.createElement('p');
        dayDisplay.classList.add('dayDisplay');
        forecastPane.append(dayDisplay);

        let whatDay = format(finishedWeekArr[i], 'EEEE');
        dayDisplay.textContent = `${whatDay}`;

        let fahrenheitSymbol = '&#8457';

        const conditionContainer = document.createElement('div');
        conditionContainer.classList.add('conditionContainer');
        forecastPane.append(conditionContainer);

        const tempForecastDisplay = document.createElement('div');
        tempForecastDisplay.classList.add('tempForecastDisplay');
        conditionContainer.append(tempForecastDisplay);
        
        const minTempDisplay = document.createElement('p');
        minTempDisplay.classList.add('minTemp');
        minTempDisplay.innerHTML = `min: ${minTemp} ${fahrenheitSymbol}`;
        tempForecastDisplay.append(minTempDisplay);

        const maxTempDisplay = document.createElement('p');
        maxTempDisplay.classList.add('maxTemp');
        maxTempDisplay.innerHTML = `max: ${maxTemp} ${fahrenheitSymbol}`;
        tempForecastDisplay.append(maxTempDisplay);


        const conditions = document.createElement('p');
        const weatherImg = new Image();
        weatherImg.classList.add('secondWeatherImg');
        let userCode;

        switch(dailyWeatherCode) {
            case 0:
                forecastPane.setAttribute('clearD', '');
                userCode = 'mainly clear skies';
                weatherImg.src = SunRay;
                break;
            
            case 1:
                forecastPane.setAttribute('clearD', '');
                userCode = 'mainly clear skies';
                weatherImg.src = SunRay;
                break;

            case 2:
                forecastPane.setAttribute('cloudyD', '');
                userCode = 'partly cloudy skies';
                weatherImg.src = PartlyCloudyDay;
                break;

            case 3:
                forecastPane.setAttribute('overcast', '');
                userCode = 'overcast';
                weatherImg.src = Cloudy;
                break;

            case 45:
                forecastPane.setAttribute('overcast', '');
                userCode = 'foggy';
                weatherImg.src = Cloudy;
                break;
            
            case 48:
                forecastPane.setAttribute('overcast', '');
                userCode = 'very foggy';
                weatherImg.src = Cloudy;
                break;

            case 51:
                forecastPane.setAttribute('drizzleD', '');
                userCode = 'light drizzle';
                weatherImg.src = LightDrizzle;
                break;

            case 53:
                forecastPane.setAttribute('drizzleD', '');
                userCode = 'moderate drizzle';
                weatherImg.src = ModerateDrizzle;
                break;

            case 54:
                forecastPane.setAttribute('drizzleD', '');
                userCode = 'dense drizzle';
                weatherImg.src = Drizzle;
                break;

            case 55:
                forecastPane.setAttribute('drizzleD', '');
                userCode = 'freezing drizzle';
                weatherImg.src = ModerateDrizzle;
                break;

            case 57:
                forecastPane.setAttribute('drizzleD', '');
                userCode = 'dense freezing drizzle';
                weatherImg.src = Drizzle;
                break;

            case 61:
                forecastPane.setAttribute('rainD', '');
                userCode = 'light rain';
                weatherImg.src = LightRain;
                break;

            case 63:
                forecastPane.setAttribute('rainD', '');
                userCode = 'moderate rain';
                weatherImg.src = ModerateRain;
                break;

            case 65:
                forecastPane.setAttribute('rainD', '');
                userCode = 'heavy rain';
                weatherImg.src = HeavyRain;
                break;

            case 66:
                forecastPane.setAttribute('rainD', '');
                userCode = 'light freezing rain';
                weatherImg.src = LightRain;
                break;

            case 67:
                forecastPane.setAttribute('rainD', '');
                userCode = 'heavy freezing rain';
                weatherImg.src = HeavyRain;
                break;

            case 71:
                forecastPane.setAttribute('snowD', '');
                userCode = 'light snow';
                weatherImg.src = LightSnow;
                break;

            case 73:
                forecastPane.setAttribute('snowD', '');
                userCode = 'moderate snow';
                weatherImg.src = ModerateSnow;
                break;

            case 75:
                forecastPane.setAttribute('snowD', '');
                userCode = 'heavy snow';
                weatherImg.src = HeavySnow;
                break;

            case 80:
                forecastPane.setAttribute('rainD', '');
                userCode = 'light showers';
                weatherImg.src = LightRain;
                break;

            case 81:
                forecastPane.setAttribute('rainD', '');
                userCode = 'moderate showers';
                weatherImg.src = ModerateRain;
                break;

            case 82:
                forecastPane.setAttribute('rainD', '');
                userCode = 'heavy showers';
                weatherImg.src = HeavyRain;
                break;

            case 85:
                forecastPane.setAttribute('snowD', '');
                userCode = 'light snow showers';
                weatherImg.src = LightSnow;
                break;

            case 86:
                forecastPane.setAttribute('snowD', '');
                userCode = 'heavy snow showers';
                weatherImg.src = HeavySnow;
                break;

            case 95:
                forecastPane.setAttribute('rainD', '');
                userCode = 'Thunderstorms';
                weatherImg.src = StormCloud;
                break;

            default:
                userCode = 'Could not retrieve weather';
                break;
        }

        const feeling = document.createElement('span');

        if (average < 30) {
            feeling.textContent = 'and very cold';
        } else if (average < 40) {
            feeling.textContent = 'and cold';
        } else if (average < 50) {
            feeling.textContent = 'and warming up';
        } else if (average < 60) {
            feeling.textContent = 'and mild';
        } else if (average < 80) {
            feeling.textContent = 'and warm';
        } else {
            feeling.textContent = 'and very hot';
        }

        conditions.setAttribute('dayForecast', '');
        conditions.textContent = `${userCode} `;
        conditions.append(feeling);
        conditionContainer.append(conditions);
        forecastPane.append(weatherImg);
    }
    return myWeather;
}

export { fetchForecastWeather, pickForecastChoice, printForecastWeather };
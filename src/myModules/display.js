// image imports

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
import Title from '../assets/Title.svg';

// function imports

import { fetchWeather, eraseAreaContents, eraseTempInfo, fadeOut, fadeIn } from './search';

async function printWeather() {
    const areaChoice = document.querySelector('.areaChoice');
    const temperatureInfo = document.querySelector('.temperatureInfo');
    const forecast = document.querySelector('.forecast');
    let myWeather = await fetchWeather();
    eraseTempInfo();
    eraseAreaContents();


    temperatureInfo.dataset.weather = '';
    const areaEle = document.createElement('div');
    areaEle.classList.add('areaElement');
    temperatureInfo.append(areaEle);

    const townName = document.createElement('p');
    townName.textContent = `${myWeather[0].townName}, ${myWeather[0].stateName}`;
    areaEle.append(townName);

    let fahrenheitSymbol = '&#8457';
    const temperature = document.createElement('p');
    temperature.innerHTML = `${myWeather[1].current['temperature_2m']} ${fahrenheitSymbol}`;
    areaEle.append(temperature);
    

}

export { printWeather };

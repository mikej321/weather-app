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
import { format, isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday, isSunday } from 'date-fns';

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
    
    const weatherImg = new Image();
    weatherImg.classList.add('weatherImg');
    temperatureInfo.insertAdjacentElement('afterbegin', weatherImg);
    
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const today = new Date(myWeather[1]['current']['time']);
    let todayDateDisplay = format(today, 'MMMM do yyyy');
    
    const dateDisplay = document.createElement('p');
    dateDisplay.textContent = `${todayDateDisplay}`;
    areaEle.append(dateDisplay);

    const townName = document.createElement('p');
    townName.textContent = `${myWeather[0].townName}, ${myWeather[0].stateName}`;
    areaEle.append(townName);

    let fahrenheitSymbol = '&#8457';
    const temperature = document.createElement('p');
    temperature.innerHTML = `${myWeather[1].current['temperature_2m']} ${fahrenheitSymbol}`;
    areaEle.append(temperature);
    
    const conditions = document.createElement('p');
    let userCode;

    async function applyWeatherCode() {
        switch(myWeather[1].current['weather_code']) {
            case 0:
                userCode = 'clear skies';
                weatherImg.src = SunRay;
                break;
            
            case 1:
                userCode = 'mainly clear skies';
                weatherImg.src = SunRay;
                break;
    
            case 2:
                userCode = 'partly cloudy skies';
                weatherImg.src = Sun;
                break;
    
            case 3:
                userCode = 'overcast';
                weatherImg.src = Cloudy;
                break;
            
            case 45:
                userCode = 'foggy';
                weatherImg.src = Cloudy;
                break;
    
            case 48:
                userCode = 'very foggy';
                weatherImg.src = Cloudy;
                break;
    
            case 51:
                userCode = 'light drizzle';
                weatherImg.src = LightDrizzle;
                break;
            
            case 53:
                userCode = 'moderate drizzle';
                weatherImg.src = ModerateDrizzle;
                break;
    
            case 54:
                userCode = 'dense drizzle';
                weatherImg.src = Drizzle;
                break;
    
            case 55:
                userCode = 'freezing drizzle';
                weatherImg.src = ModerateDrizzle;
                break;
    
            case 57:
                userCode = 'dense freezing drizzle';
                weatherImg.src = Drizzle;
                break;
    
            case 61:
                userCode = 'light rain';
                weatherImg.src = LightRain;
                break;
    
            case 63:
                userCode = 'moderate rain';
                weatherImg.src = ModerateRain;
                break;
    
            case 65:
                userCode = 'heavy rain';
                weatherImg.src = HeavyRain;
                break;
    
            case 66:
                userCode = 'light freezing rain';
                weatherImg.src = LightRain;
                break;
    
            case 67:
                userCode = 'heavy freezing rain';
                weatherImg.src = HeavyRain;
                break;
    
            case 71:
                userCode = 'light snow';
                weatherImg.src = LightSnow;
                break;
    
            case 73:
                userCode = 'moderate snow';
                weatherImg.src = ModerateSnow;
                break;
    
            case 75:
                userCode = 'heavy snow';
                weatherImg.src = HeavySnow;
                break;
    
            case 80:
                userCode = 'light showers';
                weatherImg.src = LightRain;
                break;
    
            case 81:
                userCode = 'moderate showers';
                weatherImg.src = ModerateRain;
                break;
    
            case 82:
                userCode = 'heavy showers';
                weatherImg.src = HeavyRain;
                break;
    
            case 85:
                userCode = 'light snow showers';
                weatherImg.src = LightSnow;
                break;
    
            case 86:
                userCode = 'heavy snow showers';
                weatherImg.src = HeavySnow;
                break;
    
            case 95:
                userCode = 'thunderstorms';
                weatherImg.src = StormCloud;
                break;
    
            default:
                break;    
        }
        return userCode;
    }

    userCode = await applyWeatherCode();
    conditions.textContent = `${userCode}`;
    areaEle.append(conditions);

    return {myWeather, applyWeatherCode};

}

export { printWeather };
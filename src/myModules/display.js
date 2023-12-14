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
import ClearNightStars from '../assets/Clear Night Stars.svg';
import CloudyNight from '../assets/Cloudy Night.svg';
import PartlyCloudyDay from '../assets/Partly Cloudy.svg';
import StormSM from '../assets/Storm Cloud SM.svg';
import StormyRainSM from '../assets/Stormy Rain SM.svg';
import Wind from '../assets/Wind.svg';

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
    
    const today = new Date(myWeather[1]['current']['time']);
    let todayDateDisplay = format(today, 'MMMM do yyyy');
    
    const dateDisplay = document.createElement('p');
    dateDisplay.textContent = `${todayDateDisplay}`;
    temperatureInfo.append(dateDisplay);

    temperatureInfo.dataset.weather = '';
    const areaEle = document.createElement('div');
    areaEle.classList.add('areaElement');
    temperatureInfo.append(areaEle);
    
    const weatherImg = new Image();
    weatherImg.classList.add('weatherImg');
    temperatureInfo.append(weatherImg);
    
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    

    const townName = document.createElement('p');
    townName.textContent = `${myWeather[0].townName}, ${myWeather[0].stateName}`;
    areaEle.append(townName);

    let fahrenheitSymbol = '&#8457';
    const temperatureEle = document.createElement('p');
    let temperature = Math.floor(myWeather[1].current['temperature_2m']);
    console.log(temperature)
    temperatureEle.innerHTML = `${Math.floor(temperature)} ${fahrenheitSymbol}`;
    areaEle.append(temperatureEle);
    
    const conditions = document.createElement('p');
    let userCode;

    if (myWeather[1].current['weather_code'] === 0 && myWeather[1].current['is_day'] === 1) {
        temperatureInfo.setAttribute('clearD', '');
        userCode = 'clear skies';
        weatherImg.src = SunRay;
    } else if (myWeather[1].current['weather_code'] === 1 && myWeather[1].current['is_day'] === 1) {
        temperatureInfo.setAttribute('clearD', '');
        userCode = 'mainly clear skies';
        weatherImg.src = SunRay;
    } else if (myWeather[1].current['weather_code'] === 2 && myWeather[1].current['is_day'] === 1) {
        temperatureInfo.setAttribute('cloudyD', '');
        userCode = 'partly cloudy skies';
        weatherImg.src = PartlyCloudyDay;
    } else if (myWeather[1].current['weather_code'] === 3 && myWeather[1].current['is_day'] === 1) {
        temperatureInfo.setAttribute('overcast', '');
        userCode = 'overcast';
        weatherImg.src = Cloudy;
    } else if (myWeather[1].current['weather_code'] === 45 && myWeather[1].current['is_day'] === 1) {
        temperatureInfo.setAttribute('overcast', '');
        userCode = 'foggy';
        weatherImg.src = Cloudy;
    } else if (myWeather[1].current['weather_code'] === 48 && myWeather[1].current['is_day'] === 1) {
        temperatureInfo.setAttribute('overcast', '');
        userCode = 'very foggy';
        weatherImg.src = Cloudy;
    } else if (myWeather[1].current['weather_code'] === 51 && myWeather[1].current['is_day'] === 1) {
        temperatureInfo.setAttribute('drizzleD', '');
        userCode = 'light drizzle';
        weatherImg.src = LightDrizzle;
    } else if (myWeather[1].current['weather_code'] === 53 && myWeather[1].current['is_day'] === 1) {
        temperatureInfo.setAttribute('drizzleD', '');
        userCode = 'moderate drizzle';
        weatherImg.src = ModerateDrizzle;
    } else if (myWeather[1].current['weather_code'] === 54 && myWeather[1].current['is_day'] === 1) {
        temperatureInfo.setAttribute('drizzleD', '');
        userCode = 'dense drizzle';
        weatherImg.src = Drizzle;
    } else if (myWeather[1].current['weather_code'] === 55 && myWeather[1].current['is_day'] === 1) {
        temperatureInfo.setAttribute('drizzleD', '');
        userCode = 'freezing drizzle';
        weatherImg.src = ModerateDrizzle;
    } else if (myWeather[1].current['weather_code'] === 57 && myWeather[1].current['is_day'] === 1) {
        temperatureInfo.setAttribute('drizzleD', '');
        userCode = 'dense freezing drizzle';
        weatherImg.src = Drizzle;
    } else if (myWeather[1].current['weather_code'] === 61 && myWeather[1].current['is_day'] === 1) {
        temperatureInfo.setAttribute('rainD', '');
        userCode = 'light rain';
        weatherImg.src = LightRain;
    } else if (myWeather[1].current['weather_code'] === 63 && myWeather[1].current['is_day'] === 1) {
        temperatureInfo.setAttribute('rainD', '');
        userCode = 'moderate rain';
        weatherImg.src = ModerateRain;
    } else if (myWeather[1].current['weather_code'] === 65 && myWeather[1].current['is_day'] === 1) {
        temperatureInfo.setAttribute('rainD', '');
        userCode = 'heavy rain';
        weatherImg.src = HeavyRain;
    } else if (myWeather[1].current['weather_code'] === 66 && myWeather[1].current['is_day'] === 1) {
        temperatureInfo.setAttribute('rainD', '');
        userCode = 'light freezing rain';
        weatherImg.src = LightRain;
    } else if (myWeather[1].current['weather_code'] === 67 && myWeather[1].current['is_day'] === 1) {
        temperatureInfo.setAttribute('rainD', '');
        userCode = 'heavy freezing rain';
        weatherImg.src = HeavyRain;
    } else if (myWeather[1].current['weather_code'] === 71 && myWeather[1].current['is_day'] === 1) {
        temperatureInfo.setAttribute('snowD', '');
        userCode = 'light snow';
        weatherImg.src = LightSnow;
    } else if (myWeather[1].current['weather_code'] === 73 && myWeather[1].current['is_day'] === 1) {
        temperatureInfo.setAttribute('snowD', '');
        userCode = 'moderate snow';
        weatherImg.src = ModerateSnow;
    } else if (myWeather[1].current['weather_code'] === 75 && myWeather[1].current['is_day'] === 1) {
        temperatureInfo.setAttribute('snowD', '');
        userCode = 'heavy snow';
        weatherImg.src = HeavySnow;
    } else if (myWeather[1].current['weather_code'] === 80 && myWeather[1].current['is_day'] === 1) {
        temperatureInfo.setAttribute('rainD', '');
        userCode = 'light showers';
        weatherImg.src = LightRain;
    } else if (myWeather[1].current['weather_code'] === 81 && myWeather[1].current['is_day'] === 1) {
        temperatureInfo.setAttribute('rainD', '');
        userCode = 'moderate showers';
        weatherImg.src = ModerateRain;
    } else if (myWeather[1].current['weather_code'] === 82 && myWeather[1].current['is_day'] === 1) {
        temperatureInfo.setAttribute('rainD', '');
        userCode = 'heavy showers';
        weatherImg.src = HeavyRain;
    } else if (myWeather[1].current['weather_code'] === 85 && myWeather[1].current['is_day'] === 1) {
        temperatureInfo.setAttribute('snowD', '');
        userCode = 'light snow showers';
        weatherImg.src = LightSnow;
    } else if (myWeather[1].current['weather_code'] === 86 && myWeather[1].current['is_day'] === 1) {
        temperatureInfo.setAttribute('snowD', '');
        userCode = 'heavy snow showers';
        weatherImg.src = HeavySnow;
    } else if (myWeather[1].current['weather_code'] === 95 && myWeather[1].current['is_day'] === 1) {
        temperatureInfo.setAttribute('rainD', '');
        userCode = 'Thunderstorms';
        weatherImg.src = StormCloud;
    } else if (myWeather[1].current['weather_code'] === 0 && myWeather[1].current['is_day'] === 0) {
        temperatureInfo.setAttribute('clearN', '');
        userCode = 'clear skies';
        weatherImg.src = ClearNightStars;
    } else if (myWeather[1].current['weather_code'] === 1 && myWeather[1].current['is_day'] === 0) {
        temperatureInfo.setAttribute('clearN', '');
        userCode = 'mainly clear skies';
        weatherImg.src = ClearNightStars;
    } else if (myWeather[1].current['weather_code'] === 2 && myWeather[1].current['is_day'] === 0) {
        temperatureInfo.setAttribute('cloudyN', '');
        userCode = 'partly cloudy skies';
        weatherImg.src = CloudyNight;
    } else if (myWeather[1].current['weather_code'] === 3 && myWeather[1].current['is_day'] === 0) {
        temperatureInfo.setAttribute('overcast', '');
        userCode = 'overcast';
        weatherImg.src = Cloudy;
    } else if (myWeather[1].current['weather_code'] === 45 && myWeather[1].current['is_day'] === 0) {
        temperatureInfo.setAttribute('overcast', '');
        userCode = 'foggy';
        weatherImg.src = Cloudy;
    } else if (myWeather[1].current['weather_code'] === 48 && myWeather[1].current['is_day'] === 0) {
        temperatureInfo.setAttribute('overcast', '');
        userCode = 'very foggy';
        weatherImg.src = Cloudy;
    } else if (myWeather[1].current['weather_code'] === 51 && myWeather[1].current['is_day'] === 0) {
        temperatureInfo.setAttribute('drizzleN', '');
        userCode = 'light drizzle';
        weatherImg.src = LightDrizzle;
    } else if (myWeather[1].current['weather_code'] === 53 && myWeather[1].current['is_day'] === 0) {
        temperatureInfo.setAttribute('drizzleN', '');
        userCode = 'moderate drizzle';
        weatherImg.src = ModerateDrizzle;
    } else if (myWeather[1].current['weather_code'] === 54 && myWeather[1].current['is_day'] === 0) {
        temperatureInfo.setAttribute('drizzleN', '');
        userCode = 'dense drizzle';
        weatherImg.src = Drizzle;
    } else if (myWeather[1].current['weather_code'] === 55 && myWeather[1].current['is_day'] === 0) {
        temperatureInfo.setAttribute('drizzleN', '');
        userCode = 'freezing drizzle';
        weatherImg.src = ModerateDrizzle;
    } else if (myWeather[1].current['weather_code'] === 57 && myWeather[1].current['is_day'] === 0) {
        temperatureInfo.setAttribute('drizzleN', '');
        userCode = 'dense freezing drizzle';
        weatherImg.src = Drizzle;
    } else if (myWeather[1].current['weather_code'] === 61 && myWeather[1].current['is_day'] === 0) {
        temperatureInfo.setAttribute('drizzleN', '');
        userCode = 'light rain';
        weatherImg.src = LightRain;
    } else if (myWeather[1].current['weather_code'] === 63 && myWeather[1].current['is_day'] === 0) {
        temperatureInfo.setAttribute('drizzleN', '');
        userCode = 'moderate rain';
        weatherImg.src = ModerateRain;
    } else if (myWeather[1].current['weather_code'] === 65 && myWeather[1].current['is_day'] === 0) {
        temperatureInfo.setAttribute('drizzleN', '');
        userCode = 'heavy rain';
        weatherImg.src = HeavyRain;
    } else if (myWeather[1].current['weather_code'] === 66 && myWeather[1].current['is_day'] === 0) {
        temperatureInfo.setAttribute('drizzleN', '');
        userCode = 'light freezing rain';
        weatherImg.src = LightRain;
    } else if (myWeather[1].current['weather_code'] === 67 && myWeather[1].current['is_day'] === 0) {
        temperatureInfo.setAttribute('drizzleN', '');
        userCode = 'heavy freezing rain';
        weatherImg.src = HeavyRain;
    } else if (myWeather[1].current['weather_code'] === 71 && myWeather[1].current['is_day'] === 0) {
        temperatureInfo.setAttribute('snowN', '');
        userCode = 'light snow';
        weatherImg.src = LightSnow;
    } else if (myWeather[1].current['weather_code'] === 73 && myWeather[1].current['is_day'] === 0) {
        temperatureInfo.setAttribute('snowN', '');
        userCode = 'moderate snow';
        weatherImg.src = ModerateSnow;
    } else if (myWeather[1].current['weather_code'] === 75 && myWeather[1].current['is_day'] === 0) {
        temperatureInfo.setAttribute('snowN', '');
        userCode = 'heavy snow';
        weatherImg.src = HeavySnow;
    } else if (myWeather[1].current['weather_code'] === 80 && myWeather[1].current['is_day'] === 0) {
        temperatureInfo.setAttribute('drizzleN', '');
        userCode = 'light showers';
        weatherImg.src = LightRain;
    } else if (myWeather[1].current['weather_code'] === 81 && myWeather[1].current['is_day'] === 0) {
        temperatureInfo.setAttribute('drizzleN', '');
        userCode = 'moderate showers';
        weatherImg.src = ModerateRain;
    } else if (myWeather[1].current['weather_code'] === 82 && myWeather[1].current['is_day'] === 0) {
        temperatureInfo.setAttribute('drizzleN', '');
        userCode = 'heavy showers';
        weatherImg.src = HeavyRain;
    } else if (myWeather[1].current['weather_code'] === 85 && myWeather[1].current['is_day'] === 0) {
        temperatureInfo.setAttribute('snowN', '');
        userCode = 'light snow showers';
        weatherImg.src = LightSnow;
    } else if (myWeather[1].current['weather_code'] === 86 && myWeather[1].current['is_day'] === 0) {
        temperatureInfo.setAttribute('snowN', '');
        userCode = 'heavy snow showers';
        weatherImg.src = HeavySnow;
    } else if (myWeather[1].current['weather_code'] === 95 && myWeather[1].current['is_day'] === 0) {
        temperatureInfo.setAttribute('drizzleN', '');
        userCode = 'Thunderstorms';
        weatherImg.src = StormyRainSM;
    }

    const feeling = document.createElement('span');

    if (temperature < 30) {
        feeling.textContent = 'and very cold';
    } else if (temperature < 40) {
        feeling.textContent = 'and cold';
    } else if (temperature < 50) {
        feeling.textContent = 'and warming up';
    } else if (temperature < 60) {
        feeling.textContent = 'and mild';
    } else if (temperature < 80) {
        feeling.textContent = 'and warm';
    } else {
        feeling.textContent = 'and very hot';
    }

    conditions.textContent = `${userCode} `;
    conditions.append(feeling);
    areaEle.append(conditions);

    return myWeather;

}

export { printWeather };

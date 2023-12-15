import { printWeather } from "./display";
import { closestTo, parseISO, closestIndexTo, eachHourOfInterval, addHours, addDays, format, subHours } from "date-fns";
import { formatInTimeZone, utcToZonedTime } from "date-fns-tz";
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




function eraseForecastInfo() {
    const forecastInfo = document.querySelector('.forecast');
    if (forecastInfo.hasAttribute('data-weather')) {
        forecastInfo.removeAttribute('data-weather', '');
    }
    while (forecastInfo.firstChild) {
        forecastInfo.removeChild(forecastInfo.firstChild)
    }
}

async function displayForecast() {
    let myWeather = await printWeather();
    eraseForecastInfo();
    const forecast = document.querySelector('.forecast');
    forecast.setAttribute('data-weather', '');
    // get the time from the time array and convert it into real time
    // combine the time with the matching temperature and weather code
    const today = new Date(myWeather[1]['current']['time']);
    
    const todayWeatherArr = myWeather[1]['hourly'];
    let hourlyArr = myWeather[1]['hourly']['time'];
    let finishedHourlyArr = [];
    for (let hour of hourlyArr) {
        finishedHourlyArr.push(parseISO(hour));
    }

    let closestDate = closestTo(today, finishedHourlyArr);
    let advancedDate;
    let closestIndexDate;
    /* add an hour to each advanced date, grab the index from it
    and display the temperature from it
    */
   
    const paneTitle = document.createElement('h2');
    paneTitle.textContent = `8 hour forecast`;
    paneTitle.classList.add('paneTitle');
    forecast.append(paneTitle);

    for (let i = 0; i < 8; i++) {
        advancedDate = addHours(closestDate, i + 1);
        
        closestIndexDate = closestIndexTo(advancedDate, finishedHourlyArr);
        
        const forecastPane = document.createElement('div');
        forecastPane.classList.add('forecastPane');
        forecast.append(forecastPane);


        const hoursDisplay = document.createElement('p');
        hoursDisplay.classList.add('hoursDisplay');
        forecastPane.append(hoursDisplay);
        
        let whatHour = subHours(advancedDate, 5);
        whatHour = format(whatHour, 'h bbbb');
        hoursDisplay.textContent = `${whatHour}`;

        let fahrenheitSymbol = '&#8457';

        const conditionContainer = document.createElement('div');
        conditionContainer.setAttribute('home', '');
        conditionContainer.classList.add('conditionContainer');
        forecastPane.append(conditionContainer)

        const tempForecastDisplay = document.createElement('p');
        const temperature = Math.floor(todayWeatherArr['temperature_2m'][closestIndexDate]);
        const formerTemp = Math.floor(todayWeatherArr['temperature_2m'][closestIndexDate - 1]);
        
        tempForecastDisplay.classList.add('tempForecastDisplay');
        conditionContainer.append(tempForecastDisplay);
        tempForecastDisplay.innerHTML = `${temperature} ${fahrenheitSymbol}`;

        const conditions = document.createElement('p');
        const weatherImg = new Image();
        weatherImg.classList.add('secondWeatherImg');
        let userCode;

        // the background color of the forecast panes will change depending on the weather code that is provided as well as the time of day

        if (todayWeatherArr['weather_code'][closestIndexDate] === 0 && todayWeatherArr['is_day'][closestIndexDate] === 1) {
            forecastPane.setAttribute('clearD', '');
            userCode = 'clear skies';
            weatherImg.src = SunRay;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 1 && todayWeatherArr['is_day'][closestIndexDate] === 1) {
            forecastPane.setAttribute('clearD', '');
            userCode = 'mainly clear skies';
            weatherImg.src = SunRay;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 2 && todayWeatherArr['is_day'][closestIndexDate] === 1) {
            forecastPane.setAttribute('cloudyD', '');
            userCode = 'partly cloudy skies';
            weatherImg.src = PartlyCloudyDay;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 3 && todayWeatherArr['is_day'][closestIndexDate] === 1) {
            forecastPane.setAttribute('overcast', '');
            userCode = 'overcast';
            weatherImg.src = Cloudy;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 45 && todayWeatherArr['is_day'][closestIndexDate] === 1) {
            forecastPane.setAttribute('overcast', '');
            userCode = 'foggy';
            weatherImg.src = Cloudy;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 48 && todayWeatherArr['is_day'][closestIndexDate] === 1) {
            forecastPane.setAttribute('overcast', '');
            userCode = 'very foggy';
            weatherImg.src = Cloudy;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 51 && todayWeatherArr['is_day'][closestIndexDate] === 1) {
            forecastPane.setAttribute('drizzleD', '');
            userCode = 'light drizzle';
            weatherImg.src = LightDrizzle;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 53 && todayWeatherArr['is_day'][closestIndexDate] === 1) {
            forecastPane.setAttribute('drizzleD', '');
            userCode = 'moderate drizzle';
            weatherImg.src = ModerateDrizzle;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 54 && todayWeatherArr['is_day'][closestIndexDate] === 1) {
            forecastPane.setAttribute('drizzleD', '');
            userCode = 'dense drizzle';
            weatherImg.src = Drizzle;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 55 && todayWeatherArr['is_day'][closestIndexDate] === 1) {
            forecastPane.setAttribute('drizzleD', '');
            userCode = 'freezing drizzle';
            weatherImg.src = ModerateDrizzle;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 57 && todayWeatherArr['is_day'][closestIndexDate] === 1) {
            forecastPane.setAttribute('drizzleD', '');
            userCode = 'dense freezing drizzle';
            weatherImg.src = Drizzle;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 61 && todayWeatherArr['is_day'][closestIndexDate] === 1) {
            forecastPane.setAttribute('rainD', '');
            userCode = 'light rain';
            weatherImg.src = LightRain;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 63 && todayWeatherArr['is_day'][closestIndexDate] === 1) {
            forecastPane.setAttribute('rainD', '');
            userCode = 'moderate rain';
            weatherImg.src = ModerateRain;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 65 && todayWeatherArr['is_day'][closestIndexDate] === 1) {
            forecastPane.setAttribute('rainD', '');
            userCode = 'heavy rain';
            weatherImg.src = HeavyRain;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 66 && todayWeatherArr['is_day'][closestIndexDate] === 1) {
            forecastPane.setAttribute('rainD', '');
            userCode = 'light freezing rain';
            weatherImg.src = LightRain;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 67 && todayWeatherArr['is_day'][closestIndexDate] === 1) {
            forecastPane.setAttribute('rainD', '');
            userCode = 'heavy freezing rain';
            weatherImg.src = HeavyRain;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 71 && todayWeatherArr['is_day'][closestIndexDate] === 1) {
            forecastPane.setAttribute('snowD', '');
            userCode = 'light snow';
            weatherImg.src = LightSnow;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 73 && todayWeatherArr['is_day'][closestIndexDate] === 1) {
            forecastPane.setAttribute('snowD', '');
            userCode = 'moderate snow';
            weatherImg.src = ModerateSnow;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 75 && todayWeatherArr['is_day'][closestIndexDate] === 1) {
            forecastPane.setAttribute('snowD', '');
            userCode = 'heavy snow';
            weatherImg.src = HeavySnow;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 80 && todayWeatherArr['is_day'][closestIndexDate] === 1) {
            forecastPane.setAttribute('rainD', '');
            userCode = 'light showers';
            weatherImg.src = LightRain;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 81 && todayWeatherArr['is_day'][closestIndexDate] === 1) {
            forecastPane.setAttribute('rainD', '');
            userCode = 'moderate showers';
            weatherImg.src = ModerateRain;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 82 && todayWeatherArr['is_day'][closestIndexDate] === 1) {
            forecastPane.setAttribute('rainD', '');
            userCode = 'heavy showers';
            weatherImg.src = HeavyRain;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 85 && todayWeatherArr['is_day'][closestIndexDate] === 1) {
            forecastPane.setAttribute('snowD', '');
            userCode = 'light snow showers';
            weatherImg.src = LightSnow;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 86 && todayWeatherArr['is_day'][closestIndexDate] === 1) {
            forecastPane.setAttribute('snowD', '');
            userCode = 'heavy snow showers';
            weatherImg.src = HeavySnow;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 95 && todayWeatherArr['is_day'][closestIndexDate] === 1) {
            forecastPane.setAttribute('rainD', '');
            userCode = 'Thunderstorms';
            weatherImg.src = StormCloud;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 0 && todayWeatherArr['is_day'][closestIndexDate] === 0) {
            forecastPane.setAttribute('clearN', '');
            userCode = 'clear skies';
            weatherImg.src = ClearNightStars;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 1 && todayWeatherArr['is_day'][closestIndexDate] === 0) {
            forecastPane.setAttribute('clearN', '');
            userCode = 'mainly clear skies';
            weatherImg.src = ClearNightStars;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 2 && todayWeatherArr['is_day'][closestIndexDate] === 0) {
            forecastPane.setAttribute('cloudyN', '');
            userCode = 'partly cloudy skies';
            weatherImg.src = CloudyNight;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 3 && todayWeatherArr['is_day'][closestIndexDate] === 0) {
            forecastPane.setAttribute('overcast', '');
            userCode = 'overcast';
            weatherImg.src = Cloudy;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 45 && todayWeatherArr['is_day'][closestIndexDate] === 0) {
            forecastPane.setAttribute('overcast', '');
            userCode = 'foggy';
            weatherImg.src = Cloudy;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 48 && todayWeatherArr['is_day'][closestIndexDate] === 0) {
            forecastPane.setAttribute('overcast', '');
            userCode = 'very foggy';
            weatherImg.src = Cloudy;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 51 && todayWeatherArr['is_day'][closestIndexDate] === 0) {
            forecastPane.setAttribute('drizzleN', '');
            userCode = 'light drizzle';
            weatherImg.src = LightDrizzle;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 53 && todayWeatherArr['is_day'][closestIndexDate] === 0) {
            forecastPane.setAttribute('drizzleN', '');
            userCode = 'moderate drizzle';
            weatherImg.src = ModerateDrizzle;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 54 && todayWeatherArr['is_day'][closestIndexDate] === 0) {
            forecastPane.setAttribute('drizzleN', '');
            userCode = 'dense drizzle';
            weatherImg.src = Drizzle;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 55 && todayWeatherArr['is_day'][closestIndexDate] === 0) {
            forecastPane.setAttribute('drizzleN', '');
            userCode = 'freezing drizzle';
            weatherImg.src = ModerateDrizzle;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 57 && todayWeatherArr['is_day'][closestIndexDate] === 0) {
            forecastPane.setAttribute('drizzleN', '');
            userCode = 'dense freezing drizzle';
            weatherImg.src = Drizzle;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 61 && todayWeatherArr['is_day'][closestIndexDate] === 0) {
            forecastPane.setAttribute('drizzleN', '');
            userCode = 'light rain';
            weatherImg.src = LightRain;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 63 && todayWeatherArr['is_day'][closestIndexDate] === 0) {
            forecastPane.setAttribute('drizzleN', '');
            userCode = 'moderate rain';
            weatherImg.src = ModerateRain;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 65 && todayWeatherArr['is_day'][closestIndexDate] === 0) {
            forecastPane.setAttribute('drizzleN', '');
            userCode = 'heavy rain';
            weatherImg.src = HeavyRain;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 66 && todayWeatherArr['is_day'][closestIndexDate] === 0) {
            forecastPane.setAttribute('drizzleN', '');
            userCode = 'light freezing rain';
            weatherImg.src = LightRain;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 67 && todayWeatherArr['is_day'][closestIndexDate] === 0) {
            forecastPane.setAttribute('drizzleN', '');
            userCode = 'heavy freezing rain';
            weatherImg.src = HeavyRain;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 71 && todayWeatherArr['is_day'][closestIndexDate] === 0) {
            forecastPane.setAttribute('snowN', '');
            userCode = 'light snow';
            weatherImg.src = LightSnow;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 73 && todayWeatherArr['is_day'][closestIndexDate] === 0) {
            forecastPane.setAttribute('snowN', '');
            userCode = 'moderate snow';
            weatherImg.src = ModerateSnow;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 75 && todayWeatherArr['is_day'][closestIndexDate] === 0) {
            forecastPane.setAttribute('snowN', '');
            userCode = 'heavy snow';
            weatherImg.src = HeavySnow;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 80 && todayWeatherArr['is_day'][closestIndexDate] === 0) {
            forecastPane.setAttribute('drizzleN', '');
            userCode = 'light showers';
            weatherImg.src = LightRain;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 81 && todayWeatherArr['is_day'][closestIndexDate] === 0) {
            forecastPane.setAttribute('drizzleN', '');
            userCode = 'moderate showers';
            weatherImg.src = ModerateRain;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 82 && todayWeatherArr['is_day'][closestIndexDate] === 0) {
            forecastPane.setAttribute('drizzleN', '');
            userCode = 'heavy showers';
            weatherImg.src = HeavyRain;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 85 && todayWeatherArr['is_day'][closestIndexDate] === 0) {
            forecastPane.setAttribute('snowN', '');
            userCode = 'light snow showers';
            weatherImg.src = LightSnow;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 86 && todayWeatherArr['is_day'][closestIndexDate] === 0) {
            forecastPane.setAttribute('snowN', '');
            userCode = 'heavy snow showers';
            weatherImg.src = HeavySnow;
        } else if (todayWeatherArr['weather_code'][closestIndexDate] === 95 && todayWeatherArr['is_day'][closestIndexDate] === 0) {
            forecastPane.setAttribute('drizzleN', '');
            userCode = 'Thunderstorms';
            weatherImg.src = StormyRainSM;
        }

        const feeling = document.createElement('span');

        if (temperature < formerTemp) {
            feeling.textContent = 'and cooling down';
        } else if (temperature > formerTemp) {
            feeling.textContent = 'and warming up';
        }

    conditions.textContent = `${userCode} `;
    conditions.append(feeling);
    conditionContainer.append(conditions);
    forecastPane.append(weatherImg);
    }        
   return myWeather;
}

export { displayForecast, eraseForecastInfo };
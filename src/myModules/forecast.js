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

async function displayForecast() {
    const forcastInfo = document.querySelector('.forecast');
    let myWeather = await printWeather();
    console.log(myWeather)
    const forecast = document.querySelector('.forecast');
    forecast.setAttribute('data-weather', '');
    // get the time from the time array and convert it into real time
    // combine the time with the matching temperature and weather code
    const today = new Date(myWeather[1]['current']['time']);
    
    // const formattedDate = utcToZonedTime(today, 'America/New_York', 'yyyy-MM-dd HH:mm:ss');
    const todayWeatherArr = myWeather[1]['hourly'];
    console.log(todayWeatherArr)
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
   
    console.log(today) 
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
        conditionContainer.classList.add('conditionContainer');
        forecastPane.append(conditionContainer)

        const tempForecastDisplay = document.createElement('p');
        tempForecastDisplay.classList.add('tempForecastDisplay');
        conditionContainer.append(tempForecastDisplay);
        tempForecastDisplay.innerHTML = `${Math.floor(todayWeatherArr['temperature_2m'][closestIndexDate])} ${fahrenheitSymbol}`;

        const conditions = document.createElement('p');
        const weatherImg = new Image();
        weatherImg.classList.add('secondWeatherImg');
        let userCode;

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
            // weatherImg.src = Cloudy;
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
            weatherImg.src = StormCloud;
        }

    //     switch(todayWeatherArr['weather_code'][closestIndexDate]) {
    //         case 0:
    //             userCode = 'clear skies';
    //             weatherImg.src = SunRay;
    //             break;
            
    //         case 1:
    //             userCode = 'mainly clear skies';
    //             weatherImg.src = SunRay;
    //             break;
    
    //         case 2:
    //             userCode = 'partly cloudy skies';
    //             weatherImg.src = Sun;
    //             break;
    
    //         case 3:
    //             userCode = 'overcast';
    //             weatherImg.src = Cloudy;
    //             break;
            
    //         case 45:
    //             userCode = 'foggy';
    //             weatherImg.src = Cloudy;
    //             break;
    
    //         case 48:
    //             userCode = 'very foggy';
    //             weatherImg.src = Cloudy;
    //             break;
    
    //         case 51:
    //             userCode = 'light drizzle';
    //             weatherImg.src = LightDrizzle;
    //             break;
            
    //         case 53:
    //             userCode = 'moderate drizzle';
    //             weatherImg.src = ModerateDrizzle;
    //             break;
    
    //         case 54:
    //             userCode = 'dense drizzle';
    //             weatherImg.src = Drizzle;
    //             break;
    
    //         case 55:
    //             userCode = 'freezing drizzle';
    //             weatherImg.src = ModerateDrizzle;
    //             break;
    
    //         case 57:
    //             userCode = 'dense freezing drizzle';
    //             weatherImg.src = Drizzle;
    //             break;
    
    //         case 61:
    //             userCode = 'light rain';
    //             weatherImg.src = LightRain;
    //             break;
    
    //         case 63:
    //             userCode = 'moderate rain';
    //             weatherImg.src = ModerateRain;
    //             break;
    
    //         case 65:
    //             userCode = 'heavy rain';
    //             weatherImg.src = HeavyRain;
    //             break;
    
    //         case 66:
    //             userCode = 'light freezing rain';
    //             weatherImg.src = LightRain;
    //             break;
    
    //         case 67:
    //             userCode = 'heavy freezing rain';
    //             weatherImg.src = HeavyRain;
    //             break;
    
    //         case 71:
    //             userCode = 'light snow';
    //             weatherImg.src = LightSnow;
    //             break;
    
    //         case 73:
    //             userCode = 'moderate snow';
    //             weatherImg.src = ModerateSnow;
    //             break;
    
    //         case 75:
    //             userCode = 'heavy snow';
    //             weatherImg.src = HeavySnow;
    //             break;
    
    //         case 80:
    //             userCode = 'light showers';
    //             weatherImg.src = LightRain;
    //             break;
    
    //         case 81:
    //             userCode = 'moderate showers';
    //             weatherImg.src = ModerateRain;
    //             break;
    
    //         case 82:
    //             userCode = 'heavy showers';
    //             weatherImg.src = HeavyRain;
    //             break;
    
    //         case 85:
    //             userCode = 'light snow showers';
    //             weatherImg.src = LightSnow;
    //             break;
    
    //         case 86:
    //             userCode = 'heavy snow showers';
    //             weatherImg.src = HeavySnow;
    //             break;
    
    //         case 95:
    //             userCode = 'thunderstorms';
    //             weatherImg.src = StormCloud;
    //             break;
    
    //         default:
    //             break;    
    //     }
    //     conditions.textContent = `${userCode}`;
    //     forecastPane.append(conditions);
    //     forecastPane.append(weatherImg);
    // }
    
    /* finish styling the forecast pane tomorrow and create a picture to suit the nighttime,
    probably a moon with some stars or something. Use that with the is_day portion of the array
    to tell if it's day or night and display the appropriate picture. */
    conditions.textContent = `${userCode}`;
    conditionContainer.append(conditions);
    forecastPane.append(weatherImg);
    }

    
    
   
}

export { displayForecast };
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

async function displayForecast() {
    const forcastInfo = document.querySelector('.forecast');
    let myWeather = await printWeather();
    const forecast = document.querySelector('.forecast');
    forecast.setAttribute('data-weather', '');
    // get the time from the time array and convert it into real time
    // combine the time with the matching temperature and weather code
    const today = new Date(myWeather['myWeather'][1]['current']['time']);
    
    // const formattedDate = utcToZonedTime(today, 'America/New_York', 'yyyy-MM-dd HH:mm:ss');
    const todayWeatherArr = myWeather['myWeather'][1]['hourly'];
    console.log(todayWeatherArr)
    let hourlyArr = myWeather['myWeather'][1]['hourly']['time'];
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
        forecastPane.append(hoursDisplay);
        
        let whatHour = subHours(advancedDate, 5);
        whatHour = format(whatHour, 'h bbbb');
        hoursDisplay.textContent = `${whatHour}`;

        let fahrenheitSymbol = '&#8457';

        const tempForecastDisplay = document.createElement('p');
        tempForecastDisplay.classList.add('tempForecastDisplay');
        forecastPane.append(tempForecastDisplay);
        tempForecastDisplay.innerHTML = `${todayWeatherArr['temperature_2m'][closestIndexDate]} ${fahrenheitSymbol}`;

        const conditions = document.createElement('p');
        const weatherImg = new Image();
        weatherImg.classList.add('secondWeatherImg');
        let userCode;

        switch(todayWeatherArr['weather_code'][closestIndexDate]) {
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
        conditions.textContent = `${userCode}`;
        forecastPane.append(conditions);
        forecastPane.append(weatherImg);
    }
    

    
    
    
   
}

export { displayForecast };
import { printWeather } from "./display";
import { displayForecast } from "./forecast";
import { closestTo, parseISO, closestIndexTo, eachHourOfInterval, addHours, addDays, format, subHours } from "date-fns";
import Wind from '../assets/Wind.svg';

async function displayCurrentWindInfo() {
    let myWeather = await displayForecast();
    const temperatureInfo = document.querySelector('.temperatureInfo');

    const windInfo = document.createElement('div');
    windInfo.classList.add('windInfo');

    const windImg = new Image();
    windImg.classList.add('windImg');
    windImg.src = Wind;
    windInfo.append(windImg);

    const windContainer = document.createElement('div');
    windContainer.classList.add('windContainer');

    const windSpeedTitle = document.createElement('p');
    windSpeedTitle.textContent = 'Wind Speed';
    windContainer.append(windSpeedTitle);

    const windSpeed = document.createElement('p');
    const windSpeedAmount = `${myWeather[1]['current']['wind_speed_10m']} mph`;
    windSpeed.textContent = windSpeedAmount;
    windContainer.append(windSpeed);


    const gustContainer = document.createElement('div');
    gustContainer.classList.add('gustContainer');

    const gustSpeedTitle = document.createElement('p');
    gustSpeedTitle.textContent = 'Wind Gust Speed';
    gustContainer.append(gustSpeedTitle);

    const gustSpeed = document.createElement('p');
    const windGusts = `${myWeather[1]['current']['wind_gusts_10m']} mph`;
    gustSpeed.textContent = windGusts;
    gustContainer.append(gustSpeed);

    windInfo.append(windContainer);
    windInfo.append(gustContainer);
    temperatureInfo.append(windInfo);

    console.log(myWeather)
}

export { displayCurrentWindInfo };
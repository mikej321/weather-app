import './styles/style.sass';

const content = document.querySelector('.content');
const areaChoice = document.querySelector('.areaChoice')
const tempInfo = document.querySelector('.temperatureInfo')
const forecast = document.querySelector('.forecast');

const showWeather = () => {
    tempInfo.setAttribute('data-weather', '');
    forecast.setAttribute('data-weather', '');
}

showWeather()
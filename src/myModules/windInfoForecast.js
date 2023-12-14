import { printForecastWeather } from "./dailyForecast";
import { closestTo, parseISO, closestIndexTo, eachHourOfInterval, addHours, addDays, format, subHours } from "date-fns";

async function displayEtcInfoForecast() {
    let myWeather = await printForecastWeather();
    const conditionContainer = document.querySelectorAll('.conditionContainer');

    for (let i = 1; i < 8; i++) {
        const sunContainer = document.createElement('div');
        sunContainer.classList.add('sunContainer');

        const sunriseInfo = new Date(myWeather['sunrise'][i]);
        const fixedSunrise = subHours(sunriseInfo, 5);
        const formattedSunrise = format(fixedSunrise, 'h:mm aaaa');
        const sunriseEle = document.createElement('p');
        sunriseEle.innerHTML = `sunrise<hr /><br /> ${formattedSunrise}`;
        sunContainer.append(sunriseEle);

        const sunsetInfo = new Date(myWeather['sunset'][i]);
        const fixedSunset = subHours(sunsetInfo, 5);
        const formattedSunset = format(fixedSunset, 'h:mm aaaa');
        const sunsetEle = document.createElement('p');
        sunsetEle.innerHTML = `sunset<hr /><br /> ${formattedSunset}`;
        sunContainer.append(sunsetEle);

        conditionContainer[i - 1].append(sunContainer);
    }

}

export { displayEtcInfoForecast };
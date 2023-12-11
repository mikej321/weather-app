import { setName } from "./search";

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

    console.log(myArea);
    // grab the clicked item just like I did in the home page and display it in a 7-day forecast

    // I might add it to localStorage if need be
}

export { grabForecast };
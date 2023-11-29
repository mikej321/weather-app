import { content } from '../index';


async function fetchArea() {
    // selectors for search functions
    const searchBar = document.querySelector('#zipCode');
    const searchButton = document.querySelector('.zipContainer > button');

    // fetch properties for the area selection
    let areaArr = [];
    let input = searchBar.value;
    let url = `https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=10&language=en&format=json`;
    let myResponse = await fetch(url, {
        mode: 'cors',
    });
    let myArea = await myResponse.json();
    /* everything that I want pulled from the JSON
    will be included in this loop. Feel free to update the values
    here if you need extra areas pulled from the JSON. */
    for (let area of myArea.results) {
        let stateName = area.admin1;
        let countyName = area.admin2;
        let countryName = area.country;
        let townName = area.name;
        let townLat = area.latitude;
        let townLon = area.longitude;
        /* some of the areas that show up in the search 
        have no zip, so if they don't, I have
        made a default value for those */
        let postCode = '';
        if (area.postcodes === undefined) {
            postCode = postCode;
        } else {
            postCode = area.postcodes.pop();
        }
        
        let areaObj = {
            stateName,
            countyName,
            countryName,
            townName,
            postCode,
            townLat,
            townLon,
        };
        // every area that is pulled will be pushed into an arr
        areaArr.push(areaObj);
    }
    return areaArr;
}

/* function that erases the choices on screen every time a new
search is performed */

function eraseAreaContents() {
    const areaChoice = document.querySelector('.areaChoice');
    while (areaChoice.firstChild) {
        areaChoice.removeChild(areaChoice.firstChild);
    }
}

async function pickArea() {
    const areaChoice = document.querySelector('.areaChoice');
    let areaArr = await fetchArea();
    eraseAreaContents();

    for (let [index, area] of areaArr.entries()) {
        areaChoice.setAttribute('data-choice', '');
        const areaEl = document.createElement('div');
        areaEl.classList.add('area');
        areaEl.dataset.choice = index;
        areaChoice.append(areaEl);

        const areaP = document.createElement('p');
        areaP.textContent = area.townName + ',' + ' ';
        areaEl.append(areaP);

        const stateSpan = document.createElement('span');
        stateSpan.classList.add('stateSpan');
        stateSpan.textContent = area.stateName + ' ';
        areaP.append(stateSpan);

        const zipSpan = document.createElement('span');
        zipSpan.classList.add('zipSpan');
        zipSpan.textContent = area.postCode;
        areaP.append(zipSpan);
    }

    const areas = document.querySelectorAll('.area');
    let newArr = [areaArr, areas];
    return newArr;
}

export { pickArea }
"use strict";

// GLOBAL VARIABLE
let savedCityId = window.sessionStorage.getItem("stad");

// HEADER FUNKTIONER
// funktion för att hämta landets namn
function renderCountryName (id) {
    let countryName = COUNTRIES.find(country => {
        if (country.id == id) {
            return true;
        }
    });
     return countryName.name;
}

// funktion som visar bakgrundsbild bakom cityName.
function cityImage(cityId){
    for( let city of DB.CITIES){
        if(city.id == cityId){
            let cityImage = document.getElementById("wrapper");
            cityImage.style.backgroundImage=`url(../databasen/Images/${city.imagesBig[0]})`;
        }
    }
}

//Funktion för att rendera divven i headern med staden och landets namn
function renderCityHeaderById (cityId) {
    for (let city of DB.CITIES) {
       if(city.id == cityId){
           let cityName = document.getElementById("city");
           cityName.classList.add("content");
           cityName.innerHTML=`
            <p class="city-name">${city.name}, ${renderCountryName(city.countryID)}</p>
            `;

       }
   }
}

//funktion för att se antal soldagar
function getSunDays(cityId){
    for( let city of DB.CITIES){
        if(city.id == cityId){

            let sumSunDays = document.getElementById("sun");
            sumSunDays.classList.add("content");
            sumSunDays.innerHTML=` 
            Antal soldagar: ${city.sun} ☀️
            `;
        }
    }
}

// INFO OM STAD FUNKTIONER
// funktion för att rendera information om staden och bilder
function studyInCity (cityId){
    for( let city of DB.CITIES){
        if(city.id == cityId){
        let studyInCityInfo = document.getElementById("text");
        studyInCityInfo.innerHTML=` 
        <p class="ta-chansen">Ta chansen att studera i ${city.name}</p>
   
        <p class = city-info>${city.text}</p>

            <div id= "city-images">
                <div id = "annons-box">ANNONS</div> 
                <img src = "../databasen/Images/${city.imagesNormal[0]}" class="city-image"/>
                <img src = "../databasen/Images/${city.imagesNormal[1]}" class="city-image"/>
            </div>
        `;
        }
    }
}

//PROGRAM FUNKTIONER
//funktion för att hämta stadens namn
function renderCityTitle (cityId) {
    for (let city of DB.CITIES) {
        if(city.id == cityId){
            let cityNameTitle = document.getElementById("programme-title");

            cityNameTitle.innerHTML=`
             <h1>Program i ${city.name}</h1>
             `;
        }
    }
}

// funktion som skapar en array med program i den specifika staden
function getProgrammesByCityId (cityId) {
    let programmes = [];

    for (let university of DB.UNIVERSITIES) {
        if (university.cityID == cityId) {
            for (let programme of DB.PROGRAMMES) {
                if (programme.universityID == university.id) {
                    programmes.push(programme);
                }
            }
        }
    }
    return programmes;
}

// funktion för att rendera en div med namn på program och universitet
function renderProgrammeDivByCityId (cityId) {
    let programmes = getProgrammesByCityId(cityId)
    
    for (let programme of programmes) {
        let programmeInfo = document.createElement("p");
        programmeInfo.classList.add("programme-info");
        
        let programmeBox = document.getElementById("programme-box");
        programmeBox.appendChild(programmeInfo);

        programmeInfo.innerHTML = `
        ${programme.name}, ${getUniversityNameByCityId(cityId)}
        `;
    }
}

// funktion för att hämta universitetets namn
function getUniversityNameByCityId (cityId) {
    for (let university of DB.UNIVERSITIES) {
        if (university.cityID == cityId) {
            for (let programme of DB.PROGRAMMES) {
                if (programme.universityID == university.id) {
                    console.log(university.name);
                    return university.name;
                }
            }
        }
    }
}


// initialize the webpage
renderCityHeaderById(savedCityId);
getSunDays(savedCityId);
cityImage(savedCityId);
studyInCity(savedCityId)

renderCityTitle(savedCityId);
renderProgrammeDivByCityId(savedCityId);

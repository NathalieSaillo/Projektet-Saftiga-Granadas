"use strict";

//tar fram alla program som finns i staden 
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

//visa programmen som finns i staden
function renderProgrammeNamesByCityId (cityId) {
    let programmes = getProgrammesByCityId(cityId);

    let programmeNames = [];

    for (let programme of programmes) {
        let name = programme.name;
        programmeNames.push(name); 
    }

    return programmeNames.join("");
} 

// function showProgrammes(){

// }

// function renderCityById (cityId) {
//      for (let city of DB.CITIES) {
//         if(city.id == cityId){
//         }
//     }
// }
function renderCityById (cityId) {
     for (let city of DB.CITIES) {
        if(city.id == cityId){

            let cityName = document.getElementById("city");
            cityName.classList.add("content");
            cityName.innerHTML=`
             ${city.name}
             `;
// let wrapper = document.getElementById("city")

        }
    }
}

let savedCityId = window.sessionStorage.getItem("stad");

//funktion för att se antal soldagar
function getSunDays(cityId){
    for( let city of DB.CITIES){
        if(city.id == cityId){

            let sumSunDays = document.getElementById("sun");
            sumSunDays.classList.add("content");
            sumSunDays.innerHTML=` 
           antal soldagar: ${city.sun}
            `;
        }
    }
}

// renderCityById(12);
// getSunDays(12);

//             console.log(`Detta är ${city.name}`)
//             // let cityName = document.createElement("div");
//             // cityName.id = ("city");

//             // cityName.innerHTML=`
//             // ${city.name}`;
//         }
//     }
// }

//funktion som visar

// renderCityById(23); 

//funktion som visar bakgrundsbild bakom cityName.
// function cityImage(cityId){
//     for( let city of DB.CITIES){
//         if(city.id == cityId){

//             let cityImage = document.getElementById("header");
//             cityImage.id= ("wrapper");
//             cityImage.innerHTML=`
//             <img src"${city.imagesBig}" alt="image of city">
//             `;
//         }
//     }
// }


// cityImage(12)

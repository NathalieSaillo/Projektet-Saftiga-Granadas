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
             <p class="city-name">${city.name}, ${renderCountryName(city.countryID)}</p>
             `;
// let wrapper = document.getElementById("city")

        }
    }
}

function renderCountryName (id) {
    let countryName = COUNTRIES.find(country => {
        if (country.id == id) {
            return true;
            
        }
    });
     return countryName.name;
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

function studyInCity (cityId){
    for( let city of DB.CITIES){
        if(city.id == cityId){

        let sumSunDays = document.getElementById("text");
        sumSunDays.innerHTML=` 
        <p class="ta-chansen">Ta chansen att studera i ${city.name}</p>
       <p> Tidigare Studenter</p>
       <p>${city.text}</p>
        <div class="review-city" id="comments-box">${commentsOfCity(savedCityId).text}</div>
        
        `;
    }
}
}


function commentsOfCity(cityId) {
    let commentsName = COMMENTS_CITY.find(comment => {
        if (comment.cityID == cityId) {
            return true;
            
        }
    });
     return commentsName;
}


 renderCityById(savedCityId);
 getSunDays(savedCityId);
cityImage(savedCityId);
studyInCity(savedCityId)



// funktion som visar bakgrundsbild bakom cityName.
 function cityImage(cityId){
     for( let city of DB.CITIES){
         if(city.id == cityId){

             let cityImage = document.getElementById("wrapper");
             cityImage.style.backgroundImage=`url(../databasen/Images/${city.imagesBig[0]})`;
         }
     }
 }


// cityImage(12)

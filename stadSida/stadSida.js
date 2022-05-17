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

function renderCityById (cityId) {
     for (let city of DB.CITIES) {
        if(city.id == cityId){
            console.log(`Detta är ${city.name}`)
            // let cityName = document.createElement("div");
            // cityName.id = ("city");

            // cityName.innerHTML=`
            // ${city.name}`;
        }
    }
    
}


renderCityById (12);
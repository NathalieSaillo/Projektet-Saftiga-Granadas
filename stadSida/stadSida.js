"use strict";

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

function renderProgrammeNamesByCityId (cityId) {
    let programmes = getProgrammesByCityId(cityId);

    let programmeNames = [];

    for (let programme of programmes) {
        let name = programme.name;
        programmeNames.push(name); 
    }

    return programmeNames.join("");

} 


function renderCityById (cityId) {
     for (let city of DB.CITIES) {
        if(city.id == cityId){
            let cityName = document.createElement("div");
            cityName.classList.add("content");

            cityName.innerHTML=`
            ${city.name}`;
        }
    }
    
}


renderCityById (12);

} 


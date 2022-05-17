"use strict";
stadsida_stader_funktion




//tar fram alla program som finns i staden 
 main
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

 stadsida_stader_funktion

// function showProgrammes(){

// }
main

function renderCityById (cityId) {
     for (let city of DB.CITIES) {
        if(city.id == cityId){
stadsida_stader_funktion
            let cityName = document.getElementById("city");
            cityName.classList.add("content");
            cityName.innerHTML=`
             ${city.name}
             `;
// let wrapper = document.getElementById("city")

        }
    }
}

let savedCityId = window.sessionStorage.getItem("stad")

renderCityById(savedCityId)

            console.log(`Detta är ${city.name}`)
            // let cityName = document.createElement("div");
            // cityName.id = ("city");

            // cityName.innerHTML=`
            // ${city.name}`;
        }
    }
    
}


renderCityById (12);

} 

 main

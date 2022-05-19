"use strict";

function renderCountry (id) {
    let div = document.createElement("div");
     div.id = "land-box";
     div.innerHTML = `
        <h2>${renderCountryName(id)}</h2>
        <div id="stader">
            ${renderCityInCountry(id)}
        </div>
    `
    return div;
}

function renderCountries (countries) {
    let countriesElement = document.getElementById("val-boxar");
    
     for (let country of countries) {
        let countryElement = renderCountry(country.id);
        countriesElement.appendChild(countryElement);
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



function renderCityInCountry (countryId) {
    let cityArray = [];

    for ( let country of DB.COUNTRIES ) {
        if (countryId == country.id ) {
            for ( let city of DB.CITIES) {
                if (city.countryID == country.id) {
                    let cityDiv = `
                    <div class="stad-box" onClick="cityClick(${city.id})">
                        <p>${city.name}</p>
                    </div>
                    `;
                    cityArray.push(cityDiv);
                  
                }
            } 
        }
    }

    
    return cityArray.join("");
}
//funktion som visar bilder bakom länder
function citiesImages(cityArray){
    for (let city of cityArray){
        if(city.id == cityArray.id){

            let cityImages = document.getElementByClassName("stad-box");
            cityImages.style.backgroundImage =`url(../databasen/Images/${city.imagesNormal[0]})`; 
        }
    }
}

//sortera länderna i bokstavsordning
// COUNTRIES.sort(function(a, b){
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name){
//         -1;
//     }
//     return 0;
// });
citiesImages(DB.CITIES);
renderCountries(DB.COUNTRIES);



function cityClick (cityId){
    window.sessionStorage.setItem("stad", cityId);
    window.location.href = "../stadsida/stadSida.html";
    }
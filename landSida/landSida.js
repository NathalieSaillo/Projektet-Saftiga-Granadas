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
    // debugger;
    let cityArray = [];
    // let city = CITIES[id];
    // return city.name;
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

function cityClick (cityId){
window.sessionStorage.setItem("stad", cityId);
window.location.href = "../stadSida/stadSida.html"
}

// COUNTRIES.sort(function(a, b){
//     if (a.n
//  name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name){
//         -1;
//     }
//     return 0;
// });

renderCountries(DB.COUNTRIES);
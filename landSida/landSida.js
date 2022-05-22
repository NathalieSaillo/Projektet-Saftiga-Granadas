"use strict";
// sorts cities in alphabetical order
DB.CITIES.sort(function(a, b) {
    if (a.name > b.name) {
    return 1;
    }
    if (a.name < b.name) {
      return -1;
      }
    return 0;
});
// sorts countries in alphabetical order
DB.COUNTRIES.sort(function(a, b) {
    if (a.name > b.name) {
    return 1;
    }
    if (a.name < b.name) {
        return -1;
        }
    return 0;
});
     
// renders country and makes an internal HTML to render it on webside  
function renderCountry (id) {
    let div = document.createElement("div");
     div.id = "land-box";
     div.innerHTML = `
        <h1 class="country-name">${renderCountryName(id)}</h1>
        <div id="stader">
            ${renderCityInCountry(id)}
        </div>
    `
    return div;
}
// function that renders all the countries in database
function renderCountries (countries) {
    let countriesElement = document.getElementById("val-boxar");
    
     for (let country of countries) {
        let countryElement = renderCountry(country.id);
        countriesElement.appendChild(countryElement);
    }
}
// render name of the country and returns it 
function renderCountryName (id) {
    let countryName = COUNTRIES.find(country => {
        if (country.id == id) {
            return true;
            
        }
    });
     return countryName.name;
}


// renders cities that are in specified countries
function renderCityInCountry (countryId) {
    let cityArray = [];

    for ( let country of DB.COUNTRIES ) {
        if (countryId == country.id ) {
            for ( let city of DB.CITIES) {
                if (city.countryID == country.id) {
                    let cityDiv = `
                    <div class="stad-box" style="background-image:url(../databasen/Images/${city.imagesNormal[0].split(" ").join("_")}"  onClick="cityClick(${city.id})">
                        <div class="stad-namn-box"><p class="stad-namn">${city.name}</p> </div>
                    </div>
                    `;
                    cityArray.push(cityDiv);
                  
                }
            } 
        }
    }
    return cityArray.join("");
}

// saves a personal storage for the user that uses the site, it makes it possible to show the right city after click
function cityClick (cityId){
window.sessionStorage.setItem("stad", cityId);
window.location.href = "../stadsida/stadSida.html";
}

renderCountries(DB.COUNTRIES);


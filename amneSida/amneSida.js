"use strict";

// funktioner för att sortera i bokstavs ordning
DB.FIELDS.sort(function(a, b) {
    if (a.name > b.name) {
    return 1;
    }
    if (a.name < b.name) {
      return -1;
      }
    return 0;
});

DB.COUNTRIES.sort(function(a, b) {
    if (a.name > b.name) {
    return 1;
    }
    if (a.name < b.name) {
        return -1;
        }
    return 0;
});

// funktioner för att hämta ämnen och skapa divvar
function getFieldNameById (id) {
    let fieldName = FIELDS.find(field => {
        if (field.id == id) {
            return true;
        }
    });

    return fieldName.name;
}

function renderFieldBox (id) {
    let div = document.createElement("div");
    div.classList.add("amne-box")

    div.innerHTML =`
    <button class="button" id="amneButton">${getFieldNameById(id)}</button>
    `;
    div.addEventListener("click", function() {
        document.getElementById("wrapper").hidden = true;
        document.getElementById("container").hidden = false;
    }, false);
    return div;
}

function renderFields (fields) {
    let fieldsElement = document.getElementById("val-boxar");

    for (let field of fields) {
        let fieldElement = renderFieldBox(field.id);
        fieldsElement.appendChild(fieldElement);
        
    }
}

// funktioner för att hämta länderna och skapa divvar
function getCountryNameById (id) {
    let countryName = COUNTRIES.find(country => {
        if (country.id == id) {
            return true;
        }
    });
     return countryName.name;
}

function renderCountryDiv (id) {
    let countryDiv = document.createElement("div");
    countryDiv.classList.add("dropdown-box");

    countryDiv.innerHTML = `
    <p class="info-p">Se info om design program i ${getCountryNameById(id)} <i class="arrow"></i></p>
    `;
    return countryDiv;
}

function renderCountryDropdowns (countries) {
    let countriesElement = document.getElementById("dropdown-boxar");

    for (let country of countries) {
        let countryElement = renderCountryDiv(country.id);
        countriesElement.appendChild(countryElement);
        
    }
}

// funktion för att hämta städer i länder
function getCityNameById (id) {
    let cityName = CITIES.find(city => {
        if (city.id == id) {
            return true;    
        }
    });
    return cityName.name;
}

renderFields(DB.FIELDS);
renderCountryDropdowns(DB.COUNTRIES);

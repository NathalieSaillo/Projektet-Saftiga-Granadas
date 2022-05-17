"use strict";

function getFieldNameById (id) {
    let fieldName = FIELDS.find(field => {
        if (field.id == id) {
            return true;
        }
    });

    return fieldName;
}

function renderFieldBox (id) {
    let div = document.createElement("a");
    div.classList.add("amne-box")

    div.innerHTML =`
    ${getFieldNameById(id)}
    `;

    return div;
}

function renderFields (fields) {
    let fieldsElement = document.getElementById("val-boxar");

    for (let field of fields) {
        let fieldElement = renderFieldBox(field.id);
        fieldsElement.appendChild(fieldElement);
        
    }
}

renderFields(DB.FIELDS)
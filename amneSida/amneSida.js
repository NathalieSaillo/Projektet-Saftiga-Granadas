"use strict";


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



renderFields(DB.FIELDS);


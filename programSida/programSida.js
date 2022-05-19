"use strict"

function renderProgrammeById (programmeId) {
    for(let programme of DB.PROGRAMMES) {
        if(programme.id == programmeId) {

            console.log(`${programme.name}`);
        }
    }

}
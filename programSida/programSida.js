"use strict"
//funktion som ska lägga till programmets namn i headern
function renderProgrammeById(programmeId) {
    for(let programme of DB.PROGRAMMES) {
        if(programme.id == programmeId) {
            let programmeName = document.getElementById("course");
            programmeName.classList.add("content");
            programmeName.innerHTML = `
            <p class ="course-name">${programme.name}
            `;

            // // console.log(`${programme.name}`);
            // let programmeImage = document.getElementById("wrapper");
            //vi måste lägga in bilderna i databasen! 
            // programmeImage.style.backgroundImage =url(/bilder/design.webp);
        }
    }
}

//funktion som lägger till information om programmet
function renderInfoProgramme(programmeId){
    for( let programme of DB.PROGRAMMES){
        let programmeInfoDiv = document.createElement("div");
        programmeInfoDiv.id = "programme-info";
        
        let containerDiv = document.getElementById("container");
        containerDiv.appendChild(programmeInfoDiv);

        programmeInfoDiv.innerHTML = `
        <p>${programme.exchangeStudents}</p>
        <p>${getUniversityById(programmeId)}</p>
       
        `;
       return programmeInfoDiv;
    }
    
}

function getUniversityById (programmeId) {
    let universityName = UNIVERSITIES.find(university => {
        if (university.id == PROGRAMMES.programmeId.universityID) {
            return true;
        }
    });
    return universityName.name;
 }

// function renderProgrammeNamesById(){
//     for 
// }

renderProgrammeById(8);
"use strict"

// GLOBAL VARIABLE
let savedProgrammeId = window.sessionStorage.getItem("programme-info");

//funktion som ska lägga till programmets namn i headern
function renderProgrammeById(programmeId) {
    for(let programme of DB.PROGRAMMES) {
        if(programme.id == programmeId) {
            let programmeName = document.getElementById("course");
            programmeName.classList.add("content");
            programmeName.innerHTML = `
            <p class ="course-name">${programme.name}</p>
            `;

            // // console.log(`${programme.name}`);
            // let programmeImage = document.getElementById("wrapper");
            //vi måste lägga in bilderna i databasen! 
            // programmeImage.style.backgroundImage =url(/bilder/design.webp);
        }
    }
}

function renderInfoAboutProgramme(programmeId){
    for (let programme of DB.PROGRAMMES) {
       if(programme.id == programmeId) {
           let programmeName = document.getElementById("info-div");
           programmeName.innerHTML = `
           <p>Universitet: <br>${renderUniversity (programmeId)}</p>
           <p>Ämne: <br>${renderField(programmeId)}</p>
           <p>Språk: <br>${renderLanguage(programmeId)}</p>
           <p>Nivå: <br>${getLevel(programme.level)}</p>
           <p>Utbytesstudenter: <br>${programme.exchangeStudents}</p>
           <p>Lokala studenter: <br>${programme.localStudents}</p>
           `;
       }
        
    }
}


function getLevel (id) {   return DB.LEVELS[id] }
                
        

function renderLanguage(programmeId){
    for (let programme of DB.PROGRAMMES) {
        if(programmeId == programme.id) {
            for (let language of DB.LANGUAGES) {
                if(language.id == programme.language){
                    return language.name;
                }
            }
        }
    }
 }

function renderField(programmeId){
    for (let programme of DB.PROGRAMMES) {
        if(programmeId == programme.id) {
            for (let field of DB.FIELDS) {
                if(field.id == programme.subjectID){
                    return field.name;
                }
            }
        }
    }
}

function renderUniversity (programmeId){
    for (let programme of DB.PROGRAMMES) {
        if(programmeId == programme.id) {
            for (let university of DB.UNIVERSITIES) {
                if(university.id == programme.universityID){
                    return university.name;
                }
            }
        }
    }
}



function renderComments (programmeId){
    for (let comment of DB.COMMENTS_PROGRAMME) {
        let allComment = document.getElementById("comment-wrapper")
        if(comment.programmeID == programmeId) {
            let programmeName = document.createElement("div");
            programmeName.innerHTML = `
            <div id="comment-div">
                <p> Lärare: ${comment.stars.teachers}/5 Kursen: ${comment.stars.courses}/5<br/>  klasskamrater: ${comment.stars.students}/5
                    <br> ${comment.alias}, ${comment.date.year}/${comment.date.month}/${comment.date.day}:<br/>
                    <br>${comment.text}<br/> 
                </p>
            </div>
            `;
            allComment.appendChild(programmeName)
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

// INITIALIZE PAGE
renderProgrammeById(savedProgrammeId);
renderInfoAboutProgramme(savedProgrammeId);
renderComments(savedProgrammeId);
"use strict"

// GLOBAL VARIABLE
let savedProgrammeId = window.sessionStorage.getItem("programme-info");

// FUNKTIONER FÖR ATT RENDERA PROGRAMMETS NAMN OCH INFO
//funktion som ska lägga till programmets namn i headern
function renderProgrammeById(programmeId) {
    for(let programme of DB.PROGRAMMES) {
        if(programme.id == programmeId) {
            let programmeName = document.getElementById("course");
            programmeName.classList.add("content");
            programmeName.innerHTML = `
            <p class ="course-name">${programme.name}</p>
            `;
        }
    }
}

// funktion för att rendera information om programmet
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


//FUNKTIONER FÖR ATT HÄMTA UT INFORMATION OM PROGRAMMET
// funktion för att hämta nivån av programmet från databasen
function getLevel (id) {   
    return DB.LEVELS[id] 
}
                 
// funktion för att hämta språket på programmet från databasen
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

 // funktion för att hämta ämnet på programmet från databasen
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

// funktion för att hämta universitetets namn där programmet är från databasen
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

//FUNKTION FÖR ATT RENDERA KOMMENTARER PÅ PROGRAMMET
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

// INITIALIZE PAGE
renderProgrammeById(savedProgrammeId);
renderInfoAboutProgramme(savedProgrammeId);
renderComments(savedProgrammeId);
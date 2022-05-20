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
            <p class ="course-name">${programme.name}
            <div style="display: none">${renderComments(programmeId)}</div>
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
           let programmeName = document.getElementById("text-div");
           programmeName.innerHTML = `
           <p>Universitet: ${renderUniversity (programmeId)}</p>
           <p>Ämne: ${renderField(programmeId)}</p>
           <p>Språk: ${renderLanguage(programmeId)}</p>
           <p>Nivå: ${renderLevel(programmeId)}</p>
           <p>Utbytesstudenter: ${programme.exchangeStudents}</p>
           <p>Lokala studenter: ${programme.localStudents}</p>
           `;
       }
        
    }
}

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

function renderLevel(programmeId){
    for (let programme of DB.PROGRAMMES) {
        if(programmeId == programme.id) {
            for (let level of DB.LEVELS) {
                if(level== programme.level){
                    return level[programme.level];
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
            <p>
          <br> Lärare: ${comment.stars.teachers}/5 Kursen: ${comment.stars.courses}/5<br/>  klasskamrater: ${comment.stars.students}/5 
          
          <br> ${comment.alias}, ${comment.date.year}/${comment.date.month}/${comment.date.day}:<br/>
          <br>${comment.text}<br/> 
        </p>
        </div>
            `;
            allComment.appendChild(programmeName)
        }
     }
}

/*
Du behöver bara hämta in det elementet du vill lägga till det i och sedan appenda in det i slutet av din if-sats! 

elementet kan du hämta precis i början av funktionen så att datorn slipper göra det för varje gång du loopar! Alternativt i början av din if-sats
*/
/*
function commentsOfCity(cityId) {
    for(let programme of DB.COMMENTS_PROGRAMMES) {
        if(programme.id == programmeId) {
            let programmeName = document.getElementById("course");
    let commentsName = DB.COMMENTS_CITY.find(comment => {
        if (comment.cityID == cityId) {
            return true;
            
        }
    });
}
*/
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
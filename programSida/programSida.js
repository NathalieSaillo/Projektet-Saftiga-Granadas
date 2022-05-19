"use strict"



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
           <p>universitet: ${renderUniversity (programmeId)}</p>
           <p>ämne: ${renderField(programmeId)}</p>
           <p>språk: ${renderLanguage(programmeId)}</p>
           <p>nivå: ${renderLevel(programmeId)}</p>
           `;
       }
        
    }
}

function renderLanguage(languageId){
    for (let programme of DB.PROGRAMMES) {
        if(programme.id == languageId) {
            for (let language of DB.LANGUAGES) {
                if(language.id == languageId){
                    return language.name
                }
            }
}
    }
}

function renderField(fieldId){
    for (let programme of DB.PROGRAMMES) {
        if(programme.id == fieldId) {
            for (let field of DB.FIELDS) {
                if(field.id == fieldId){
                    return field.name
                }
            }
}
    }
}

function renderUniversity (universityId){
    for (let programme of DB.PROGRAMMES) {
        if(programme.id == universityId) {
            for (let university of DB.UNIVERSITIES) {
                if(university.id == universityId){
                    return university.name
                }
            }
}
    }
}

function renderLevel(languageId){
    for (let programme of DB.PROGRAMMES) {
        if(programme.id == languageId) {
            for (let level of DB.LEVELS) {
                if(level == languageId){
                    return level
                }
            }
}
    }
}

renderInfoAboutProgramme(0)

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

renderProgrammeById(0);
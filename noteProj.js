const addNoteBTN=document.querySelector(".addNoteBTN")
const mainNoteArea=document.querySelector(".createNote")
const previewNoteArea=document.querySelector(".notePreviewContainer")
function noteCounter() {
    const allNotes=editeLocal.getFromLocal()
    if (allNotes != null && allNotes.length>0){
        const lastNote=allNotes.pop();
        const lastID=lastNote.id;
        return lastID+1;
    }
    else{
        return 1;
    }
   
}

class editeLocal{
    static saveToLocal (obj) {
        const tempJSON=JSON.stringify(obj)
        localStorage.setItem("allNotes",tempJSON)
    }
    static getFromLocal(){
        const tempJSON=localStorage.getItem("allNotes");
        const tempOBJ=JSON.parse(tempJSON);
        return tempOBJ;
    }
    static deleteFromLocal(specificNote){
        const allNotes=editeLocal.getFromLocal()
    }
}

class noteSectionLoader{
    static mainLoader(noteID){
        if(noteID != undefined){
            
        }
        else{
            
        }
    }
}
class noteCreateDelete{
    static createFirstTime(id){              
        console.log("sakhte khode note")

            const tempNote={    
            id:id,
            title:"",
            note:"",
            date:Date().split(" ")[4],
        }
        let tempAllNotes=editeLocal.getFromLocal()
        let newAllNotes=[];
        if (tempAllNotes != null){
            newAllNotes=[...tempAllNotes,tempNote]
        }
        else{
            tempAllNotes=[]
            newAllNotes=[...tempAllNotes,tempNote]
        }
        editeLocal.saveToLocal(newAllNotes)
        this.createNoteMain(tempNote)
        this.createNotePreview(tempNote)
    }
    static createNoteMain(noteObj){
        console.log("sakhte main")
        
        mainNoteArea.innerHTML=`
        <textarea data-id="${noteObj.id}" class="createNoteTitle createAreas"  placeholder="Title ..." >${noteObj.title}</textarea>
        <textarea data-id="${noteObj.id}" class="createNoteNote createAreas" placeholder="Note ...">${noteObj.note}</textarea>`
        const title=document.querySelector(".createNoteTitle")
        const note=document.querySelector(".createNoteNote")
        title.addEventListener("input",(e)=>{
            let tempAllNotes=editeLocal.getFromLocal()
            let newAllNotes=[];
            if (tempAllNotes != null){
                newAllNotes=[...tempAllNotes]
            }
            else{
                tempAllNotes=[]
                newAllNotes=[...tempAllNotes]
            }
            newAllNotes.forEach(element => {
                if(element.id==noteObj.id){
                    element.title=e.target.value;
                }
            });
            editeLocal.saveToLocal(newAllNotes)
            noteObj.title=e.target.value;
            this.updateNotePreviewAll(noteObj)
        })
    
        note.addEventListener("input",(e)=>{
            let tempAllNotes=editeLocal.getFromLocal()
            let newAllNotes=[];
            if (tempAllNotes != null){
                newAllNotes=[...tempAllNotes]
            }
            else{
                tempAllNotes=[]
                newAllNotes=[...tempAllNotes]
            }
            newAllNotes.forEach(element => {
                if(element.id==noteObj.id){
                    element.note=e.target.value;
                }
            });
            editeLocal.saveToLocal(newAllNotes)
            noteObj.note=e.target.value;
            this.updateNotePreviewAll(noteObj)
        })


    }
    static updateNoteMain(noteObj){
        console.log("update main")
        mainNoteArea.innerHTML=`
        <textarea data-id="${noteObj.id}" class="createNoteTitle createAreas"  placeholder="Title ..." >${noteObj.title}</textarea>
        <textarea data-id="${noteObj.id}" class="createNoteNote createAreas" placeholder="Note ...">${noteObj.note}</textarea>`
        const title=document.querySelector(".createNoteTitle")
        const note=document.querySelector(".createNoteNote")
        title.addEventListener("input",(e)=>{
            let tempAllNotes=editeLocal.getFromLocal()
            let newAllNotes=[];
            if (tempAllNotes != null){
                newAllNotes=[...tempAllNotes]
            }
            else{
                tempAllNotes=[]
                newAllNotes=[...tempAllNotes]
            }
            newAllNotes.forEach(element => {
                if(element.id==noteObj.id){
                    element.title=e.target.value;
                }
            });
            editeLocal.saveToLocal(newAllNotes)
            noteObj.title=e.target.value;
            this.updateNotePreviewAll(noteObj)
        })
    
        note.addEventListener("input",(e)=>{
            let tempAllNotes=editeLocal.getFromLocal()
            let newAllNotes=[];
            if (tempAllNotes != null){
                newAllNotes=[...tempAllNotes]
            }
            else{
                tempAllNotes=[]
                newAllNotes=[...tempAllNotes]
            }
            newAllNotes.forEach(element => {
                if(element.id==noteObj.id){
                    element.note=e.target.value;
                }
            });
            editeLocal.saveToLocal(newAllNotes)
            noteObj.note=e.target.value;
            this.updateNotePreviewAll(noteObj)
        })
    }
    static createNotePreview(noteObj){
        console.log("sakhte preview")
        const newDiv=document.createElement("div")
        newDiv.classList.add("note")
        newDiv.classList.add(`notePre${noteObj.id}`)
        newDiv.setAttribute('data-id' , `${noteObj.id}`);
        newDiv.setAttribute('id' , `notePre${noteObj.id}`);
        console.log(`#notePre${noteObj.id}`)
        newDiv.innerHTML=`
        <div class="fakeBorder" data-id=${noteObj.id}></div>
        <p class="noteTitle" data-id=${noteObj.id}>${noteObj.title}</p>
        <div class="fakeBorder2" data-id=${noteObj.id}></div>
        <p class="noteP" data-id=${noteObj.id}>${noteObj.note}</p>
        <div class="fakeBorder2" data-id=${noteObj.id}></div>
        <p class="noteDate" data-id=${noteObj.id}>${noteObj.date}</p>
        <button class="delete" id="${`delete_${noteObj.id}`}" data-id=${noteObj.id}>Delete</button>
        <div class="fakeBorder" data-id=${noteObj.id}></div>`
        previewNoteArea.appendChild(newDiv)
        console.log(newDiv)

        newDiv.addEventListener("click",(e)=>{
            let tempAllNotes=editeLocal.getFromLocal()
            let newAllNotes=[];
            if (tempAllNotes != null){
                newAllNotes=[...tempAllNotes]
            }
            else{
                tempAllNotes=[]
                newAllNotes=[...tempAllNotes]
            }
            newAllNotes.forEach(element => {
                if (element.id==e.target.dataset.id){
                    this.updateNoteMain(element)
                };
            });
        })
        const myDelete=document.querySelector(`#delete_${noteObj.id}`)
        myDelete.addEventListener("click",(e)=>{
            e.target.parentElement.innerHTML=""
            let tempAllNotes=editeLocal.getFromLocal()
            let newAllNotes=[];
            if (tempAllNotes != null){
                newAllNotes=[...tempAllNotes]
            }
            else{
                tempAllNotes=[]
                newAllNotes=[...tempAllNotes]
            }
            const notesAfterDel=newAllNotes.filter((note)=>{
                if(note.id != noteObj.id){
                    return note
                }
            })
            editeLocal.saveToLocal(notesAfterDel);
            mainNoteArea.innerHTML=""
        })
    }
    static updateNotePreviewAll(){
        previewNoteArea.innerHTML=""
        let tempAllNotes=editeLocal.getFromLocal()
            let newAllNotes=[];
            if (tempAllNotes != null){
                newAllNotes=[...tempAllNotes]
            }
            else{
                tempAllNotes=[]
                newAllNotes=[...tempAllNotes]
            }
            newAllNotes.forEach(noteObj => {
                console.log("sakhte preview")
            const newDiv=document.createElement("div")
            newDiv.classList.add("note")
            newDiv.classList.add(`notePre${noteObj.id}`)
            newDiv.setAttribute('data-id' , `${noteObj.id}`);
            newDiv.setAttribute('id' , `notePre${noteObj.id}`);
            console.log(`#notePre${noteObj.id}`)
            newDiv.innerHTML=`
            <div class="fakeBorder" data-id=${noteObj.id}></div>
            <p class="noteTitle" data-id=${noteObj.id}>${noteObj.title}</p>
            <div class="fakeBorder2" data-id=${noteObj.id}></div>
            <p class="noteP" data-id=${noteObj.id}>${noteObj.note}</p>
            <div class="fakeBorder2" data-id=${noteObj.id}></div>
            <p class="noteDate" data-id=${noteObj.id}>${noteObj.date}</p>
            <button class="delete" id="${`delete_${noteObj.id}`}" data-id=${noteObj.id}>Delete</button>
            <div class="fakeBorder" data-id=${noteObj.id}></div>`
            previewNoteArea.appendChild(newDiv)
            console.log(newDiv)

            newDiv.addEventListener("click",(e)=>{
                let tempAllNotes=editeLocal.getFromLocal()
                let newAllNotes=[];
                if (tempAllNotes != null){
                    newAllNotes=[...tempAllNotes]
                }
                else{
                    tempAllNotes=[]
                    newAllNotes=[...tempAllNotes]
                }
                newAllNotes.forEach(element => {
                    if (element.id==e.target.dataset.id){
                        this.updateNoteMain(element)
                    };
                });
            })
            const myDelete=document.querySelector(`#delete_${noteObj.id}`)
            myDelete.addEventListener("click",(e)=>{
                e.target.parentElement.innerHTML=""
                let tempAllNotes=editeLocal.getFromLocal()
                let newAllNotes=[];
                if (tempAllNotes != null){
                    newAllNotes=[...tempAllNotes]
                }
                else{
                    tempAllNotes=[]
                    newAllNotes=[...tempAllNotes]
                }
                const notesAfterDel=newAllNotes.filter((note)=>{
                    if(note.id != noteObj.id){
                        return note
                    }
                })
                editeLocal.saveToLocal(notesAfterDel);
                mainNoteArea.innerHTML=""
            })
                });
    }
}
document.addEventListener("DOMContentLoaded",()=>{
    console.log("Dom")
    
    addNoteBTN.addEventListener("click",(e)=>{
        const noteID = noteCounter()
        noteCreateDelete.createFirstTime(noteID)
    })
    let tempAllNotes=editeLocal.getFromLocal()
    let newAllNotes=[];
    if (tempAllNotes != null){
        newAllNotes=[...tempAllNotes]
    }
    else{
        tempAllNotes=[]
        newAllNotes=[...tempAllNotes]
    }
    newAllNotes.forEach(element => {
        noteCreateDelete.createNotePreview(element)
    });
})
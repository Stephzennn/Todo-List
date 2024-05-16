

function createProjectList(Project) {
    let projectListli = document.createElement("li")
    projectListli.textContent = Project.getName();
    let projectListul = document.createElement("ul")
    projectListul.appendChild(projectListli)
    
    return projectListul
}


function createNewProject(){
    let newProject = document.createElement("div")
    newProject.classList.add("newProject")
    let newProjectul = document.createElement("ul")
    let newprojectli = document.createElement("li")
    newprojectli.innerText = "New Project"
    newProjectul.appendChild(newprojectli)
    newProject.appendChild(newProjectul)

    newProject.addEventListener("click" , ()=>{
        let body = document.querySelector("body")
        let darkDiv = document.createElement("div")
        let form = document.createElement("div")
        form.classList.add("formE")
        let insideForm = document.createElement("form")
        insideForm.classList.add("form")
        let label = document.createElement("label")
        label.classList.add("label")
        label.textContent = "Project Name: "
        let input = document.createElement("input")
        input.classList.add("input")
        input.type = "text"



        let labelDate = document.createElement("label")
        labelDate.classList.add("label")
        labelDate.textContent = "Due Date: "
        let inputDate = document.createElement("input")
        inputDate.classList.add("input")
        input.type = "text"
        label.appendChild(input)
        labelDate.appendChild(inputDate)

        let labelPriority = document.createElement("label")
        labelPriority .classList.add("label")
        labelPriority .textContent = "Priority: "
        let inputPriority  = document.createElement("input")
        inputPriority .classList.add("input")
        input.type = "text"
        labelPriority.appendChild(inputPriority)
        labelPriority.appendChild(inputPriority)
        
        let blockdiv = document.createElement("div")
        blockdiv.classList.add("blockdiv")
        let Addproject = document.createElement("button")
        Addproject.textContent = "Add Project"
        Addproject.classList.add("shareButton")
        Addproject.classList.add("Addproject")
        Addproject.addEventListener("click", ()=>{
            body.removeChild(darkDiv)
            body.removeChild(form)
        })
        blockdiv.appendChild(Addproject)


        insideForm.appendChild(label)
        insideForm.appendChild(labelDate)
        insideForm.appendChild(labelPriority)
        //blockdiv
        insideForm.appendChild(blockdiv)
        form.appendChild(insideForm)
        darkDiv.addEventListener("click" , ()=>{
            body.removeChild(darkDiv)
            body.removeChild(form)
        })
        darkDiv.classList.add("darkDiv")
        body.appendChild(darkDiv)
        body.appendChild(form)
    })
    return newProject
}

export{createProjectList, createNewProject}
import './style.css'

function initialization() {
    
let g = document.querySelector('body')

g.classList.add("body")

let header = document.createElement("div")
header.classList.add("header")
header.textContent = " Hello there"


let project = document.createElement("div")
project.classList.add("project")
project.textContent = "This is the project"

let newProject = document.createElement("div")
newProject.classList.add("newProject")
newProject.innerText = "new Project"
project.appendChild(newProject)

let todoBoard = document.createElement("div")
todoBoard.classList.add("todoBoard")

let headerParent = document.createElement("div")
headerParent.classList.add("headerParent")

headerParent.appendChild(header)
headerParent.appendChild(todoBoard)

g.appendChild(headerParent)
g.appendChild(project)
}

export  {
    initialization
};

import './style.css'
import { createChecklist  } from './ToDoChecklist'
function initialization() {
    
let g = document.querySelector('body')

g.classList.add("body")

let header = document.createElement("div")
header.classList.add("header")
header.textContent = " Hello there"


let project = document.createElement("div")
project.classList.add("project")


let newProject = document.createElement("div")
newProject.classList.add("newProject")
let newProjectul = document.createElement("ul")
let newprojectli = document.createElement("li")
newprojectli.innerText = "New Project"
newProjectul.appendChild(newprojectli)
newProject.appendChild(newProjectul)
project.appendChild(newProject)

let projectTile = document.createElement("div")
projectTile.classList.add("projectTile")
projectTile.textContent = "Projects"
project.appendChild(projectTile)

let projectList = document.createElement("div")
projectList.classList.add("projectList")
let projectListul = document.createElement("ul")
//li that will be gotten from the server 
let projectListli = document.createElement("li")
projectListli.textContent = "First Project"
projectListul.appendChild(projectListli)
projectList.appendChild(projectListul)
project.appendChild(projectList)


let todoTitle = document.createElement("div")
todoTitle.classList.add("todoTitle")
let todoTitleul = document.createElement("ul")
let todoTitleli = document.createElement("li")

todoTitleli.textContent = "First Project"
todoTitleul.appendChild(todoTitleli)
todoTitle.appendChild(todoTitleul)

let addBlock = document.createElement("div")
addBlock.classList.add("addBlock")

let leftline = document.createElement("div")
leftline .classList.add("leftline")
let leftup = document.createElement("div")
leftup.classList.add("bottom")
let leftdown = document.createElement("div")
leftdown.classList.add("up")

leftline.appendChild(leftup)
leftline.appendChild(leftdown)


let rightline = document.createElement("div")
rightline.classList.add("rightline")
let rightup = document.createElement("div")
rightup.classList.add("bottom")
let rightdown = document.createElement("div")
rightdown.classList.add("up")

rightline.appendChild(rightup)
rightline.appendChild(rightdown)


let addButton = document.createElement("div")
addButton.classList.add("addButton")
addButton.textContent = " + Add Block"

addBlock.appendChild(leftline)
addBlock.appendChild(addButton)
addBlock.appendChild(rightline)







let todoBoard = document.createElement("div")
todoBoard.classList.add("todoBoard")
todoBoard.appendChild(todoTitle)
todoBoard.appendChild(createChecklist("Hello there ha ha ha "))
todoBoard.appendChild(addBlock)
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

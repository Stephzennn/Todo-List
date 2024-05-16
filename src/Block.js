import './style.css'

function Block() {
    

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


    return addBlock


}

export {Block}
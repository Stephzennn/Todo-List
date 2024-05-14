import './style.css'

/*
<label class="PlayerSign" style="text-align: left;" for="g">SIGN:
                      <div class="Ocheck">
                          <input type="checkbox" id="O1" name="Sign" value="O">
                          <label for="O">"O"</label>
                        </div>
      
                        <div class="Xcheck">
                          <input type="checkbox" id="X1" name="SIGN" value="X">
                          <label for="X">"X"</label>
                        </div>
                  </label>


     */             
function createChecklist(textContent) {
    let firstdiv = document.createElement("div")
    firstdiv.classList.add("firstdiv")
    let input1 = document.createElement("input")
    input1.classList.add("input1")
    let label1 = document.createElement("label")
    label1.classList.add("label1")
    input1.type = "checkbox"
    input1.name = "todo"
    input1.value = textContent
    label1.htmlFor = textContent
    label1.textContent = textContent
    firstdiv.appendChild(input1)
    firstdiv.appendChild(label1)
    return firstdiv


}

export {createChecklist};
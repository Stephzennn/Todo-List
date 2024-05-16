class Project {
    constructor(name){
        this.name = name
        this.todos = []
        this.DueDate;
        this.Priority;
    }

    getDueDate() {
        return this.DueDate;
    }

    setDueDate(newDueDate) {
        this.DueDate = newDueDate;
    }


    getPriority() {
        return this.Priority
    }

    setPriority(newPriority){
        this.Priority = newPriority
    }

    getName() {
        return this.name;
    }

    getArray() {
        return this.todos;
    }
    setName(newName) {
        this.anme = newName
    }

    add(ToDo) {
        this.todos.push(ToDo)
    }

    find(ToDo){
        for(let x = 0; x < this.todos.length ; x++){
            if(this.todos[x] === ToDo){
                return x
            }
        }
        return -1;
    }
    delete(ToDo){
        let num = this.todos.indexOf(ToDo)
        if (num != -1){
            this.todos.splice(num, 1)
        }
    }
}


export {Project};
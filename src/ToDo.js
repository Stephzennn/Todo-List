class ToDo {
    
    constructor(description){
        this.description = description
        this.status;
    } 

    getDescription() {
        return this.description
    }

    setDescription(newDescription){
        this.description = newDescription;
    }

    setStatus(string){
        this.status = string;
    }
    getStatus(){
        return this.status;
    }    
}

export {ToDo}
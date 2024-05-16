import {initialization as start} from './UI';
import { ToDo } from './ToDo';
import { Project } from './Projects';
let totalArray = []

let g = new ToDo("Hello there");

let f = new ToDo("How are you");
let z = new ToDo("Ofcourse bro");
let b = new ToDo("See you");
let newproj = new Project("Baldurs gate 3")

let newproj1 = new Project("Witcher 3")

newproj1.add(z)
newproj1.add(b)
console.log(newproj)

newproj.add(g)

newproj.add(f)
newproj.add(f)
newproj.add(f)
newproj.add(f)
newproj.add(f)
newproj.add(f)
newproj.add(f)
newproj.add(f)
newproj.add(f)

console.log(newproj)


totalArray.push(newproj)
totalArray.push(newproj1)
start(totalArray);

const mainProjects = document.getElementsByTagName('projects')[0];
const addDeleteEdit = document.getElementsByTagName('naddDeleteEdit')[0];

document.addEventListener("DOMContentLoaded", () => {
    fetchProjects()
    document.getElementById("addPj").addEventListener("click", addProject);
    document.getElementById("delPj").addEventListener("click", deleteProject);
 }, false);



class Project {
    constructor(name, id, location, duration) {
        this.name = name;
        this.id = id;
        this.location = location;
        this.duration = duration
    }
  
 static fetchProjects = () => {
    return fetch(PROJECTS_URL)
    .then(resp => resp.json())
    .then(json => renderProjects(json));
    }
    



}



let renderProjects = (projects) => {
    for (const project of projects["data"]) {
        createProject(project);
    }
    for (const equipment of projects["included"]) {
        createEquipment(equipment)
    }
}

let createProject = (project) => {
    let div = document.createElement("div")
        div.setAttribute('class','ul segment')
        div.setAttribute('pid',`${project.id}`)
    let h3 = document.createElement("h3")
        h3.setAttribute('class','ui block header')
        h3.innerHTML = `${project.attributes.name}`
        div.appendChild(h3)
        
    for (const eqID of project.relationships.equipment["data"]) {
        let p = document.createElement("p")
        p.setAttribute('id',`eqID${eqID.id}`)
        div.appendChild(p)
    }
    mainProjects.append(div)
}

let createEquipment = (equipment) => {
    var p = document.getElementById(`eqID${equipment.id}`)
        p.innerHTML = `${equipment.attributes.make} - ${equipment.attributes.model}`
}

let addProject = () => {
  debugger
}


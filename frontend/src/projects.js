
const mainProjects = document.getElementsByClassName('project')[0]
const addDeleteEdit = document.getElementsByClassName('addDeleteEdit')[0];

document.addEventListener("DOMContentLoaded", () => {
    Project.fetchProjects();
    document.getElementById("addPj").addEventListener("click", Project.addProject);
    //document.getElementById("delPj").addEventListener("click", deleteProject);
 }, false);


class Project {
    constructor(name, id, location, duration, equipment) {
        this.name = name;
        this.id = id;
        this.location = location;
        this.duration = duration;
        this.equipment = equipment;
    }
    static fetchProjects = () => {
        return fetch(PROJECTS_URL)
        .then(resp => resp.json())
        .then(json => {
            
            for (const pdata of json.data) {
                const project = new Project(pdata.attributes.name, pdata.id, pdata.attributes.location, pdata.attributes.duration, pdata.relationships.equipment.data)
                project.createProject()
            }
            for (const eqdata of json.included) {
                const equipment = new Equipment(eqdata.id, eqdata.attributes.make,eqdata.attributes.model,eqdata.attributes.rent,eqdata.attributes.project_id)
                equipment.createEquipment()
            }
        })       
    }
    
   static addProject = () => {
        clearForm(addDeleteEdit)
        let fields = [{
                label: "Project Name", 
                input: "project-name",
                placeholder: "Project Name"},
            {
                label: "Project Location", 
                input: "project-location",
                placeholder: "Project Location"
            },
            {
                label: "Project Duration", 
                input: "project-duration",
                placeholder: "Project Duration"
            }]
      
      let newForm = createForum(fields)  
     
      addDeleteEdit.append(newForm)
      addDeleteEdit.addEventListener('submit',Project.newProject)
  }

  static newProject = (data) => {
     data.preventDefault()
    let formData = {
        name: data.target[0].value,
        location: data.target[1].value,
        duration: data.target[2].value
    }
    
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
             "Accept": "application/json"
        },
        body: JSON.stringify(formData)
        };
    
        fetch(PROJECTS_URL,configObj)
        .then(resp => resp.json())
        .then(json => {
            const project = new Project(json.data.attributes.name, json.data.id, json.data.attributes.location, json.data.attributes.duration, json.data.relationships.equipment.data)
            project.createProject()
            clearForm(addDeleteEdit)
        })
  }
    
   createProject() {   
        let div = document.createElement("div")
            div.setAttribute('class','ul segment')
            div.setAttribute('pid',`${this.id}`)
        let h3 = document.createElement("h3")
            h3.setAttribute('class','ui block header')
            h3.innerHTML = `${this.name} - Project Number ${this.id}`
            div.appendChild(h3)
            
        for (const eqID of this.equipment) {
            let p = document.createElement("p")
            p.setAttribute('id',`eqID${eqID.id}`)
            div.appendChild(p)
        }
        mainProjects.append(div)
    }

   
}







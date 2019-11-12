
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("addEq").addEventListener("click", Equipment.addEquipment);
    //document.getElementById("delEq").addEventListener("click", deleteEquipment);
 }, false);




class Equipment {
    constructor(id,make,model,rent,project_id) {
        this.id = id;
        this.make = make;
        this.model = model;
        this.rent =rent;
        this.pid = project_id
    }

    createEquipment() {
        const p = document.getElementById(`eqID${this.id}`)
            p.innerHTML = `${this.make} - ${this.model}`
            }


    insertEquipment() {
        const div = document.getElementById(`p${this.pid}`)
        let p = document.createElement("p")
            p.setAttribute('id',`eqID${this.id}`)
            p.innerHTML = `${this.make} - ${this.model}`
            div.appendChild(p)
    }

    static addEquipment = () => {
        clearForm(addDeleteEdit)
            let fields = [{
                    label: "Equipment Make", 
                    input: "equipment-make",
                    placeholder: "Equipment Make"},
                    {
                    label: "Equipment Model", 
                    input: "equipment-model",
                    placeholder: "Equipment Model"
                    },
                    {
                    label: "Rental Cost ($/hr)", 
                    input: "equipment-rate",
                    placeholder: "Rental Rate"
                    },
                    {
                    label: "Assigned Project", 
                    input: "equipment-pid",
                    placeholder: "Project ID"
                    }]

        let newForm = createForum(fields)  
        addDeleteEdit.append(newForm)
        addDeleteEdit.addEventListener('submit',Equipment.newEquipment)
    }

  static newEquipment = (data) => {
        data.preventDefault()
        let formData = {
        make: data.target[0].value,
        model: data.target[1].value,
        rent: data.target[2].value,
        project_id: data.target[3].value,
         }
   
   let configObj = {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
            "Accept": "application/json"
       },
       body: JSON.stringify(formData)
       };
   
       fetch(EQUIPMENT_URL,configObj)
       .then(resp => resp.json())
       .then(json => {
           const equipment = new Equipment(json.data.id,json.data.attributes.make,json.data.attributes.model, json.data.attributes.rent, json.data.attributes.project_id)
           equipment.insertEquipment()
           clearForm(addDeleteEdit)
       })
    }












}


      
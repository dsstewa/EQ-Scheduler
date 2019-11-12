
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
            }
        ]
      let newForm = createForum(fields)  
      addDeleteEdit.append(newForm)
  }
}
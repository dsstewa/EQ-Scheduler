
let createForum = (array) => {
   const form = document.createElement("form")
        form.setAttribute('class','ui form')
   
   array.map(function(element, index,array) {
        
    const div = document.createElement('div')   
        div.setAttribute('class','field')
    const label = document.createElement('label')
        label.innerHTML = `${element.label}`
    const input = document.createElement('input')
        input.setAttribute('type','text')
        input.setAttribute('name',`${element.input}`)
        input.setAttribute('placeholder',`${element.label}`)
        
        div.appendChild(label)
        div.appendChild(input)
        form.appendChild(div)
        
    })
    const submit = document.createElement('button')
    submit.setAttribute('class','ui button')
    submit.setAttribute('type','submit')
    submit.innerHTML = "Submit"
    
    form.appendChild(submit)
    
    return form
}


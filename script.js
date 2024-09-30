console.log("HEllo world")

const addButton = document.querySelector("#addItem")
const addItemField = document.querySelector("#addItemField")
const toDo = document.querySelector("#toDo")
const save = document.querySelector("#save")

let i = 0;
const toDoActions = [];

const addItemToHtmlWhenClicked = () => {
    i += 1;
    
    console.log(addItemField.value)
    let newIl = document.createElement('li');
    let inputElement = document.createElement('input');
    let labelElement = document.createElement('label')
    inputElement.setAttribute('type', 'checkbox');
    inputElement.setAttribute('id', i);
    labelElement.textContent = addItemField.value;  
    newIl.appendChild(inputElement);
    newIl.appendChild(labelElement);
    toDo.appendChild(newIl);
    toDoActions.push(toDo)
    
    console.log(inputElement);
    console.log(toDoActions)
    // Spara data i local storage
    localStorage.setItem(index, toDo.innerHTML);

    
    // Hämta data från local storage
    let test = localStorage.getItem(index);
        
        
}

const addItemToStorage = () => {
    
    console.log("SAVE")
    console.log(toDoActions[0]);
}

// fun AddItemToHtml (string text, bool isChecked)
    // Additem to html

// fun AddItemToStorage (string text, bool isChecked)
    // read from storage
    // add new item
    // save to storage

// fun start
    // read from storage
    // for all items in array call AddItemToHtml

// fun OnClick
    // call AddItemToStorege
    // call AddItemToHtml

addButton.addEventListener("click", addItemToHtmlWhenClicked);
save.addEventListener("click", addItemToStorage);


    
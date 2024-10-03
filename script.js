const addButton = document.querySelector("#addItem")
const addItemField = document.querySelector("#addItemField")
const toDo = document.querySelector("#toDo")
const emptyList = document.querySelector("#emptyList")
let ulElement = document.querySelector('ul');


console.log(ulElement)
class ToDoTask {
    constructor(text, checked = false) {
      this.text = text;
      this.checked = checked;
    }
  
    toggleChecked() {
      this.checked = !this.checked;
    }
  }

// Hämta JSON-strängen från Local Storage
let jsonString = localStorage.getItem('minArray');

// Konvertera JSON-strängen tillbaka till en array med objekt
let arrayMedObjekt = JSON.parse(jsonString);

let items = [];
if (arrayMedObjekt != null) {
    
    //console.log("items", items)
    for(let i=0; i<arrayMedObjekt.length; i++){
        let item = new ToDoTask (arrayMedObjekt[i].text, arrayMedObjekt[i].checked);
        items.push(item);
        addItemToHtml(item)
    }
}

    //Lägger till uppgifter till HTML
  function addItemToHtml(newToDo)
  {
      let newIl = document.createElement('li');
      let inputElement = document.createElement('input');
      let labelElement = document.createElement('label')
      inputElement.setAttribute('type', 'checkbox');
      inputElement.onclick = function(){newToDo.toggleChecked();
        saveToLocalStorage();
      };
      labelElement.textContent = newToDo.text;  
      inputElement.checked = newToDo.checked;
      newIl.appendChild(inputElement);
      newIl.appendChild(labelElement);
      toDo.appendChild(newIl);
  }

    // Spara data i local storage
  function saveToLocalStorage (){
     
     // Konvertera arrayen till en JSON-sträng
     let jsonString = JSON.stringify(items);
    
     // Spara JSON-strängen i Local Storage
     localStorage.setItem('minArray', jsonString);
  }

    //Töm listan
  function emptyListWhenClicked () {
    localStorage.clear();
    let items = [];
    ulElement.innerHTML = '';
  }

//När man klickar på lägga till ny uppgift-knappen
const addItemToHtmlWhenClicked = () => {
    let newToDo = new ToDoTask(addItemField.value, false);
    items.push(newToDo);
    addItemToHtml(newToDo);
    saveToLocalStorage();
}

addButton.addEventListener("click", addItemToHtmlWhenClicked);
emptyList.addEventListener("click", emptyListWhenClicked)


    
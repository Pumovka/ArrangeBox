const container = document.getElementById("Container"); //добавляю контейнер из html
const available = document.createElement("ul"); //создаю два списка 
const selected = document.createElement("ul");
let newItem = document.createElement("input"); //создаю инпут и кнопку для добавления новых элементов

const btnReset = document.createElement("button");
const btnNewItem = document.createElement("button");

let countAvailable = 0;
let availableItem = ["Яблоко", "Апельсин", "Банан"];
let selectedItem = [];
let countSelected = 0;


newItem.type = "text";
btnReset.innerHTML = "reset";
btnReset.className = "btn-reset";
btnNewItem.innerHTML = "+";
container.appendChild(available);
container.appendChild(selected);
available.appendChild(newItem);
available.appendChild(btnNewItem);
available.appendChild(btnReset);

function createItems() {


    while (countAvailable < availableItem.length) {
        const element = document.createElement("li");
        element.className = "element";
        element.innerHTML = availableItem[countAvailable];
        available.appendChild(element);
        countAvailable++;
    }

}


function selectItem() {
    const element = document.createElement("li");
    element.className = "element";
    element.innerHTML = availableItem[i];
    selected.appendChild(element);

}


function addNewItem() {
    if (newItem.value === "") {

    } else {

        availableItem.push(newItem.value);
        createItems();
        newItem.value = "";
    }
}



function windowReset() { //обновление страницы для сброса списков
    location.reload();
}

createItems();

btnNewItem.addEventListener("click", addNewItem);
btnReset.addEventListener("click", windowReset);

available.addEventListener("click", (event) => {
        if (event.target.classList.contains("element")) {
            selectItem = event.target.innerHTML;
            console.log(selectItem);
            i = 0;
            while (i < availableItem.length) {
                if (availableItem[i] === selectItem) {
                    selectedItem.push(availableItem[i].value);
                    const element = document.createElement("li");
                    element.className = "element";
                    element.innerHTML = availableItem[i];
                    available.appendChild(element);
                    countSelected++;
                    selected.appendChild(element);
                   
          
                }
                i++;
            }
        }

    }

);
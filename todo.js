const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        const li = document.createElement("li");
        li.textContent = inputBox.value;
        
        const span = document.createElement("span");
        span.textContent = "\u00d7";
        
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    
    inputBox.value = '';
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false)

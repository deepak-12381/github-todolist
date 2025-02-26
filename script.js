const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        alert('You must write something');
    } else {
        // Create a new <li> element and append it to the list
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        
        // Create a span (×) for removing the task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for "×"
        li.appendChild(span);
        
        // Add the <li> element to the list container
        listContainer.appendChild(li);

        // Save the updated list to localStorage
        saveData();
    }

    // Clear the input box after adding the task
    inputBox.value = "";
}

// Event listener for checking/unchecking tasks and deleting them
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        // Toggle the 'checked' class for checked/un-checked tasks
        e.target.classList.toggle("checked");
        saveData(); // Save the updated list to localStorage
    } else if (e.target.tagName === "SPAN") {
        // Remove the task when the '×' button is clicked
        e.target.parentElement.remove();
        saveData(); // Save the updated list to localStorage
    }
}, false);

// Save the current list to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Display the saved tasks from localStorage when the page loads
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}

// Call showTask to load the tasks on page load
showTask();

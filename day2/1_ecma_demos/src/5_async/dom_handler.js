const messageDiv = document.querySelector('#messageDiv');
const ajaxDiv = document.querySelector('#ajaxDiv');

if (ajaxDiv.style.display === 'none') {
    ajaxDiv.style.display = 'block';
    messageDiv.style.display = 'none';
}

const button = document.createElement('button');
button.className = "btn btn-primary";
button.innerHTML = "Load Data";

const btnArea = document.querySelector('#aDiv_btnArea');
btnArea.appendChild(button);

button.addEventListener("click", () => {
    alert("Button Click Executed...");
})
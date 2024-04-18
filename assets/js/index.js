
//buttons's element
const btnsFormatText = document.querySelectorAll(".btn-format-text");
const btnFormatLink = document.querySelector(".btn-format-link");
const btnsFormatColor = document.querySelectorAll(".btn-format-color input");
const btnsFormatSelect = document.querySelectorAll(".btn-format-select");

//get all elements
function focusTextArea(){
    textarea.focus();
}

function exeCmd(command, arg=""){
    //execute the command
    document.execCommand(command, true, arg);
}

function formatText(e){
    //get the command in data-command of the element
    const command = e.target.dataset.command;

    //create command
    exeCmd(command);

    //set focus in textarea
    focusTextArea();
}

function formatLink(e){
    //get the command in data-command of the element
    const command = e.target.dataset.command;
    const arg = prompt("Digite uma uri:");

    //create command
    exeCmd(command, arg);

    //set focus in textarea
    focusTextArea();
}

function formatColor(e){
    //get the command in data-command of the element
    const command = e.target.parentNode.dataset.command;
    const arg = e.target.value;

    //create command
    exeCmd(command, arg);

    //set focus in textarea
    focusTextArea();
}

function formatSelect(e){
    //get the command in data-command of the element
    const command = e.target.dataset.command;
    const arg = e.target.value;

    //create command
    exeCmd(command, arg);

    //set focus in textarea
    focusTextArea();
}

//events
window.addEventListener("load", focusTextArea);
btnsFormatText.forEach(button => button.addEventListener("click", formatText));
btnFormatLink.addEventListener("click", formatLink);
btnsFormatColor.forEach(button => button.addEventListener("input", formatColor));
btnsFormatSelect.forEach(button => button.addEventListener("input", formatSelect));

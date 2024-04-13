
//get all elements

function focusTextArea(){
    textarea.focus();
}

function exeCmd(command, arg=""){
    //execute the command
    document.execCommand(command, true, arg);
}

window.onload = ()=> {
    focusTextArea();
}


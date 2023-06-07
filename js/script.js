
const buttons = document.querySelectorAll("button")
const tagsI = document.querySelectorAll("i")
const bodyEditor = document.querySelector("#body")

const editor = {
    currentText: "",
    textSelected: ""
}

buttons.forEach(button=>{
    button.addEventListener("click", (e)=>{
        e.stopPropagation()
        bodyEditor.focus()
    })
})

tagsI.forEach(button=>{
    button.addEventListener("click", (e)=>{
        e.target.parentNode.classList.toggle("actived")
    })
})

bodyEditor.addEventListener("select", (e)=>{
    editor.currentText = e.target.value
    editor.textSelected = editor.currentText.slice(e.target.selectionStart, e.target.selectionEnd)
    console.log(editor.currentText, editor.textSelected)
})

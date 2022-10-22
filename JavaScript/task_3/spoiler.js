let btn = document.querySelector("#myBtn")
let txt = document.querySelector("#spoiler")

function buttonHandler(e) {
    if(txt.getAttribute("class") === "closed")
    {
        txt.setAttribute("class", "opened")
    }
    else
    {
        txt.setAttribute("class", "closed")
    }
}

function escapeHandler(e){
    if(txt.getAttribute("class") === "opened")
    {
        txt.setAttribute("class", "closed")
    }
}

btn.addEventListener("click", buttonHandler)

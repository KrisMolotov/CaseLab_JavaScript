let btn = document.getElementsByClassName("accordion")
let txt = document.getElementsByClassName("panel")

function buttonHandler() {
    //for(let i = 0; i < txt.length; i++)
    //{
        if(txt[0].getAttribute("class") === "panel")
        {
            txt[0].setAttribute("class", "")
        }
        else
        {
            txt[0].setAttribute("class", "closed")
        }
    //}
}

//for(let i = 0; i < btn.length; i++)
//{
    btn[0].addEventListener("click", buttonHandler)
//}


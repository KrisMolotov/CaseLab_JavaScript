let btn = document.getElementsByClassName("accordion")
let txt = document.getElementsByClassName("panel")

function buttonHandler1() {
    //for(let i = 0; i < txt.length; i++)
    //{
        if(txt[0].getAttribute("class") === "panel")
        {
            txt[0].setAttribute("class", "")
        }
        else if(txt[0].getAttribute("class") === "")
        {
            txt[0].setAttribute("class", "panel")
        }
    //}
}

function buttonHandler2() {
    //for(let i = 0; i < txt.length; i++)
    //{
    if(txt[1].getAttribute("class") === "panel")
    {
        txt[1].setAttribute("class", "")
    }
    else if(txt[1].getAttribute("class") === "")
    {
        txt[1].setAttribute("class", "panel")
    }
    //}
}

function buttonHandler3() {
    //for(let i = 0; i < txt.length; i++)
    //{
    if(txt[2].getAttribute("class") === "panel")
    {
        txt[2].setAttribute("class", "")
    }
    else if(txt[2].getAttribute("class") === "")
    {
        txt[2].setAttribute("class", "panel")
    }
    //}
}
//for(let i = 0; i < btn.length; i++)
//{
btn[0].addEventListener("click", buttonHandler1)
btn[1].addEventListener("click", buttonHandler2)
btn[2].addEventListener("click", buttonHandler3)
//}


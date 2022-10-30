let btns = document.querySelectorAll("button")

function buttonHandler(e)
{
    let i = Number(e.target.getAttribute("data-clicked"))
    i += 1
    e.target.setAttribute("data-clicked", String(i))
}

for( let i=0; i < btns.length; i++)
{
    btns[i].addEventListener("click", buttonHandler)
}
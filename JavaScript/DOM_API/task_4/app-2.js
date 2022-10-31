const registeredUsers = [
    ['admin', 'KoI18'],
    ['manager', 'SuperMe108'],
    ['editor', '12345'],
];

let inputs = document.querySelectorAll("input")
let form = document.querySelector("form")
let btn = document.querySelector("button")

function formSubmitHandler(e)
{
    e.preventDefault()
}

function inputHandler(e)
{
    let ind = 0
    for(let i = 0; i < inputs.length; i++)
    {
        if( inputs[i].value === "")
        {
            console.log("fields are required")
            ++ind
        }
    }
    if(ind === 0)
    {
        for(let j = 0; j < registeredUsers.length; j++)
        {
            if(inputs[0].value === registeredUsers[j][0] && inputs[1].value === registeredUsers[j][1])
            {
                console.log("Correct data, entering in process...")
                inputs[0].value = ""
                inputs[1].value = ""
                ++ind
            }
        }
        if( ind === 0)
        {
            console.log("Invalid data, entering failed")
        }
    }
}

form.addEventListener("submit", formSubmitHandler)
btn.addEventListener("click", inputHandler)
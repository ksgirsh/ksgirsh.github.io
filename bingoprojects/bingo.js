const buttons = document.querySelectorAll(".bingoButton");
buttons.forEach(doTheButtonThing);

function doTheButtonThing(element)
{
    element.addEventListener("click", event => {
        changeColor(event);
    })
}

function changeColor(event)
{
    //toggle BG color
    if (event.target.tagName == `BUTTON`)
    {
        if (event.target.style.backgroundColor == "lime")
        {
            event.target.style.backgroundColor = "tomato";
    
        } else if (event.target.style.backgroundColor = "tomato")
        {
            event.target.style.backgroundColor = "lime";
        }
    }


}
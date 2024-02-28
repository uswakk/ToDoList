let count=0;
let countEl = document.getElementById("count")
let saveEl = document.getElementById("save")
let history = ""


function increment()
{
    count++;
    countEl.innerText = count;
}


function save()
{
    
    let myVar = count + "-";
    history += myVar;
    saveEl.innerText = history;
}

function reset()
{
    countEl.innerText = 0;
    count = 0;
    saveEl.innerText= " ";
    history = "";
}
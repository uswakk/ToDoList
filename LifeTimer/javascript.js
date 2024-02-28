
let dateOfBirth;
let isDOBOpen = false;
const settingsCogEl = document.getElementById('settingsIcon')
const settingsContentEl = document.getElementById('settingsContent')
const initialText = document.getElementById('initialContent')
const laterText = document.getElementById('afterDOB')
const DOBBtn = document.getElementById('dobButton')
const DOBInput = document.getElementById('dobInput')

const yearEl = document.getElementById('year')
const monthEl = document.getElementById('month')
const dayEl = document.getElementById('day')
const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')

const makeTwoDigit = (number) =>
{
    return number > 9 ? number: `0${number}`;
}

const toggleDOB = () =>
{
    if(isDOBOpen)
    {
        settingsContentEl.classList.add('hide')
    }
    else
    {
        settingsContentEl.classList.remove('hide')
    }

    isDOBOpen = !isDOBOpen
    console.log('Toggle')
}

const getDOB = () =>
{
    const dateString = DOBInput.value;
    dateOfBirth = new Date(dateString);
    console.log(dateOfBirth)

    if(dateOfBirth)
    {
        initialText.classList.add('hide')
        laterText.classList.remove('hide')
        setInterval (()=>updateTimer(), 1000)
        updateTimer()

    }
    else
    {
        laterText.classList.add('hide')
        initialText.classList.remove('hide')
    }


}

const updateTimer = () =>
{
    const currentDate = new Date()
    const dateDiff = currentDate - dateOfBirth
    console.log(currentDate)
    console.log(dateDiff)
    const year = Math.floor(dateDiff / (1000*60*60*24*365))
    const month = Math.floor(dateDiff / (1000*60*60*24*365))%12
    const day = Math.floor(dateDiff / (1000*60*60*24))%30
    const hour = Math.floor(dateDiff / (1000*60*60))%24
    const minute = Math.floor(dateDiff / (1000*60))%60
    const second = Math.floor(dateDiff / (1000))%60

    yearEl.innerHTML = makeTwoDigit(year);
    monthEl.innerHTML = makeTwoDigit(month);
    dayEl.innerHTML = makeTwoDigit(day);
    hourEl.innerHTML = makeTwoDigit(hour);
    minuteEl.innerHTML = makeTwoDigit(minute);
    secondEl.innerHTML = makeTwoDigit(second);

}

updateTimer

settingsCogEl.addEventListener('click', toggleDOB)
DOBBtn.addEventListener('click', getDOB)
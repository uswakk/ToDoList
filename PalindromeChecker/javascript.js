const inputText = document.getElementById('text-input')
const result = document.getElementById('result')



function processInput()
{
    let inputString = inputText.value;
    let newString = inputString.replace(/\s/g, '')
    newString = newString.replace(/-/g, "")
    newString = newString.replace(/_/g, "")
   
    newString = newString.toLowerCase() 

    let newestString = removeSpecialChars(newString)
    console.log(newestString)
    let myLength = newestString.length
    if (myLength == 0)
    {
        alert("Please Input A Value")
    }
    else if(checkPalindrome(newestString))
    {
       result.innerHTML = `${inputString} Is A Palindrome`;
 
    }
    else
    {
        result.innerHTML = `${inputString} Is Not A Palindrome`;
    }
}


function checkPalindrome(inputString)
{
    let check = true;
    for(let i = 0, j = inputString.length-1; i < inputString.length; i++, j--)
    {
        if(inputString[i]!=inputString[j])
        {
            check = false;
            break;
        }
    }
    return check;
}

function removeSpecialChars(inputString) {
    // Remove brackets
    let stringWithout = inputString.replace(/[()\.,\/\\]/g, '');

    // Remove commas and full stops

    return stringWithout;
}

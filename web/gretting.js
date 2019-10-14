const form = document.querySelector(".js-form"),
   input = form.querySelector("input"),
   greeting = document.querySelector(".js-greetings")
   ;
   
//    const transValue = document.getElementById(".js-trans"),
//    Value = transValue.options[transValue.selectedIndex].value;
 
const USER_LS = "currentUser",
      SHOWING_CN = "showing";


function saveName(text) 
{
    localStorage.setItem(USER_LS, text);
}
      
function handleSubmit(event)
{
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
      
function askForName() 
{
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text)
{
   
 
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
 greeting.innerText = `안녕하세요. ${text}씨`;
 
//  if(Value === "2")
//  {
//     form.classList.remove(SHOWING_CN);
//     greeting.classList.add(SHOWING_CN);
//  greeting.innerText = `おはようございます. ${text}氏`;
//  }
//  if(Value === "3")
//  {
//     form.classList.remove(SHOWING_CN);
//     greeting.classList.add(SHOWING_CN);
//  greeting.innerText = `Hello, ${text}.`;
//  }
}

function loadName()
{
    const currentUser = localStorage.getItem(USER_LS)

    if(currentUser === null)
    {
        askForName();
    }
    else
    {
        paintGreeting(currentUser);
    }
}

function init()
{
    loadName();
}

init();
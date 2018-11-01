const screen = document.getElementById('screen')
const buttonsDiv = document.querySelectorAll('.buttons')[0]


function updateScreen(char) {
  screen.innerText += char
  // console.log(screen.innerText)
}

function getScreen() {
  return screen.innerText
}

function clearScreen() {
  screen.innerText = ''
}

function calcScreen() {
  let currentScreen = getScreen()
  currentScreen = currentScreen.split("")
    for (let i = 0; i < currentScreen.length; i++) {
      if (currentScreen[i] === "x") {
        currentScreen[i] = "*"
      } else if (currentScreen[i] === "÷") {
        currentScreen[i] = '/'
      } 
    }
    currentScreen = currentScreen.join('')
    clearScreen()
    if (currentScreen.includes('/0')) {
      screen.innerText = "!3RR0R!"
    } else {    
    try{
        screen.innerText = eval(currentScreen) }
    catch(e){
        screen.innerText = "!3RR0R!" }
    }
}

document.addEventListener('DOMContentLoaded', () => {
  // create listeners for buttons
  buttonsDiv.addEventListener('click', (event) => {
    // if it's equals -> calculate
    if (event.target.getAttribute('id') === 'equals') {
      calcScreen()
    }
    // if it's clear, clear Screen
    else if (event.target.getAttribute('id') === 'clear') {
      clearScreen()
    }
    // if it's an operator add to Screen
    else if (event.target.classList.contains('operator')) {
      updateScreen(event.target.innerText)
    }
    // if it's a number add to screen
    else {
      updateScreen(event.target.innerText)
    }
  })
})
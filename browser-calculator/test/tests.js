const { expect } = chai

// these variables use the function at the bottom of tests.js. Craig wrote it and
// I'm borrowing it because I like it. 

const oneButton = findButton('1')
const threeButton = findButton('3')
const plusButton = findButton('+')
const minusButton = findButton('-')
const multButton = findButton('x')
const divButton = findButton('÷')
const equalButton = findButton('=')
const zeroButton = findButton('0')
const clearButton = findButton('C')

describe("Screen Tests", () => {
  it("sets the screen to 1", () => {
    clearScreen()
    updateScreen('1')
    expect(getScreen()).to.equal('1')
  })
})

describe('Math Tests', function() {
  it('performs addition correctly', function() {
    clearScreen()
    threeButton.click()
    plusButton.click()
    threeButton.click()
    equalButton.click()
    expect(getScreen()).to.equal('6')
  })
  it('performs subtraction correctly', function() {
    clearScreen()
    threeButton.click()
    minusButton.click()
    oneButton.click()
    equalButton.click()
    expect(getScreen()).to.equal('2')
  })
  it('performs multiplication correctly', function() {
    clearScreen()
    threeButton.click()
    multButton.click()
    threeButton.click()
    equalButton.click()
    expect(getScreen()).to.equal('9')
  })
  it('performs division correctly', function() {
    clearScreen()
    threeButton.click()
    divButton.click()
    threeButton.click()
    equalButton.click()
    expect(getScreen()).to.equal('1')
  })
})

describe('Error Tests', function() {
  it('displays an error when user divides by zero', function() {
    clearScreen()
    threeButton.click()
    divButton.click()
    zeroButton.click()
    equalButton.click()
    expect(getScreen()).to.equal('!3RR0R!')
  })
  it('displays an error when input is not math', function() {
    clearScreen()
    threeButton.click()
    divButton.click()
    plusButton.click()
    minusButton.click()
    equalButton.click()
    expect(getScreen()).to.equal('!3RR0R!')
    
    clearScreen()
    threeButton.click()
    divButton.click()
    equalButton.click()
    expect(getScreen()).to.equal('!3RR0R!')
  })
})

describe('Math Tests', function() {
  it('clears the screen when the C button is clicked', function() {
    clearButton.click()
    expect(getScreen()).to.equal("")
  })
})

// this function iterates through the array of buttons to match the correct button element to the expected input
function findButton(char) {
  let buttons = document.querySelectorAll('.buttons span')

  for (let button of buttons) {
    if (char === button.innerText) {
      return button
    }
  }
}
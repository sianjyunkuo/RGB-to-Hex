const redId = document.querySelector('#red')
const greenId = document.querySelector('#green')
const blueId = document.querySelector('#blue')
const hexValue = document.querySelector('.hex-value')
const hexBox = document.querySelector('.hex-box')
const form = document.querySelector('.form')

// console.log(redId.value)
// console.log(greenId.value)
// console.log(blueId.value)

// Function transfer number from decimal to hex
function decToHex(number) {
  const hexNumber = number.toString(16)
  if (hexNumber.length === 1) {
    // console.log(hexNumber)
    return `0${hexNumber}`
  }
  // console.log(hexNumber)
  return hexNumber
}

// function rgb to hex
function colorToHex(r, g, b) {
  const red = decToHex(r)
  const green = decToHex(g)
  const blue = decToHex(b)
  hexValue.value = `#${red}${green}${blue}`
  hexBox.style.backgroundColor = `#${red}${green}${blue}`
  // console.log(hexValue.value)
  // console.log(hexBox.style.backgroundColor)
}


// click event and change color
form.addEventListener('submit', event => {
  event.preventDefault()
  colorToHex(Number(redId.value), Number(greenId.value), Number(blueId.value))
})
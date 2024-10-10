// const

// variable
let pcArrwosRandomByMath = []
let playerArrowsDirections=[]

// functions
const leftOrRight = () => {
  
playerArrowsImgs.forEach((playerArrowsImg,index)=>{
  let imgsValue = playerArrowsImg.getAttribute("value")
   // Append new contents
   playerArrowsDirections.push(imgsValue)
   playerArrowsDirections.length = index+1
   
})


 
const filling = (()=>{
  let newElements = playerArrowsDirections; // Replace with your actual new elements

  fillArray(newElements);
})

filling()

  // console.log(event.target.id)
  // let testImg = document.getElementById("imgZero")
  // console.dir(testImg.getAttribute("value"))
  }

  const fillPlayerTriesArray = (()=>{

  })
// working 100% for player cards
const initializeGame = () => {
  //   resetPcArrows()
  resetPlayerArrows()
  let pcArrwosRandomByMath = []
}
const fillPcArrowsRandomly = () => {
  for (let i = 0; i <= 7; i++) {
    pcArrwosRandomByMath.push(Math.floor(Math.random() * 3))
  }

  console.log(pcArrwosRandomByMath)
}
const startGame = () => {
  console.dir(pcArrows)
  pcArrows.forEach((pcArrow) => {
    pcArrow.classList.remove("hide-img")
  })
  fillPcArrowsRandomly()
}

const resetPlayerArrows = () => {
  cards.forEach((card) => {
    card.classList.add("hide-img")
  })
  pcArrows.forEach((pcArrow) => {
    pcArrow.classList.add("hide-img")
  })
}

// cashing

// full 12 btn cashing
const buttons = document.querySelectorAll(".btn")
//  full playerArrows cashing
const cards = document.querySelectorAll(".card")
// reset button
const startBtn = document.getElementById("startGame")
// reset button
const rstButton = document.getElementById("resetFullGame")
// full pcArrows cashing
const pcArrows = document.querySelectorAll(".pcImg0")
// full playerArrows cashing
const playerArrowsImgs = document.querySelectorAll("#imgID")




// events only (any Thing To Be Clicked Will Be Here)

// start button
startBtn.addEventListener("click", startGame)
// resetEvent
rstButton.addEventListener("click", initializeGame)
// full 12 btn click event
buttons.forEach((button) => {
  button.addEventListener("click", leftOrRight)
})




// test area

let array = new Array(7).fill(null); // Create an array of length 7 filled with null values

function fillArray(newElements) {
  

  array.splice(0, 7, ...newElements); // Replace the first 7 elements with the new elements
  console.log(array); // Log the updated array
}

// Assuming you have a button element with the id "myButton"



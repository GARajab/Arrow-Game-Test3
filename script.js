// const

// variable
let pcArrwosRandomByMath = []
// functions
const leftOrRight = (event) => {
  console.log(event.target.id)
}
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
// events

// start button
startBtn.addEventListener("click", startGame)
// resetEvent
rstButton.addEventListener("click", initializeGame)
// full 12 btn click event
buttons.forEach((button) => {
  button.addEventListener("click", leftOrRight)
})

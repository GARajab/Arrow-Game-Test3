// const


// variable


// functions
const leftOrRight = ((event)=>{
   
        console.log(event.target.id);
   
    
})

// cashing
const buttons = document.querySelectorAll(".btn")
// events
buttons.forEach((button) => {
    button.addEventListener("click", leftOrRight)
  })

  console.dir(buttons)
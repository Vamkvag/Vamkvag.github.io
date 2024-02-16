var green = document.querySelector('button#green')
var red = document.querySelector('button#red')
var blue = document.querySelector('button#blue')
var white = document.querySelector('button#white')

green.addEventListener('click', clicar_green)
red.addEventListener('click', clicar_red)
blue.addEventListener('click', clicar_blue)
white.addEventListener('click', clicar_white)

function clicar_green(){ 
 document.body.style.background = 'green'
}

function clicar_red(){ 
  document.body.style.background = 'red'
 }

 function clicar_blue(){ 
  document.body.style.background = 'blue'
 }

 function clicar_white(){ 
  document.body.style.background = 'white'
 }
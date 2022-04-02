const frame = document.getElementsByClassName("frame")
const contAiner = document.getElementsByClassName("container")
const inputColor = document.querySelector(".inputColor").value
const selectOption = document.querySelector("option")
const submitButton = document.querySelector("button")
const bigColor = document.getElementsByClassName("colorss")
const hexColor = document.getElementsByClassName("hexCodes")

function renderColor() {
  
  
}
let colorArray = [data.colors]
fetch("https://www.thecolorapi.com/scheme?hex=fffff&mode=triad&count=5")
  .then(res => res.json())
  .then(data => console.log(colorArray));
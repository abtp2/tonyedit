var dragItem = document.querySelector("#replacer");
var container = document.querySelector("#body");

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {
  if (e.type === "touchstart") {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;
  } else {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
  }

  if (e.target === dragItem) {
    active = true;
  }
}

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;

  active = false;
  
}

function drag(e) {
  if (active) {
    //e.preventDefault();

    if (e.type === "touchmove") {
      currentX = e.touches[0].clientX - initialX;
      currentY = e.touches[0].clientY - initialY;
    } else {
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
    }

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, dragItem);
   // console.log(xOffset +' ' + yOffset)
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

// setTranslate(-250, -260, dragItem)







/* color picked */
var colorPicker = new iro.ColorPicker("#picker", {  
width: 240, 
color: "#fff"
});

colorPicker.on('color:change', function(color){ 
var hex = colorPicker.color.hexString;
var rgb = colorPicker.color.rgbString;
document.getElementById("picker-hex").innerHTML = hex;
document.getElementById("picker-rgb").innerHTML = rgb;
});



document.getElementById("picker-open").onclick = function(){
var x = document.getElementById("picker");
if(x.style.display =="block"){
x.style.display ="none";				
document.body.classList.remove("picker-blur");
}				
else{
x.style.display ="block";		
document.getElementById("helper_toggle").click();
document.body.classList.add("picker-blur");
}
}
document.addEventListener('mouseup', function(e) {
var x = document.getElementById('picker');
if(!x.contains(e.target)){
x.style.display ="none";				
document.body.classList.remove("picker-blur");
}
});		



/* copying picker values */
document.getElementById("copy-picker-hex").onclick = function(){
var x = document.getElementById("picker-hex").innerText;		navigator.clipboard.writeText(x);		
}
document.getElementById("copy-picker-rgb").onclick = function(){
var x = document.getElementById("picker-rgb").innerText;		navigator.clipboard.writeText(x);		
}

























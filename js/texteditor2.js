var dragItem = document.querySelector("#replacer");
var container = document.querySelector("#body");

var active = false;
var currentX = -50;
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
    initialY = e.touches[0].clientY - yOffset;
  } else {
    initialY = e.clientY - yOffset;
  }

  if (e.target === dragItem) {
    active = true;
  }
}

function dragEnd(e) {
  initialY = currentY;

  active = false;
  
}

function drag(e) {
  if (active) {
    //e.preventDefault();

    if (e.type === "touchmove") {
      currentY = e.touches[0].clientY - initialY;
    } else {
      currentY = e.clientY - initialY;
    }
    
    yOffset = currentY;

    setTranslate(currentX, currentY, dragItem);
   // console.log(xOffset +' ' + yOffset)
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "%, " + yPos + "px, 0)";
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




























/* for keyboard inputs */
document.onkeydown = function (e){ 
var alt = e.altKey ? e.altKey : ((e.key === 18) ? true : false); 
var ctrl = e.ctrlKey ? e.ctrlKey : ((e.key === 17) ? true : false); 

/*  if (e.keyCode === 13) {
alert('Enter is pressed!');
}
if (e.keyCode === 67 && alt) { 
alert("alt+C is pressed."); 
}
 */ 
 
 
 
 
if (e.keyCode === 80 && alt) {/* p */
document.getElementById("picker-open").click();
}
if (e.keyCode === 72 && alt) {/* h */
window.location ="index.html";
}
if (e.keyCode === 70 && alt) {/* f */
document.getElementById("replacecode").click();
}
if (e.keyCode === 82 && alt) {/* r */
document.getElementById("runcode").click();
}
if (e.keyCode === 116) {/* f5 */
document.getElementById("runcode").click();
}
if (e.keyCode === 83 && ctrl) {/* s */
document.getElementById("savecode").click();
}
if (e.keyCode === 77 && alt) {/* m */
document.getElementById("down_open").click();
}
};

























/* AI...... ❤❤ */

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
const texts = document.querySelector(".texts");

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");
  const ai = text.toLowerCase();
  p.innerText = ai;  
  if (e.results[0].isFinal) {
   if (ai.includes("colour") ||
      ai.includes("color")){
 document.getElementById("picker-open").click();
      }
   
   if (ai.includes("replace") ||
      ai.includes("find")){
 document.getElementById("replacecode").click();
      }
    
   
   if (ai.includes("replacer") ||
      ai.includes("finder")){
 document.getElementById("replacecode").click();
      }
      
  if (ai.includes("replace") ||
      ai.includes("find")){
 document.getElementById("replacecode").click();
      }
  
     if (ai.includes("run") ||
      ai.includes("compile")){
 document.getElementById("runcode").click();
      }
  
  if (ai.includes("save") ||
      ai.includes("store")){
 document.getElementById("savecode").click();
      }
            
   if (ai.includes("menu")){
 document.getElementById("down_open").click();
      }   
      
      
      
      
      
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();

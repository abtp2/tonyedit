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







/* color picker */
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
rescue();


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



/* rescue picker */
function rescue(){
setTimeout(function(){
mainfunc();
main_func.blur();
}, 50);				
}




/* copying picker values */
document.getElementById("copy-picker-hex").onclick = function(){
var x = document.getElementById("picker-hex").innerText;	
mainfunc();
main_func.insert(x);
main_func.focus();
document.getElementById("picker").style.display ="none";				
document.body.classList.remove("picker-blur");
}



document.getElementById("copy-picker-rgb").onclick = function(){
var x = document.getElementById("picker-rgb").innerText;		mainfunc();
main_func.insert(x);
main_func.focus();
document.getElementById("picker").style.display ="none";				
document.body.classList.remove("picker-blur");
}


























/* function for fsm */
function fsm(){
var element = document.documentElement;
if(element.requestFullscreen){
element.requestFullscreen().then(function(){ 		
console.log("Full Screen Mode : ON;");
}).catch(function(error){
alert("You device do not support FSM");
});}
else if(elem.webkitRequestFullscreen){
element.webkitrequestFullscreen().then(function(){ 		
console.log("Full Screen Mode : ON;");
}).catch(function(error){
alert("You device do not support FSM");
});}
else if(element.msrequestFullscreen){
element.msrequestFullscreen().then(function(){ 		
console.log("Full Screen Mode : ON;");
}).catch(function(error){
alert("You device do not support FSM");
});}
else{
alert("You device do not support FSM");
}
}

/* function for exit full screen mode */
function fsm_exit(){
var x = document;
if(x.ExitFullscreen){
x.ExitFullscreen();
}
else if(x.webkitExitFullscreen){
x.webkitExitFullscreen();
}
else if(x.msExitFullscreen){
x.msExitFullscreen();
}
else{
alert("You device do not support FSM");
}
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
if (e.keyCode === 122 && alt) {/* f11 */
   if(document.fullscreenElement){fsm_exit();} 
   else{fsm();}
};

























/* AI...... ❤❤ */


var tog_voice_local = localStorage.getItem("tog_voice"); 


if(tog_voice_local == "on"){

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
  
  
/* color picker */
   if (ai.includes("open colour") ||
      ai.includes("open color")){
 document.getElementById("picker-open").click();
      }
   if (ai.includes("close colour") ||
      ai.includes("close color")){
 document.getElementById("picker").style.display ="none";				
document.body.classList.remove("picker-blur");
      }
/* color picker */
   
   
   
/* replacer div */   
   if (ai.includes("open replace") ||
      ai.includes("open find")){
 document.getElementById("replacecode").click();
      }    
   
   if (ai.includes("open replacer") ||
      ai.includes("open finder")){
 document.getElementById("replacecode").click();
      }
   if (ai.includes("close replace") ||
      ai.includes("close find")){
 document.getElementById("replacer_close").click();
      }    
   
   if (ai.includes("close replacer") ||
      ai.includes("close finder")){
       document.getElementById("replacer_close").click();
      }
/* replacer div ended */



      
/* run the code */  
     if (ai.includes("run") ||
      ai.includes("compile")){
 document.getElementById("runcode").click();
      }
  
  if (ai.includes("save") ||
      ai.includes("store")){
 document.getElementById("savecode").click();
      }
/* run the code ended */



/* closing result */  
     if (ai.includes("open editor") ||
      ai.includes("back to editor")){
 document.getElementById("close-result").click();
      } 
/* closing result ended */



/* open python editor */  
     if (ai.includes("open python") ||
      ai.includes("go to python")){
 window.location ="texteditor-py.html";
       } 
/* open python ended */



/* open html editor */  
     if (ai.includes("open html") ||
      ai.includes("go to html")){
 window.location ="texteditor.html";
       } 
/* open html ended */




/* go to home */  
     if (ai.includes("home") ||
      ai.includes("open home")){
 window.location ="index.html";
       } 
/* home ended */





/* menu */            
   if (ai.includes("menu")){
 document.getElementById("down_open").click();
      }   
/* menu ended */  


/* undo */            
   if (ai.includes("undo")){
 document.getElementById("undo_edit").click();
      }   
/* undo ended */  


/* redo */            
   if (ai.includes("redo")){
 document.getElementById("redo_edit").click();
      }   
/* redo ended */  



      
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
}


else{
console.log("Voice controlling is disabled !!, open it from setting")
}
}















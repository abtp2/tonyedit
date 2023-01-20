/* for width and height input */
document.getElementById("i-play").onclick = function(){
var w = document.getElementById("i-width").value;
var h = document.getElementById("i-height").value;
var x = document.getElementById("iframe_container");

x.style.width = w + "px";
x.style.height = h + "px";
}



/* for width and height update */
var iframe_cont = document.getElementById("iframe_container");
function outputsize(){ 
document.getElementById("i-width").value = iframe_cont.offsetWidth;
document.getElementById("i-height").value = iframe_cont.offsetHeight;
} 
outputsize();
new
ResizeObserver(outputsize).observe(iframe_cont);




/* helper */
function val(e){;
var w = e.getAttribute("data-val");
document.getElementById("iframe_container").style.width = w + "px";
}














/* iframe inner code */
window.onload = function(){
var html_div = localStorage.getItem("html_code_inner");
var css_div = localStorage.getItem("css_code_inner");
var js_div = localStorage.getItem("js_code_inner");



var code_div = document.getElementById("iframe").contentWindow.document;
code_div.open(); 
code_div.write(html_div + "<style>" + css_div + "</style>" + "<script>" + js_div + "</script>" + "</body> </html>"); 
code_div.close(); 
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


if (e.keyCode === 122 && alt) {/* f11 */
   if (document.fullscreenElement){fsm_exit();} 
   else{fsm();}
};
}
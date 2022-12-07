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

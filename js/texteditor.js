window.onload = function(){
var x = localStorage.getItem("html_code_inner");	
var y = localStorage.getItem("css_code_inner");	
var z = localStorage.getItem("js_code_inner");	
document.getElementById("helper_toggle").click();

if(x !== null && y !== null && z !== null){
acehtml.setValue(x ,1);	
acecss.setValue(y ,1);	
acejs.setValue(z ,1);	
}

if(x == null && y == null && z == null){
acehtml.setValue(`<!DOCTYPE html> 
<html lang="en">
<head> 
	<title>Page title</title>
</head> 
<body>
				
</body> 
</html>` ,1);
acecss.setValue(`*{
margin: 0;
padding: 0;
box-sizing: border-box;
}` ,1);
acejs.setValue(`// write javascript here` ,1);
}
}






var acehtml = window.ace.edit("html_code");
acehtml.setOptions({
enableBasicAutocompletion: true,
enableLiveAutocompletion: true,
fontSize: "100%" 
});
acehtml.setTheme("ace/theme/twilight");
acehtml.getSession().setMode("ace/mode/html"); 
// acehtml.setValue(acehtml_value);
// acehtml.getSession().getValue();



// for css 
var acecss = window.ace.edit("css_code");
acecss.setOptions({
enableBasicAutocompletion: true,
enableLiveAutocompletion: true,
fontSize: "100%" 
});
acecss.setTheme("ace/theme/twilight");
acecss.getSession().setMode("ace/mode/css");
// acecss.setValue(acecss_value);
// acecss.getSession().getValue();



// for js
var acejs = window.ace.edit("js_code");
acejs.setOptions({
enableBasicAutocompletion: false,
enableLiveAutocompletion: false,
fontSize: "100%" 
});
acejs.setTheme("ace/theme/twilight");
acejs.getSession().setMode("ace/mode/javascript");
// acejs.setValue(acejs_value);
// acejs.getSession().getValue();
















/* to toggle the textareas */
var html_code_content = document.getElementById("html_code");
var css_code_content = document.getElementById("css_code");
var js_code_content = document.getElementById("js_code");



document.getElementById("nav_html").onclick = function(){
html_code_content.style.display ="block";
css_code_content.style.display ="none";
js_code_content.style.display ="none";

document.getElementById("nav_html").style.borderBottom ="2px solid #fff";
document.getElementById("nav_css").style.borderBottom ="0px solid #fff";
document.getElementById("nav_js").style.borderBottom ="0px solid #fff";
}
document.getElementById("nav_css").onclick = function(){
css_code_content.style.display ="block";
html_code_content.style.display ="none";
js_code_content.style.display ="none";

document.getElementById("nav_css").style.borderBottom ="2px solid #fff";
document.getElementById("nav_html").style.borderBottom ="0px solid #fff";
document.getElementById("nav_js").style.borderBottom ="0px solid #fff";
}
document.getElementById("nav_js").onclick = function(){
js_code_content.style.display ="block";
css_code_content.style.display ="none";
html_code_content.style.display ="none";

document.getElementById("nav_js").style.borderBottom ="2px solid #fff";
document.getElementById("nav_css").style.borderBottom ="0px solid #fff";
document.getElementById("nav_html").style.borderBottom ="0px solid #fff";
}
/* toggling ended */

/* close result div */
document.getElementById("close-result").onclick = function(){
document.getElementById("result-div").style.display ="none";				
}







/* compile function */
document.getElementById("runcode").onclick = function(){ 
var html_div_one = acehtml.getSession().getValue();
var html_div_two = html_div_one.replace("</body>", "");


var html_div = html_div_two.replace("</html>", "");
var css_div = acecss.getSession().getValue();
var js_div = acejs.getSession().getValue();
var code_div = document.getElementById("result-code").contentWindow.document;
code_div.open(); 
code_div.write(html_div + "<style>" + css_div + "</style>" + "<script>" + js_div + "</script>" + "</body> </html>"); 
code_div.close(); 
document.getElementById("result-div").style.display ="block"; 
}




document.getElementById("savecode").onclick = function(){ 
var html_div_one = acehtml.getSession().getValue();
var css_div = acecss.getSession().getValue();
var js_div = acejs.getSession().getValue();
localStorage.setItem("html_code_inner", html_div_one); 
localStorage.setItem("css_code_inner", css_div); 
localStorage.setItem("js_code_inner", js_div); 
}









/* helper div */
document.getElementById("helper_toggle").onclick = function(){
var x = document.getElementById("main_helper");
if(x.style.marginLeft =="120%"){
x.style.marginLeft ="0"	;
document.getElementById("helper_toggle_i").innerHTML ="chevron_right";				
}
else{
x.style.marginLeft ="120%"	;
document.getElementById("helper_toggle_i").innerHTML ="chevron_left";
}
}

document.addEventListener('mouseup', function(e) {
var x = document.getElementById('helper');
if(!x.contains(e.target)){
document.getElementById("main_helper").style.marginLeft ="120%";	
document.getElementById("helper_toggle_i").innerHTML ="chevron_left";
}
});		
/* helper div */






































/* all the main functions started 😁😁*/
var main_func = acehtml;
var html_main_func = document.getElementById("html_code");
var css_main_func = document.getElementById("css_code");
var js_main_func = document.getElementById("js_code");

function mainfunc(){
if(html_main_func.style.display =="block"){
main_func = acehtml;	
}
if(css_main_func.style.display =="block"){
main_func = acecss;	
}
if(js_main_func.style.display =="block"){
main_func = acejs;	
}
}






/* for undo and redo */
document.getElementById("undo_edit").onclick = function(){
mainfunc();
main_func.undo();
}
document.getElementById("redo_edit").onclick = function(){
mainfunc();
main_func.redo();
}
/* undo redo ended */





/* for search and replace */
document.getElementById("replacer_close").onclick = function(){
document.getElementById("replacer").style.display ="none";				
}
document.getElementById("replacecode").onclick = function(){
document.getElementById("replacer").style.display ="flex";				
}


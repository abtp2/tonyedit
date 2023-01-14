window.onload = function(){
var x = localStorage.getItem("html_code_inner");	
var y = localStorage.getItem("css_code_inner");	
var z = localStorage.getItem("js_code_inner");	
var editor_theme = localStorage.getItem("theme_name");
document.getElementById("helper_toggle").click();

/* Setting value for text editor */
if(x !== null && y !== null && z !== null){
acehtml.setValue(x ,1);	
acecss.setValue(y ,1);	
acejs.setValue(z ,1);	
}

if(x == null && y == null && z == null){
acehtml.setValue(`<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
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
acejs.setValue(`// write javascript here
` ,1);
acehtml.moveCursorToPosition({row: 7, column: 0});
}


/* Setting theme for editor */
if(editor_theme !== null){
acehtml.setTheme("ace/theme/" + editor_theme);
acecss.setTheme("ace/theme/" + editor_theme);
acejs.setTheme("ace/theme/" + editor_theme);
}
else{
acehtml.setTheme("ace/theme/twilight");
acecss.setTheme("ace/theme/twilight");
acejs.setTheme("ace/theme/twilight");
}
console.log("Editor theme is :" + editor_theme);
}










/* editor functions */

var acehtml = window.ace.edit("html_code");
acehtml.setOptions({
enableBasicAutocompletion: true,
enableLiveAutocompletion: true,
fontSize: "100%" 
});
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
acejs.getSession().setMode("ace/mode/javascript");
// acejs.setValue(acejs_value);
// acejs.getSession().getValue();
















/* to toggle the textareas */
var html_code_content = document.getElementById("html_code");
var css_code_content = document.getElementById("css_code");
var js_code_content = document.getElementById("js_code");
var html_hint = document.getElementsByClassName("html_hint_div")[0];
var css_hint = document.getElementsByClassName("css_hint_div")[0];
var js_hint = document.getElementsByClassName("js_hint_div")[0];




document.getElementById("nav_html").onclick = function(){
html_code_content.style.display ="block";
css_code_content.style.display ="none";
js_code_content.style.display ="none";

html_hint.style.display ="flex";
css_hint.style.display ="none";
js_hint.style.display ="none";
document.getElementById("nav_html").style.borderBottom ="2px solid #fff";
document.getElementById("nav_css").style.borderBottom ="0px solid #fff";
document.getElementById("nav_js").style.borderBottom ="0px solid #fff";
}
document.getElementById("nav_css").onclick = function(){
css_code_content.style.display ="block";
html_code_content.style.display ="none";
js_code_content.style.display ="none";

html_hint.style.display ="none";
css_hint.style.display ="flex";
js_hint.style.display ="none";
document.getElementById("nav_css").style.borderBottom ="2px solid #fff";
document.getElementById("nav_html").style.borderBottom ="0px solid #fff";
document.getElementById("nav_js").style.borderBottom ="0px solid #fff";
}
document.getElementById("nav_js").onclick = function(){
js_code_content.style.display ="block";
css_code_content.style.display ="none";
html_code_content.style.display ="none";

html_hint.style.display ="none";
css_hint.style.display ="none";
js_hint.style.display ="flex";
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
document.getElementById("savecode").click();


/* for page title */
const regex_title = /\<title\>(.*)\<\/title\>/;
const found_title = html_div_one.match(regex_title);
const main_title = found_title?.[1];
document.getElementById("code_run_title").innerHTML = main_title;
}



/* save code */
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
mainfunc();
main_func.focus();


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



/* emulator open icon */
document.getElementById("emulator_open").onclick = function(){
document.getElementById("savecode").click();
window.location ="emulator.html";				
}




/* download menu div */
document.getElementById("savecode2").onclick = function(){
document.getElementById("savecode").click();				
}

/* to open down menu */
document.getElementById("down_open").onclick = function(){
document.getElementById("down_menu").style.display ="flex";				
}


/* to close down menu*/
document.addEventListener('mouseup', function(e) {
var x = document.getElementById('down_menu');
if(!x.contains(e.target)){
document.getElementById("down_menu").style.display ="none";
document.getElementById("line_input").value ="";
}
});		































/* all the main functions started 😁😁*/
var main_func = acehtml;
var main_func_type = "text/html";
var html_main_func = document.getElementById("html_code");
var css_main_func = document.getElementById("css_code");
var js_main_func = document.getElementById("js_code");


function mainfunc(){
if(html_main_func.style.display =="block"){
main_func = acehtml;	
main_func_type = "text/html";
}
if(css_main_func.style.display =="block"){
main_func = acecss;	
main_func_type = "text/css";
}
if(js_main_func.style.display =="block"){
main_func = acejs;	
main_func_type = "text/javascript";
}
}






/* for undo and redo */
document.getElementById("undo_edit").onclick = function(){
mainfunc();
main_func.focus();
main_func.undo();
}
document.getElementById("redo_edit").onclick = function(){
mainfunc();
main_func.focus();
main_func.redo();
main_func.clearSelection();
}
/* undo redo ended */





/* for search and replace */
document.getElementById("replacer_close").onclick = function(){
document.getElementById("replacer").style.display ="none";				
document.getElementById("replacer").style.transform ="none";
}
document.getElementById("replacecode").onclick = function(){
document.getElementById("replacer").style.display ="flex";				
document.getElementById("replacer").style.transform ="translateX(-50%)";
document.getElementById("replacer").style.left ="50%";
document.getElementById("replacer").style.top ="80px";
}






document.getElementById("find_code_value").onkeyup = function(){
var x = document.getElementById("find_code_value").value;
mainfunc();
main_func.find(x);							
}


function repall(){
var x = document.getElementById("find_code_value").value;
var y = document.getElementById("replace_code_value").value;
mainfunc();
main_func.find(x);					
main_func.replaceAll(y);	
}
function repone(){
var x = document.getElementById("find_code_value").value;
var y = document.getElementById("replace_code_value").value;
mainfunc();
main_func.find(x);					
main_func.replace(y);	
}

/* search and replace ended */







/* go to line */
document.getElementById("line_submit").onclick = function(){
var x = document.getElementById("line_input").value;
mainfunc();
main_func.gotoLine(x);			
}








/* download file */
document.getElementById("downcode").onclick = function(){
mainfunc();
var x = main_func.getSession().getValue();
var fileNameInput = prompt("Enter File Name : \nDon't write extensions for ex-: .html, .css etc.");



if(fileNameInput == null){
return;				
}
else{
const blob = new Blob([x], {type: main_func_type});
const fileUrl = URL.createObjectURL(blob);
const link = document.createElement("a");
link.download = fileNameInput;
link.href = fileUrl;
link.click();				
}
}





/* sharing file */
document.getElementById("sharecode").onclick = function(){
navigator.share({ 
title: 'TonyEdit', 
text: 'Hey check online editor, where you can code html,css,js and python. Made by Ashutosh Pandey.',
url: 'https://tonyedit.netlify.app'
});
}






/* Importing file */
document.getElementById("importcode").onclick = function(){
mainfunc();				
var fileInput = document.getElementById('fileInput');
fileInput.click();
		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			var textType = main_func_type;

			if (file.type.match(textType)) {
				var reader = new FileReader();

				reader.onload = function(e) {
document.getElementById("down_menu").style.display ="none";
document.getElementById("line_input").value ="";				
					main_func.setValue(reader.result, 1);
    document.getElementById("savecode").click();
				}

				reader.readAsText(file);	
			} else {
				alert("File not supported!");
			}
		});
}















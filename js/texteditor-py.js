window.onload = function(){
var x = localStorage.getItem("py_code_inner");	
var editor_theme = localStorage.getItem("theme_name");
document.getElementById("helper_toggle").click();


if(x !== null){
acehtml.setValue(x ,1);	
}
if(x == null){
acehtml.setValue(`# write python code here
`,1);
}



/* Setting theme for editor */
if(editor_theme !== null){
acehtml.setTheme("ace/theme/" + editor_theme);
}
else{
acehtml.setTheme("ace/theme/github_dark");
}
console.log("Editor theme is :" + editor_theme);
}






var acehtml = window.ace.edit("html_code");
acehtml.setOptions({
enableBasicAutocompletion: true, 
enableSnippets: true, 
enableLiveAutocompletion: true,
fontSize: "100%" 
});
acehtml.getSession().setMode("ace/mode/python"); 
// acehtml.setValue(acehtml_value);
// acehtml.getSession().getValue();
acehtml.setHighlightActiveLine(true);
acehtml.setShowPrintMargin(false);






/* main function */
function mainfunc(){
main_func = acehtml;				
}





/* close result div */
document.getElementById("close-result").onclick = function(){
document.getElementById("result-div").style.display ="none";				
}







/* compile function */
document.getElementById("runcode").onclick = function(){ 
runit();
document.getElementById("result-div").style.display ="block"; 
document.getElementById("savecode").click();
}





/* savecode */
document.getElementById("savecode").onclick = function(){ 
var html_div_one = acehtml.getSession().getValue();
valert("Saved");
document.getElementById("down_menu").style.display ="none";
document.getElementById("line_input").value ="";

localStorage.setItem("py_code_inner", html_div_one); 
}



/* virtual alert*/
function valert(x){
var box = document.getElementById("v_alert");
var content = document.getElementById("v_alert_text");
box.style.display ="flex";
content.innerHTML = x;
setTimeout(function(){
box.style.display ="none";
}, 2000);
}








/* full screen mode*/
document.getElementById("fscode").onclick = function(){
document.getElementById("down_menu").style.display ="none";
document.getElementById("line_input").value ="";


if (document.fullscreenElement){fsm_exit();valert("Full Screen Mode : ON")} 
else{fsm();valert("Full Screen Mode : OFF")}				
}








/* checking if code has turtle 
setInterval(function getttt(){
var x = acehtml.getSession().getValue();
var fcr = document.getElementById("result-code");
var scr = document.getElementById("mycanvas"); 
if(x.includes("turtle")){
fcr.style.display ="none";
scr.style.display ="block";
}		
else{
fcr.style.display ="block";
scr.style.display ="none";
}
},100);
 */



/* helper div */
document.getElementById("helper_toggle").onclick = function(){
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
var main_func_type = "text/plain";
var html_main_func = document.getElementById("html_code");





/* for undo and redo */
document.getElementById("undo_edit").onclick = function(){
main_func.undo();
}
document.getElementById("redo_edit").onclick = function(){
main_func.redo();
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
main_func.find(x);							
}


function repall(){
var x = document.getElementById("find_code_value").value;
var y = document.getElementById("replace_code_value").value;
main_func.find(x);					
main_func.replaceAll(y);	
}
function repone(){
var x = document.getElementById("find_code_value").value;
var y = document.getElementById("replace_code_value").value;
main_func.find(x);					
main_func.replace(y);	
}

/* search and replace ended */







/* go to line */
document.getElementById("line_submit").onclick = function(){
var x = document.getElementById("line_input").value;
main_func.gotoLine(x);			
}








/* download file */
document.getElementById("downcode").onclick = function(){
var x = main_func.getSession().getValue();
var fileNameInput = prompt("Enter File Name : \nDon't write extensions for ex-: .py");


if(fileNameInput == null){
return;				
}
else{
const blob = new Blob([x], {type: main_func_type});
const fileUrl = URL.createObjectURL(blob);
const link = document.createElement("a");
link.download = fileNameInput + ".py";
link.href = fileUrl;
link.click();				
}
}





/* sharing file */
document.getElementById("sharecode").onclick = function(){
navigator.share({ 
title: 'TonyEdit', 
url: 'https://tonyedit.netlify.app' 
});
}






/* Importing file */
document.getElementById("importcode").onclick = function(){
var fileInput = document.getElementById('fileInput');
fileInput.click();
		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			var textType = /text.*/;

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















window.addEventListener('beforeunload', (event) =>{ 
event.preventDefault(); 
event.returnValue = "Do you want to exit ?"; 
});

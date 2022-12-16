window.onload = function(){
var x = localStorage.getItem("py_code_inner");	
document.getElementById("helper_toggle").click();


if(x !== null){
acehtml.setValue(x ,1);	
}

if(x == null){
acehtml.setValue(`# write python code here


# Python 3 program to print terms of binomial
# series and also calculate sum of series.

# Function to print the series
def series(A, X, n):

	# Calculating and printing first term
	term = pow(A, n)
	print(term, end = " ")

	# Computing and printing remaining terms
	for i in range(1, n+1):

		# Find current term using previous terms
		# We increment power of X by 1, decrement
		# power of A by 1 and compute nCi using
		# previous term by multiplying previous
		# term with (n - i + 1)/i
		term = int(term * X * (n - i + 1)/(i * A))

		print(term, end = " ")
	
# Driver Code
A = 3; X = 4; n = 5
series(A, X, n)

# This code is contributed by Smitha Dinesh Semwal.
`,1);
}
}






var acehtml = window.ace.edit("html_code");
acehtml.setOptions({
enableBasicAutocompletion: true,
enableLiveAutocompletion: true,
fontSize: "100%" 
});
acehtml.setTheme("ace/theme/twilight");
acehtml.getSession().setMode("ace/mode/python"); 
// acehtml.setValue(acehtml_value);
// acehtml.getSession().getValue();

















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
localStorage.setItem("py_code_inner", html_div_one); 
}





/* checking if code has turtle */
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
link.download = fileNameInput;
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

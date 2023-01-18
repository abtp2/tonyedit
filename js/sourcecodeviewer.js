document.getElementsByTagName("form")[0].onsubmit = function(){
event.preventDefault();
var x = document.getElementById("code-input").value;
document.getElementById("result-div").style.display ="block";
document.getElementById("result-link").innerText = x;

fetch('https://api.codetabs.com/v1/proxy?quest=' + x).then((response) => response.text()).then((text) => 
document.getElementById("result-code").value = text); 
}



/* closing result div */
document.getElementById("close-result").onclick = function(){
document.getElementById("result-div").style.display ="none";				
document.getElementById("result-code").value ="";

document.getElementById("copy").innerHTML ="content_copy";
document.getElementById("copy").style.color ="#000000";
}


/* copy code */
document.getElementById("copy").onclick = function(){
var x = document.getElementById("result-code").value;
navigator.clipboard.writeText(x);
document.getElementById("copy").innerHTML ="task_alt";
document.getElementById("copy").style.color ="#46b100";
}


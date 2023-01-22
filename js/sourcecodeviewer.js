document.getElementsByTagName("form")[0].onsubmit = function(){
event.preventDefault();
var line = window.navigator.onLine;


if(line == true){
var x = document.getElementById("code-input").value;
document.getElementById("result-div").style.display ="block";
document.getElementById("result-link").innerText = x;

fetch('https://api.codetabs.com/v1/proxy?quest=' + x).then((response) => response.text()).then((text) =>{
acehtml.setValue(text ,1)
var beautify = ace.require("ace/ext/beautify");
beautify.beautify(acehtml.session);
});
}
else{
alert("You are offline !! \nTo access the sourcecode you need a internet connection.")
}



}





/*  
function htmlToEntities(html) {
  let entities = {
    '<': '&lt;',
    '>': '&gt;',
  };
  return html.replace(/[<>]/g, function (c) {
    return entities[c];
  });
}
 */







/* closing result div */
document.getElementById("close-result").onclick = function(){
document.getElementById("result-div").style.display ="none";				
document.getElementById("result-code").value ="";

document.getElementById("copy").innerHTML ="content_copy";
document.getElementById("copy").style.color ="#000000";
}


/* copy code */
document.getElementById("copy").onclick = function(){
var x = acehtml.getSession().getValue();
var clipboard = navigator.clipboard;

if(clipboard != undefined){
navigator.clipboard.writeText(x);
document.getElementById("copy").innerHTML ="task_alt";
document.getElementById("copy").style.color ="#405b66";
}
else{
alert("Your device not support to copy");
}
}


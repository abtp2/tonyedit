/*  $(document).ready(function(){
 $("#menu-items").fadeOut(0);
}); */


$(document).ready(function(){
var x = localStorage.getItem("tog_voice");
var editor_theme = localStorage.getItem("theme_name"); 
if(x == "on"){
$(".tog_voice").css("justify-content", "flex-end");				
}
if(x == "off"){
$(".tog_voice").css("justify-content", "flex-start");				
}






if (editor_theme =="twilight"){
$("#twilight").addClass("theme_applied");
$("*").not("#twilight").removeClass("theme_applied");
}
else if (editor_theme =="tomorrow_night"){
$("#tomorrow_night").addClass("theme_applied");
$("*").not("#tomorrow_night").removeClass("theme_applied");
}
else if (editor_theme =="dracula"){
$("#dracula").addClass("theme_applied");
$("*").not("#dracula").removeClass("theme_applied");
}
else if (editor_theme =="monokai"){
$("#monokai").addClass("theme_applied");
$("*").not("#monokai").removeClass("theme_applied");
}
else if (editor_theme =="one_dark"){
$("#one_dark").addClass("theme_applied");
$("*").not("#one_dark").removeClass("theme_applied");
}
else if (editor_theme =="clouds_midnight"){
$("#clouds_midnight").addClass("theme_applied");
$("*").not("#clouds_midnight").removeClass("theme_applied");
}
else{
$("#github_dark").addClass("theme_applied");
}
}); 







var wiw = window.innerWidth;
window.onload = function(){
var x = sessionStorage.getItem("loader");


if(x != null){
$("#loader").css("display", "none");
$("body").css("display", "block");
}
else{
$("body").css("display", "block");
setTimeout(function(){
$("#loader").css("display", "none");			
} ,2000);	
}
};
$("body").click(function(){
sessionStorage.setItem("loader", "open");				
});










/* navbar */
$("#nav-toggler").click(function(){
const x = $("#nav");
x.css("left", "0");				
$("body").addClass("display");
});

/*  
$("#nav").click(function(){
$(this).css("left", "-100%");				
$("body").removeClass("display");
});
 */


if(wiw < 768){
$(document).mouseup(function(e){
var container = $("#nav");
if(!container.is(e.target) && container.has(e.target).length === 0){
$("#nav").css("left", "-100%");				
$("body").removeClass("display");
}
});
}




/* menu */
$("#menu-button").click(function(){
 if($("#menu-items").is(':hidden')){
 	$("#menu-items").css("display", "flex");			
 }
 else{
 	$("#menu-items").css("display", "none");			
 }
});




/* dev toggler */
$("#dev-toggle").click(function(){
var x = $("#dev");
if(x.is(':hidden')){
x.css("display","flex");				
$("body").addClass("dev-blur");
}				
else{
x.css("display","none");				
$("body").removeClass("dev-blur");
}				
});



/* dev closer */
$("#dev-close").click(function(){
var x = $("#dev");
x.css("display","none");				
$("body").removeClass("dev-blur");
});
$(document).mouseup(function(e){
var container = $("#dev");
if(!container.is(e.target) && container.has(e.target).length === 0){
$("#dev").css("display","none");				
$("body").removeClass("dev-blur");
}
});







/* choose editor */
function choose(){
var x = $("#editor_select");
if(x.is(':hidden')){
x.css("display","flex");				
$("body").addClass("edit-blur");
}				
else{
x.css("display","none");				
$("body").removeClass("edit-blur");
}					
}

$(document).mouseup(function(e){
var container = $("#editor_select");
if(!container.is(e.target) && container.has(e.target).length === 0){
$("#editor_select").css("display","none");				
$("body").removeClass("edit-blur");
}
});











/* Settings div */
/* voice setting */
$(".tog_voice").click(function(){
if($(this).css("justify-content") == "flex-end"){
$(this).css("justify-content", "flex-start");
localStorage.setItem("tog_voice", "off")
}			
else{
$(this).css("justify-content", "flex-end");
localStorage.setItem("tog_voice", "on")
}
});







/* full screen mode setting */
$(".tog_fsm").click(function(){
if($(this).css("justify-content") == "flex-end"){
$(this).css("justify-content", "flex-start");
fsm_exit();
}			
else{
$(this).css("justify-content", "flex-end");
fsm();
}
});

/* function for fsm */
function fsm(){
var element = document.documentElement;
if(element.requestFullscreen){
element.requestFullscreen().then(function(){ 		
console.log("Full Screen Mode : ON;");
}).catch(function(error){
alert("You device do not support FSM");
$(".tog_fsm").click();
});}
else if(elem.webkitRequestFullscreen){
element.webkitrequestFullscreen().then(function(){ 		
console.log("Full Screen Mode : ON;");
}).catch(function(error){
alert("You device do not support FSM");
$(".tog_fsm").click();
});}
else if(element.msrequestFullscreen){
element.msrequestFullscreen().then(function(){ 		
console.log("Full Screen Mode : ON;");
}).catch(function(error){
alert("You device do not support FSM");
});}
else{
alert("You device do not support FSM");
$(".tog_fsm").click();
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










/* Settings div open */
$("#opensetting").click(function(){
$("#set_div").css("display", "block");		
if(wiw < 768){
$("#nav").css("left", "-100%");				
$("body").removeClass("display");
}		
});



/* Settings div close */
$("#set_div_nav i").click(function(){
$("#set_div").css("display", "none");				
});





/* sharing file */
$("#share").click(function(){
navigator.share({ 
title: 'TonyEdit', 
text: 'Hey check online editor, where you can code html,css,js and python. Made by Ashutosh Pandey.',
url: 'https://tonyedit.netlify.app'
});
});

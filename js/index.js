/*  $(document).ready(function(){
 $("#menu-items").fadeOut(0);
}); */


$(document).ready(function(){
var x = localStorage.getItem("tog_voice");

if(x == "on"){
$(".tog_voice").css("justify-content", "flex-end");				
}
if(x == "off"){
$(".tog_voice").css("justify-content", "flex-start");				
}
}); 







var wiw = window.innerWidth;
window.onload = function(){
$("#loader").css("display", "none");				
};


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




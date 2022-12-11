/*  $(document).ready(function(){
 $("#menu-items").fadeOut(0);
}); */

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

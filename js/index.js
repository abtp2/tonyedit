$(document).ready(function(){
 $("#menu-items").fadeOut(0);
});


window.onload = function(){
$("#loader").css("display", "none");				
};


/* navbar */
$("#nav-toggler").click(function(){
const x = $("#nav");
x.css("left", "0");				
$("body").addClass("display");
});
$("#nav").click(function(){
$(this).css("left", "-100%");				
$("body").removeClass("display");
});


$(document).mouseup(function(e){
var container = $("#nav");
if(!container.is(e.target) && container.has(e.target).length === 0){
$("#nav").css("left", "-100%");				
$("body").removeClass("display");
}
});





/* menu */
$("#menu-button").click(function(){
 if($("#menu-items").is(':hidden')){
 	$("#menu-items").fadeIn();			
 }
 else{
 	$("#menu-items").fadeOut();			
 }
});


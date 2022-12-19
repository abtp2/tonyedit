function onerrorhideresult(){
document.getElementById("result-div").style.display ="none";			
}



// output functions are configurable.  This one just appends some text
// to a pre element.
function outf(text) { 
    var mypre = document.getElementById("result-code"); 
    mypre.innerHTML = mypre.innerHTML + text; 
} 
function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}

// Here's everything you need to run a python program in skulpt
// grab the code from your textarea
// get a reference to your pre element for output
// configure the output function
// call Sk.importMainWithBody()
function runit() { 
   var html_div_one = acehtml.getSession().getValue();
   var prog = html_div_one; 
   var mypre = document.getElementById("result-code"); 
   mypre.innerHTML = ''; 
   Sk.canvas = "mycanvas";
   Sk.pre = "result-code";
   Sk.configure({output:outf, read:builtinRead}); 
   try {
      eval(Sk.importMainWithBody("<stdin>",false,prog)); 
   }
   catch(e) {       
       alert(e.toString());	       	
       onerrorhideresult(); 
   }
} 




console.log("mon fichier js est connecte");

function text()
{
	console.log("test text");
}

text() ;

//console.log(document.getElementsBytagName("p")) ;

//const P = document.getElementsByTagName("p") ;

//console.log(P) ;

//document.getElementById("test").onclick = function() {console.log("test")};

//P.onclick = function(){console.log("test")} ;

console.log(document.getElementById("p1"));

const P1 = document.getElementById("p1") ;

console.dir(P1);

document.getElementById("p1").onclick = () => {myFunction()};

console.dir(P1);

function myFunction() {
 	console.log("test") ;
	P1.classList.toggle("myStyle") ;
}


/******
 * 
 */
/****funcion topnav responsive */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }

}

/**funcion sonido burbujas */
function sound(element){
  document.getElementById(element).play();
}
function silence(element){
  document.getElementById(element).pause();
}

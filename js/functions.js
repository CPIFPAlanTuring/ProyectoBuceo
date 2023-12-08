/******
 * 
 */
/****funcion topnav responsive */
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }

  // Cierra el menú después de hacer clic en un enlace
  var navLinks = document.querySelectorAll('.topnav a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      x.className = "topnav";
    });
  });
}
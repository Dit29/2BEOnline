// JavaScript Document
var img = document.createElement("img");
 
img.src = "image.png";
var src = document.getElementById("working-picture");
 
src.appendChild(img);

// other way
var img = new Image();
var div = document.getElementById('x');
 
 
img.onload = function() {
  div.innerHTML += '<img src="'+img.src+'" />'; 
};
 
 
img.src = 'image.jpg';


// replace image
function ReplacingImage(){
    document.getElementById("x").src="image2.png"
}



/*
	Login Script
*/
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


/*
	Dropdown Menu Script
*/
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}

function fileFunction() {
    document.getElementById("fileDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var fileDropdown = document.getElementById("fileDropdown");
      if (fileDropdown.classList.contains('show')) {
        fileDropdown.classList.remove('show');
      }
  }
}
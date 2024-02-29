var slider_img = document.querySelector ('.slider-img');  
var images = ['TCM herbs (1).jpeg', 'TCM herbs (2).jpeg', 'TCM herbs (3).jpeg']; 
var i = 0; //Current Image Index 

function prev(){
     if (i <= 0) i=images.length; 
     i--; 
     return setImg ();
}


function next(){
     if( i >= images.length-1 ) i= -1; 
     i++; 
     return setImg ();
} 

function setImg(){
    return slider_img.setAttribute('src', 'images/' + images[i]);
} 

//xperimental new code//

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('open');
  }
});

'use stickt'

/* const myInput = document.getElementById('myInput');
const myBox = document.getElementById('myBox');

myInput.onfocus = function() {
  myBox.hidden = false;
};

myInput.onblur = function() {
  myBox.hidden = true;
}; */

//----------------------------------

const myInput = document.querySelector('#myInput');
const myBox = document.querySelector('#myBox');

myInput.addEventListener('focus', function(){
  myBox.hidden = false;
});

myInput.addEventListener('blur', function(){
  myBox.hidden = true;
});
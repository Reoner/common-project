// document.addEventListener('.block-id', function(event){
// document.querySelector('.adobeButton').addEventListener('click', function (){
//     const progressBar = document.querySelector('.abobeBar').value;
//     progressBar += 10;
// });
// })

document.querySelector('.adobeButton').addEventListener('click', adobeBar);
// document.querySelector('.figmabtn').addEventListener('click', figmaBar);
// document.querySelector('.adobeButton').addEventListener('click', aiBar);

let number = 0;
function adobeBar() {
  const text = document.querySelector('.span1');
  const elem = document.querySelector(".adobeBar");

  number++;

  if (number == 1) {
    elem.style.width = 10 + '%';
    text.innerHTML = 10 + '%';
  }

  if (number == 2) {  
    elem.style.width = 20 + '%';
    text.innerHTML = 20 + '%';
  }

  if (number == 3) {
    elem.style.width = 30 + '%';
    text.innerHTML = 30 + '%';
  }

  if (number == 4) {
    elem.style.width = 40 + '%';
    text.innerHTML = 40 + '%';
  }

  if (number == 5) {
    elem.style.width = 50 + '%';
    text.innerHTML = 50 + '%';
  }

  if (number == 6) {
    elem.style.width = 60 + '%';
    text.innerHTML = 60 + '%';
  }
  if (number == 7) {
    elem.style.width = 70 + '%';
    text.innerHTML = 70 + '%';
  }

  if (number == 8) {
    elem.style.width = 80 + '%';
    text.innerHTML = 80 + '%';
  }

  if (number == 9) {
    elem.style.width = 90 + '%';
    text.innerHTML = 90 + '%';
  }

  if (number == 10) {
    elem.style.width = 10 + '%';
    text.innerHTML = 10 + '%';
  }
}

// add btn
const button = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
const button4 = document.getElementById('btn4');
const button5 = document.getElementById('btn5');
// const button6 = document.getElementById('btn6');
const button7 = document.getElementById('btn7');
const button8 = document.getElementById('btn8');

// add text
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const text4 = document.getElementById('text4');
const text5 = document.getElementById('text5');
// const text6 = document.getElementById('text6');
const text7 = document.getElementById('text7');
const text8 = document.getElementById('text8');

// add animation
const anim1 = document.getElementById('anim1');
const anim2 = document.getElementById('anim2');
const anim3 = document.getElementById('anim3');
const anim4 = document.getElementById('anim4');
const anim5 = document.getElementById('anim5');
// const anim6 = document.getElementById('anim6');
const anim7 = document.getElementById('anim7');
const anim8 = document.getElementById('anim8');


// les fontion d'effet
button.addEventListener('click', () => {
 text1.style.display = 'none';
 anim1.style.display = 'inline-block';

 setTimeout(() => {
  window.open('https://t.me/citation_et_conseil', '_blank');
  text1.style.display = 'block';
  anim1.style.display = 'none';
 }, 2000);
});

// les fontion d'effet
button2.addEventListener('click', () => {
  text2.style.display = 'none';
  anim2.style.display = 'inline-block';
 
  setTimeout(() => {
   window.open('https://motivation-master-class.systeme.io/formation', '_blank');
   text2.style.display = 'block';
   anim2.style.display = 'none';
  }, 2000);
 });


 // les fontion d'effet
button3.addEventListener('click', () => {
  text3.style.display = 'none';
  anim3.style.display = 'inline-block';
 
  setTimeout(() => {
   window.open('https://www.facebook.com/share/19hegLT5bf/', '_blank');
   text3.style.display = 'block';
   anim3.style.display = 'none';
  }, 2000);
 });


 // les fontion d'effet
button4.addEventListener('click', () => {
  text4.style.display = 'none';
  anim4.style.display = 'inline-block';
 
  setTimeout(() => {
   window.open('https://www.instagram.com/citation.et.histoire/profilecard/?igsh=MXIyOGpyNXZ3dWpsaw==', '_blank');
   text4.style.display = 'block';
   anim4.style.display = 'none';
  }, 2000);
 });


 // les fontion d'effet
button5.addEventListener('click', () => {
  text5.style.display = 'none';
  anim5.style.display = 'inline-block';
 
  setTimeout(() => {
   window.open('https://wa.me/message/RXHDOEYECLZPA1', '_blank');
   text5.style.display = 'block';
   anim5.style.display = 'none';
  }, 2000);
 });


//  // les fontion d'effet
// button6.addEventListener('click', () => {
//   text6.style.display = 'none';
//   anim6.style.display = 'inline-block';
 
//   setTimeout(() => {
//    window.open('https://www.tiktok.com/@citations_et_histoire?_t=8rVFQwXhzuQ&_r=1', '_blank');
//    text6.style.display = 'block';
//    anim6.style.display = 'none';
//   }, 2000);
//  });


 // les fontion d'effet
button7.addEventListener('click', () => {
  text7.style.display = 'none';
  anim7.style.display = 'inline-block';
 
  setTimeout(() => {
   window.open('https://youtube.com/@citation-conseil-histoire?si=wjXz32DaKHnVaefL', '_blank');
   text7.style.display = 'block';
   anim7.style.display = 'none';
  }, 2000);
 });


  // les fontion d'effet
button8.addEventListener('click', () => {
  text8.style.display = 'none';
  anim8.style.display = 'inline-block';
 
  setTimeout(() => {
   window.open('https://paypal.me/citationETconseil?country.x=AE&locale.x=fr_XC', '_blank');
   text8.style.display = 'flex';
   anim8.style.display = 'none';
  }, 2000);
 });




 function ouvreCompte() {
  window.open('https://www.tiktok.com/@citations_et_histoire?_t=8rVFQwXhzuQ&_r=1', '_blank');
 }


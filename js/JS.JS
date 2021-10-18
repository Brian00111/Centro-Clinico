let navBar=document.querySelector('#nav')
let btn=document.querySelector('.menu')

btn.addEventListener('click',active)


function active(){
  //let mainDoc=document.querySelector('#main-doc');

  let brr1=document.querySelector('.menu > span:first-of-type'),
      brr2=document.querySelector('.menu span:nth-child(2)'),
      brr3=document.querySelector('.menu > span:last-of-type')
  
  brr1.classList.toggle('active-brr1')
  brr2.classList.toggle('active-brr2')
  brr3.classList.toggle('active-brr3')
  
  navBar.classList.toggle('active-nav')
  mainDoc.classList.toggle('active-doc')


  
  
}

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.content-header').addClass('shrink');
  } else {
    $('.content-header').removeClass('shrink');
  }
});

e
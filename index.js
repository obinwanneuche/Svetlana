$('.fa-bars').click(function() {
  $('ul').toggleClass('show', true);
});
$('.fa-xmark').click(function() {
  $('ul').toggleClass('show', false)
});

$('.icon-logo-slide').click(function(){
  $('ul').toggleClass('show');
});

// $('.submit').click(function(){
//   $sendEmail();
// });

// function sendEmail(){
//   Email.send({
//       Host : "smtp.gmail.com",
//       Username : "alphonsefifteen@gmail.com",
//       Password : "alphonse15@gmail.com",
//       To : 'obinwanneuche@gmail.com',
//       From : document.getElementById('email').value,
//       Subject : "Contact form message",
//       Body : "And this is the body"
//   }).then(
//     message => alert(message)
//   )};

// code using w3 schools
// var slideIndex = 1;
// showDivs(slideIndex);
//
// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }
//
// function showDivs(n) {
//   var x = document.getElementsByClassName("our-students");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (let i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
// x[slideIndex-1].style.display = "block";
// }
//
//
// var slideIndex = 0;
// carousel();
//
// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("our-students");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {slideIndex = 1}
//   x[slideIndex-1].style.display = "block";
//   setTimeout(carousel, 5000); // Change image every 2 seconds
// }

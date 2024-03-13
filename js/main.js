$('.open-nav').click(function() {
   $('#side-nav').animate({width:'260px'},600)
   $('.open-nav').animate({margin:'0px 0px 0px 270px'},600)
   $('#links').animate({margin:'0px 0px 0px 35px'},600)
   $('.main-text').animate({margin:'0px 0px 0px 260px'},600)
})
$('.close-btn').click(function() {
    $('#side-nav').animate({width:'0px'},600)
    $('#links').animate({margin:'0px 0px 0px -120px'},600)
   $('.open-nav').animate({margin:'0px 0px 0px 6px'},600)
   $('.main-text').animate({margin:'0px 0px 0px 0px'},600)

})

$('.hs-1').click(function() {
   $('.ps-1').slideToggle();
})
$('.hs-2').click(function() {
   $('.ps-2').slideToggle();
})
$('.hs-3').click(function() {
   $('.ps-3').slideToggle();
})
$('.hs-4').click(function() {
   $('.ps-4').slideToggle();
})


window.onload=function(){
   timeOfEvent("26 may 2024 9:56:00");
}
function timeOfEvent(countTo) {
   let futureDate = new Date(countTo);
   futureDate = (futureDate.getTime()/1000);

   let now = new Date();
   now = (now.getTime()/1000);

   difference = (futureDate- now);
       
  let days = Math.floor( difference/(24*60*60));
  let hours = Math.floor((difference-(days * (24*60*60))) / 3600);
  let mins = Math.floor((difference-(days * (24*60*60)) - (hours * 3600 )) / 60);
  let secs = Math.floor((difference-(days * (24*60*60)) - (hours * 3600) - (mins * 60)))


   $(".days").html(`${days} D`);
   $(".hours").html(`${hours} h`);
   $(".minutes").html(`${ mins } m`);
   $('.seconds').html(`${ secs} s`)

 
   setInterval(function() {  timeOfEvent(countTo); }, 1000);
}



let maxLength = 100;
$('textarea').keyup(function() {
  let length = $(this).val().length;
  let finalLength = maxLength-length;
  $('#chars').text(finalLength);
});
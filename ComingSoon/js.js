// Set the date we're counting down to
var countDownDate = new Date("Dec 31, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  effectCircle(days,hours,minutes,seconds);

}, 1000);

effectCircle = function(d,h,m,s){
    const max_sec = 60;
    const max_min = 60;
    const max_hour = 24;
    const max_day = 30;
    const strokeDashoffset = 439;
    var chart = document.getElementsByClassName('chart');

    var valPerDay = strokeDashoffset / max_day;
    var size = strokeDashoffset - (valPerDay * d);
    chart[0].style.strokeDashoffset = size;

    var valPerDay = strokeDashoffset / max_hour;
    var size = strokeDashoffset - (valPerDay * h);
    chart[1].style.strokeDashoffset = size;

    var valPerDay = strokeDashoffset / max_min;
    var size = strokeDashoffset - (valPerDay * m);
    chart[2].style.strokeDashoffset = size;

    var valPerDay = strokeDashoffset / max_sec;
    var size = strokeDashoffset - (valPerDay * s);
    chart[3].style.strokeDashoffset = size;

}
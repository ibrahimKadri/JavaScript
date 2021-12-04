var count = 0;
var counting = setInterval(function(){
 count++;
 document.querySelector('.count').innerHTML = count + '%';
 if(count == 100){
     clearInterval(counting);
 }   
},40)
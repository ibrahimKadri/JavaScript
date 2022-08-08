function sortList() {
   var cities = document.querySelectorAll('li');
   var newArray = new Array (cities.length);
   for(var i=0;i<cities.length;i++){
    newArray[i]=cities[i].innerHTML;
   } 
   newArray.sort();
   for(var i=0;i<cities.length;i++){
    cities[i].innerHTML=newArray[i];
   }
}
function resetList() {
    var resetBtn = document.getElementById('resetBtn');
    resetBtn = window.location.reload();
}
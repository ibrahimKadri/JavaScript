var modal = document.getElementById('modal');
function openModal() {
    modal.style.display='block';
}
function closeModal() {
    modal.style.display='none';
}
var slideNumber = 0;
function currentSlide(n) {
    slideNumber = n;
    displayImage(slideNumber);
}
function displayImage(slideNumber) {
    var slides = document.getElementsByClassName('img');
    var modalImage = document.getElementById('modalImage');
    modalImage.src = slides[slideNumber].src;

    var nextBtn = document.getElementById('right-arrow');
    var prevBtn = document.getElementById('left-arrow');

    var displayNumber = document.getElementById('slideNumber');
    displayNumber.innerHTML = slideNumber + 1+'/'+slides.length;
    
    nextBtn.onclick = function(){
        if(slideNumber<(slides.length - 1)){
            slideNumber++;
            displayImage(slideNumber);
        }
        else{
            slideNumber = 0;
            displayImage(slideNumber)
        }
    }
    prevBtn.onclick = function(){
        if(slideNumber == 0){
            slideNumber = (slides.length - 1);
            displayImage(slideNumber);
        } 
        else if(slideNumber<slides.length){
            slideNumber --;
            displayImage(slideNumber);
        }   
    }
}
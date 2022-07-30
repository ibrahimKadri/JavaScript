var clickedImg = document.getElementById('myImg');
var modalDiv = document.getElementById('myModal');
var modalImg = document.getElementById('modal-img');
var caption = document.getElementById('caption');
var closeModal = document.getElementById('close');

clickedImg.onclick = function(){
    clickedImg.style.display="none";
    modalDiv.style.display="block";
    modalImg.src = this.src;
    caption.innerHTML = this.alt;
}

closeModal.onclick = function(){
    modalDiv.style.display="none";
    myImg.style.display="block";
}
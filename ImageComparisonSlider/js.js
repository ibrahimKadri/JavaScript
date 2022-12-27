function slide(){
    let slideValue = document.getElementById('slider').value;
    document.getElementById('sec-img').style.clipPath = 'polygon(0 0,'+ slideValue + '% 0 ,'+ slideValue + '% 100%, 0 100%)';
}
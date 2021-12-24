document.addEventListener('click',(e)=>{
    //create span for snowFlake
    var snowFlake=document.createElement('span');
    snowFlake.classList.add('snowFlake');

    //set position of snowFlake to mouse pointer's position
    snowFlake.style.left=e.offsetX + 'px';
    snowFlake.style.top=e.offsetY + 'px';

    //select random number between 20 and 100
    var size = Math.random() * (100 - 20 + 1) + 20;

    //set width and height
    snowFlake.style.width = size + 'px';
    snowFlake.style.height = size + 'px';
    document.body.appendChild(snowFlake);

    setTimeout(()=>{
        snowFlake.remove();
    },1000);

});
document.getElementById('defaultClicked').click();
function btnClicked(params) {
    var i,divs;
    divs = document.getElementsByClassName('box');

    for(i=0;i<divs.length;i++){
        divs[i].style.display="none";
    }

    if(params=='all'){
        for(i=0;i<divs.length;i++){
            divs[i].style.display="block";
        }
    }
    else{
        divs = document.getElementsByClassName(params);
        for(i=0;i<divs.length;i++){
            divs[i].style.display="block";
        }
    }
}
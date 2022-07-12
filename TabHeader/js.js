function clickedBtn(name,color,elmnt) {
    var i, clickedBtn,divs,tablinks;
    divs = document.getElementsByClassName('tabContent');
    for(i=0;i<divs.length;i++){
        divs[i].style.display="none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    clickedBtn = document.getElementById(name).style.display="block";
    clickedBtn = document.getElementById(name).style.background="#"+color;
    elmnt.style.background="#"+color;
}
document.getElementById('defaultOpen').click();
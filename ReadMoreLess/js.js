function readBtn() {
    var text = document.querySelector('#text');
    var btn = document.getElementById('btn');
    if(btn.innerHTML=="Read More"){
        text.style.display="inline";
        btn.innerHTML="Read Less"
    }
    else{
        text.style.display="none";
        btn.innerHTML="Read More";
    }
}
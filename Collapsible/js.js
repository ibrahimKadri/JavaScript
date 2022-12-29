var collapsible = document.getElementById('collapsible');
var content = document.getElementById('content');
var icon = document.getElementById('icon');
collapsible.onclick = ()=>{
    if(content.style.display=='block'){
        content.style.display='none';
        icon.innerHTML='+';
    }
    else{
        content.style.display='block';
        icon.innerHTML='-';
    }
}
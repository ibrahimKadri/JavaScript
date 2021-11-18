let currenColor=document.querySelector('.current-color'),
    body=document.querySelector('body'),
    generator=document.querySelector('.generate-btn');
generator.addEventListener("click",()=>{
    let randomColor="",
        characters="0123456789abcdef";
    for(i=0;i<6;i++){
        randomColor = randomColor + characters[Math.floor(Math.random()*16)];
    }
    currenColor.innerHTML="#"+randomColor;
    body.style.backgroundColor="#"+randomColor;
});
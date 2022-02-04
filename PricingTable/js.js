let priceToggler  = document.querySelector('.price-toggler');
let price = document.querySelectorAll('.price');
let duration = document.querySelectorAll('.duration');
priceToggler.onclick = () =>{
    priceToggler.classList.toggle('active');
    if(priceToggler.classList.contains('active')){
        for(var i = 0; i<duration.length; i++){
            duration[i].innerText = '/yr';
        }
        for(var k = 0; k<price.length; k++){
            price[k].innerText = price[k].innerText * 12;
        }
    }
    else{
        for(var i =0; i<duration.length;i++){
            duration[i].innerText = '/mo'
        }
        for(var k = 0; k<price.length; k++){
            price[k].innerText = price[k].innerText / 12;
        }
    }
}
var fullNavigation = document.getElementById('nav');
var navigationContent = document.getElementById('ul');

function displayNavigation() {
    fullNavigation.style.width='100%'; 
    navigationContent.style.display='block';
}
function closeNavigation() {
    fullNavigation.style.width='0';
    navigationContent.style.display='none';
}
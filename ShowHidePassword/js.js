function iconClicked() {
    var icon = document.getElementById('icon');
    var input = document.getElementById('input');
    if(icon.classList.contains('fa-eye')){
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
        input.type = "text";
    }
    else{
        icon.classList.add('fa-eye');
        icon.classList.remove('fa-eye-slash');
        input.type = "password";
    }
}
var passwordInput = document.getElementById('password');
var passwordModal = document.getElementById('password-modal');
passwordInput.onfocus = function(){
    passwordModal.style.display='block';
}
passwordInput.onblur = function(){
    passwordModal.style.display='none';
}

var lowerCase = document.getElementById('case-1');
var upperCase = document.getElementById('case-2');
var numberCase = document.getElementById('case-3');
var lengthCase = document.getElementById('case-4');
var checkMark = document.getElementById('check'); 

passwordInput.onkeyup = function(){
    var lowerCaseLetters = /[a-z]/g;
    if(passwordInput.value.match(lowerCaseLetters)){
        lowerCase.classList.remove('invalid');
        lowerCase.classList.add('valid');
    }
    else{
        lowerCase.classList.remove('valid');
        lowerCase.classList.add('invalid');
    }
    var upperCaseLetters = /[A-Z]/g;
    if(passwordInput.value.match(upperCaseLetters)){
        upperCase.classList.remove('invalid');
        upperCase.classList.add('valid');
    }
    else{
        upperCase.classList.remove('valid');
        upperCase.classList.add('invalid');
    }

    var numbers = /[0-9]/g;
    if(passwordInput.value.match(numbers)){
        numberCase.classList.remove('invalid');
        numberCase.classList.add('valid');
    }
    else{
        numberCase.classList.remove('valid');
        numberCase.classList.add('invalid');
    }

    if(passwordInput.value.length > 7){
        lengthCase.classList.remove('invalid');
        lengthCase.classList.add('valid');
    }
    else{
        lengthCase.classList.remove('valid');
        lengthCase.classList.add('invalid');
    }

}
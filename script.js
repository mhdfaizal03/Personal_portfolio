

window.addEventListener("load",() =>{

    const loader = document.querySelector(".loader");

    document.querySelector(".loader").classList.add("loader--hidden");

    document.querySelector(".loader").addEventListener("transitionend", () =>{
        document.body.removeChild(document.querySelector(".loader"))
    });
});

var typed = new Typed(".textnow", {
    strings: ["UI/UX Designer." , "Flutter Developer." ,  "Frontend Developer."],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});



window.addEventListener("scroll",function(){
    
    const header = document.querySelector("header");

    header.classList.toggle("sticky",this.window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};



var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function ValidateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = '*name is required';
        document.getElementById('contact-name').style.border = '1px solid red'
        return false;
    }
    if(name.length < 3){
        nameError.innerHTML = '*enter min 3 charectors';
        document.getElementById('contact-name').style.border = '1px solid red'
        return false;
    }
    if(!name.match(/^[A-Za-z]*[A-Za-z]*(\s{1,}[A-Za-z]*)*$/)){
        document.getElementById('contact-name').style.border = '1px solid red'
        nameError.innerHTML = '*invalid name';
        return false;
    }
    nameError.innerHTML = "<i class='bx bx-check'></i>";
    document.getElementById('contact-name').style.border = '1px solid green'
    return true;
}


function ValidateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = '*email is required';
        document.getElementById('contact-email').style.border = '1px solid red'
        return false;
    }
        if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = '*invalid email';
        document.getElementById('contact-email').style.border = '1px solid red'
        return false;
        }
        emailError.innerHTML = "<i class='bx bx-check'></i>";
        document.getElementById('contact-email').style.border = '1px solid green'
        return true;
}



function ValidatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = '*phone no required';
        document.getElementById('contact-phone').style.border = '1px solid red'
        return false;
    }

    if( phone.length !== 10){
        phoneError.innerHTML = '*should be 10 digits';
        document.getElementById('contact-phone').style.border = '1px solid red'
        return false;
    }

    if(!phone.match(/^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}/)){
        phoneError.innerHTML = "<i class='bx bx-check'></i>";
        document.getElementById('contact-phone').style.border = '1px solid green'
        return true;
    }
}



function ValidateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var minus = required - message.length;
    
    if( message.length == 0){
        messageError.innerHTML = 'enter some messages';
        document.getElementById('contact-message').style.border = '1px solid red'
        return false;
    }

    if( minus > 0 ) {
        messageError.innerHTML = minus + ' *more charectors required';
        document.getElementById('contact-message').style.border = '1px solid red'
        return false;

    }
         messageError.innerHTML = "<i class='bx bx-check'></i>";
         document.getElementById('contact-message').style.border = '1px solid green'
         return true;

}

function ValidateForm(){

    if(!ValidateName() || !ValidateEmail() || !ValidatePhone() || !ValidateMessage()){
        submitError.innerHTML = '*please fix all above'
        setTimeout(function(){submitError.style.display = 'none';}, 5000)
        return false;
    }
}




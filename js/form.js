const form = document.querySelector(".contactForm");

const yourName = document.querySelector("#yourName");
const errorName = document.querySelector("#errorName");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

const email = document.querySelector("#email");
const errorEmail = document.querySelector("#errorEmail")

function formValidation(event){
    event.preventDefault();
    
    if (charLength(yourName.value, 0) === true){
      errorName.style.display = "none";
      
      
    } else {
      errorName.style.display = "block";
      
    } 

    if (charLength(message.value, 10) === true){
      messageError.style.display = "none";
      
      
    } else {
      messageError.style.display = "block";
      
    } 

    if(validateEmail(email.value) === true){
      errorEmail.style.display = "none";
      
      
    }else{
      errorEmail.style.display = "block";
      
    }


  }

form.addEventListener("submit",formValidation);


function charLength(vaule, len){
  if(vaule.trim().length > len){
    if (yourName.value === true && 
      message.value=== true){
      document.contactForm.submit();
  }
      return true;
      
  } else{
      return false;
  }
  
 
}


function validateEmail(email) { 
    const regEx = /\S+@\S+\.\S+/;
     const patternMatches = regEx.test(email);    
   return patternMatches;
 }

 

/*
if (charLength.test(yourName.value) === true
    && charLength.test(message.value) === true) {
    document.contactForm.submit();
}


if (yourName.value === 3 && message.value === 10){
        document.contactForm.submit();
    }


i


/*

var gender = "female";
var age = 16;

if(yourName.value > 3 && message > 10){
  console.log("Girl");
}

*/


/*if (yourName.value === 3 && message.value === 10){
        document.contactForm.submit();
    }*/


/*

var gender = "female";
var age = 16;

if(gender === "female" && age > 18){
  console.log("Girl");
}

*/

 
 
 
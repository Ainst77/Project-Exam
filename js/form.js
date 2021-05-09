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

function charLength(vaule, lengde){
  if(vaule.trim().length > lengde){
       /*if (yourName.value === true && 
        message.value=== true){
        document.contactForm.submit();
        }*/
      return true;
  } else {
      return false;
  }
}




function validateEmail(email) { 
    const regEx = /\S+@\S+\.\S+/;
     const patternMatches = regEx.test(email);    
   return patternMatches;
 }






 
 
 
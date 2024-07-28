let email_box = document.getElementById("email");
let password_box = document.getElementById("password");
let btn = document.querySelector("button");

email_box.addEventListener("input", onChange)
function onChange() {
    
   let email = email_box.value;
   let email_err = document.querySelector(".email_err");

   if(email.length<4) {
     email_err.Style.color = 2px solid red
     email_err.innerHTML = "Make sure email is more than 3 characters and has @ and a . "
     return
    }
    else {
        email_err.innerHTML = ""
    }
}
password_box.addEventListener("input", onChange2)

function onChange2() {
    e.preventDefault();
    let password = password_box.value;
    let pass_err = document.querySelector(".pass_err");
    
    if(password.length<8) {
        pass_err.Style.color = 2px solid red
        pass_err.innerHTML = "Make sure your password is more than 8 characters."
      return
    }
    else {
        passowrd_err.innerHTML = ""
    }
}
btn.addEventListener("click", validate)
function validate {
    let email = email_box.value;
    let password = password_box.value;
    if(email=="" || email.length < 4 || password=="") {
        alert("Please fill out both email and password.")
        return
    }
    alert("All good to go.")
    email_box.value = "";
    password_box.value = "";
 
}

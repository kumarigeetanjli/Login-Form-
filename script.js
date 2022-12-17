let emailIpt = document.getElementById('email');
let passwordIpt = document.getElementById('password');
let button = document.getElementById('button');
let messageDiv = document.getElementById('message');
emailIpt.addEventListener("change", check);
passwordIpt.addEventListener("change", check)

let emailmsgdiv = document.getElementById('emailmsg');
let pwdmsgdiv = document.getElementById('pwdmsg');
emailIpt.onchange = check();
passwordIpt.onchange = check();


function info() {
    let email = emailIpt.value;
    let password = passwordIpt.value;

    if (email != "" && email.includes("@") && email.length > 3 && email.includes(".") && password != "" && password.length > 8) {


        if (password != "" && password.length > 8) {
            messageDiv.innerText = "All good to go!";
            messageDiv.style.color = "green";

            emailmsgdiv.innerText = "";
            pwdmsgdiv.innerText = "";
            if (confirm() == true) {
                alert("successful signup!")
            }
            if (confirm() == false) {
                emailIpt.value = "";
                passwordIpt.value = ""
                messageDiv.innerText = ""
            }

        }
    }


}

function check() {

    let email = emailIpt.value;

    let password = passwordIpt.value;

    if (email != "" && email.includes("@") && email.length > 3 && email.includes(".") && password != "" && password.length > 8) {


        if (password != "" && password.length > 8) {
            messageDiv.innerText = "All good to go!";
            messageDiv.style.color = "green";

            emailmsgdiv.innerText = "";
            pwdmsgdiv.innerText = "";


        }
        else {
            messageDiv.innerText = "";
            emailmsgdiv.innerText = "Make sure email is more than 3 characters and has @ and a.";
            emailmsgdiv.style.color = "red";
            pwdmsgdiv.innerText = " Make sure password is more than 8 characters.";
            pwdmsgdiv.style.color = "red";

        }

    }



    else (password != "" && password.length > 8)
    {
        if (email != "" && email.includes("@") && email.length > 3 && email.includes(".") && password != "" && password.length > 8) {
            messageDiv.innerText = "All good to go!";
            messageDiv.style.color = "green";

            emailmsgdiv.innerText = "";
            pwdmsgdiv.innerText = "";


        }
        else {
            messageDiv.innerText = "";
            emailmsgdiv.innerText = "Make sure email is more than 3 characters and has @ and a.";
            emailmsgdiv.style.color = "red";
            pwdmsgdiv.innerText = " Make sure password is more than 8 characters.";
            pwdmsgdiv.style.color = "red";

        }

    }
}

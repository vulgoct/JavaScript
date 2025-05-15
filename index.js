function User (){
    console.log("Button Clicked");
    const inputIdade = document.getElementById("input_user");
    const inputEmail = document.getElementById("input_email");
    const inputpass = document.getElementById("input_pass");
}

function inicialPage () {
    console.log("Pages Loaded");
    const buttonEnter = document.getElementById("button_enter");
    buttonEnter.addEventListener(click, User);
}

window.addEventListener("load", inicialPage);
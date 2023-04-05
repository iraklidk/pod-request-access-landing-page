const form = document.querySelector("form");
input = form.querySelector(".input-email");
text = form.querySelector(".text-check")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    form.classList.add("error");
    form.classList.remove("valid");
    if(input.value == "") {
        text.innerText = "Email can't be blank"
    }
    else if(!input.value.match(pattern)) {
        text.innerText = "Please enter a valid email";
        input.value = "";
    }else{
        form.classList.replace("error", "valid")
        text.innerText = "Thanks. Your email is submitted."
        input.value = "";
    }
}); 

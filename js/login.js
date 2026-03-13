function login(event) {
    event.preventDefault(); 

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let message = document.getElementById("message");

    if (email === "" || password === "" || confirmPassword === "") {
        message.style.color = "red";
        message.innerText = "Please fill all fields!";
        return;
    }

    if (password.length < 6) {
        message.style.color = "red";
        message.innerText = "Password must be at least 6 characters!";
        return;
    }

  
    if (password !== confirmPassword) {
        message.style.color = "red";
        message.innerText = "Passwords do not match!";
        return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    message.style.color = "green";
    message.innerText = "Login Successfully!";

    setTimeout(function () {
        window.location.href = "../index.html";
    }, 1000);
}
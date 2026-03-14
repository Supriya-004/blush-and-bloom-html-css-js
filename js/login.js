function login(event) {
    event.preventDefault(); 

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("Please fill all fields!");
        return;
    }
    localStorage.setItem("userEmail", email);

    alert("Login Successfully!");
    window.location.href = "../index.html";
}
function showPassword(button) {
    let password = document.getElementById("password");
    if (password.type === "password") {
        button.innerHTML = "Hide Password";
        password.type = "text";
    } else {
        button.innerHTML = "Show Password";
        password.type = "password";
    }
}
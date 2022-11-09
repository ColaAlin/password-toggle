const password = document.querySelector("#password");
const btn = document.querySelector("#show")

function showPassword() {
     if (password.type === "password") {
         btn.innerText = "Hide Password";
         password.type = "text";
     } else {
         btn.innerText = "Show Password";
         password.type = "password";
     }
}
btn.addEventListener("click", showPassword);


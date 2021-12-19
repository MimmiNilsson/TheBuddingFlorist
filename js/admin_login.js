/*===== ADMIN / LOGIN ===== */
function validateAdmin(e) {
    e.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    if(username == "admin" && password == "admin"){
        window.location.href = "../html/admin_main.html";
    } else {
        alert("Login unsuccessful, please try again.")
    }
}

document.querySelector(".login-btn").addEventListener("click", validateAdmin);


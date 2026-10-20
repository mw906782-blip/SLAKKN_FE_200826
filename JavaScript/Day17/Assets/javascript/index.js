
let registerForm = document.getElementById("registerForm");
let loginForm = document.getElementById("loginForm");
let logoutBtn = document.getElementById("logoutBtn");


// REGISTER
if (registerForm) {

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("registerEmail").value.trim().toLowerCase();
        let password = document.getElementById("registerPassword").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];

        let existingUser = users.find(function (user) {
            return user.email === email;
        });

        if (existingUser) {
            document.getElementById("registerMessage").textContent =
                "This email is already registered.";
            return;
        }

        let newUser = {
            name: name,
            email: email,
            password: password
        };

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration successful! Please log in.");

        window.location.href = "login.html";
    });

}


// LOGIN
if (loginForm) {

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let email = document.getElementById("loginEmail").value.trim().toLowerCase();
        let password = document.getElementById("loginPassword").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];

        let matchedUser = users.find(function (user) {
            return user.email === email && user.password === password;
        });

        if (matchedUser) {

            localStorage.setItem("currentUser", JSON.stringify({
                name: matchedUser.name,
                email: matchedUser.email
            }));

            window.location.href = "dashboard.html";

        } else {

            document.getElementById("loginMessage").textContent =
                "Invalid email or password.";

        }
    });

}


// DASHBOARD
if (window.location.pathname.endsWith("/dashboard.html") ||
    window.location.pathname.endsWith("dashboard.html")) {

    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {

        document.getElementById("userName").textContent = currentUser.name;

    } else {

        window.location.href = "login.html";

    }
}


// LOGOUT
if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        localStorage.removeItem("currentUser");

        window.location.href = "login.html";

    });

}

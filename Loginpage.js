document.addEventListener("DOMContentLoaded", function () {

    let form = document.getElementById("loginForm");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();

        let userdata = JSON.parse(localStorage.getItem("userdata")) || [];

        // VALIDATIONS
        if (email === "") {
            alert("Email is required!");
            return;
        }

        if (!email.includes("@")) {
            alert("Enter valid email!");
            return;
        }

        if (password === "") {
            alert("Password is required!");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters!");
            return;
        }

        // CHECK USER
        let validUser = userdata.find(user =>
            user.email === email && user.pass === password
        );

        if (validUser) {
            alert("Login Successful!");

            // store logged user
            //store logged user in key value pair. currentUser is key and validUser is value(object)
            localStorage.setItem("currentUser", JSON.stringify(validUser));

            window.location.href = "index.html";
        } else {
            alert("Invalid Email or Password!");
        }

    });

});
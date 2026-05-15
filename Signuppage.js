//ensures that JS runs only after HTML loaded
document.addEventListener("DOMContentLoaded", function () {

    let form = document.getElementById("signupForm");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let confirmPassword = document.getElementById("confirmPassword").value.trim();
        let gender = document.querySelector('input[name="gender"]:checked'); //checked - CSS selector (which checkbox is selected)
        let terms = document.getElementById("terms").checked; //checked - property(returns true/false)

        let userdata = JSON.parse(localStorage.getItem("userdata")) || [];

        // VALIDATIONS
        if (name === "") {
            alert("Name is required!");
            return;
        }

        if (!email.includes("@")) {
            alert("Enter valid email!");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters!");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        if (!gender) {
            alert("Select gender!");
            return;
        }

        if (!terms) {
            alert("Accept terms & conditions!");
            return;
        }

        // CHECK DUPLICATE
        let exists = userdata.some(user => user.email === email);
        if (exists) {
            alert("Email already exists!");
            return;
        }

        // STORE USER
        let user = {
            name: name,
            email: email,
            pass: password,
            gender: gender.value
        };

        userdata.push(user);
        localStorage.setItem("userdata", JSON.stringify(userdata));

        alert("Signup Successful!");

        window.location.href = "login.html";
    });

});
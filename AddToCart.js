//adding products into cart
function addToCart(product) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    //check if product is already exist in cart
    let existing = cart.find(item => item.id === product.id);

    if (existing) {
        existing.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product); //add product into array
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

    alert("Added to Cart");
}



function buyNow(product) {

    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
        alert("Please login first!");
        window.location.href = "Login.html";
        return;
    }

    product.quantity = 1;

    localStorage.setItem("selectedCart", JSON.stringify([product]));

    window.location.href = "payment.html";
}



function displayCartItems() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let container = document.getElementById("cart-container");

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = "<h2 style='text-align:center;color:#ff4d88;'>Cart is Empty</h2>";
        document.getElementById("total-bill").innerText = "₹0";
        return;
    }

    let html = "";

    cart.forEach((item, index) => {

        html += `
        <div class="imges">
            <img src="${item.image}">
            <div class="imgprop">
                <p>${item.description}</p>
                <div>₹ ${item.price * item.quantity}</div>
                <div>Qty: ${item.quantity}</div>

                <button onclick="increaseQty(${index})">+</button>
                <button onclick="decreaseQty(${index})">-</button>
                <button onclick="removeProduct(${index})">Remove</button>
            </div>
        </div>
        `;
    });

    container.innerHTML = html;
    updateTotal();
}



function increaseQty(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart[index].quantity++;

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
    updateCartCount();
}



function decreaseQty(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
    updateCartCount();
}



function removeProduct(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
    updateCartCount();
}



function updateTotal() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let total = cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    let totalElement = document.getElementById("total-bill");

    if (totalElement) {
        totalElement.innerText = total;
    }
}


function updateCartCount() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    let countElement = document.getElementById("cart-count");

    if (countElement) {
        countElement.innerText = totalItems;
    }
}



document.addEventListener("DOMContentLoaded", function () {

    updateCartCount();
    displayCartItems();

    let buyBtn = document.getElementById("buy-now");

    if (buyBtn) {
        buyBtn.addEventListener("click", function () {

            let currentUser = JSON.parse(localStorage.getItem("currentUser"));

            if (!currentUser) {
                alert("Please login first!");
                window.location.href = "Login.html";
                return;
            }

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            if (cart.length === 0) {
                alert("Cart is empty!");
                return;
            }

            localStorage.setItem("selectedCart", JSON.stringify(cart));

            window.location.href = "payment.html";
        });
    }
});





document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    let cart = [];
    let total = 0;

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const pizzaName = button.getAttribute("data-pizza");
            const pizzaPrice = parseFloat(
                button.parentElement.querySelector(".price").textContent.slice(1)
            );

            cart.push({ name: pizzaName, price: pizzaPrice });
            total += pizzaPrice;

            updateCartUI();
        });
    });

    function updateCartUI() {
        cartItemsList.innerHTML = "";
        cart.forEach((item) => {
            const listItem = document.createElement("li");
            listItem.classList.add("cart-item");
            listItem.innerHTML = `${item.name}: Q${item.price.toFixed(2)}`;
            cartItemsList.appendChild(listItem);
        });

        cartTotal.textContent = total.toFixed(2);
    }

    const checkoutButton = document.getElementById("checkout");
    checkoutButton.addEventListener("click", () => {
        alert(`Total de compra: Q${total.toFixed(2)}`);
        cartItemsList.innerHTML = "";
        cartTotal.textContent = total = 0;
        cart = [];
    });
});
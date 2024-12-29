const carts = JSON.parse(localStorage.getItem("carts")) || [];
let html = "";
for (const cart of carts) {
    html += `
        <div class="cart-item" id="cart-item-${cart.id}">
            <img src="${cart.img}" alt="${cart.name}">
            <div>
                <h3>${cart.name}</h3>
                <p>${cart.price}</p>
                <div>
                    <button class="btn btn-primary" onclick="increaseQuantity(${cart.id})">+</button>
                    <p id="quantity-${cart.id}">${cart.quantity}</p>
                    <button class="btn btn-primary" onclick="decreaseQuantity(${cart.id})">-</button>
                </div>
            </div>
        </div>  
    `;
}
document.getElementById("cart-item").innerHTML = html;

function increaseQuantity(id) {
    const cart = JSON.parse(localStorage.getItem("carts")) || [];
    const cartItem = cart.find(item => item.id === id);
    cartItem.quantity++;
    localStorage.setItem("carts", JSON.stringify(cart));
    document.getElementById(`quantity-${id}`).textContent = cartItem.quantity;
}

function decreaseQuantity(id) {
    const cart = JSON.parse(localStorage.getItem("carts")) || [];
    const cartItem = cart.find(item => item.id === id);
    cartItem.quantity--;
    if (cartItem.quantity <= 0) {
        cart.splice(cart.indexOf(cartItem), 1);
        document.getElementById(`cart-item-${id}`).remove();
    }
    localStorage.setItem("carts", JSON.stringify(cart));
    document.getElementById(`quantity-${id}`).textContent = cartItem.quantity;
}
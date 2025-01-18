const id = new URLSearchParams(window.location.search).get("id");
const products = JSON.parse(localStorage.getItem("products"));
const sounds = JSON.parse(localStorage.getItem("sounds"));
const data = [...products, ...sounds];
const product = data.find(item => item.id == id); 

const productImage = document.getElementById("product-image");
const productName = document.getElementById("product-name");
const productSoftware = document.getElementById("product-software");
const productGenre = document.getElementById("product-genre");
const productRating = document.getElementById("product-rating");
const productPrice = document.getElementById("product-price");
const productOriginalPrice = document.getElementById("product-original-price");

productImage.src = product.img;
productName.textContent = product.name;
productSoftware.textContent = product.software;
productGenre.textContent = product.Genre;
productRating.textContent = product.rating;
productPrice.textContent = product.price;
productOriginalPrice.textContent = product.originalPrice;

const btnCart = document.getElementById("add-to-cart");
btnCart.addEventListener("click", () => {
    const carts = JSON.parse(localStorage.getItem("carts")) || [];
    const productInCart = carts.find(item => item.id === product.id);
    if (productInCart) {
        productInCart.quantity++;
    } else {
        carts.push({
            ...product,
            quantity: 1
        });
    }
    localStorage.setItem("carts", JSON.stringify(carts));
    alert("Product added to cart");
});
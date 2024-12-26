let cart = [];
let totalCost = 0;

// Пример товаров
const products = [
    { name: "Intel Core i9-11900K", price: 3990 },
    { name: "AMD Ryzen 9 5950X", price: 8700 }
];

// Функция для отображения и скрытия корзины
function toggleCart() {
    const cartModal = document.getElementById("cart");
    cartModal.style.display = cartModal.style.display === "block" ? "none" : "block";
}

// Функция для добавления товара в корзину
function addToCart(productName) {
    const product = products.find(p => p.name === productName);
    const existingItem = cart.find(item => item.name === product.name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartDisplay();
}

// Функция для обновления отображения корзины
function updateCartDisplay() {
    const cartItemsList = document.getElementById("cart-items");
    const totalCostElement = document.getElementById("total-cost");
    cartItemsList.innerHTML = "";
    totalCost = 0;

    cart.forEach((item, index) => {
        const itemTotalCost = item.price * item.quantity;
        totalCost += itemTotalCost;

        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${item.name} - ${item.price} ₽ × ${item.quantity} = ${itemTotalCost} ₽
            <button onclick="increaseQuantity(${index})">+</button>
            <button onclick="decreaseQuantity(${index})">-</button>
        `;
        cartItemsList.appendChild(listItem);
    });

    totalCostElement.innerText = totalCost;
}

// Функция для увеличения количества товара
function increaseQuantity(index) {
    cart[index].quantity += 1;
    updateCartDisplay();
}

// Функция для уменьшения количества товара
function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1);
    }
    updateCartDisplay();
}

// Функция для очистки корзины
function clearCart() {
    cart = [];
    updateCartDisplay();
}

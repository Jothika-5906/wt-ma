const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const cartList = document.getElementById("cartItems");
let total = 0;

cartItems.forEach(item => {
  const li = document.createElement("li");
  li.textContent = `${item.name} - $${item.price}`;
  cartList.appendChild(li);
  total += item.price;
});

document.getElementById("totalPrice").textContent = `Total: $${total}`;

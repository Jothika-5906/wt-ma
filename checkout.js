document.getElementById("checkoutForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const payment = document.getElementById("payment").value;

  // Clear cart after checkout
  localStorage.removeItem("cart");

  document.getElementById("confirmation").textContent =
    `Thank you, ${name}! Your order will be delivered to ${address}. Payment method: ${payment}.`;
});
w
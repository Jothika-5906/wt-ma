// Search functionality
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    const filter = searchInput.value.toLowerCase();
    document.querySelectorAll(".dish").forEach(dish => {
      const name = dish.dataset.name.toLowerCase();
      dish.style.display = name.includes(filter) ? "block" : "none";
    });
  });
}

// Add to cart functionality
document.querySelectorAll(".dish button").forEach(button => {
  button.addEventListener("click", (e) => {
    const dish = e.target.closest(".dish");
    const name = dish.dataset.name;
    const price = dish.querySelector("p").textContent.replace("$", "");
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price: Number(price) });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added successfully!`);
  });
});


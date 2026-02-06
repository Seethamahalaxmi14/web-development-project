const products = [
    { name: "Mobile", category: "electronics", price: 15000 },
    { name: "Laptop", category: "electronics", price: 50000 },
    { name: "Shirt", category: "fashion", price: 1200 },
    { name: "Shoes", category: "fashion", price: 2500 }
];

const container = document.getElementById("productContainer");
const categoryFilter = document.getElementById("categoryFilter");
const sortPrice = document.getElementById("sortPrice");

function displayProducts(list) {
    container.innerHTML = "";
    list.forEach(product => {
        container.innerHTML += `
            <div class="product">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <small>${product.category}</small>
            </div>
        `;
    });
}

function filterAndSort() {
    let filtered = [...products];

    if (categoryFilter.value !== "all") {
        filtered = filtered.filter(p => p.category === categoryFilter.value);
    }

    if (sortPrice.value === "low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortPrice.value === "high") {
        filtered.sort((a, b) => b.price - a.price);
    }

    displayProducts(filtered);
}

categoryFilter.addEventListener("change", filterAndSort);
sortPrice.addEventListener("change", filterAndSort);

displayProducts(products);
const products = [
    {
        id: 1,
        name: "Kaos Polos",
        price: 75000,
        image: "https://via.placeholder.com/150?text=Kaos+Polos"
    },
    {
        id: 2,
        name: "Celana Jeans",
        price: 150000,
        image: "https://via.placeholder.com/150?text=Celana+Jeans"
    },
    {
        id: 3,
        name: "Sepatu Sneakers",
        price: 300000,
        image: "https://via.placeholder.com/150?text=Sepatu+Sneakers"
    },
    {
        id: 4,
        name: "Topi Baseball",
        price: 50000,
        image: "https://via.placeholder.com/150?text=Topi+Baseball"
    },
    {
        id: 5,
        name: "Tas Ransel",
        price: 120000,
        image: "https://via.placeholder.com/150?text=Tas+Ransel"
    },
    {
        id: 6,
        name: "Kacamata Hitam",
        price: 85000,
        image: "https://via.placeholder.com/150?text=Kacamata+Hitam"
    },
];

const productList = document.getElementById("product-list");

function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
}

function renderProducts() {
    productList.innerHTML = "";
    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>${formatRupiah(product.price)}</p>
            <button class="buy-btn" onclick="buyProduct('${product.name}')">Beli</button>
        `;

        productList.appendChild(card);
    });
}

function buyProduct(name) {
    alert(`Terima kasih sudah membeli ${name}!`);
}

renderProducts();

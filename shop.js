const products = [

    {
        name: "Advanced Blackmarket System",
        price: 15,
        img: "https://via.placeholder.com/500x300",
        desc: "Optimized blackmarket system for QBCore / QBX / OX.",
        link: "https://your-link",
        category: "script"
    },

    {
        name: "Nexus Scoreboard UI",
        price: 12,
        img: "https://via.placeholder.com/500x300",
        desc: "Modern NUI scoreboard with animations and blur.",
        link: "https://your-link",
        category: "ui"
    },

    {
        name: "Nexus Garage System",
        price: 18,
        img: "https://via.placeholder.com/500x300",
        desc: "Supports impound, job garages, and police.",
        link: "https://your-link",
        category: "script"
    },

    {
        name: "Anti-Cheat Pro+",
        price: 25,
        img: "https://via.placeholder.com/500x300",
        desc: "Speedhack / aimbot / resource tamper protections.",
        link: "https://your-link",
        category: "service"
    },

    {
        name: "Ticket Bot PRO",
        price: 5,
        img: "https://via.placeholder.com/500x300",
        desc: "Discord ticket bot with logs and transcripts.",
        link: "https://your-link",
        category: "bot"
    },

    {
        name: "Full Server Bundle",
        price: 150,
        img: "https://via.placeholder.com/500x300",
        desc: "Complete FiveM server build with UI + systems.",
        link: "https://your-link",
        category: "bundle"
    }

];

// LOAD PRODUCTS
const grid = document.getElementById("productGrid");

function renderProducts(category = "all") {
    grid.innerHTML = "";

    products
        .filter(p => category === "all" ? true : p.category === category)
        .forEach(p => {
            const card = document.createElement("div");
            card.classList.add("product-card");

            card.innerHTML = `
                <img src="${p.img}">
                <h3>${p.name}</h3>
                <p class="price">$${p.price}</p>
                <p>${p.desc}</p>
                <a href="${p.link}" target="_blank" class="buy-btn">Buy Now</a>
            `;

            grid.appendChild(card);
        });
}

renderProducts();

// CATEGORY FILTER
document.querySelectorAll(".cat-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const cat = btn.getAttribute("data-category");
        renderProducts(cat);
    });
});

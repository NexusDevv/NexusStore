const products = [

    {
        name: "Advanced Blackmarket System",
        price: 0,
        img: "assets/products/blackmarket.png",
        desc: "Fully optimized blackmarket for QBX.",
        link: "https://github.com/NexusDevv/MrRay_blackmarket",
        category: "script"
    },

    {
        name: "Nexus Scoreboard UI",
        price: 12,
        img: "assets/products/scoreboard.png",
        desc: "Modern NUI scoreboard with animation & blur.",
        link: "https://your-link",
        category: "ui"
    },

    {
        name: "Nexus Garage System",
        price: 18,
        img: "assets/products/garage.png",
        desc: "Police • Public • Impound • Custom garages.",
        link: "https://your-link",
        category: "script"
    },

    {
        name: "Anti-Cheat PRO+",
        price: 25,
        img: "assets/products/anticheat.png",
        desc: "Speedhack, Aimbot, Resource Tamper detection.",
        link: "https://your-link",
        category: "service"
    },

    {
        name: "Discord Ticket Bot",
        price: 5,
        img: "assets/products/ticketbot.png",
        desc: "Ticket bot with logging & transcripts.",
        link: "https://your-link",
        category: "bot"
    },

    {
        name: "Full Server Bundle",
        price: 150,
        img: "assets/products/fullserver.png",
        desc: "Complete setup with UI, jobs, systems, optimization.",
        link: "https://your-link",
        category: "bundle"
    }

];

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

document.querySelectorAll(".cat-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        renderProducts(btn.dataset.category);
    });
});

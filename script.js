const apps = [
    {
        id: 1,
        name: "WhatsApp Mod",
        category: "utilitarios",
        description: "Versão modificada com recursos extras.",
        image: "https://via.placeholder.com/200",
        download: "#"
    },
    {
        id: 2,
        name: "Clash of Clans Mod",
        category: "jogos",
        description: "Jogo com recursos ilimitados.",
        image: "https://via.placeholder.com/200",
        download: "#"
    },
    {
        id: 3,
        name: "Instagram Mod",
        category: "utilitarios",
        description: "App com funcionalidades extras.",
        image: "https://via.placeholder.com/200",
        download: "#"
    },
];

const appsContainer = document.getElementById("apps-container");

function displayApps(filteredApps) {
    appsContainer.innerHTML = "";
    filteredApps.forEach(app => {
        appsContainer.innerHTML += `
            <div class="app-card">
                <img src="${app.image}" alt="${app.name}">
                <h3>${app.name}</h3>
                <p>${app.description}</p>
                <button class="download" onclick="window.open('${app.download}', '_blank')">Baixar</button>
            </div>
        `;
    });
}

function filterApps(category) {
    if (category === "tudo") {
        displayApps(apps);
    } else {
        const filtered = apps.filter(app => app.category === category);
        displayApps(filtered);
    }
}

document.getElementById("search-bar").addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = apps.filter(app =>
        app.name.toLowerCase().includes(searchTerm) ||
        app.description.toLowerCase().includes(searchTerm)
    );
    displayApps(filtered);
});

// Display all apps on load
displayApps(apps);

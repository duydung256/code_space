// Dark mode toggle
function initDarkMode() {
    const toggle = document.getElementById("toggle");
    const body = document.body;
    
    toggle.addEventListener("change", function() {
        body.classList.toggle("dark-mode", this.checked);
    });
}

// Smooth scroll
function scrollToCards() {
    const cardsSection = document.querySelector(".grid.grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-3.xl\\:grid-cols-4.gap-8");
    const offset = 100;
    const elementPosition = cardsSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

// Card navigation
function initCardNavigation() {
    const cardConfig = {
        htmlCard: "languages/HTML.html",
        cssCard: "languages/CSS.html",
        javascriptCard: "languages/JavaScript.html",
        pythonCard: "languages/Python.html",
        cCard: "languages/C.html",
    };

    Object.entries(cardConfig).forEach(([cardId, path]) => {
        const card = document.getElementById(cardId);
        if (card) {
            card.addEventListener("click", () => window.open(path, "_blank"));
        }
    });
}

// Initialize all features
document.addEventListener("DOMContentLoaded", function() {
    initDarkMode();
    initCardNavigation();
});

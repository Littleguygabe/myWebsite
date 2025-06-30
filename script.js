// --- Text Flipper Logic ---
const rolesToDisplay = ["Python Programmer", "Student", "Data Enthusiast", "Problem Solver"];
const rolesContainer = document.querySelector(".roles");
function setupRoles() {
    rolesToDisplay.forEach(role => {
        const span = document.createElement("span");
        span.textContent = role;
        rolesContainer.appendChild(span);
    });
    const firstRole = document.createElement("span");
    firstRole.textContent = rolesToDisplay[0];
    rolesContainer.appendChild(firstRole);
}
setupRoles();

// --- Scroll Reveal Animation Logic ---
const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
};
const displayScrollElement = (element) => element.classList.add('visible');
const hideScrollElement = (element) => element.classList.remove('visible');
const handleScrollAnimation = () => {
    scrollRevealElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};
window.addEventListener('scroll', () => {
    handleScrollAnimation();
    // Header scroll animation
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// --- Smooth Scroll for Tour Button ---
document.querySelector('.tour-button').addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});


// script.js

// --- FINAL, CORRECTED Experience Card Accordion Logic ---
const allExperienceCards = document.querySelectorAll('.experience-card');

allExperienceCards.forEach(currentCard => {
    const button = currentCard.querySelector('.more-button');

    button.addEventListener('click', () => {
        // First, check if the card we just clicked was already expanded.
        const isAlreadyExpanded = currentCard.classList.contains('expanded');

        // Before doing anything else, close all cards.
        allExperienceCards.forEach(card => {
            card.classList.remove('expanded');
        });

        // Finally, if the card we clicked was NOT already open, open it.
        // This prevents it from closing when you click it again.
        if (!isAlreadyExpanded) {
            currentCard.classList.add('expanded');
        }
    });
});
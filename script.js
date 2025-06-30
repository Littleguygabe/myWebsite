const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

// --- Text Flipper Logic ---

// 1. Define the list of roles you want to display.
const rolesToDisplay = [
    "Experienced Python Programmer",
    "Student",
    "AI Architect",
    "Data Scientist",
];

// 2. Get the container element from the HTML.
const rolesContainer = document.querySelector(".roles");

// 3. A function to build the list of roles for the animation.
function setupRoles() {
    // Add each role to the container
    rolesToDisplay.forEach(role => {
        const span = document.createElement("span");
        span.textContent = role;
        rolesContainer.appendChild(span);
    });

    // **The secret to the seamless loop:**
    // Add a copy of the very first role to the end of the list.
    const firstRole = document.createElement("span");
    firstRole.textContent = rolesToDisplay[0];
    rolesContainer.appendChild(firstRole);
}

// 4. Run the function when the page loads.
setupRoles();

// --- The rest of your existing scroll animation script can stay below ---

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element) => {
    element.classList.add('visible');
};

const hideScrollElement = (element) => {
    element.classList.remove('visible');
};

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
});

// Animate header background on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// --- Smooth Scroll for Tour Button ---
document.querySelector('.tour-button').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default jump-to-anchor behavior

    // Get the target section's ID from the button's href
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    // Scroll smoothly to the target section
    targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// --- Modal (Center View) Logic ---
const cards = document.querySelectorAll('.experience-card');
const modalOverlay = document.getElementById('experience-modal');
const modalTitle = document.getElementById('modal-title');
const modalDetails = document.getElementById('modal-details');
const closeModalButton = document.querySelector('.close-button');

// Function to open the modal
function openModal(title, details) {
    modalTitle.textContent = title;
    modalDetails.textContent = details;
    modalOverlay.classList.add('active');
    document.body.classList.add('modal-open'); // Lock background scroll
}

// Function to close the modal
function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.classList.remove('modal-open'); // Unlock background scroll
}

// Add click listeners to each card
cards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').textContent;
        const details = card.querySelector('.experience-details p').textContent;
        openModal(title, details);
    });
});

// Add click listeners to close the modal
closeModalButton.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (event) => {
    // Only close if the user clicks the overlay itself, not the content inside
    if (event.target === modalOverlay) {
        closeModal();
    }
});
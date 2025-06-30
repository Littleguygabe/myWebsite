const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

// --- Text Flipper Logic ---

// 1. Define the list of roles you want to display.
const rolesToDisplay = [
    "Python Programmer",
    "Student",
    "Data Enthusiast",
    "Problem Solver",
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
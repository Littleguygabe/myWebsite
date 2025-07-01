document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.menu a, #main-nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Show/hide nav bar on scroll
    const mainNav = document.getElementById('main-nav');
    const landingPage = document.querySelector('.container');

    window.addEventListener('scroll', () => {
        if (window.scrollY > landingPage.offsetHeight - 50) { // Adjust 50px as needed
            mainNav.classList.add('nav-visible');
        } else {
            mainNav.classList.remove('nav-visible');
        }
    });

    // Scroll reveal for quote sections
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                const randomRotation = (Math.random() * 6) - 3; // -3deg to +3deg
                entry.target.style.setProperty('--rotation', `${randomRotation}deg`);
            } else {
                // Optional: remove 'active' class when element scrolls out of view
                // entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    scrollRevealElements.forEach(element => {
        observer.observe(element);
    });
});
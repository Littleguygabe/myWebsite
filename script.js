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
        if (window.scrollY > (landingPage.offsetHeight / 2)) {
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

    // Name animation
    const nameContainer = document.getElementById('name-container');
    const name = "Gabriel Bridger";
    const letters = name.split('');
    const descenderLetters = ['g', 'j', 'p', 'q', 'y'];

    letters.forEach(letter => {
        const letterSpan = document.createElement('span');
        letterSpan.className = 'name-letter';
        if (descenderLetters.includes(letter)) {
            letterSpan.classList.add('descender');
        }
        if (letter === ' ') {
            letterSpan.innerHTML = '&nbsp;'; // Use non-breaking space for spaces
        } else {
            letterSpan.textContent = letter;
        }
        nameContainer.appendChild(letterSpan);
    });

    const fonts = [
        'Arial, sans-serif',
        'Verdana, sans-serif',
        'Georgia, serif',
        'Times New Roman, serif',
        'Courier New, monospace',
        'Lucida Console, monospace',
        'Tahoma, sans-serif',
        'Garamond, serif'
    ];

    let currentIndex = 0;
    const letterSpans = document.querySelectorAll('.name-letter');

    function animateName() {
        // Remove active class from all letters
        letterSpans.forEach(span => span.classList.remove('active'));

        // Add active class to the current letter
        if (currentIndex < letterSpans.length) {
            letterSpans[currentIndex].classList.add('active');
            const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
            letterSpans[currentIndex].style.fontFamily = randomFont;
        }

        currentIndex++;

        if (currentIndex >= letterSpans.length) {
            // Keep the last letter underlined during the pause
            letterSpans[letterSpans.length - 1].classList.add('active');
            currentIndex = 0;
            setTimeout(() => {
                // Remove underline from the last letter before starting over
                letterSpans[letterSpans.length - 1].classList.remove('active');
                animateName();
            }, 500); // Pause at the end
        } else {
            setTimeout(animateName, 200); // Time between letter changes
        }
    }

    animateName();
});
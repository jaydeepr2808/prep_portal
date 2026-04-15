// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Basic Animation Trigger
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });

    // Theme Toggle Logic
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeBtn ? themeBtn.querySelector('i') : null;

    const setLightMode = () => {
        body.classList.add('light-mode');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
        localStorage.setItem('theme', 'light');
    };

    const setDarkMode = () => {
        body.classList.remove('light-mode');
        if (themeIcon) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
        localStorage.setItem('theme', 'dark');
    };

    // Check saved theme
    if (localStorage.getItem('theme') === 'light') {
        setLightMode();
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            if (body.classList.contains('light-mode')) {
                setDarkMode();
            } else {
                setLightMode();
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const nav = document.getElementById('site-nav');
    const navToggle = document.getElementById('nav-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const navLinks = document.querySelectorAll('.nav-links a, #mobile-nav a');
    const sections = document.querySelectorAll('main section[id]');

    // Solid nav background after scrolling past the hero
    function updateNavBackground() {
        nav.classList.toggle('scrolled', window.scrollY > 60);
    }
    updateNavBackground();
    window.addEventListener('scroll', updateNavBackground);

    // Mobile menu toggle
    navToggle.addEventListener('click', function () {
        mobileNav.classList.toggle('open');
    });

    document.querySelectorAll('#mobile-nav a').forEach(function (link) {
        link.addEventListener('click', function () {
            mobileNav.classList.remove('open');
        });
    });

    // Smooth scroll for in-page links
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Highlight the active nav link based on scroll position
    function setActiveLink() {
        let currentId = sections[0] ? sections[0].id : '';
        const scrollPos = window.scrollY + window.innerHeight / 3;

        sections.forEach(function (section) {
            if (scrollPos >= section.offsetTop) {
                currentId = section.id;
            }
        });

        navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
        });
    }
    setActiveLink();
    window.addEventListener('scroll', setActiveLink);
});

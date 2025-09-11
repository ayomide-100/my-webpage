document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const desktopSidebarToggle = document.getElementById('desktop-sidebar-toggle');

    // Mobile menu toggle
    menuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });

    // Desktop sidebar toggle
    desktopSidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('-translate-x-full');
        mainContent.classList.toggle('md:ml-0');
        mainContent.classList.toggle('md:ml-64');
        desktopSidebarToggle.classList.toggle('left-64');
        desktopSidebarToggle.classList.toggle('left-0');

        // Change icon based on sidebar state
        const icon = desktopSidebarToggle.querySelector('svg');
        if (sidebar.classList.contains('-translate-x-full')) {
            icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>'; // Open icon
        } else {
            icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>'; // Close icon
        }
    });

    // Smooth scrolling for all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');

    // Function to toggle mobile menu visibility
    const toggleMobileMenu = () => {
        mobileMenu.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden'); // Prevent scrolling when menu is open
    };

    // Event listener for opening the mobile menu
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }

    // Event listener for closing the mobile menu
    if (closeMobileMenuButton) {
        closeMobileMenuButton.addEventListener('click', toggleMobileMenu);
    }

    // Event listeners for mobile menu links (to close menu on click)
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', toggleMobileMenu);
    });

    // Smooth scrolling for all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calculate offset for fixed header
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const yOffset = -60; // Adjust this value to account for the fixed bottom nav on mobile
                const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({top: y, behavior: 'smooth'});
            }
        });
    });

    // Change navbar background on scroll (for desktop)
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.innerWidth > 768) { // Only apply this effect on desktop
            if (window.scrollY > 100) {
                navbar.style.backgroundColor = 'rgba(51, 51, 51, 0.9)';
            } else {
                navbar.style.backgroundColor = '#333';
            }
        }
    });
});

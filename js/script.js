// Text Rotating Logic
const titles = ["Data Scientist", "ML Engineer", "AI Educator", "Analytics Partner"];
let titleIndex = 0;
const titleElement = document.getElementById('job-titles');

if (titleElement) {
    setInterval(() => {
        // Animate out
        titleElement.classList.add('slide-up-out');

        setTimeout(() => {
            // Change text
            titleIndex = (titleIndex + 1) % titles.length;
            titleElement.textContent = titles[titleIndex];

            // Reset and animate in
            titleElement.classList.remove('slide-up-out');
            titleElement.classList.add('slide-up-in');

            // Clean up animation class after it finishes to allow re-triggering
            setTimeout(() => {
                titleElement.classList.remove('slide-up-in');
            }, 500); // 500ms matches animation duration

        }, 500); // Wait for out animation to finish

    }, 3000); // Cycle every 3 seconds
}

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        localStorage.setItem('theme', 'light');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Animate hamburger lines
    const bars = document.querySelectorAll('.bar');
    // Simple toggle logic can be added here for transforming hamburger to X
});

// Close mobile menu when clicking outside or on a link
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Sticky Navbar Effect on Scroll
// Sticky Navbar Effect on Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scroll for Anchor Links (if native smooth scroll isn't enough/cross-browser)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Adjust for fixed header offset
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

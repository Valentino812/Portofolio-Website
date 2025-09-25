// 1.Fade in transition Start
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});
// 1.Fade in transition End

// 2.Navbar hide/show on scroll start
let lastScrollTop = 0;
const navbar = document.querySelector('.custom-navbar');
const aboutSection = document.querySelector('.about-section');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const aboutSectionTop = aboutSection.offsetTop;
    console.log("Current scrollTop:", scrollTop);
    
    // Hide navbar when scrolled to about section
    if (scrollTop >= aboutSectionTop - 160) {
            navbar.classList.add('navbar-hidden');
    } else {
        navbar.classList.remove('navbar-hidden');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
// 2.Navbar hide/show on scroll end

// 3.Portfolio scrolling start 
// Portfolio scrolling with buttons and touch support
const portfolioContainer = document.getElementById('portfolioContainer');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

// Button click handlers
scrollLeftBtn.addEventListener('click', () => {
    portfolioContainer.scrollBy({
        left: -350, 
        behavior: 'smooth'
    });
});

scrollRightBtn.addEventListener('click', () => {
    portfolioContainer.scrollBy({
        left: 350, 
        behavior: 'smooth'
    });
});

// Touch support for mobile devices
let startX = 0;
let scrollLeft = 0;
let isDragging = false;

portfolioContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - portfolioContainer.offsetLeft;
    scrollLeft = portfolioContainer.scrollLeft;
    isDragging = true;
});

portfolioContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - portfolioContainer.offsetLeft;
    const walk = (x - startX) * 2; // Multiply for faster scrolling
    portfolioContainer.scrollLeft = scrollLeft - walk;
});

portfolioContainer.addEventListener('touchend', () => {
    isDragging = false;
});

// Set initial cursor
portfolioContainer.style.cursor = 'grab';

// 3.Portfolio scrolling end
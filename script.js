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

// 3.Filter portfolio by choice category start
function filterPortfolio(category) {
    // Container elements
    const fullstackContainer = document.getElementById('fullstack-container');
    const datascienceContainer = document.getElementById('datascience-container');
    const buttons = document.querySelectorAll('.filter-btn');

    // Active category 
    if (category === 'fullstack') {
        fullstackContainer.style.display = 'block'; 
        datascienceContainer.style.display = 'none'; 
    } else if (category === 'datascience') {
        fullstackContainer.style.display = 'none'; 
        datascienceContainer.style.display = 'block'; 
    }

    // Updating button 
    buttons.forEach(btn => {
        btn.classList.remove('active');
        
        if (btn.getAttribute('onclick').includes(category)) {
            btn.classList.add('active');
        }
    });
}
// 4.Filter portfolio by choice category end

// 3.Portfolio scrolling start 
// Portfolio scrolling with buttons and touch support
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

// Portfolio containers
const containerFullstack = document.getElementById('fullstack-container');
const containerDataScience = document.getElementById('datascience-container');

// Checking current active container
function getActiveContainer() {
    if (containerDataScience.style.display === 'none' || getComputedStyle(containerDataScience).display === 'none') {
        return containerFullstack;
    } else {
        return containerDataScience;
    }
}

// Button click handlers
scrollLeftBtn.addEventListener('click', () => {
    const activeContainer = getActiveContainer(); 
    if (activeContainer) {
        activeContainer.scrollBy({
            left: -350, 
            behavior: 'smooth'
        });
    }
});

scrollRightBtn.addEventListener('click', () => {
    const activeContainer = getActiveContainer(); 
    if (activeContainer) {
        activeContainer.scrollBy({
            left: 350, 
            behavior: 'smooth'
        });
    }
});
// 3.Portfolio scrolling end
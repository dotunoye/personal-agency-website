// 1. SELECT ALL ELEMENTS TO ANIMATE
const revealElements = document.querySelectorAll('.reveal');

// 2. SETUP THE OBSERVER
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // If the element is visible on screen
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Optional: Stop observing once revealed (performance)
            // observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1, // Trigger when 10% of item is visible
    rootMargin: "0px 0px -50px 0px" // Offset slightly so it triggers before hitting bottom
});

// 3. START WATCHING
revealElements.forEach(el => observer.observe(el));

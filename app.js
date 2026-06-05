/* Project Data */
const projects = [
    {
        title: "Eden Avenue Interiors",
    tag: "Interior Design",
    image: "assets/eden-avenue.png",
    alt: "Eden Avenue Showcase",
    linkText: "View Live Site",
    linkUrl: "https://edenavenueinteriors.com"
    },
    {
        title: "Digital Library for my Campus Chapel",
        tag: "RCF FUNAAB Digital Library",
        image: "assets/RCF-FUNAAB-Library.png", 
        alt: "RCF FUNAAB Digital Library",
        linkText: "View Live Site",
        linkUrl: "https://rcflibrarytracker.vercel.app/"
    },
    {
        title: "Apex Exotic Cars",
        tag: "Premium Dealership Showroom",
        image: "assets/car-combo-2.webp", 
        alt: "Apex Exotic Cars Website"
    },
    {
        title: "Obsidian Furniture",
        tag: "DIGITAL SHOWROOM",
        image: "assets/furniture-combo.webp",
        alt: "Obsidian Furniture Website"
    },
    {
        title: "Mr Adedamola's Portfolio",
        tag: "FOREX LORD",
        image: "assets/adedamola-combo.webp",
        alt: "Mr Adedamola's Portfolio Website"
    },
    {
        title: "Kally",
        tag: "LOYALTY WEBSITE",
        image: "assets/kally-combo.webp",
        alt: "Lekki Real Estate"
    },
    {
        title: "Mrs Sophia's Portfolio",
        tag: "SERIAL ENTREPRENEUR",
        image: "assets/sophia-combo.webp", 
        alt: "Mrs Sophia's Portfolio Website"
    },
    {
        title: "Smith Mike's Portfolio",
        tag: "CEO CALGARY REAL ESTATE",
        image: "assets/calgary-combo.webp", 
        alt: "Smith Mike's Portfolio Website"
    },
    
];

/* Render Projects */
const container = document.getElementById('projectContainer');

function renderProjects() {
    const labelHTML = '<div class="feed-label">Projects <div class="mono-label">// Concept builds</div></div>';
    
    const projectsHTML = projects.map(project => `
    <div class="project-card reveal" style="position: relative; display: flex; flex-direction: column;">
    <div class="p-image">
        <img src="${project.image}" alt="${project.alt}" loading="lazy">
    </div>
    <div class="p-info" style="padding-bottom: 60px; flex-grow: 1;">
        <h2>${project.title}</h2>
        <span class="tag" style="display: inline-block; margin-bottom: 12px;">${project.tag}</span>
        
        ${project.linkText ? `
            <a href="${project.linkUrl || '#'}" target="_blank" rel="noopener noreferrer" 
               style="position: absolute; left: 1px; right: 1px; bottom: 16px; display: block; text-align: center; box-sizing: border-box; padding: 12px 16px; background-color: #9db2ff; color: #1c1c1c; font-family: 'Montserrat', sans-serif; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; text-decoration: none; border-radius: 4px; transition: opacity 0.2s ease;">
               ${project.linkText}
            </a>
        ` : ''}
    </div>
</div>
    `).join('');

    container.innerHTML = labelHTML + projectsHTML;
    initObserver();
    initLightbox();
}

/* Animation Observer */
function initObserver() {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Stop watching once revealed (Performance)
        }
    });
}, { 
    threshold: 0.1,
    rootMargin: "0px 0px 200px 0px" // <--- THE FIX: Triggers animation 200px early
});

    revealElements.forEach(el => observer.observe(el));
}

/* Lightbox Functionality */
function initLightbox() {
    if (!document.getElementById('imageModal')) {
        const modalHTML = `
            <div id="imageModal" class="modal">
                <span class="close-btn">&times;</span>
                <img class="modal-content" id="modalImage">
                <div id="caption"></div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close-btn");

    document.querySelectorAll('.p-image img').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            const title = this.closest('.project-card').querySelector('h3').innerText;
            captionText.innerHTML = title;
        });
    });

    closeBtn.onclick = () => modal.style.display = "none";
    modal.onclick = (e) => {
        if (e.target !== modalImg) modal.style.display = "none";
    }
}

/* Initialize */
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});
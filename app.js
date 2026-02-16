/* Project Data */
const projects = [
    {
        title: "Apex Exotic Cars",
        tag: "Premium Dealership Showroom",
        image: "assets/car-combo-2.png", 
        alt: "Apex Exotic Cars Website"
    },
    {
        title: "Obsidian Furniture",
        tag: "DIGITAL SHOWROOM",
        image: "assets/furniture-combo.png",
        alt: "Obsidian Furniture Website"
    },
    {
        title: "Mr Adedamola's Portfolio",
        tag: "FOREX LORD",
        image: "assets/adedamola-combo.png",
        alt: "Mr Adedamola's Portfolio Website"
    },
    {
        title: "Kally",
        tag: "LOYALTY WEBSITE",
        image: "assets/kally-combo.png",
        alt: "Lekki Real Estate"
    },
    {
        title: "Mrs Sophia's Portfolio",
        tag: "SERIAL ENTREPRENEUR",
        image: "assets/sophia-combo.png", 
        alt: "Mrs Sophia's Portfolio Website"
    },
    {
        title: "Smith Mike's Portfolio",
        tag: "CEO CALGARY REAL ESTATE",
        image: "assets/calgary-combo.png", 
        alt: "Smith Mike's Portfolio Website"
    },
];

/* Render Projects */
const container = document.getElementById('projectContainer');

function renderProjects() {
    const labelHTML = '<div class="feed-label mono-label">Projects</div>';
    
    const projectsHTML = projects.map(project => `
        <div class="project-card reveal">
            <div class="p-image">
                <img src="${project.image}" alt="${project.alt}" loading="lazy">
            </div>
            <div class="p-info">
                <h3>${project.title}</h3>
                <span class="tag">${project.tag}</span>
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
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
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
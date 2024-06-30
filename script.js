// Change navbar background color on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#ff6347';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

function showMore() {
    var content = document.querySelector('.about-me-content');
    content.classList.toggle('show-more');
}

// Toggle visibility of sections
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

// Change navbar link color on hover
document.querySelectorAll('.navbar ul li a').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#ff6347';
    });
    item.addEventListener('mouseout', () => {
        item.style.color = 'white';
    });
});

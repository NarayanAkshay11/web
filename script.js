document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.getElementById('search-button').addEventListener('click', () => {
        const query = document.getElementById('search-bar').value;
        if (query) {
            // Replace this alert with actual search functionality if needed
            alert('Search functionality not implemented');
        }
    });
});

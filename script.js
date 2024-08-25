document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Optional: Add functionality for the search button
    document.getElementById('search-button').addEventListener('click', () => {
        const query = document.getElementById('search-bar').value;
        if (query) {
            alert('Search functionality not implemented');
        }
    });
});

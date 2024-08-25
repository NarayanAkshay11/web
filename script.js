document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const searchButton = document.getElementById('search-button');
    const searchBar = document.getElementById('search-bar');
    const currentPage = window.location.pathname.split('/').pop();

    // Set active link based on current page
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }
    });

    // Menu toggle functionality for mobile
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Search button functionality
    searchButton.addEventListener('click', () => {
        const query = searchBar.value.trim();
        if (query) {
            // Redirect to search results page or perform an actual search
            window.location.href = `search.html?q=${encodeURIComponent(query)}`;
        }
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Optional: Handle Enter key press in search bar
    searchBar.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
});

// Function to show tab content
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
}

// Function to handle search functionality
document.getElementById('search-bar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const pages = ['index.html', 'about.html', 'asv.html', 'team.html', 'papers.html'];

    pages.forEach(page => {
        fetch(page)
            .then(response => response.text())
            .then(text => {
                if (text.toLowerCase().includes(query)) {
                    window.location.href = page;
                }
            });
    });
});

// Function to load team and papers from markdown files
function loadMarkdown(contentUrl, elementId) {
    fetch(contentUrl)
        .then(response => response.text())
        .then(text => {
            document.getElementById(elementId).innerHTML = marked(text);
        });
}

// Load team and paper data
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('team-content')) {
        loadMarkdown('markdown/team.md', 'team-content');
    }
    if (document.getElementById('individual') || document.getElementById('team')) {
        loadMarkdown('markdown/papers.md', 'individual'); // Adjust as needed for team papers
        loadMarkdown('markdown/papers.md', 'team'); // Adjust as needed for team papers
    }
});

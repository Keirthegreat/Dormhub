// load-navbar.js

// Function to load the navbar
function loadNavbar() {
    // Select the container where the navbar will be loaded
    const navbarContainer = document.getElementById('navbar-container');

    // Fetch the navbar HTML
    fetch('navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch navbar.html: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            // Insert the HTML into the navbar container
            navbarContainer.innerHTML = html;

            // Attach event listeners for the loaded navbar
            const menuToggle = document.getElementById('menu-toggle');
            if (menuToggle) {
                menuToggle.addEventListener('click', () => {
                    const mobileMenu = document.querySelector('.mobile-menu');
                    if (mobileMenu) {
                        mobileMenu.classList.toggle('active');
                    }
                });
            }
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
        });
}

// Automatically load the navbar when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadNavbar);

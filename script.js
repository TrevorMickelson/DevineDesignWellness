document.addEventListener('DOMContentLoaded', function() {
    loadHeaderAndFooter();
});

function loadHeaderAndFooter() {
    // Determine if we're in a team member page
    const isTeamMemberPage = window.location.pathname.includes('team-members');
    const isSubPage = isTeamMemberPage || window.location.pathname.includes('about.html') || 
                     window.location.pathname.includes('teams.html') || 
                     window.location.pathname.includes('contact.html');
    
    // Load the appropriate header
    const headerPath = isSubPage ? '../components/header.html' : 'components/header.html';
    fetch(headerPath)
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.getElementById('header-container');
            if (headerContainer) {
                headerContainer.innerHTML = data;
                // Fix paths for sub pages
                if (isSubPage) {
                    adjustHeaderPaths();
                }
                initializeNavigation();
            }
        })
        .catch(error => console.error('Error loading header:', error));

    // Load the footer with the correct path
    const footerPath = isSubPage ? '../components/footer.html' : 'components/footer.html';
    fetch(footerPath)
        .then(response => response.text())
        .then(data => {
            const footerContainer = document.getElementById('footer-container');
            if (footerContainer) {
                footerContainer.innerHTML = data;
                // Fix paths for sub pages
                if (isSubPage) {
                    const footerLogo = footerContainer.querySelector('.footer-logo');
                    if (footerLogo) {
                        footerLogo.src = '../assets/icon.png';
                    }
                }
            }
        })
        .catch(error => console.error('Error loading footer:', error));
}

function adjustHeaderPaths() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    // Fix logo
    const logo = header.querySelector('.logo');
    if (logo) {
        logo.href = '../index.html';
        const logoImg = logo.querySelector('img');
        if (logoImg) {
            logoImg.src = '../assets/icon.png';
        }
    }

    // Fix navigation links
    const links = header.querySelectorAll('.nav-menu a');
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href !== '#') {
            // Don't modify team member links that already have the full path
            if (href.includes('team-members/')) {
                // If we're in a team member page, we need to adjust other team member links
                if (!href.startsWith('../')) {
                    link.href = '../' + href;
                }
            } else {
                // For non-team member links, add the parent directory prefix
                link.href = '../' + href;
            }
        }
    });
}

function initializeNavigation() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navMenu = document.querySelector('.nav-menu');
    const submenuItems = document.querySelectorAll('.has-submenu');

    if (mobileMenuButton && navMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenuButton.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Handle submenu toggles on mobile
    submenuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                item.classList.toggle('active');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileMenuButton.classList.remove('active');
        }
    });

    // Close menu when window is resized above mobile breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            mobileMenuButton.classList.remove('active');
            submenuItems.forEach(item => item.classList.remove('active'));
        }
    });
} 
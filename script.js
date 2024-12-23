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
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuButton && navMenu) {
        mobileMenuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Handle submenu toggles for mobile
    const menuItems = document.querySelectorAll('.has-submenu');
    menuItems.forEach(item => {
        const link = item.querySelector('a');
        const submenu = item.querySelector('.submenu');
        
        if (link && submenu) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 1024) {
                    e.preventDefault();
                    e.stopPropagation();
                    item.classList.toggle('active');
                    submenu.classList.toggle('active');
                    
                    // Close other submenus
                    menuItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                            const otherSubmenu = otherItem.querySelector('.submenu');
                            if (otherSubmenu) {
                                otherSubmenu.classList.remove('active');
                            }
                        }
                    });
                }
            });
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu && navMenu.classList.contains('active')) {
            if (!navMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
                
                // Close all submenus
                document.querySelectorAll('.has-submenu').forEach(item => {
                    item.classList.remove('active');
                    const submenu = item.querySelector('.submenu');
                    if (submenu) {
                        submenu.classList.remove('active');
                    }
                });
            }
        }
    });
} 
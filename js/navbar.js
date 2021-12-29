//=============================================================================
/*===== MIMMI: NAVBAR MENU ===== */
//=============================================================================

// Hamburger menu
const toggleButton = document.getElementsByClassName('toggle-button')[0];

const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
})

// Show active nav link
const activePage = window.location.pathname;
const navItems = document.querySelectorAll('li a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})

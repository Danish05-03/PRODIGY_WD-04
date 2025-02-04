document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Responsive Navbar
    const menuBtn = document.createElement('button');
    menuBtn.innerText = '☰';
    menuBtn.style.fontSize = "2rem";
    menuBtn.style.background = "none";
    menuBtn.style.color = "white";
    menuBtn.style.border = "none";
    menuBtn.style.cursor = "pointer";
    menuBtn.style.display = "none";

    const nav = document.querySelector('nav');
    nav.prepend(menuBtn);

    menuBtn.addEventListener('click', function () {
        document.querySelectorAll('nav a').forEach(link => {
            link.style.display = link.style.display === "block" ? "none" : "block";
        });
    });

    function updateNavbar() {
        if (window.innerWidth < 768) {
            document.querySelectorAll('nav a').forEach(link => link.style.display = "none");
            menuBtn.style.display = "block";
        } else {
            document.querySelectorAll('nav a').forEach(link => link.style.display = "inline");
            menuBtn.style.display = "none";
        }
    }

    window.addEventListener('resize', updateNavbar);
    updateNavbar();
});

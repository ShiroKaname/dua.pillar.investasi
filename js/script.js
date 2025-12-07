document.addEventListener('DOMContentLoaded', function() {
    
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');

    // Fungsi untuk toggle menu mobile
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Menutup menu mobile saat salah satu link diklik
    document.querySelectorAll('#navLinks a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

});

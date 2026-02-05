// Lightweight enhancements
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for sidebar links
    const links = document.querySelectorAll('.side-nav a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.getAttribute('href');
            document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Intersection Observer for highlighting current section in side-nav
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.side-nav a');

    const observerOptions = { threshold: 0.3 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navItems.forEach(item => {
                    item.style.color = 'var(--text-secondary)';
                    if (item.getAttribute('href') === `#${entry.target.id}`) {
                        item.style.color = 'var(--text-primary)';
                        item.style.fontWeight = '600';
                    } else {
                        item.style.fontWeight = '400';
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});
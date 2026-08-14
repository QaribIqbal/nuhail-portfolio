document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Lenis smooth scrolling
    const lenis = typeof Lenis !== 'undefined'
        ? new Lenis({
            duration: 1.1,
            smoothWheel: true,
            touchMultiplier: 1
        })
        : null;

    if (lenis) {
        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
    }

    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.animate-up, .animate-left, .animate-right, .animate-fade-in');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                if (lenis) {
                    lenis.scrollTo(target, { offset: -80 });
                } else {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Nav background change on scroll
    const nav = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(3, 7, 18, 0.9)';
            nav.style.padding = '0.75rem 0';
        } else {
            nav.style.background = 'transparent';
            nav.style.padding = '1rem 0';
        }
    });

    // Simple ROI Calculator Logic (Future Enhancement)
    // You can add an interactive ROI calculator here
});

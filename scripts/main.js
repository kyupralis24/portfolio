document.addEventListener('DOMContentLoaded', function () {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form Validation and Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            // Basic validation
            if (!formData.name || !formData.email || !formData.message) {
                alert('Please fill in all fields');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert('Please enter a valid email address');
                return;
            }

            // In a real application, you would send this data to a server
            console.log('Form submitted:', formData);

            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // Reveal-on-scroll animations
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal, .skill-card, .project-card, .experience-card').forEach(el => revealObserver.observe(el));

    // Parallax Effect for Hero Section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
        });
    }

    // Add active class to navigation links based on scroll position
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Check for saved theme preference or use system preference
    const currentTheme = localStorage.getItem('theme') ||
        (prefersDarkScheme.matches ? 'dark' : 'light');

    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (themeToggle) {
        themeToggle.innerHTML = currentTheme === 'dark' ?
            '<i class="fas fa-sun"></i>' :
            '<i class="fas fa-moon"></i>';
    }

    // Theme toggle click handler
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            // Update theme
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);

            // Update icon
            themeToggle.innerHTML = newTheme === 'dark' ?
                '<i class="fas fa-sun"></i>' :
                '<i class="fas fa-moon"></i>';
        });
    }

    // Listen for system theme changes
    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            if (themeToggle) {
                themeToggle.innerHTML = newTheme === 'dark' ?
                    '<i class="fas fa-sun"></i>' :
                    '<i class="fas fa-moon"></i>';
            }
        }
    });

    // Navbar blur on scroll + back-to-top visibility + scroll progress
    const navbar = document.querySelector('.navbar');
    const backToTop = document.querySelector('.back-to-top');
    let progressEl = document.querySelector('.scroll-progress');
    if (!progressEl) {
        progressEl = document.createElement('div');
        progressEl.className = 'scroll-progress';
        document.body.appendChild(progressEl);
    }
    const onScroll = () => {
        const y = window.scrollY;
        if (navbar) navbar.classList.toggle('scrolled', y > 10);
        if (backToTop) backToTop.classList.toggle('show', y > 300);
        const docH = document.documentElement.scrollHeight - window.innerHeight;
        const pct = Math.max(0, Math.min(1, y / (docH || 1)));
        progressEl.style.width = (pct * 100) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Back to top handler
    if (backToTop) {
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Inject background grid once
    if (!document.querySelector('.bg-grid')) {
        const grid = document.createElement('div');
        grid.className = 'bg-grid';
        document.body.appendChild(grid);
    }

    // Resume mode toggle (persisted)
    const resumeToggle = document.getElementById('resumeToggle');
    const setResume = (on) => {
        document.documentElement.setAttribute('data-resume', on ? 'on' : 'off');
        localStorage.setItem('resume', on ? 'on' : 'off');
        if (on) document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
    };
    const resumeOn = localStorage.getItem('resume') === 'on';
    setResume(resumeOn);
    if (resumeToggle) {
        resumeToggle.addEventListener('click', () => setResume(document.documentElement.getAttribute('data-resume') !== 'on'));
    }
    // If a page doesn't have the button, add a small one near theme toggle
    if (!resumeToggle) {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            const btn = document.createElement('button');
            btn.id = 'resumeToggle';
            btn.className = 'theme-toggle';
            btn.setAttribute('aria-label', 'Resume mode');
            btn.innerHTML = '<i class="fas fa-file-lines"></i>';
            navLinks.appendChild(btn);
            btn.addEventListener('click', () => setResume(document.documentElement.getAttribute('data-resume') !== 'on'));
        }
    }
}); 
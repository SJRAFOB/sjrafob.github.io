/* =========================================================
   1. TRADUCTIONS ANGLAISES
   Chaque clé correspond à un data-i18n (ou data-i18n-ph) du HTML.
   ========================================================= */
const en = {
    // Menu
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",

    // Accueil
    home_hello: "👋 Hello, I'm",
    home_title: "Web & Mobile Developer",
    home_text: "Software Engineering student, I build websites and mobile apps with HTML, CSS, JavaScript, PHP and Flutter/Firebase. Based in Ibadan, Nigeria.",
    home_btn_projects: "View my projects",
    home_btn_contact: "Contact me",

    // À propos
    about_tag: "About",
    about_heading: "Who am I?",
    about_p1: "I'm a passionate developer with a degree in Computer Science (Software Engineering) from HEC Biétry (Abidjan). I love turning an idea into a real application that is useful and pleasant to use.",
    about_p2: "Now based in Ibadan, I'm continuing my web development training at NIIT while building ELECTROMANIA, the e-commerce app for my own shop. I speak French and English fluently.",
    stat_years: "Years studying computer science",
    stat_projects: "Projects completed",
    stat_thesis: "Final thesis grade",
    edu_title: "Education",
    edu1_title: "Web Development Training",
    edu2_title: "Bachelor's in Software Engineering",
    edu2_text: "Thesis: HEC Connect, a Flutter/Firebase mobile app (16/20).",
    edu3_title: "High School Diploma (Literature)",
    exp_title: "Experience",
    exp1_date: "2026 – present",
    exp1_title: "Founder & Developer — ELECTROMANIA",
    exp1_text: "Building the e-commerce app (Flutter/Firebase) for my phone and accessories shop.",
    exp2_title: "Salesperson — Semi Électronique et Accessoires",
    exp2_text: "Sales, store management and online sales (during school holidays).",

    // Compétences
    skills_tag: "Skills",
    skills_heading: "My toolbox",
    lvl_strong: "Proficient",
    lvl_mid: "Intermediate",
    lvl_learning: "Learning",
    skills_back: "Back-end & Data",
    skills_tools: "Mobile & Tools",
    soft_title: "Strengths",
    soft_1: "🇫🇷 French (native)",
    soft_2: "🇬🇧 Fluent English",
    soft_3: "🤝 Customer relations & sales",
    soft_4: "📦 Store management",
    soft_5: "🔄 FR ↔ EN interpreting",

    // Projets
    projects_tag: "Projects",
    projects_heading: "What I've built",
    badge_thesis: "Thesis · 16/20",
    badge_progress: "In progress",
    badge_done: "Completed",
    type_mobile: "Mobile app",
    type_ecommerce: "Mobile e-commerce",
    type_web: "Website",
    p1_desc: "University app for HEC Biétry: real-time messaging, push notifications targeted by role, level and field of study, class schedule, and different access depending on the profile (student, teacher, administration).",
    p2_desc: "E-commerce app for my own shop (phones, tablets, accessories): catalog, cart, cash on delivery and an admin area to manage products and orders.",
    p3_desc: "Responsive showcase website for a burger restaurant: menu, services, JavaScript mobile menu and custom illustrations.",
    link_code: "Code",
    link_demo: "Demo",

    // Contact
    contact_tag: "Contact",
    contact_heading: "Let's work together",
    contact_intro: "I'm looking for an internship or a junior developer position, on-site in Ibadan or remote. Feel free to reach out!",
    contact_location: "Location",
    form_name: "Your name",
    form_email: "Your email",
    form_subject: "Subject",
    form_message: "Your message",
    form_send: "Send message",

    // Footer
    footer_rights: "All rights reserved."
};


/* =========================================================
   2. SAUVEGARDE DU FRANÇAIS (lu directement dans le HTML)
   ========================================================= */
const fr = {};

// Les textes
document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;                  // ex : "nav_home"
    if (!(key in fr)) fr[key] = el.textContent.trim();
});

// Les placeholders du formulaire
document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;                // data-i18n-ph → dataset.i18nPh
    if (!(key in fr)) fr[key] = el.placeholder;
});

const translations = { fr: fr, en: en };


/* =========================================================
   3. FONCTION QUI CHANGE LA LANGUE
   ========================================================= */
const langBtn = document.querySelector('#lang-btn');
let currentLang = 'fr';

function setLanguage(lang) {
    const dict = translations[lang];

    // Remplace chaque texte
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (dict[key]) el.textContent = dict[key];
    });

    // Remplace chaque placeholder
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.dataset.i18nPh;
        if (dict[key]) el.placeholder = dict[key];
    });

    // Met à jour la langue de la page et le titre de l'onglet
    document.documentElement.lang = lang;
    document.title = lang === 'fr'
        ? 'Rohees SUBERU | Développeur Web & Mobile'
        : 'Rohees SUBERU | Web & Mobile Developer';

    // Le bouton affiche l'AUTRE langue (celle vers laquelle on peut basculer)
    langBtn.textContent = lang === 'fr' ? 'EN' : 'FR';

    currentLang = lang;

    // Mémorise le choix pour la prochaine visite
    try {
        localStorage.setItem('lang', lang);
    } catch (e) {
        // localStorage peut être bloqué (navigation privée) : on ignore
    }
}

// Clic sur le bouton : on bascule
langBtn.addEventListener('click', () => {
    setLanguage(currentLang === 'fr' ? 'en' : 'fr');
});

// Au chargement : on reprend la langue mémorisée (s'il y en a une)
try {
    const savedLang = localStorage.getItem('lang');
    if (savedLang === 'en') setLanguage('en');
} catch (e) {}


/* =========================================================
   4. MENU MOBILE
   ========================================================= */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// Ouvrir / fermer
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');            // ☰ devient ✕
});

// Fermer quand on clique sur un lien du menu
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});


/* =========================================================
   5. ANNÉE AUTOMATIQUE DANS LE FOOTER
   ========================================================= */
document.querySelector('#year').textContent = new Date().getFullYear();


/* =========================================================
   6. APPARITION DES ÉLÉMENTS AU SCROLL
   ========================================================= */

// La liste des éléments à animer (même sélecteurs qu'en CSS)
const revealSelectors = [
    '.home-content',
    '.home-img',
    '.section-title',
    '.about-intro',
    '.stat',
    '.timeline',
    '.skills-legend',
    '.skill-card',
    '.soft-skills',
    '.project-card',
    '.contact-info',
    '.contact-form'
];

const revealElements = document.querySelectorAll(revealSelectors.join(','));

// On ajoute la classe "reveal" (état invisible) à chacun
revealElements.forEach(el => el.classList.add('reveal'));

// Petit décalage pour les éléments d'une même rangée (effet « cascade »)
document.querySelectorAll('.stat, .skill-card, .project-card').forEach(el => {
    const index = [...el.parentElement.children].indexOf(el);   // position : 0, 1, 2…
    el.style.transitionDelay = (index * 0.15) + 's';             // 0s, 0.15s, 0.3s…
});

// L'observateur : il prévient quand un élément entre dans l'écran
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('visible');

            // Une fois l'animation finie, on nettoie
            // (sinon les effets :hover des cartes seraient lents)
            el.addEventListener('transitionend', () => {
                el.classList.remove('reveal', 'visible');
                el.style.transitionDelay = '';
            }, { once: true });

            revealObserver.unobserve(el);   // on n'anime qu'une seule fois
        }
    });
}, {
    threshold: 0.15     // déclenche quand 15 % de l'élément est visible
});

revealElements.forEach(el => revealObserver.observe(el));


/* =========================================================
   7. OMBRE DE L'EN-TÊTE AU SCROLL
   ========================================================= */
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
});


/* =========================================================
   8. LIEN ACTIF DANS LE MENU
   ========================================================= */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar a');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;     // ex : "projects"

            navLinks.forEach(link => {
                // Le lien est actif si son href est "#projects"
                link.classList.toggle('active', link.getAttribute('href') === '#' + id);
            });
        }
    });
}, {
    rootMargin: '-50% 0px -50% 0px'   // une ligne invisible au milieu de l'écran
});

sections.forEach(section => sectionObserver.observe(section));
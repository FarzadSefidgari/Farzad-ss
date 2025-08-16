const $ = (sel) => document.querySelector(sel);
$("#y").textContent = new Date().getFullYear();

// ساده‌ترین دوزبانه: متن‌ها در یک آبجکت، دکمه‌ها زبان را عوض می‌کنند
const dict = {
  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_work: "Portfolio",
    nav_contact: "Contact",
    hero_title: "We build clean, modern websites.",
    hero_sub: "Fast, secure and SEO-friendly. Perfect for your business.",
    hero_cta: "Get Started",
    svc_title: "What we do",
    svc_web_title: "Web Design & Dev",
    svc_web_text: "Landing pages, corporate sites, and shops.",
    svc_seo_title: "SEO & Security",
    svc_seo_text: "On-page SEO, performance and hardening.",
    svc_b2b_title: "B2B Solutions",
    svc_b2b_text: "Automation, lead gen, and dashboards.",
    work_title: "Recent Work",
    work_1_title: "SaaS Landing",
    work_2_title: "Corporate Site",
    work_3_title: "Shop Template",
    work_view: "View demo",
    contact_title: "Contact",
    contact_note: "Online service – text communication only.",
    footer_about: "About",
    footer_terms: "Terms",
    footer_made: "Made with care."
  },
  de: {
    nav_home: "Start",
    nav_services: "Leistungen",
    nav_work: "Referenzen",
    nav_contact: "Kontakt",
    hero_title: "Wir erstellen moderne, klare Websites.",
    hero_sub: "Schnell, sicher und SEO-freundlich. Ideal für Ihr Business.",
    hero_cta: "Jetzt starten",
    svc_title: "Unsere Leistungen",
    svc_web_title: "Webdesign & Entwicklung",
    svc_web_text: "Landingpages, Unternehmensseiten und Shops.",
    svc_seo_title: "SEO & Sicherheit",
    svc_seo_text: "On-Page-SEO, Performance und Härtung.",
    svc_b2b_title: "B2B-Lösungen",
    svc_b2b_text: "Automatisierung, Lead-Generierung und Dashboards.",
    work_title: "Aktuelle Projekte",
    work_1_title: "SaaS Landing",
    work_2_title: "Corporate-Website",
    work_3_title: "Shop-Template",
    work_view: "Demo ansehen",
    contact_title: "Kontakt",
    contact_note: "Onlinedienst – nur schriftliche Kommunikation.",
    footer_about: "Über uns",
    footer_terms: "AGB",
    footer_made: "Mit Sorgfalt erstellt."
  }
};

const setLang = (lang) => {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = dict[lang][key] || el.textContent;
  });
  document.querySelectorAll(".lang-btn").forEach(b=>{
    b.classList.toggle("active", b.dataset.lang===lang);
  });
  localStorage.setItem("lang", lang);
};

document.querySelectorAll(".lang-btn").forEach(btn=>{
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

setLang(localStorage.getItem("lang") || "en");

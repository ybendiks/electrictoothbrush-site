/* ═══════════════════════════════════════════════════
   ElectricToothbrush.site — Navigation & FAQ JS
   ═══════════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", function () {
  // ── Mobile nav toggle ──
  const toggle = document.querySelector(".mobile-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      const isOpen = mobileNav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen);
      toggle.innerHTML = isOpen ? "&#10005;" : "&#9776;";
      document.body.style.overflow = isOpen ? "hidden" : "";
    });
  }

  // ── FAQ accordions ──
  document.querySelectorAll(".faq-question").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const item = btn.closest(".faq-item");
      const wasOpen = item.classList.contains("open");
      // Close all in same section
      item.parentElement.querySelectorAll(".faq-item").forEach(function (el) {
        el.classList.remove("open");
      });
      if (!wasOpen) item.classList.add("open");
    });
  });

  // ── Active nav link ──
  const path = window.location.pathname.replace(/\.html$/, "").replace(/\/$/, "") || "/";
  document.querySelectorAll(".nav-links a, .mobile-nav a").forEach(function (link) {
    const href = link.getAttribute("href").replace(/\.html$/, "").replace(/\/$/, "") || "/";
    if (href === path) link.classList.add("active");
  });
});

/* ==================================================================
   HLLC FLOOR COMPETITION — shared header, footer and starfield.
   Injected on every page by <script src="nav.js"></script>.
   Nothing here needs editing to post new points — see data.js.
   ================================================================== */

const CURRENT_PAGE = (() => {
  const path = location.pathname;
  if (path.endsWith("activity.html")) return "activity";
  if (path.endsWith("about.html")) return "about";
  if (path.endsWith("display.html")) return "display";
  return "home";
})();

const PAGES = [
  { id: "home",     href: "index.html",    label: "Standings" },
  { id: "activity", href: "activity.html", label: "Activity" },
  { id: "about",    href: "about.html",    label: "Scoring" },
];

function renderNav() {
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <div class="header-inner">
      <a href="index.html" class="logo" aria-label="HLLC Floor Competition — standings">
        <span class="logo-bar"></span>
        <span class="logo-text">
          <span class="logo-title">HLLC</span>
          <span class="logo-sub">Floor Competition · ${SEASON.term}</span>
        </span>
      </a>
      <nav class="nav-links" aria-label="Primary">
        ${PAGES.map((p) =>
          `<a href="${p.href}"${CURRENT_PAGE === p.id ? ' class="active" aria-current="page"' : ""}>${p.label}</a>`
        ).join("")}
        <a href="display.html" class="nav-display">&#9654; Display</a>
      </nav>
      <span class="live-badge"><span class="dot"></span> Live</span>
      <button class="nav-toggle" aria-expanded="false" aria-controls="mobile-nav" aria-label="Menu">&#9776;</button>
    </div>
    <div id="mobile-nav" class="mobile-nav">
      <ul>
        ${[...PAGES, { id: "display", href: "display.html", label: "Display Mode" }].map((p) =>
          `<li><a href="${p.href}"${CURRENT_PAGE === p.id ? ' class="active"' : ""}>${p.label}</a></li>`
        ).join("")}
      </ul>
    </div>
  `;
  document.body.prepend(header);

  const btn = header.querySelector(".nav-toggle");
  const nav = header.querySelector(".mobile-nav");
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
    btn.innerHTML = open ? "&#10005;" : "&#9776;";
  });
}

function renderFooter() {
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <p class="footer-title">WARDALL HALL · HONORS LLC</p>
          <p class="footer-desc">
            The standings board for the Honors Living-Learning Community floor
            competition in Wardall Hall at Illinois Street Residence, University
            of Illinois Urbana-Champaign. Not an official University publication.
          </p>
        </div>
        <nav class="footer-nav" aria-label="Footer">
          ${PAGES.map((p) => `<a href="${p.href}">${p.label}</a>`).join("")}
          <a href="display.html">Display</a>
        </nav>
      </div>
      <div class="footer-bottom">
        <span>${SEASON.term} season</span>
        <span class="tabular">Updated ${formatDate(SEASON.updated)} &middot; 7 floors &middot; one champion &#128640;</span>
      </div>
    </div>
  `;
  document.body.appendChild(footer);
}

function renderShootingStars() {
  const tops = ["10%", "20%", "60%"];
  for (let i = 0; i < 3; i++) {
    const el = document.createElement("div");
    el.className = "shooting-star";
    el.style.top = tops[i];
    document.body.prepend(el);
  }
}

function initStarfield() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    // Still paint a static field, just never animate it.
    var still = true;
  }
  let canvas = document.getElementById("starfield");
  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.id = "starfield";
    canvas.setAttribute("aria-hidden", "true");
    document.body.prepend(canvas);
  }
  const ctx = canvas.getContext("2d");
  let stars = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = [];
    const count = Math.floor((canvas.width * canvas.height) / 3200);
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4 + 0.3,
        alpha: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 0.3 + 0.05,
        phase: Math.random() * Math.PI * 2,
      });
    }
  }

  function paint(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of stars) {
      const twinkle = still ? 1 : Math.sin(time * 0.001 * s.speed + s.phase) * 0.3 + 0.7;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(232, 237, 243, ${s.alpha * twinkle})`;
      ctx.fill();
    }
    if (!still) requestAnimationFrame(paint);
  }

  resize();
  window.addEventListener("resize", () => { resize(); if (still) paint(0); });
  requestAnimationFrame(paint);
}

document.addEventListener("DOMContentLoaded", () => {
  renderShootingStars();
  initStarfield();
  if (CURRENT_PAGE !== "display") {
    renderNav();
    renderFooter();
  }
});

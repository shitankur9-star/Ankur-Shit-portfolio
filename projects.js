/*
 * PROJECTS CONFIG
 * Add/edit projects in this array. Put preview images in assets/projects/.
 * Use an empty string for a link you do not have yet; the button will be hidden.
 */
const portfolioProjects = [
  {
    "title": "Portfolio Website",
    "description": "A responsive personal portfolio showcasing my skills, background, and selected projects.",
    "image": "/assets/projects/portfolio-real.webp",
    "status": "Live",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "github": "https://github.com/shitankur9-star/Ankur-Shit-portfolio",
    "demo": "https://ankur-shit-portfolio-jhgz.vercel.app/"
  },
  {
    "title": "Calculator",
    "description": "A modern calculator with a calculation display, numeric keypad, theme toggle, and history panel.",
    "image": "/assets/projects/calculator-real.webp",
    "status": "Project",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "github": "https://github.com/shitankur9-star/Calculator",
    "demo": "https://shitankur9-star.github.io/Calculator/"
  },
  {
    "title": "To-Do List",
    "description": "A minimal task-list app for quickly entering and organizing everyday tasks.",
    "image": "/assets/projects/todo-real.webp",
    "status": "Project",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "github": "https://github.com/shitankur9-star/To-do-list",
    "demo": "https://shitankur9-star.github.io/To-do-list/"
  },
  {
    "title": "CGEC Connect",
    "description": "A campus community concept with student posts, stories, messages, clubs, events, and people discovery.",
    "image": "/assets/projects/cgec-connect.webp",
    "status": "Project",
    "tags": [
      "Web UI",
      "Community",
      "Responsive Design"
    ],
    "github": "",
    "demo": "https://agent-6adb31b192cccc46d5e--cgec-students-connect.netlify.app/"
  },
  {
    "title": "BengalTrail",
    "description": "A travel experience landing page highlighting North Bengal destinations with trip-planning navigation.",
    "image": "/assets/projects/bengaltrail.webp",
    "status": "Project",
    "tags": [
      "Travel",
      "Landing Page",
      "Responsive Design"
    ],
    "github": "",
    "demo": "https://agent-6ad5053c3b3a3f956dff8c--northbengaltourism.netlify.app/"
  },
  {
    "title": "CGC Campus OLX",
    "description": "A campus-only marketplace concept for students to buy, sell, and hand over items within the college community.",
    "image": "/assets/projects/cgc-campus-olx.webp",
    "status": "Project",
    "tags": [
      "Marketplace",
      "Campus Community",
      "Web UI"
    ],
    "github": "",
    "demo": "https://agent-6ad501a1300ba82a0a53d966--cgecolx.netlify.app/"
  },
  {
    "title": "Callbreak Multiplayer",
    "description": "A multiplayer Callbreak card-game experience featuring a room lobby, invite codes, player seats, and bot options.",
    "image": "/assets/projects/room-lobby.webp",
    "status": "Live",
    "tags": [
      "Multiplayer",
      "Card Game",
      "JavaScript"
    ],
    "github": "",
    "demo": "https://agent-6ad5f3b3bcd3abc31c0e--callbreakmultiplayer.netlify.app/"
  }
];
function renderPortfolioProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);

  grid.innerHTML = portfolioProjects.map((project, index) => {
    const tags = project.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join("");
    const github = project.github
      ? `<a href="${escapeHTML(project.github)}" target="_blank" rel="noopener noreferrer" aria-label="View ${escapeHTML(project.title)} source code on GitHub"><i class="fa-brands fa-github"></i> Source</a>`
      : "";
    const demo = project.demo
      ? `<a href="${escapeHTML(project.demo)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escapeHTML(project.title)} live demo">Live Demo <i class="fa-solid fa-arrow-up-right-from-square"></i></a>`
      : "";
    const links = github || demo
      ? `<div class="project-links">${github}${demo}</div>`
      : "";

    return `
      <article class="project-card project-showcase-card glass-card reveal">
        <div class="project-preview">
          <img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)} preview" loading="lazy"
               onerror="this.onerror=null;this.src='/assets/projects/project-fallback.svg';">
          <span class="project-status ${project.status.toLowerCase() === "live" ? "is-live" : ""}">
            ${project.status.toLowerCase() === "live" ? '<span class="status-dot"></span>' : ''}
            ${escapeHTML(project.status)}
          </span>
          <span class="project-number">${String(index + 1).padStart(2, "0")}</span>
        </div>
        <div class="project-content">
          <div class="project-title-row">
            <h3>${escapeHTML(project.title)}</h3>
            <span class="project-open-icon" aria-hidden="true"><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
          </div>
          <p>${escapeHTML(project.description)}</p>
          <div class="project-tags">${tags}</div>
          ${links}
        </div>
      </article>`;
  }).join("");

  // Re-attach scroll reveal behavior for dynamically generated cards.
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    grid.querySelectorAll(".reveal").forEach(card => observer.observe(card));
  } else {
    grid.querySelectorAll(".reveal").forEach(card => card.classList.add("visible"));
  }
}

document.addEventListener("DOMContentLoaded", renderPortfolioProjects);

/*
 * PROJECTS CONFIG
 * Add/edit projects in this array. Put preview images in assets/projects/.
 * Use an empty string for a link you do not have yet; the button will be hidden.
 */
const portfolioProjects = [
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio showcasing my skills, experience, and selected work.",
    image: "assets/projects/portfolio-preview.svg",
    status: "Live",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/shitankur9-star/Ankur-Shit-portfolio",
    demo: "https://ankur-shit-portfolio-jhgz.vercel.app/"
  },
  {
    title: "Weather App",
    description: "A weather app concept for presenting current conditions and forecast information in a clear interface.",
    image: "assets/projects/weather-preview.svg",
    status: "Project",
    tags: ["JavaScript", "API", "CSS"],
    github: "https://github.com/shitankur9-star/-Advanced-Health-Calculator",
    demo: ""
  },
  {
    title: "Calculator",
    description: "A lightweight calculator interface built to practice JavaScript logic and responsive UI design.",
    image: "assets/projects/calculator-preview.svg",
    status: "Project",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/shitankur9-star/Calculator",
    demo: ""
  },
  {
    title: "To-Do List",
    description: "A simple productivity tool for organizing tasks and tracking completion.",
    image: "assets/projects/todo-preview.svg",
    status: "Project",
    tags: ["JavaScript", "DOM", "CSS"],
    github: "https://github.com/shitankur9-star/To-do-list",
    demo: ""
  },
  {
    title: "Landing Page",
    description: "A clean landing-page concept focused on visual hierarchy, responsive layout, and clear calls to action.",
    image: "assets/projects/landing-preview.svg",
    status: "Live",
    tags: ["HTML5", "CSS3", "Responsive"],
    github: "https://github.com/shitankur9-star/Ankur-Shit-portfolio",
    demo: "https://ankur-shit-portfolio-jhgz.vercel.app/"
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
               onerror="this.onerror=null;this.src='assets/projects/project-fallback.svg';">
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

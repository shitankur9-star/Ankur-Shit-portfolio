document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const loader = document.getElementById("pageLoader");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const themeToggle = document.getElementById("themeToggle");
  const header = document.getElementById("header");
  const backTop = document.getElementById("backTop");
  const typingText = document.getElementById("typingText");
  const form = document.getElementById("contactForm");
  const formNote = document.getElementById("formNote");

  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("hide"), 350);
  });

  navToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open);
    navToggle.innerHTML = open
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });

  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "light") {
    body.dataset.theme = "light";
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }

  themeToggle.addEventListener("click", () => {
    const light = body.dataset.theme === "light";
    if (light) {
      delete body.dataset.theme;
      localStorage.setItem("portfolio-theme", "dark");
      themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      body.dataset.theme = "light";
      localStorage.setItem("portfolio-theme", "light");
      themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  });

  const words = ["Frontend Developer", "CSE Student", "Web Developer", "Problem Solver"];
  let wordIndex = 0, charIndex = 0, deleting = false;

  function typeLoop() {
    const word = words[wordIndex];
    typingText.textContent = deleting ? word.slice(0, --charIndex) : word.slice(0, ++charIndex);

    let delay = deleting ? 45 : 85;
    if (!deleting && charIndex === word.length) {
      delay = 1400;
      deleting = true;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 300;
    }
    setTimeout(typeLoop, delay);
  }
  typeLoop();

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll(".nav-link");
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id));
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach(section => sectionObserver.observe(section));

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
    backTop.classList.toggle("show", window.scrollY > 600);
  });

  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Build a lightweight visual placeholder for the GitHub contribution calendar.
  const calendar = document.getElementById("calendarGrid");
  for (let i = 0; i < 126; i++) {
    const cell = document.createElement("i");
    cell.setAttribute("aria-hidden", "true");
    calendar.appendChild(cell);
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formNote.textContent = "Please complete all fields.";
      return;
    }

    // Frontend-only fallback: open the user's email client with a prefilled message.
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const bodyText = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:shitankur9@gmail.com?subject=${subject}&body=${bodyText}`;
    formNote.textContent = "Opening your email app…";
  });

  document.getElementById("year").textContent = new Date().getFullYear();
});

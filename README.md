# Ankur Shit — Personal Portfolio

A responsive, premium-style portfolio website built with:

- HTML5
- CSS3
- Vanilla JavaScript
- Font Awesome
- Google Fonts

## Folder structure

```text
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   └── profile.jpg
│   └── resume.pdf
└── README.md
```

## Run locally

No build tool is required.

1. Open the project folder.
2. Open `index.html` in a browser.

For the best local-development experience, use VS Code with the Live Server extension.

## Before publishing

1. Replace `assets/resume.pdf` with your actual resume PDF.
2. Replace the `#` LinkedIn links with your real LinkedIn profile.
3. Replace project GitHub and Live Demo `#` links with your real URLs.
4. Replace the GitHub contribution placeholder with a live widget/API if desired.
5. If you want server-side contact form handling, connect the form to your backend/email service.

## Contact

Email: shitankur9@gmail.com
Phone: +91 7477524598
GitHub: https://github.com/shitankur9-starsvg
HackerRank: https://www.hackerrank.com/profile/shitankur9
Location: West Medinipur, West Bengal


## Project showcase cards

The Projects section is now rendered from `projects.js`, so you can add or update cards without editing the HTML layout.

1. Open `projects.js`.
2. Add another object to the `portfolioProjects` array (copy an existing object).
3. Put your screenshot/preview image in `assets/projects/` and set its relative path in the object's `image` field.
4. Update `title`, `description`, `status`, `tags`, `github`, and `demo`.
5. Use an empty string (`""`) for a link you do not have yet; that link button will not appear.

The included SVG files are sample preview illustrations, not captured screenshots of the actual deployed projects. Replace them with real screenshots for the best result. Keep image paths relative, for example `assets/projects/my-app.png`.

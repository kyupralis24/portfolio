# Coding Projects Directory

This directory contains individual HTML pages for coding projects showcased on the main portfolio website.

## Structure

```
coding-projects/
├── README.md           # This file
├── template.html       # Template for new project pages
└── [project-name].html # Individual project pages
```

## Adding a New Project

1. **Create the project page**: Copy `template.html` and rename it to `[project-name].html`
2. **Update the content**: Modify the following sections:
   - Title and meta tags
   - Project header (name, type, icons)
   - Project metadata (date, duration, category)
   - Project overview and description
   - Key features
   - Technical implementation details
   - Challenges and solutions
   - Project links (demo, GitHub, etc.)

3. **Add to main page**: Update the coding projects section in `../index.html` to include the new project card

## Template Sections

### Header Section
- Project name and type
- Relevant icons (code, development, deployment, GitHub)
- Terminal-style header with file name

### Content Sections
- **Project Overview**: Brief description and purpose
- **Key Features**: List of main functionalities
- **Technical Implementation**: Architecture and technical details
- **Challenges & Solutions**: Problems faced and solutions
- **Project Links**: Live demo, GitHub repository, etc.

### Styling
The template includes:
- **Terminal-style design** with green color scheme (#00ff00)
- Responsive design with dark theme aesthetics
- Code snippet styling with terminal window appearance
- Project-specific icons with hover effects
- Terminal-style buttons and interactive elements
- Monospace fonts for code elements
- Professional developer-focused appearance

## Example Project Structure

```html
<!-- Project Header -->
<h1>E-Commerce Platform</h1>
<p class="tagline">Full-Stack Web Application</p>

<!-- Project Meta -->
<div class="meta-item">
    <i class="fas fa-calendar"></i>
    <span>January 2024</span>
</div>

<!-- Tech Stack -->
<div class="tech-tags">
    <span class="tech-tag">React</span>
    <span class="tech-tag">Node.js</span>
    <span class="tech-tag">MongoDB</span>
</div>
```

## Best Practices

1. **Use descriptive project names** in kebab-case for file names
2. **Include relevant screenshots** in the `../assets/projects/` directory
3. **Add proper meta descriptions** for SEO
4. **Include code snippets** for technical sections
5. **Provide live demo links** when available
6. **Link to GitHub repositories** for open-source projects

## Navigation

Each project page includes navigation back to:
- Main portfolio page
- Coding projects section
- Other project pages

The template automatically handles responsive design and theme switching. 
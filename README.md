# Responsive Personal Portfolio Website

## Project Description
A responsive personal portfolio website showcasing skills, projects, and contact information. Built with HTML5, CSS3, and responsive design principles, this portfolio demonstrates modern web development best practices including semantic markup, accessibility, and mobile-first design.

## Project Objectives
- Build a professional, responsive portfolio that works seamlessly across all devices
- Demonstrate mastery of HTML5 semantic elements and structure
- Implement responsive CSS layouts using Grid and Flexbox
- Create an accessible navigation system with keyboard support
- Showcase JavaScript interactivity for enhanced user experience
- Practice version control with Git

## Features
- **Responsive Navigation** - Hamburger menu for mobile devices with keyboard accessibility
- **Semantic HTML5 Structure** - Uses proper landmark elements (header, nav, main, section, footer)
- **Modern Layouts** - CSS Grid and Flexbox for adaptive, responsive content
- **External CSS Organization** - Variables, base styles, and responsive breakpoints in separate files
- **Accessible Contact Form** - Form validation, proper labels, focus states, and ARIA attributes
- **Mobile-First Design** - Optimized for all screen sizes with strategic media queries
- **Smooth Interactions** - Hover effects, transitions, and scroll behavior
- **Professional Styling** - Color system with CSS variables for consistency

## Technologies Used
- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Layout techniques (Grid, Flexbox), variables, animations, and responsive design
- **JavaScript** - Mobile navigation toggle and form interaction
- **Git** - Version control for project tracking

## Setup and Installation Instructions

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- VS Code or any text editor
- (Optional) VS Code Live Server extension for local development

### Installation Steps
1. **Clone/Download the Repository**
   ```bash
   cd week1-portfolio
   ```

2. **Open in Browser**
   - **Option A (Direct):** Double-click `index.html` to open in your default browser
   - **Option B (VS Code Live Server):** 
     - Install the Live Server extension
     - Right-click `index.html` and select "Open with Live Server"
     - This will auto-refresh on file changes

3. **Development Workflow**
   - Edit HTML, CSS, or JavaScript files
   - Save changes (Live Server auto-refreshes, or manually refresh browser)
   - Test responsiveness by resizing browser window or using DevTools mobile view

## Code Structure and Explanation

### File Organization
```
week1-portfolio/
├── index.html                    # Main HTML file with semantic structure
├── css/
│   ├── variables.css             # CSS variables and base styles
│   ├── style.css                 # Component and section styles
│   ├── responsive.css            # Media queries for responsive breakpoints
├── js/
│   └── navigation.js             # Mobile menu toggle functionality
├── images/                       # SVG illustrations and project images
│   ├── profile.svg               # Profile illustration
│   ├── project1.svg, project2.svg, project3.svg  # Project thumbnails
│   └── icons/                    # Icon assets
└── README.md                     # Project documentation
```

### HTML5 Semantic Structure (index.html)
```html
<header>              <!-- Page header with branding -->
  <nav>              <!-- Main navigation menu -->
    <!-- Navigation items -->
  </nav>
</header>

<main>
  <section id="home">    <!-- Hero/welcome section -->
  <section id="about">   <!-- About me section -->
  <section id="skills">  <!-- Skills showcase -->
  <section id="projects"><!-- Projects portfolio -->
  <section id="contact"> <!-- Contact form section -->
</main>

<footer>               <!-- Footer with copyright and social links -->
```

**Semantic Elements Used:**
- `<header>` - Contains branding and navigation
- `<nav>` - Accessible navigation with ARIA labels
- `<main>` - Primary content area
- `<section>` - Distinct content sections
- `<article>` - Self-contained skill and project cards
- `<footer>` - Page footer with metadata

### CSS Architecture

**variables.css** - Design system foundation
- Color palette (primary, accent, muted, borders)
- Typography settings
- Spacing and sizing constants
- Shadow definitions
- Border radius values

**style.css** - Component styling
- Navigation bar with sticky positioning
- Hero section with grid layout
- Section headers with responsive typography (using `clamp()`)
- Skill cards with hover effects
- Project grid with image aspect ratios
- Contact form with focus states and validation styling
- Button interactions with transforms
- Footer styling with social links

**responsive.css** - Breakpoint-based adjustments
- **Mobile (max-width: 720px)**
  - Single-column layouts
  - Hamburger navigation menu
  - Centered hero content
  - Full-width forms

- **Tablet (720px - 850px)**
  - 2-column project grid
  - Adjusted navigation padding

- **Desktop (min-width: 850px)**
  - Multi-column layouts (2-3 columns)
  - Side-by-side hero content
  - Full navigation display

### JavaScript Functionality (navigation.js)

The navigation module provides:
- **Mobile Menu Toggle** - Shows/hides nav menu on button click
- **ARIA Attributes** - Manages `aria-expanded` state for accessibility
- **Keyboard Support** - Works with keyboard navigation
- **Click-to-Close** - Menu closes when navigation link is clicked
- **Accessibility** - Screen reader friendly implementation

## How Technical Requirements Are Met

### ✅ HTML5 Semantic Elements
- Uses proper landmark elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Descriptive heading hierarchy (h1, h2, h3)
- Proper form structure with `<label>` elements
- Alt text on all images for accessibility

### ✅ External CSS File Organization
- Three CSS files organized by concern: variables, components, responsiveness
- CSS variables (`--primary`, `--text`, etc.) for design consistency
- Modular styles easy to maintain and update

### ✅ Responsive Design with Media Queries
- Mobile-first approach (base styles for mobile)
- Two main breakpoints: 720px (tablet) and 850px (desktop)
- Flexible layouts using `grid-template-columns` at breakpoints
- Responsive typography with `clamp()` function

### ✅ Accessible Navigation
- Hamburger menu button with `aria-label` and `aria-controls`
- Keyboard-accessible links (focus states with `:focus-visible`)
- ARIA attributes for screen readers
- Semantic `<nav>` with `aria-label="Main navigation"`

### ✅ Contact Form with Validation
- HTML5 form validation (required, email type)
- Visible labels for accessibility
- Focus states for keyboard navigation
- Visual feedback on input focus (outline and border color change)
- Accessible textarea and submit button

### ✅ CSS Grid and Flexbox Layouts
- **Flexbox** - Navigation, hero content alignment, social links
- **CSS Grid** - Hero section, about grid, skills grid, projects grid
- `gap` property for consistent spacing
- `minmax()` for flexible column sizing at breakpoints

### ✅ Hover Effects and Animations
- Navigation link color change on hover
- Button scale transform on hover with smooth transition
- Form input focus state with outline highlight
- Smooth scroll behavior on page
- Card hover effects with transitions

### ✅ Mobile Hamburger Menu
- Hidden on desktop, visible on mobile
- Animated hamburger icon with pseudo-elements
- Dropdown menu with smooth fade and slide transitions
- Closes automatically when link is clicked
- Fully keyboard accessible

## Accessibility Features
- Semantic HTML for screen readers
- ARIA labels and attributes
- Keyboard-friendly navigation (Tab key)
- Color contrast meets WCAG standards
- Focus indicators on interactive elements
- Proper form labels associated with inputs
- Alt text on all images

## Browser Compatibility
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements
- Backend integration for contact form submission
- Additional project showcase with filtering
- Dark mode toggle
- Smooth scroll animations
- Blog section for articles
- Download resume feature

## Notes
- The contact form uses HTML5 validation. For production, connect to a backend service (Formspree, Netlify Forms, etc.)
- Navigation menu is fully accessible and keyboard-friendly
- All CSS variables can be easily updated to change the color scheme
- Images are using SVG format for scalability and performance

## Git Workflow
```bash
# Initialize repository
git init

# Add files
git add .

# Create initial commit
git commit -m "Initial portfolio setup"

# Push to remote (if applicable)
git push origin main
```

## Author
Sujata Shinde - Portfolio Website (Week 1 Project)

# ☕ Bliss - Coffee Shop Website

Welcome to **Bliss**, a modern, responsive coffee shop website featuring a stunning design with smooth animations, dark mode support, and mobile navigation. This project is a front-end only implementation showcasing HTML5, CSS3, and Vanilla JavaScript.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features Implemented](#features-implemented)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [File Descriptions](#file-descriptions)
- [Features in Detail](#features-in-detail)
- [Upcoming Features](#upcoming-features)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Git Commit History](#git-commit-history)

---

## 🎯 Project Overview

**Bliss** is a fully responsive coffee shop website designed to showcase a café's menu, about section, and contact information. The site features modern UX/UI design with interactive elements, smooth transitions, and an adaptive dark mode for enhanced user experience across all devices.

### Key Highlights:
- ✨ **Smooth Scrolling**: Page navigation with smooth scroll behavior
- 🌓 **Dark Mode**: Toggle between light and dark themes with persistent storage
- 📱 **Mobile Responsive**: Fully responsive design with mobile navigation
- 🎨 **Modern Design**: Beautiful color schemes and gradient backgrounds
- ⚡ **Smooth Animations**: Transitions and hover effects throughout
- ♿ **Accessible**: Semantic HTML and keyboard navigation support

---

## ✅ Features Implemented

### 1. **Fixed Navigation Header**
- Logo with branding (Bliss Café)
- Navigation menu with smooth active state transitions
- Dark mode toggle button
- Mobile hamburger menu button
- Sticky positioning for constant visibility

### 2. **Smooth Scroll Behavior**
- Added `scroll-behavior: smooth;` to HTML element
- All anchor links navigate smoothly to their target sections
- Applies across all browsers

### 3. **Dark Mode Toggle**
- Moon icon in light mode, sun icon in dark mode
- Color scheme automatically adapts:
  - **Light Mode**: Warm coffee colors (#ffeac5, #6c4e31)
  - **Dark Mode**: Dark professional colors (#2a2a2a, #e0e0e0)
- User preference saved to localStorage
- Persists across page reloads
- Smooth 0.3s transition for all color changes

### 4. **Navbar Active Link Highlighting**
- Active link gets highlighted with background color and text color change
- Active state updates dynamically when clicking navigation links
- Smooth 0.3s transition effect on active class changes
- All links use CSS transitions for polished UX

### 5. **Scroll-to-Top Button**
- Fixed button in bottom-right corner
- Appears when user scrolls down 240px
- Smooth scroll animation when clicked
- Icon uses Font Awesome arrow-up

### 6. **Responsive Design**
- Mobile-first approach
- Flexible grid layouts using Flexbox
- Hamburger menu for mobile navigation with slide-in animation
- Mobile menu closes on link click or close button
- Responsive behavior on window resize
- Hamburger icon auto-hides on larger screens
- Adapts to all screen sizes

### 7. **Menu Section**
- 4 coffee menu items (Espresso, Cappuccino, Latte, Tea)
- Card-based design with hover effects
- Background images with dark overlay
- Price display for each item

### 8. **About Section**
- Information about the coffee shop
- Featured coffee cup image
- Semi-transparent background styling

### 9. **Contact Section**
- Contact form with inputs for name, email, and message
- Contact information cards (email, address, hours)
- Responsive layout

### 10. **Footer**
- Copyright information
- Box shadow for depth
- Matches overall color scheme

---

## 📁 Project Structure

```
First Project/
│
├── index.html                 # Main HTML file
├── css/
│   └── styles.css            # Main stylesheet with dark mode support
├── js/
│   └── script.js             # JavaScript for interactivity
├── img/
│   ├── coffeeshop-bg.jpg     # Hero background image
│   ├── coffee.png            # About section coffee cup
│   └── menu/
│       ├── Espresso.png      # Menu item images
│       ├── Cappuccino.png
│       ├── Latte.png
│       └── Tea.png
├── README.md                 # This file
└── .git/                     # Git repository
```

---

## 🛠 Technologies Used

### Frontend Stack:
- **HTML5**: Semantic markup
- **CSS3**: 
  - CSS Grid & Flexbox
  - CSS Variables (Custom Properties)
  - CSS Transitions & Animations
  - Linear Gradients
- **JavaScript (Vanilla)**:
  - DOM Manipulation
  - Event Listeners
  - localStorage API
  - ES6+ Features

### Libraries & Resources:
- **Font Awesome 7.0.1**: Icon library (moon, sun, bars, arrow-up)
- **Google Fonts**: Poppins font family

### Design Approach:
- Mobile-first responsive design
- CSS Variables for theme switching
- Progressive enhancement
- No dependencies on frameworks

---

## 📄 File Descriptions

### `index.html`
Contains the complete HTML structure:
- **Header**: Logo, navigation links, dark mode toggle, mobile menu button
- **Main Section**: Hero area with tagline and call-to-action button
- **Menu Section**: 4 coffee products with card layout
- **About Section**: Café description and image
- **Contact Section**: Contact form and information cards
- **Footer**: Copyright notice
- **Scripts**: Linked to script.js

### `css/styles.css`
Master stylesheet with 462+ lines of CSS:
- **Root Colors**: 4 main color variables (primary, secondary, background, text)
- **Dark Mode Styles**: Alternative color variables in `body.dark-mode`
- **Component Styles**: Header, navigation, cards, form, footer
- **Transitions**: 0.3s ease-in-out on interactive elements
- **Hover Effects**: Scale transforms and color changes
- **Responsive Layout**: Flexbox for flexible layouts

### `js/script.js`
JavaScript functionality (110+ lines):
- **Dark Mode Toggle**:
  - Detects saved preference from localStorage
  - Toggles `dark-mode` class on body
  - Updates icon from moon to sun
  - Saves preference for persistence
  
- **Navbar Link Toggle**:
  - Removes `active` class from all links
  - Adds `active` class to clicked link
  - Smooth transitions for state changes
  - Works for both desktop and mobile navigation
  
- **Scroll-to-Top Button**:
  - Shows/hides based on scroll position (240px threshold)
  - Smooth scroll back to top

- **Mobile Navigation**:
  - Opens mobile menu with hamburger icon
  - Closes menu with close button or link click
  - Hides hamburger icon when menu is open
  - Shows hamburger icon when menu is closed (on small screens)
  
- **Responsive Behavior**:
  - Window resize event listener
  - Auto-hides hamburger icon on larger screens (>= 700px)
  - Closes mobile menu on screen resize to desktop view
  - Shows hamburger only on mobile screens when menu is closed

---

## 🎨 Features in Detail

### Dark Mode Implementation
```javascript
// Color scheme changes with dark mode
Light Mode:
- Primary: #6c4e31 (Brown)
- Secondary: #ffeac5 (Light Cream)
- Background: #603f26 (Dark Brown)
- Text: #ffdbb5 (Cream)

Dark Mode:
- Primary: #ffeac5 (Light Cream)
- Secondary: #6c4e31 (Brown)
- Background: #ffdbb5 (Cream)
- Text: #603f26 (Dark Brown)
```

### Navigation Active State
- Smooth 0.3s transition on all link properties
- Background color fade-in when active
- Text color change for contrast
- Hover effects with scale(1.1) transform

### Color Accessibility
- High contrast ratios for readability
- Hover states clearly visible
- Active states distinctly different from default

---

## 🚀 Upcoming Features

### Form Functionality (Priority 1)
- [ ] Form validation (name, email format, message length)
- [ ] Loading state for submit button
- [ ] Success/error messages
- [ ] Form reset after submission

### Additional Features (Priority 2)
- [ ] Image lazy loading
- [ ] Search functionality for menu
- [ ] Product filtering by category

---

## 📥 Installation & Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)
- Git (optional, for version control)

### Steps
1. **Clone or download the repository**
   ```bash
   git clone https://github.com/Mohamed-XD23/Bliss-Coffee-Shop.git
   cd "First Project"
   ```

2. **Open in browser**
   - Double-click `index.html` or
   - Use Live Server extension in VS Code:
     - Right-click `index.html` → "Open with Live Server"

3. **No build process needed** - This is pure HTML, CSS, and JavaScript!

---

## 💻 Usage

### Dark Mode Toggle
1. Click the moon icon (🌙) in the top-right corner
2. Icon changes to sun (☀️) and page enters dark mode
3. Your preference is saved automatically
4. Refresh the page - your theme choice persists

### Navigation
1. Click any navigation link (Home, Menu, About, Contact)
2. Page smoothly scrolls to that section
3. Active link is highlighted with background color
4. Smooth transition effect (0.3s)

### Scroll to Top
1. Scroll down the page past 240 pixels
2. Arrow button appears in bottom-right corner
3. Click to smoothly scroll back to top

### Mobile Menu
1. On mobile devices (screen width < 700px), click hamburger icon (☰)
2. Menu slides in from the right side
3. Click any menu item to navigate - menu closes automatically
4. Click the close icon (→) to close menu without navigating
5. Hamburger icon automatically hides when menu is open
6. When resizing to desktop view, menu and hamburger automatically adjust

---

## 🎯 Next Steps

### Immediate (This Week)
1. ✅ Complete dark mode implementation
2. ✅ Add navbar active link transitions
3. ✅ **Mobile menu toggle functionality completed**
4. ✅ Fix mobile navigation bugs (arrow function `this` binding)
5. ✅ Add responsive window resize handling
6. 🔄 **Implement form validation** (NEXT)

### Short-term (This Month)
- Add more animations and micro-interactions
- Improve mobile responsiveness
- Create product search functionality

---

## 👨‍💻 Author

**Mohamed-XD23**
- Repository: [Bliss-Coffee-Shop](https://github.com/Mohamed-XD23/Bliss-Coffee-Shop)
- Project Type: Front-end Only
- Status: 🚧 Active Development

---

## 📝 License

This project is open source and available for personal and educational use.

---

## 🤝 Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Support

For issues, suggestions, or questions:
1. Check existing issues on GitHub
2. Create a new issue with clear description
3. Include screenshots or code examples

---

## 🎉 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Coffee shop inspiration
- Community feedback and support

---

**Last Updated**: November 13, 2025
**Status**: Active Development - Form Validation Feature Next

# Gushwork Web Developer Assignment

## 📌 Project Overview
This repository contains my submission for the Gushwork Web Developer role assignment. It is a fully responsive, interactive web application built entirely with **vanilla HTML, CSS, and JavaScript**, adhering strictly to the provided design specifications while adding several advanced UI/UX enhancements.

## 🚀 Features Implemented

### 1. Dynamic Product Rendering & Cart State (Bonus Feature)
* **Data-Driven UI:** Implemented a JavaScript data array to act as a mock database, allowing users to dynamically swap between 8 different products.
* **Interactive Shopping Cart:** Built a custom, slide-out shopping cart sidebar that manages state (adding items, calculating totals, updating UI badges) without page reloads.

### 2. Sticky Header Functionality
* Implemented a header that remains hidden on load but smoothly slides down once the user scrolls past the "first fold" (hero section).
* Uses vanilla JavaScript (`window.scrollY`) to monitor scroll position and CSS transitions for a smooth reveal/hide effect.

### 3. Interactive Image Carousel
* Built a custom image carousel allowing users to click scrollable thumbnails to update the main product display, title, description, and price dynamically.
* Active states are clearly indicated with CSS borders and opacity transitions.

### 4. Precision Hover Zoom
* Created a custom image zoom effect without external libraries. 
* Uses JavaScript to calculate exact mouse coordinates (`clientX`, `clientY`) relative to the image bounding box, translating them into percentages to adjust the `background-position` of an absolutely positioned zoom-preview div.

### 5. Responsive & Modern Design
* Utilized CSS Grid and Flexbox to ensure a fluid layout across desktop, tablet, and mobile devices.
* Employed modern CSS practices including CSS Variables (`:root`) for a consistent color theme, cubic-bezier animations for social icons, and custom scrollbars.

## 🛠️ Tech Stack
* **HTML5:** Semantic structure and accessibility (ARIA labels).
* **CSS3:** Custom styling, Flexbox/Grid layouts, and smooth transitions.
* **JavaScript (ES6):** DOM manipulation, event handling, coordinate math, and state management.
* *Zero external frameworks or libraries were used.*

## ⚙️ How to Run
Simply clone the repository and open `index.html` in any modern web browser. No build steps, dependencies, or local servers are required.

---
*Submitted by Pavan*

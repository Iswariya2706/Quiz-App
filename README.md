# 🌟Lumina Quiz Application

A pixel-perfect, interactive quiz interface built for the Frontend Developer Intern Assignment.
This project faithfully translates the assigned Figma desktop design into a functional React application with smooth animations, accessibility compliance, and a refined user experience.

---

## 🔗 Live Demo & Repository

**Live Demo**: https://quiz-app-bice-sigma.vercel.app/

---

## 📋 Overview

- Lumina Quiz is a high-fidelity UI implementation featuring glassmorphism, segmented progress tracking, animated transitions, and desktop-optimized layouts.
- The goal of this assignment was to deliver a pixel-accurate, interactive, and accessible interface fully aligned with the provided Figma design.

---

## 🛠️ Tech Stack

### **Core Technologies**
- **React 19** (Functional Components, Hooks)
- **TypeScript** (Strict typing, reliability)
- **Tailwind CSS** (Utility-first styling, custom theme)

### **Enhancements**
- **Framer Motion** — Transitions, slide animations, micro-interactions  
- **Lucide React** — Modern, lightweight icon set  
- **Google Fonts** — Playfair Display, Inter, DM Serif Display, Kalam  

---

## 🚀 Setup Instructions

To run this project locally:

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd lumina-quiz
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the Development Server**
    ```bash
    npm start
    # or
    npm run dev
    ```

4.  **Build for Production**
    ```bash
    npm run build
    ```
---

## ✨ Key Features Implemented

### 1. High-Fidelity Design Implementation
*   **Glassmorphism**: Implemented complex CSS backdrops, gradients, and border transparencies to match the Figma "glass" aesthetic.
*   **Typography**: Precise font weights, sizes, and line heights using specific font families (`Playfair Display` for headers, `Inter` for UI text).
*   **Custom Assets**: Integrated specific assets (Paw GIF, Sticker Bubbles) with absolute positioning to match the artistic direction.

### 2. Interactive UI Components
*   **Question Navigation**: Smooth slide transitions between questions using `Framer Motion`.
*   **Option Selection**: Interactive hover and active states with specific gradient borders and shadows.
*   **Segmented Progress Bar**: A 4-step segmented progress indicator that visually tracks the user's journey.
*   **Result Screen**: Features a rolling number counter animation that counts up to the final score percentage.

### 3. Responsive Layout
*   **Laptop Optimization**: Specifically tuned for 1366x768 and 1920x1080 screens to ensure all content fits vertically without scrolling, while maintaining accessibility on smaller devices via scrollable content areas.
*   **Flexbox Architecture**: Uses a strict vertical flex layout to prevent overlap between navigation buttons and quiz options.

---

## ⚙️ Accessibility (WCAG 2.1 Compliant)

- Semantic HTML5 structure  
- Logical tab order & keyboard navigation  
- `aria-selected` for option cards  
- Alt text for all graphics  
- Verified color contrast  
- Descriptive labels for all interactive components  

---

# ⏱️ Time Spent

**Total Time: ~4 hours**

| Task | Time |
|------|------|
| Project Setup & Tailwind Config | 1 hr |
| Component & Screen Development | 2 hrs |
| Pixel-perfect Styling | 0.5 hr |
| Animations & UI Polishing | 0.5 hr |
---


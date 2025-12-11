# Lumina Quiz Application

A pixel-perfect, interactive quiz interface developed as a Frontend Developer Intern assignment. This application features a high-fidelity glassmorphism design, smooth animations, and a responsive layout optimized for laptop and desktop screens.

## 📋 Overview

This project translates a specific Figma prototype into a functional web application. It focuses on visual accuracy, interactive feedback, and a polished user experience.

### 🛠️ Tech Stack

- **Core Framework**: React 19 (Functional Components with Hooks)
- **Language**: TypeScript (Strict typing for robustness)
- **Styling**: Tailwind CSS (Utility-first styling with custom config)
- **Animations**: Framer Motion (Complex transitions, entry/exit effects, spring physics)
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Inter, DM Serif Display, Kalam)

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

## 🧠 Assumptions & Decisions

*   **Screen Focus**: The assignment requested a desktop/laptop focus. While the app is responsive, the "Mascot" (Paw GIF) is intentionally hidden on smaller tablet/mobile screens to preserve reading space and layout integrity.
*   **Asset Hosting**: External assets (GIFs/Images) are loaded via direct URLs. In a production environment, these would be optimized and hosted locally or on a dedicated CDN.
*   **State Management**: Given the small scope (4 questions), local React State was used instead of Redux or Context API to keep the architecture clean and performant.

## ⏱️ Time Spent

**Total Time: ~6 Hours**

*   **Architecture & Setup (1 hr)**: Setting up Typescript interfaces, Tailwind configuration (colors, fonts), and basic routing logic.
*   **Component Implementation (2.5 hrs)**: Building the core screens (Question, Result) and reusable components (Buttons, Cards).
*   **Styling & Pixel Perfection (1.5 hrs)**: Fine-tuning gradients, shadows, border radii, and specific positioning to match the provided screenshots exactly.
*   **Animations & Polish (1 hr)**: Implementing the slide transitions, rolling counter, and floating mascot effects.

---


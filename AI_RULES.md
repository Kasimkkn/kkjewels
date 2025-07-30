# AI Development Rules for KkJewels Application

This document outlines the technical stack and guidelines for developing the KkJewels application.

## Tech Stack Overview

*   **Frontend Framework**: React.js for building interactive user interfaces.
*   **Build Tool**: Vite for a fast development experience and optimized builds.
*   **Language**: JavaScript with JSX for component development.
*   **Styling**: Tailwind CSS for utility-first CSS styling, enabling rapid and consistent UI development.
*   **Smooth Scrolling**: Lenis for smooth and performant scroll animations.
*   **Icons**: React Icons for a wide range of customizable vector icons.
*   **Animations**: GSAP (GreenSock Animation Platform) for powerful and high-performance animations.
*   **Package Manager**: npm for managing project dependencies.

## Library Usage Guidelines

To maintain consistency and efficiency, please adhere to the following guidelines when implementing new features or modifying existing ones:

*   **Styling**: Always use **Tailwind CSS** for all styling needs. Avoid writing custom CSS unless absolutely necessary for very specific, complex cases not covered by Tailwind.
*   **Icons**: Utilize **React Icons** for all icon requirements.
*   **Smooth Scrolling**: For any smooth scrolling effects, use the **Lenis** library.
*   **Animations**: For complex or high-performance animations, leverage **GSAP**. For simpler animations, plain CSS transitions/animations with Tailwind classes are acceptable.
*   **UI Components**: Prefer using **shadcn/ui** components where applicable for pre-built, accessible, and customizable UI elements. These are built on **Radix UI** primitives. If a specific component is not available or needs significant customization, create a new component following the project's component structure.
*   **Routing**: If routing is required, use **React Router** to manage navigation within the application.
*   **State Management**: For component-level or simple global state, use React's built-in `useState` and `useContext` hooks. Avoid external state management libraries unless the application's complexity explicitly demands it.
*   **Component Structure**: Create a new file for every new component or hook, no matter how small. Components should be focused and ideally less than 100 lines of code.
*   **Responsiveness**: All designs must be responsive and adapt well to different screen sizes using Tailwind's responsive utilities.
# **Algorithm Visualizer**

## **Problem Statement**
Understanding algorithms can be challenging, especially for visual learners. Traditional methods, such as reading code or static diagrams, often fail to convey the dynamic nature of these processes. This project solves that problem by providing an intuitive, visual tool for learning algorithms in an engaging and interactive way.

---

## **Solution**
The Algorithm Visualizer provides an interactive platform where users can:

- Select and visualize different sorting algorithms (e.g., Bubble Sort, QuickSort).
- See animations of data being processed step-by-step.
- Compare algorithm performance visually, with metrics like time complexity highlighted.
- (Optional) View pseudocode alongside visualizations for deeper understanding.

---

## **Technologies**
### **Frontend**:
- **React**: For building dynamic and interactive components.
- **CSS**: For styling and animations to enhance the visual appeal.
- **HTML**: For structuring the web pages and implementing a responsive layout.

---

## **Project Architecture Overview**
The Algorithm Visualizer follows a modular architecture to ensure scalability and maintainability:

1. **Frontend**:
   - Built using React, structured into reusable components (e.g., SortingVisualizer, ControlPanel).
   - CSS handles animations for dynamic visualizations.
   - React's state management facilitates smooth transitions and updates during the animations.

2. **Deployment**:
   - The app is containerized using Docker for consistency across environments.
   - Static assets generated with `npm run build` are hosted via GitHub Pages for live access.

---

## **Setup Instructions**
**Navigating the Interface**:

   - Select an algorithm from the menu (e.g., Bubble Sort, QuickSort).
   - Customize the input size and speed of the visualization using the control panel.

**Running Visualizations**:
   - Press the "Start" button to begin the visualization.
   - Pause or reset as needed to study specific parts of the algorithm in detail.

** Comparing Algorithms(To Be Implemented)**:
   - Run multiple algorithms to observe their performance side-by-side.

** Learning with Pseudocode (Optional)**:
   - View the pseudocode alongside the visualization for a deeper understanding.

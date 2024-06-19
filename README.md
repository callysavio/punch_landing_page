# Project Overview

This project implements a comprehensive landing page using React.js, showcasing proficiency in front-end development technologies and techniques such as Redux and the `useState` hook for state management, the `useEffect` hook for side effects and components behavior control, the `react-router-dom` library for routing and navigation through pages, and CSS Modules for scoped styling. The project is organized into various components and folders to maintain modularity and scalability.

## Project Structure

The project structure is organized as follows:

```plaintext
src/
  assets/
    images/: Contains SVG and other image assets used throughout the application.
  components/
    Courses.jsx: Component for displaying categorized courses using Redux state management.
    Faq.jsx: Component for the frequently asked questions section.
    Footer.jsx: Component representing the footer section of the landing page.
    Header.jsx: Component containing the header navigation of the landing page.
    HeroSection.jsx: Component showcasing the hero section with key messages.
    HowItWorked.jsx: Component illustrating how the platform works.
    Journey.jsx: Component guiding users on how to start their journey.
    MessageBox.jsx: Component rendered in the WhyChoose.jsx component.
    RecruitmentSteps.jsx: Component detailing the steps in the recruitment process dynamically.
    Talents.jsx: Component highlighting the talents section.
    WhyChoose.jsx: Component explaining why to choose the platform.
  pages/
    LandingPage.jsx: Main landing page component integrating all sections and components.
    AboutUs.jsx: Component for the About Us page as seen in the header’s navigation bar.
    Articles.jsx: Component for the Articles page as seen in the header’s navigation bar.
    ContactUs.jsx: Component for the Contact Us page as seen in the header’s navigation bar.
    FindTalent.jsx: Component for the Find Talents page as seen in the header’s navigation bar.
    FindWork.jsx: Component for the Find Work page as seen in the header’s navigation bar.
    JoinNow.jsx: Component for the Sign Up page as seen in the header’s navigation bar.
    Login.jsx: Component for the Login page as seen in the header’s navigation bar.
  redux/
    store.js: Redux store configuration file.
    actions/
      coursesActions.js: Actions and action creators related to courses state management.
      stepsActions.js: Actions and action creators for managing recruitment steps data.
    reducers/
      coursesReducer.js: Reducer function handling state changes for courses.
      stepsReducer.js: Reducer function managing state updates for recruitment steps.
      index.js: Root reducer combining all reducers.
  styles/
    Courses.module.css: CSS module file for styling the Courses component.
    Faq.module.css: CSS module file for styling the FAQ component.
    Footer.module.css: CSS module file for styling the Footer component.
    Header.module.css: CSS module file for styling the Header component.
    HeroSection.module.css: CSS module file for styling the HeroSection component.
    Recruitment.module.css: CSS module file for styling the RecruitmentSteps component.
    StartJourney.module.css: CSS module file for styling the StartJourney component.
    Talents.module.css: CSS module file for styling the Talents component.
    WhyChoose.module.css: CSS module file for styling the WhyChoose component.
    Worked.module.css: CSS module file for styling the HowItWorked component.
```

## Technology Stack

- **React.js**: Front-end library for building user interfaces.
- **Redux**: Redux library for efficient state management.
- **React-router-dom**: React library for routing and navigating through dummy pages from the header’s navigation bar.
- **CSS Modules**: CSS file format where all class and animation names are scoped locally by default.
- **Hooks**: `useState` and `useEffect` for local state management and control of components behavior and side effects, used to display the various cards showing why users should choose Zwilt. I utilized them in creating both an automatic and manual slider on the previous and next icons click.

## Implementation Details

### `useState` Hook and Conditional Rendering in the Header Component

In the header component, I ensured the navigation bar and logo are well aligned. On mobile, I utilized the `useState` hook and conditional rendering techniques for hiding and displaying the menu bar.

### Redux Library for State Management in the Courses Component

The Courses component leverages Redux for managing state related to course categories and listings. It dynamically renders courses based on the selected category and ensures responsive design across various screen sizes using CSS Modules for encapsulated styling.

### Redux Library for State Management in the Recruitment Steps Component

The Recruitment Steps component manages dynamic data for each step of the recruitment process using Redux state management. It allows users to interactively view details of each step by clicking on them, updating the UI dynamically with CSS Modules for consistent styling. Each step shows a unique and dynamic text coming from the Redux reducer.

### `useState`, `useEffect` and Automated/Manual Sliding Technique/Carousel in the Why Choose Zwilt Component

I also implemented an automatic and manual slider effect in the Why Choose Zwilt component/section. This allows users to navigate through the various sections of why they should choose Zwilt and it displays the various cards as seen on the Figma design. I utilized `useState` and `useEffect` hooks and event handling functions and techniques to achieve this.

### Routing Using the `react-router-dom` Library

For routing in my React application, I utilized the `react-router-dom` library to manage navigation and create a seamless user experience. This allowed me to implement dynamic and nested routes efficiently, ensuring easy navigation between different pages.

### Other Components - React CSS Modules, Grid, and Flexbox

In other components that did not require much technicality, and in all components, I utilized vanilla CSS modules to style them. I combined both CSS grid and flexbox models in both the desktop and mobile views to ensure responsiveness across multiple device screens.

### Images

I used the SVG format for my images. This enabled me to change the background color or colors of these images according to the backgrounds they appear on, as seen on the Figma design. This also enabled me to easily change the orientations of these images accordingly.

## Challenges Faced

- **Redux Integration**: Implementing Redux Toolkit required understanding actions, reducers, and selectors to manage complex state logic effectively.
- **Responsive Design**: Ensuring the landing page components were responsive across different devices posed challenges in maintaining consistent UI/UX.
- **CSS Styling**: Managing CSS Modules for component-specific styling helped prevent style leakage and conflicts between different sections.

## Notable Decisions

- **Redux Toolkit**: Though the `useContext` and `useState` hooks could have been sufficient for managing the state due to the less complexity of the landing page, I chose Redux Toolkit for its streamlined API and built-in tools that simplify state management and debugging. This would ensure scalability of the app in cases where improvements are needed and for efficient data storage, retrieval, and management.
- **Component Architecture**: Structured components and pages for modularity, promoting code reuse and scalability.
- **CSS Modules**: Utilized CSS Modules for scoped styling to enhance component encapsulation and maintainability.
- **Hosting**: I utilized Vercel to host the app online.
- **Live URL**: [Punch Landing Page](https://punch-landing-page-six.vercel.app/)

## Getting Started/Running the App

1. Unzip the file and extract the `Punch_Interview` folder.
2. On your VS Code, open the `Punch_Interview` folder.
3. `cd` into the `landing_page` folder.
4. Run `npm start` to run the app locally on your browser.
5. Live URL: [Punch Landing Page](https://punch-landing-page-six.vercel.app/)

## Conclusion

This project allowed me to showcase my skills in front-end architecture, state management, conditional rendering, routing, and responsive design, contributing to a robust understanding of modern web development practices. I am also proficient in concepts such as Containment/Specialized components, Tailwind CSS, etc. It also provided valuable experience in developing a responsive landing page using React.js with Redux for state management and CSS Modules for modular styling.


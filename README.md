# Sifu Project

This is my project about a video game landing page. I built the site using React and TypeScript to create a dynamic and interactive interface. For styling, I used SCSS with BEM methodology, ensuring the code is clean, maintainable, and scalable.

The landing page features two responsive sliders, implemented with Swiper.js, which enhance the user experience with smooth transitions. Animations throughout the site are powered by Animate.css, adding to the overall engagement and visual appeal.

Additionally, I integrated a subscription form that validates user input and sends confirmation emails using PHPMailer. To test the form and site functionality, a local server can be set up via Apache using XAMPP(below are instructions for launching and testing).

Furthermore, I implemented a language switching feature using React Context, allowing users to seamlessly switch between English and Ukrainian translations across the entire site.

## Features

- **Responsive Design:** The website adapts seamlessly to different screen sizes, ensuring an optimal experience on desktops, tablets, and mobile devices.
- **SCSS for Styling:** Utilized SCSS to maintain a modular and scalable CSS structure, allowing for easy maintenance and expansion.
- **BEM Methodology:** Followed BEM (Block, Element, Modifier) methodology to ensure clean, readable, and maintainable code.
- **Transformations and Animations:** Implemented CSS animations and transformations to enhance the user experience with smooth visual effects.
- **Accessibility:** Focused on accessibility best practices to ensure the site is usable for all visitors, including those with disabilities.

## Demo

Check out the live demo of the project: [Sifu Website Demo](https://sifu-project.vercel.app/)

## Technologies Used

- **React**
- **TypeScript**
- **HTML5**
- **SCSS**
- **BEM**
- **Swiper.js**
- **PHPMailer**
- **XAMPP**
- **Animate.css**
- **React Context**
- **ESLint**

## Installation

To run this project locally:

1. Clone the repository
   ```bash

    git clone https://github.com/yaroslav1177/sifu-project.git

2. Navigate to the project directory
   ```bash

    cd sifu-project

3. Install dependencies
   ```bash

    npm install

4. Start the application
   ```bash

    npm start

## How to test backend functionality
(in this project the backend includes files "composer.json", "composer.lock", "sendmail.php" and the folder "vendor")

1. Install XAMPP

2. Clone this project along the way xampp -> htdocs

3. Start Apache local server

4. Open this project in your IDE

5. Install dependencies with npm i

6. Run the project with npm start

7. Fill out the form with your email and press "subscribe"

8. Chech your email

Product Catalog App
A responsive React application for browsing and searching a product catalog. Built with React, React Router, and Vite for fast development and modern web standards.

**Features**

**Product Search:** Search across product names, categories, and specifications

**Category Filtering:** Browse products by category with an "All" option to view everything

**Responsive Design:** Optimized for desktop, tablet, and mobile devices

**Product Cards:** Detailed cards with images, badges, and previews

**Fast Navigation:** Smooth routing between product details and categories

**Tech Stack**

**React:** 19.2.5 - Component-based UI library
**React Router:** 7.14.2 - Client-side routing
**Vite:** Fast build tool and development server
**CSS:** Custom properties for theming, Grid/Flexbox layouts, responsive media queries

**Getting Started**

Prerequisites
Node.js (version 18 or higher)
npm or yarn

**Installation**

    1. Clone the repository:
        git clone https://github.com/Kartavikoya/dynamic-catalog-app.git
        cd catalog-app

    2. Install dependencies:
        npm install

    3. Start the development server:
        npm run dev

    4. Open http://localhost:5173 in your browser.
        Build for Production
        npm run build

The built files will be in the dist directory.

**Project Structure**

src/
├── components/
│   ├── CategorySection.jsx    # Displays products in a category
│   └── ProductCard.jsx        # Individual product card component
├── pages/
│   └── Home.jsx               # Main home page with search and categories
├── data/
│   └── data.json              # Product data in JSON format
├── App.jsx                    # Main app component with routing
├── App.css                    # Component styles
├── index.css                  # Global styles and theme variables
└── main.jsx                   # App entry point

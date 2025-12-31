🍽️ Origin Restaurant

A modern restaurant website built using vanilla JavaScript and Webpack, featuring tab-based navigation and dynamic content rendering without page reloads.

🔗 Live Website:
👉 https://khushicomp.github.io/Restaurant/

✨ Features

Single Page Application (SPA) behavior

Tab navigation: Home / Menu / Contact

Dynamic DOM manipulation using JavaScript

Modular code structure

Webpack bundling for production

Deployed using GitHub Pages

🛠️ Built With

HTML5

CSS3

JavaScript (ES6 Modules)

Webpack

Git & GitHub Pages

📁 Project Structure
Restaurant/
├── src/
│   ├── index.js
│   ├── home.js
│   ├── menu.js
│   ├── contact.js
│   ├── style.css
│   ├── template.html
│   └── images/
│
├── dist/               # Production build (Webpack output)
├── webpack.config.js
├── package.json
└── .gitignore

⚙️ How It Works

Each page (Home, Menu, Contact) is written as a separate JavaScript module

Clicking a navigation button:

Clears the existing content

Loads new content dynamically

Webpack bundles all assets into the dist folder

GitHub Pages serves the final production build

🚀 Run Locally
# Install dependencies
npm install

# Run development server
npx webpack serve

# Build for production
npm run build


Then open:
👉 http://localhost:8080

🌍 Deployment

The project is deployed using GitHub Pages by pushing the Webpack dist folder to a gh-pages branch.

Live URL:
👉 https://khushicomp.github.io/Restaurant/

🧠 What I Learned

Setting up Webpack from scratch

Managing source vs production builds

Using JavaScript modules effectively

Debugging deployment issues

Deploying Webpack projects on GitHub Pages

📌 Future Improvements

Image optimization for faster loading

Improved mobile responsiveness

Animations and transitions

Accessibility improvements

👤 Author

Khushi
Computer Engineering Student
Learning Web Development & JavaScript

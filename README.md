# React-Demo-App

Setup

npm create vite@latest app --template react

cd app

npm install

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init

tailwind.config.js:

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


src/index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;


npm run dev (to run app)
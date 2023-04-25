import Plugins from './tailwind.plugins.js';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: Plugins,
};

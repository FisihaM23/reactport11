# Mulugeta Fisiha - Portfolio Website

A modern, responsive portfolio website built with React.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Contact form with EmailJS integration
- Social media links
- Project showcase
- Skills display

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Configure EmailJS:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service and template
   - Replace the following in `src/components/Contact.js`:
     - `YOUR_SERVICE_ID` with your EmailJS service ID
     - `YOUR_TEMPLATE_ID` with your EmailJS template ID
     - `YOUR_PUBLIC_KEY` with your EmailJS public key

3. Add your images:
   - Place your profile image as `src/assets/muler.jpg`
   - Place your ATM project image as `src/assets/system.jpg`
   - Place your library project image as `src/assets/library.png`

4. Start the development server:
```bash
npm start
```

5. Build for production:
```bash
npm run build
```

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── muler.jpg
│   │   ├── system.jpg
│   │   └── library.png
│   ├── components/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   ├── Home.js
│   │   ├── Navbar.js
│   │   ├── Projects.js
│   │   └── Skills.js
│   ├── App.js
│   ├── index.js
│   └── style.css
├── .gitignore
├── package.json
└── README.md
```

## Customization

- Update personal information in the component files
- Modify colors in `style.css` (currently using purple gradient theme)
- Add more skills in `src/components/Skills.js`
- Add more projects in `src/components/Projects.js`
- Update social media links in `src/components/Contact.js`

## Technologies Used

- React 18
- EmailJS for contact form
- React Toastify for notifications
- Font Awesome for icons
- CSS3 with animations and gradients

## License

This project is open source and available for personal use.

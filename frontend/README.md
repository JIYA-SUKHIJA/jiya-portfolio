# 🚀 Personal Portfolio — Jiya Sukhija

A modern, responsive, and high-performance personal portfolio website built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. Features custom project showcases, interactive routing, and an integrated contact form.

🔗 **Live Demo:** [jiyasukhija.netlify.app](https://jiyasukhija.netlify.app)

---

## 🌟 Key Features

- **⚡ Fast & Modern:** Powered by Vite for instant load times and optimized production builds.
- **🎨 Responsive UI/UX:** Styled using Tailwind CSS for clean layout design across mobile, tablet, and desktop viewports.
- **🗺️ Smooth Client-Side Routing:** Dynamic multi-page navigation for project showcases (`/projects/showx`, `/projects/taskflow`) handled via React Router.
- **📬 Functional Contact Form:** Direct email delivery powered by Web3Forms integration.
- **🛠️ Clean Codebase:** Modular component architecture written with strict TypeScript typing.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 18+
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons & UI:** Lucide React / Tailwind Utilities
- **Form Service:** Web3Forms API
- **Deployment:** Netlify

---

## 📁 Project Structure

```text
jiya-portfolio/
├── frontend/
│   ├── public/
│   │   └── _redirects        # Netlify SPA routing rules
│   ├── src/
│   │   ├── assets/           # Images & static assets
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Page-level components & routes
│   │   ├── App.tsx           # Main application routing & layout
│   │   └── main.tsx          # Application entry point
│   ├── package.json
│   ├── vite.config.ts
│   └── tailwind.config.js
└── README.md
```

---

## 🚀 Getting Started Locally

Follow these steps to run the project locally on your machine:

### 1. Clone the repository
```bash
git clone https://github.com/JIYA-SUKHIJA/jiya-portfolio.git
cd jiya-portfolio/frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the `frontend/` root folder and add your Web3Forms Access Key:
```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

### 4. Start the development server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser to view the application.

---

## 📦 Production Build

To create an optimized production bundle:

```bash
npm run build
```

The output files will be generated in the `frontend/dist` directory.

---

## 🌐 Deployment (Netlify)

This project is configured for seamless deployment on Netlify:
- **Base directory:** `frontend`
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **SPA Rewrite:** Included in `public/_redirects` (`/* /index.html 200`)

---

## 👤 Author

**Jiya Sukhija**
- Portfolio: [jiyasukhija.netlify.app](https://jiyasukhija.netlify.app)
- GitHub: [@JIYA-SUKHIJA](https://github.com/JIYA-SUKHIJA)

---
*Feel free to star ⭐️ this repository if you find it helpful!*
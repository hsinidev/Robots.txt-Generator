# 🤖 Robots.txt Generator Pro

<div align="center">

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/react-19.2.0-61DAFB.svg)
![Tailwind](https://img.shields.io/badge/tailwindcss-3.0-38B2AC.svg)

**A professional-grade, SEO-safe robots.txt configuration tool built for the modern web.**

[🚀 **LIVE DEMO**](https://Robots.doodax.com){:target="_blank"}

</div>

---

## 📖 Overview

**Robots.txt Generator Pro** is a sophisticated single-page application designed to simplify Technical SEO. It allows webmasters, developers, and SEO professionals to craft error-free `robots.txt` files instantly. 

Set against a stunning, animated **nebula galaxy background**, the interface provides a premium user experience while ensuring your file adheres to the strict Robots Exclusion Protocol.

## ✨ Key Features

-   **⚡ Instant Generation**: Real-time parsing and preview of your file.
-   **🎯 Dynamic Directives**: seamless addition/removal of `Allow` and `Disallow` rules.
-   **🤖 User-Agent Targeting**: Support for wildcards (`*`) or specific bots (`Googlebot`, `GPTBot`).
-   **🗺️ Sitemap Integration**: One-click field to validate and include your XML sitemap.
-   **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile workflows.
-   **📥 One-Click Export**: Instant copy-to-clipboard or file download functionality.
-   **📚 Educational Hub**: Includes a comprehensive 3500-word interactive guide on SEO best practices.
-   **🔒 Privacy Focused**: 100% Client-side processing. No data is sent to servers.

## 🛠️ Tech Stack

-   **Core**: React 19 (TypeScript)
-   **Styling**: Tailwind CSS (Utility-first architecture)
-   **Animation**: Native CSS Keyframes & SVG Filters
-   **Build**: ES Modules (Vite-compatible structure)

## 📂 Project Structure

```bash
/
├── components/
│   ├── Layout.tsx           # Global app shell, modals, and footer
│   ├── RobotsGenerator.tsx  # Core business logic & UI for generation
│   └── SeoArticle.tsx       # Content-rich SEO guide with JSON-LD
├── services/
│   └── robotsBuilder.ts     # Pure utility function for string construction
├── public/                  # Static assets
│   ├── favicon.svg          # App Icon
│   ├── robots.txt           # App's own robots file
│   └── sitemap.xml          # App's own sitemap
├── App.tsx                  # Root component
├── index.html               # Entry point with global meta tags
├── index.tsx                # React mounting point
└── types.ts                 # TypeScript interface definitions
```

## 🚀 Getting Started

1.  **Clone the repository**
2.  **Install dependencies** (`npm install`)
3.  **Run development server** (`npm run dev`)

## 💡 Usage Guide

1.  **Set User-Agent**: Define who the rules apply to. Use `*` for all bots.
2.  **Add Rules**: Click "+ Add Directive" to block (`Disallow`) or grant access (`Allow`) to specific paths.
3.  **Link Sitemap**: Paste your sitemap URL to help bots discover content.
4.  **Download**: Click "Generate & Download" to get your production-ready file.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<div align="center">
  <p>Developed with ❤️ by <a href="https://github.com/hsinidev" target="_blank"><strong>HSINI MOHAMED</strong></a></p>
  <p>Part of the <a href="https://doodax.com" target="_blank">Doodax.com</a> Ecosystem</p>
</div>

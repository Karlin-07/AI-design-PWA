# 🎨 AI Design Generator PWA

A Progressive Web App (PWA) that generates AI-powered fashion design images from text prompts. Built as a portfolio project to demonstrate AI API integration and PWA development skills.

## 🔗 Live Demo
👉 [Try it here](https://karlin-07.github.io/AI-design-PWA/)

## 📸 What it does
- User types a fashion design idea (e.g. "red floral summer dress")
- AI generates a real image based on the prompt
- Generated images are saved to a local history gallery
- App is installable on mobile and desktop (PWA)
- Works offline for previously generated images

## 🛠️ Tech Stack
- HTML, CSS, JavaScript (vanilla)
- Puter.js (free AI image generation — Flux Schnell model)
- PWA: Web App Manifest + Service Worker
- Local Storage (for image history)
- Hosted on GitHub Pages

## ✨ Features
- ✅ AI image generation from text prompts
- ✅ Installable as a mobile/desktop app (no app store needed)
- ✅ Offline support via service worker caching
- ✅ Image history saved locally
- ✅ Download generated images
- ✅ Responsive design (works on mobile and desktop)

## 🚀 How to run locally
1. Clone this repository
2. Open the folder in VS Code
3. Right-click `index.html` → "Open with Live Server"
4. Open `http://127.0.0.1:5500` in Chrome
5. Type a prompt and click Generate!

> ⚠️ Must be served via a local server (not opened directly as a file) for PWA and AI features to work.

## 📁 Project Structure
```
ai-design-pwa/
├── index.html          # Main app page
├── style.css           # Styling
├── script.js           # App logic + AI API integration
├── manifest.json       # PWA manifest (name, icons, theme)
├── service-worker.js   # Offline caching logic
├── icon-192.png        # App icon (192x192)
└── icon-512.png        # App icon (512x512)
```

## 🎯 Key Learning
This project taught me:
- How to integrate a free AI image generation API
- How to build and register a service worker for offline support
- How to make a website installable as a PWA
- Debugging CORS issues and browser security restrictions

---
Built with ❤️ as Portfolio Project #1

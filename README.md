# PrepPortal - Job Portal & Interview Preparation Platform
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Tech](https://img.shields.io/badge/tech-HTML5%20%7C%20CSS3%20%7C%20JS-orange)

**PrepPortal** is a premium, all-in-one platform designed to bridge the gap between job seekers and their dream careers. It combines a powerful job listing portal with comprehensive preparation modules for Aptitude, DSA, Technical, and HR rounds.

## 🚀 Key Features
- **Job Portal**: Browse active job listings from top companies with detailed filters for salary, location, and role type.
- **Preparation Hub**: 
  - **Aptitude**: Mastery over Quant and Logical Reasoning with formula sheets and examples.
  - **DSA Mastery**: A dedicated, interactive topic-wise sheet to track your progress through 180+ problems.
  - **Technical Core**: Notes on OS, DBMS, Networking, and OOPs.
  - **HR & Soft Skills**: Pro tips and sample answers to ace behavioral rounds.
- **Company Hiring Insights**: Stay ahead by understanding the exact hiring patterns and syllabus for Google, Amazon, Microsoft, TCS, and more.
- **Dynamic UX**: Full support for **Light/Dark Mode** with persistent browser memory.
- **Modern Design**: Built with a responsive, glassmorphic aesthetic for a premium experience on any device.
- 
## 🛠️ Technology Stack
- **Structure**: Semantic HTML5
- **Styling**: Vanilla CSS3 (Custom variables, Flexbox/Grid, Animations)
- **Logic**: Vanilla JavaScript (LocalStorage API, Intersection Observer)
- **Icons**: FontAwesome 6
- **Typography**: Google Fonts (Outfit)
  
## 📂 Project Structure
```text
├── index.html          # Gateway / Home Page
├── jobs.html           # Job Portal
├── prep.html           # Preparation Modules Hub
├── companies.html      # Company Hiring Insights
├── dsa-sheet.html      # DSA Progress Tracker
├── notes-aptitude.html # Sample Note Page (Time & Work)
├── login.html          # User Authentication Page
├── css/
│   └── style.css       # Core Design System
├── js/
│   └── script.js       # Global Logic & Persistence
└── assets/             # Images and Icons
```

## 🏃 How to Run Locally
1. Clone the repository or download the files.
2. Open `index.html` directly in your browser, or for the best experience (to ensure all features work correctly), run a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   ```
3. Navigate to `http://localhost:8000`.

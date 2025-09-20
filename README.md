# 📹 Full Stack Video Proctoring System

---

## 🚀 Overview

Develop a robust Video Proctoring System using Express.js to ensure academic integrity during online assessments. This web-based application leverages video and potentially other monitoring techniques to deter cheating and verify student identity. The system's core function is to provide a secure and reliable environment for online exams, focusing on user-friendliness and ease of integration.

---

# ✨ Features

## 🎯 Core Video Conferencing Functionality
- **Real-Time Video Monitoring** – Live video/audio streaming powered by WebRTC
- **Behavioral Analysis with MediaPipe** – Detects face, eye movement, and suspicious activities
- **AI-Powered Chatbot (Gemini API)** – Provides automated assistance and intelligent responses
- **Recording & Reporting** – Stores session recordings with detailed AI analysis reports 

## 🤖 Advanced Features
- **AI-Powered Analysis** – Integrated Gemini API for fun analysis of the mediapipe face detction data    
- **Suspicious Activity Alerts** – Real-time notifications for abnormal movements or face absence 

## ⚙️ Technical Features
- **WebRTC Integration** – Real-time video/audio capturing of Candidate
- **MediaPipe Models** – Face detection, posture analysis
- **Gemini API** – Advanced natural language processing for AI chatbot and automated feedback
- **Express.js + Node.js Backend** – RESTful API architecture with structured routing
- **MongoDB Database** – Secure storage of logs, reports, and user details
- **React.js Frontend** – Modern, responsive, and user-friendly UI
- **CORS & Security** – Configured for safe cross-origin communication
- **Cloud Deployment** – Hosted on Render for production scalability


## 🏗 Architecture

The platform follows a **client-server model** with **MVC architecture** on the backend:

```
                   ┌────────────────────────┐
                   │        Frontend         │
                   │  React.js + Router      │
                   │  Axios + CSS            │
                   └───────────┬────────────┘
                               │
                               ▼
                   ┌────────────────────────┐
                   │        Backend          │
                   │ Node.js + Express.js    │
                   │ MVC Pattern  + MONGODB  │
                   └───────────┬────────────┘
                               │
                               ▼
                   ┌────────────────────────┐
                   │ Real-Time Engine        │
                   │ WebRTC + MediaPipe     │
                   └───────────┬────────────┘
```

---
---

# 🛠 Tech Stack & AI Tools

## 🎨 Frontend Technologies
- **React 18** – Modern JavaScript library with hooks  
- **React Router v6** – Client-side routing for seamless navigation  
- **Axios** – HTTP client for API communication  
- **CSS3** – Modern styling with Flexbox/Grid & fully responsive design  

## ⚙️ Backend Technologies
- **Node.js 18+** – JavaScript runtime environment  
- **Express.js** – Fast, unopinionated web framework  
- **MongoDB** – NoSQL document database for storing user data, rooms, and chat messages  
- **Mongoose** – Elegant MongoDB object modeling for Node.js  
- **MVC Architecture** – Clean, scalable backend structure  

## 🌐 Real-Time Media Capturing And Face Detection
- **WebRTC** – Peer-to-peer audio/video streaming   
- **MediaPipe (face detection)** – Efficient detecting the face movement and eye movement  

## 🤖 AI Integration
- **Google Gemini API** – Advanced AI for:  
  - Analysis of the proctoring data 
  - Give result in detail and breif manner  
  - Also Give score of proctoring from 100  

## ☁️ Cloud Services & DevOps
- **Render** – Deployment platform for frontend & backend  
- **Docker & Docker Compose** – Containerization & multi-service orchestration  
- **Environment Management** – dotenv for secure environment variables  

## 🛠 Development Tools
- **ESLint** – Code linting & style enforcement  
- **Nodemon** – Development server auto-restart  
- **CORS** – Secure cross-origin communication  
- **Git & GitHub** – Version control & collaboration  

---

## 📂 Project Structure

```
.
├── BACKEND
│   ├── controllers
│   │   ├── AiControllers.js
│   │   └── logControllers.js
│   ├── index.js
│   ├── models
│   │   └── logModels.js
│   ├── package.json
│   └── routes
│       ├── aiRoutes.js
│       └── logRoutes.js
└── CLIENT
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── public
    │   ├── models
    │   │   └── blaze_face_short_range.tflite
    │   └── vite.svg
    ├── src
    │   ├── assets
    │   │   └── react.svg
    │   ├── functions
    │   │   ├── faceDetector.js
    │   │   ├── getUserMedia.js
    │   │   ├── pdfCreator.js
    │   │   └── userMediaRecorder.js
    │   ├── index.css
    │   ├── main.jsx
    │   ├── pages
    │   │   ├── InterviewPage.jsx
    │   │   └── LandingPage.jsx
    │   └── styles
    │       ├── InterviewPage.css
    │       └── LandingPage.css
    └── vite.config.js
```
#📦 Key Dependencies
```bash
@google/genai: ^1.20.0
cors: ^2.8.5
dotenv: ^17.2.2
express: ^5.1.0
mongoose: ^8.18.1
```
---

## ⚙️ Local Setup Instructions  

### 🔑 Prerequisites  
- **Node.js 18+**  
- **Docker & Docker Compose** (recommended)  
- **MongoDB** (local installation or Atlas account)  
- **Google AI Studio account** (for Gemini API key)  

---

### 🐳1st Way: Docker Development (Recommended)  

1️⃣ Clone the repository  
```bash
git clone <your-repo-url>
cd Video-Proctoring-System
```
2️⃣ Set up environment variables
```bash
Create .env file in BACKEND/:

GEMINI_API_KEY = <your gemini api key>
FRONTEND_URL = http://localhost:5173
MONGO_URL = <your mongodb url>

Create .env file in CLIENT/:
VITE_API_URL=http://localhost:3000
```

3️⃣ Run with Docker
```bash
# Update docker-compose.yml with your environment variables
docker-compose up --build
```

4️⃣ Access the application
```bash
Frontend : http://localhost:5173

Backend : http://localhost:3000
```
---

### 🐳2nd Way: Run the app manually
Install dependencies
```bash
# Backend dependencies
cd BACKEND
npm install

# Frontend dependencies
cd CLIENT
npm install
```
Set up environment variables (same as Docker option)

Start services manually

### Terminal 1: Start frontend
```bash
cd CLIENT
npm run dev
```

### Terminal 2: Start backend
```
cd SERVER
nodemon index.js
```

### Access Your Application
```bash
Access the application
Frontend: http://localhost:5173
Backend API: http://localhost:3000
```
---
### Required Service Setup

Google AI Setup
Go to Google AI Studio
Create an API key for Gemini
Add the key to your environment variables

### Database Setup

MongoDB Atlas: Create a database and get connection string

---
## 🤝 Contributing

Contributions are welcome! 🎉

1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Added new feature"`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request 🚀

---

## 📜 License

This project is licensed under the **MIT License** – feel free to use and modify with attribution.

---

## 💡 Future Improvements

* 📼 Add **meeting recording & playback**
* 📊 Add **analytics dashboard** for stats
* 🌍 Implement **global STUN/TURN servers** for better connectivity
* 📱 Add **mobile-friendly UI**

---

## 👨‍💻 Author

**Adarsh Dubey**

* 💼 MERN Stack Developer | Java + DSA | DevOps Learner
* 🌐 [LinkedIn](https://linkedin.com/adarshdubey20) | [GitHub](https://github.com/ADARSHDUBEY200)

---

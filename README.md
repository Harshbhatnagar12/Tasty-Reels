# 🍔 TastyReel

TastyReel is a modern full-stack food video sharing platform inspired by Instagram Reels and TikTok. It allows food partners to upload short food videos while users can explore, like, and save their favorite dishes.

Built using the **MERN Stack**, TastyReel focuses on clean UI, secure authentication, media uploads, and an engaging reel-based experience.

---

## 🚀 Live Demo

Frontend: Coming Soon

Backend API: Coming Soon

---

# 📸 Screenshots

> Add your project screenshots here.

- Home Page
- Login Page
- Register Page
- Food Feed
- Food Partner Dashboard

---

# ✨ Features

### 👤 User

- User Registration
- User Login & Logout
- JWT Authentication
- Browse Food Reels
- Like Food Videos
- Save Favourite Foods
- Protected Routes

### 🍽 Food Partner

- Register as Food Partner
- Login & Logout
- Upload Food Reels
- Upload Videos
- Manage Food Posts

### 🎥 Food Feed

- Reel-style Food Feed
- Food Description
- Like Counter
- Save Counter
- Responsive Design

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- React Router DOM
- Axios
- CSS
- Responsive Design

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt.js
- Multer
- Cookie Parser
- CORS
- ImageKit
- UUID

---

# 📁 Folder Structure

```
TastyReel
│
├── client
│   ├── src
│   ├── components
│   ├── pages
│   ├── routes
│   ├── services
│   └── assets
│
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middlewares
│   ├── services
│   ├── db
│   └── app.js
│
└── README.md
```

---

# 🔐 Authentication

- JWT Token Authentication
- HTTP Cookies
- Protected API Routes
- User Authentication
- Food Partner Authentication

---

# 📦 API Overview

## Authentication

```
POST /api/auth/user/register
POST /api/auth/user/login
POST /api/auth/user/logout

POST /api/auth/food-partner/register
POST /api/auth/food-partner/login
POST /api/auth/food-partner/logout
```

---

## Food

```
POST /api/food
GET /api/food

POST /api/food/like
POST /api/food/save

GET /api/food/save
```

---

## Food Partner

```
GET /api/food-partner/:id
```

---

# ⚙ Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=3000

MONGODB_URI=Your MongoDB URI

JWT_SECRET=Your Secret Key

IMAGEKIT_PUBLIC_KEY=Your Public Key

IMAGEKIT_PRIVATE_KEY=Your Private Key

IMAGEKIT_URL_ENDPOINT=Your URL Endpoint

```
# 🎯 Learning Outcomes

This project helped me gain hands-on experience with:

- MERN Stack Development
- REST APIs
- JWT Authentication
- Protected Routes
- MongoDB Relationships
- File Upload using Multer
- ImageKit Cloud Storage
- React Routing
- Axios API Integration
- State Management

<div align="center">

# 🛍️ MERN Product Store

### Full-Stack E-Commerce Platform Built with Modern Technologies

[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Tech Stack](#-tech-stack) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Demo](#-demo)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 About

**MERN Product Store** is a modern, full-stack e-commerce platform that provides a seamless shopping experience. Built using the powerful MERN stack (MongoDB, Express.js, React, Node.js), this application demonstrates best practices in modern web development, from responsive UI design to secure backend API architecture.

Perfect for learning full-stack development or as a foundation for your next e-commerce project!

---

## ✨ Features

### 🛒 **Core E-Commerce Functionality**
- **Product Management** - Create, read, update, and delete products
- **Shopping Cart** - Add/remove items, update quantities
- **Responsive Design** - Works beautifully on all devices

### 🎨 **User Experience**
- Clean and intuitive interface
- Real-time updates
- Smooth animations and transitions
- Loading states and error handling

---

## 🚀 Demo

### Live Demo
👉 **[View Live Demo](https://product-store-myz9.onrender.com)**

### Quick Preview

```bash
# Clone and run locally
git clone https://github.com/Ferozhasnain1504/mern-product-store.git
cd mern-product-store
npm install
npm run dev
```

---

## 🛠️ Tech Stack

### **Frontend**
| Technology | Description |
|------------|-------------|
| ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black) | UI Library |
| ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) | Styling Framework |
| ![React Router](https://img.shields.io/badge/-React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white) | Client-side Routing |
| ![Axios](https://img.shields.io/badge/-Axios-5A29E4?style=flat-square&logo=axios&logoColor=white) | HTTP Client |

### **Backend**
| Technology | Description |
|------------|-------------|
| ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white) | Runtime Environment |
| ![Express](https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white) | Web Framework |
| ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) | Database |
| ![Mongoose](https://img.shields.io/badge/-Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white) | ODM Library |
| ![JWT](https://img.shields.io/badge/-JWT-000000?style=flat-square&logo=json-web-tokens&logoColor=white) | Authentication |

---

## 📦 Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **MongoDB** (local or Atlas)
- **npm** or **yarn**

### Step-by-Step Guide

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ferozhasnain1504/mern-product-store.git
   cd mern-product-store
   ```

2. **Install dependencies**

   For the backend:
   ```bash
   cd backend
   npm install
   ```

   For the frontend:
   ```bash
   cd frontend
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```

4. **Run the application**

   Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

   Start the frontend:
   ```bash
   cd frontend
   npm start
   ```

5. **Access the application**
   
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=mongodb://localhost:27017/mern-product-store
# Or use MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname

# Authentication
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=30d

# Optional: Email Configuration (if applicable)
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password

# Optional: Payment Gateway (if applicable)
STRIPE_SECRET_KEY=your_stripe_secret_key
```

> ⚠️ **Security Note:** Never commit your `.env` file to version control!

---

## 🔌 API Endpoints

### **Products**
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/products` | Get all products | ❌ |
| GET | `/api/products/:id` | Get single product | ❌ |
| POST | `/api/products` | Create product | ✅ Admin |
| PUT | `/api/products/:id` | Update product | ✅ Admin |
| DELETE | `/api/products/:id` | Delete product | ✅ Admin |

### **Authentication**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/logout` | Logout user |
| GET | `/api/auth/me` | Get current user |

### **Users**
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/users` | Get all users | ✅ Admin |
| GET | `/api/users/:id` | Get single user | ✅ |
| PUT | `/api/users/:id` | Update user | ✅ |
| DELETE | `/api/users/:id` | Delete user | ✅ Admin |

---

## 📁 Project Structure

```
mern-product-store/
├── backend/
│   ├── config/
│   │   └── db.js              # Database configuration
│   ├── controllers/
│   │   └── productController.js
│   ├── models/
│   │   └──  product.model.js
│   ├── routes/
│   │   └── product.route.js
│   ├── .env   
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   └── CreatePage.jsx
│   │   ├──  store/
│   │   │   └── product.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── .env
└── README.md
```

---

## 📸 Screenshots

### Home Page
![Home Page](#)
*Browse all available products with search and filter options*

### Product Details
![Product Details](#)
*View detailed product information, specifications, and reviews*

### Shopping Cart
![Shopping Cart](#)
*Manage your cart items before checkout*

### Admin Dashboard
![Admin Dashboard](#)
*Manage products, users, and orders from the admin panel*

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**!

### How to Contribute

1. **Fork the Project**
2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Feroz Hasnain

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
```

---

## 📧 Contact

**Feroz Hasnain**

- GitHub: [@Ferozhasnain1504](https://github.com/Ferozhasnain1504)
- LinkedIn: [Feroz Hasnain](www.linkedin.com/in/feroz-hasnain-856440313)
- Email: ferozhasnain558@gmail.com

**Project Link:** [https://github.com/Ferozhasnain1504/mern-product-store](https://github.com/Ferozhasnain1504/mern-product-store)

---

## 🙏 Acknowledgments

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://reactjs.org/)
- [Node.js Documentation](https://nodejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)
- [Unsplash](https://unsplash.com/) for product images

---

## 🌟 Show Your Support

If you found this project helpful, please give it a ⭐️!

<div align="center">

### Made with ❤️ by Feroz Hasnain

[![Star this repo](https://img.shields.io/github/stars/Ferozhasnain1504/mern-product-store?style=social)](https://github.com/Ferozhasnain1504/mern-product-store)
[![Follow on GitHub](https://img.shields.io/github/followers/Ferozhasnain1504?style=social)](https://github.com/Ferozhasnain1504)

</div>

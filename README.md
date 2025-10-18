MERN Product Store

A full-stack product store application built on the MERN stack (MongoDB, Express, React, Node) for showcasing, managing and browsing products.

Table of Contents

Features

Tech Stack

Getting Started

Prerequisites

Installation

Running the App

Project Structure

Environment Variables

Usage

Contributing

License

Acknowledgements

Features

User can browse a list of products.

Admin/authorized users can add, update, delete products (CRUD).

Product details view for each item.

Responsive UI built using React.

Backend REST API built using Express & Node.js.

Data stored in MongoDB.

Error handling, basic input validation.

Ready to extend: e.g., authentication, cart, checkout, payment, etc.

Tech Stack

Front-end: React (with Hooks / functional components)

Back-end: Node.js, Express.js

Database: MongoDB

API communication: RESTful endpoints

Other tools: (you may list stuff like dotenv, Mongoose, etc., if used)

Getting Started
Prerequisites

Node.js installed (v14+ recommended)

npm (or yarn)

MongoDB running locally or remotely

(Optional) Postman / Insomnia for testing APIs

Installation

Clone the repo

git clone https://github.com/Ferozhasnain1504/mern-product-store.git
cd mern-product-store


Navigate into each folder and install dependencies

# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install

Running the App

Set up environment variables (see next section)

Start backend server

cd backend
npm run dev   # or npm start


Start frontend development server

cd ../frontend
npm start


Visit http://localhost:3000 (or whatever port) in your browser to see the app.

Project Structure
mern-product-store/
│
├── backend/          # Express server & API
│   ├── config/       # DB connection, config files
│   ├── controllers/  # Handle requests
│   ├── models/       # Mongoose schemas
│   ├── routes/       # API endpoints
│   ├── middleware/   # Error handling, auth, etc.
│   └── server.js     # Entry point
│
├── frontend/         # React app
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/   # (if using React Context)
│   │   ├── services/  # API calls
│   │   └── App.js
│   └── public/
│
├── .gitignore
├── package.json
└── README.md

Environment Variables

Create a .env file in the backend folder with something like:

MONGO_URI = your_mongodb_connection_string
PORT = 5000
JWT_SECRET = your_jwt_secret   # if you add authentication

Usage

Front-end: browse products, click into product details.

Back-end: use API endpoints under /api/products (for example) to get, post, put, delete products.

Extendable: you may add user authentication, a cart, order processing, payment gateway, etc.

Contributing

Contributions are welcome!

Fork the repository

Create a new branch: git checkout -b feature/YourFeature

Commit your changes: git commit -m 'Add some feature'

Push to the branch: git push origin feature/YourFeature

Open a Pull Request

Please ensure code follows existing style, add meaningful commit messages, and update documentation if needed.

License

Specify your license here (e.g., MIT License).

This project is licensed under the MIT License – see the LICENSE
 file for details.

Acknowledgements

Thanks to all open-source libraries used in this project.

Ideas inspired by MERN tutorial(s) or any external resources you used.

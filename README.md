# Recipe Finder


## Features Implemented

### Easy Features
- **Search Functionality**: Users can type a keyword and search for matching recipes using TheMealDB API.
- **Recipe List Display**: Displays recipes with images and names in a clean grid layout.
- **Loading & No Results Handling**: Shows messages for loading state and when no recipes are found.
- **Responsive Design**: Fully responsive layout that works on both desktop and mobile devices.

### Medium Features
- **Routing with `react-router-dom`**:
  - `/` – Search page
  - `/recipe/:id` – Recipe detail page
- **Recipe Detail Page**:
  - Displays detailed recipe info: title, image, category, instructions, and parsed ingredients with measurements.
- **"Back to Search" Navigation**: Easy navigation back to the home page without a full page reload.

## How to Run It Locally

### Prerequisites
- Node.js and bun/npm installed on your machine

### Steps to Run

```bash
# 1. Clone the repository
git clone https://github.com/your-username/recipe-finder.git
cd recipe-finder

# 2. Install dependencies
npm install / bun install

# 3. Start the development server
npm start / bun start
```

Open your browser and visit [http://localhost:3000](http://localhost:3000)


## API Used

* **Search Recipes**:
  `https://www.themealdb.com/api/json/v1/1/search.php?s=`
* **Get Recipe by ID**:
  `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`
* **Random Recipe**:
  `https://www.themealdb.com/api/json/v1/1/random.php`


## Screenshots

### 🔍 Search Page

<!-- Upload screenshot here -->

### 📋 Recipe Detail Page

<!-- Upload screenshot here -->


## Project Structure

```
src/
├── components/
│   ├── SearchBar.js
│   ├── RecipeList.js
│   └── RecipeDetail.js
├── App.js
├── index.js
└── App.css
```

---

# 🔐 Secret Quote API (JWT Authentication)

## 📁 Project Structure

```

.
├── server.js
├── middleware/
│   └── auth.js
├── data/
│   └── users.js
├── .env
├── package.json
└── README.md

````


## ⚙️ Technologies Used

- Node.js
- Express.js
- JSON Web Token (`jsonwebtoken`)
- dotenv (for managing environment variables)


## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/secret-quote-api.git
cd secret-quote-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root of your project with the following line:

```
JWT_SECRET=your_jwt_secret_key
```

> Replace `your_jwt_secret_key` with any random secret string you want.

### 4. Start the Server

```bash
npm start
```

By default, it runs at: [http://localhost:3000](http://localhost:3000)


## 🔑 API Endpoints

Used **Postman**

### ✅ `POST /register`

Registers a new user (in-memory storage only, no password hashing).

**Request Body:**

```json
{
  "username": "testuser",
  "password": "password123"
}
```


### 🔓 `POST /login`

Logs in a user and returns a JWT token (valid for 1 hour).

**Request Body:**

```json
{
  "username": "testuser",
  "password": "password123"
}
```

**Response:**

```json
{
  "accessToken": "<JWT_TOKEN>"
}
```


### 🔐 `GET /api/secret-quote`

A protected route that requires a valid JWT token.

**Headers:**

```
Authorization: Bearer <JWT_TOKEN>
```

**Response:**

```json
{
  "quote": "The secret to getting ahead is getting started."
}
```


## 🧪 Testing the API

1. **Register a user** via `/register`.
2. **Login** via `/login` to receive a token.
3. **Access** `/api/secret-quote` using the `Authorization` header.

Example using `curl`:

```bash
curl -H "Authorization: Bearer <your_token>" http://localhost:3000/api/secret-quote
```
---

# 📝 User-Specific To-Do List API (JWT + bcrypt + Express)

## 📁 Project Structure

```
.
├── server.js
├── middleware/
│   ├── auth.js
│   └── authorizeAdmin.js
├── routes/
│   ├── auth.js
│   ├── todos.js
│   └── admin.js
├── data/
│   ├── users.js
│   └── todos.js
├── .env
├── package.json
└── README.md

```


## ⚙️ Technologies Used

- Node.js
- Express.js
- JSON Web Token (`jsonwebtoken`)
- bcrypt.js (for password hashing)
- dotenv (for environment variables)


## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/user-todo-api.git
cd user-todo-api
```

### 2. Install Dependencies

```bash
npm install / bun install
```

### 3. Create `.env` File

Create a `.env` file in the root folder and add:

```
JWT_SECRET=your_jwt_secret_key
```

> Replace `your_jwt_secret_key` with any secure string.

### 4. Start the Server

```bash
npm start / bun start
```

> Server runs at [http://localhost:3000](http://localhost:3000)


## 🔐 Authentication

* JWT tokens are issued during login and are required for accessing all `/api/todos` routes.
* Passwords are hashed using bcrypt before storing in the in-memory array.


## 🧪 Testing the Endpoints

Used **Postman**.

### 🔏 `POST /register`

**Register a new user (password is hashed).**

**Body:**

```json
{
  "username": "user1",
  "password": "pass123"
}
```

### 🔓 `POST /login`

**Returns a JWT token upon successful login.**

**Body:**

```json
{
  "username": "user1",
  "password": "pass123"
}
```

**Response:**

```json
{
  "accessToken": "<JWT_TOKEN>"
}
```


### 📋 `GET /api/todos`

**Returns all to-dos for the authenticated user.**

**Headers:**

```
Authorization: Bearer <JWT_TOKEN>
```


### ➕ `POST /api/todos`

**Creates a to-do for the logged-in user.**

**Body:**

```json
{
  "task": "Finish the assignment"
}
```

### ❌ `DELETE /api/todos/:id`

**Deletes a to-do only if it belongs to the current user.**


## Bonus: Admin Access

### Role-Based Authorization

You can manually set a user’s `role` to `"admin"` in the `users.js` array.

### 🗃️ `GET /api/admin/all-todos`

**Admin-only endpoint to view all users' to-dos.**

**Headers:**

```
Authorization: Bearer <ADMIN_JWT_TOKEN>
```

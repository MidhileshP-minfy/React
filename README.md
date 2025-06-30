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

### Search Page

![Screenshot 2025-06-30 143801](https://github.com/user-attachments/assets/cf9fa678-3e41-42f8-b6ee-028bcf8a38bb)


![Screenshot 2025-06-30 112848](https://github.com/user-attachments/assets/10cb89f6-a76a-4e59-8555-272275665723)

### Recipe Detail Page

![Screenshot 2025-06-26 150040](https://github.com/user-attachments/assets/5b49b65b-6040-4153-9368-ffa1fc9292cd)

![Screenshot 2025-06-26 150055](https://github.com/user-attachments/assets/adae0395-f332-499e-9444-cb029fc53c95)

![Screenshot 2025-06-26 150107](https://github.com/user-attachments/assets/d1142459-2e32-4f5c-a136-86c3d00ffad4)

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

# Secret Quote API (JWT Authentication)

## Project Structure

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


## Technologies Used

- Node.js
- Express.js
- JSON Web Token (`jsonwebtoken`)
- dotenv (for managing environment variables)


## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Create a `.env` file

```
JWT_SECRET=your_jwt_secret_key
```


### 3. Start the Server

```bash
npm start / bun start
```

## 🔑 API Endpoints

Used **Postman**

### ✅ `POST /register`


![Screenshot 2025-06-29 210731](https://github.com/user-attachments/assets/a566168a-0c1e-4c71-958a-ce403b61439e)


### 🔓 `POST /login`

![Screenshot 2025-06-29 211301](https://github.com/user-attachments/assets/b033f8c7-ce07-44dd-9be7-e62b47743de8)

### 🔐 `GET /api/secret-quote`

**Headers:**

```
Authorization: Bearer <JWT_TOKEN>
```

![Screenshot 2025-06-29 211450](https://github.com/user-attachments/assets/0a324043-cd57-43cd-b109-bdab8e7303e3)

---

# User-Specific To-Do List API (JWT + bcrypt + Express)

## Project Structure

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


## Technologies Used

- Node.js
- Express.js
- JSON Web Token (`jsonwebtoken`)
- bcrypt.js (for password hashing)
- dotenv (for environment variables)


## Setup Instructions

### 1. Install Dependencies

```bash
npm install / bun install
```

### 2. Create `.env` File

Create a `.env` file in the root folder and add:

```
JWT_SECRET=your_jwt_secret_key
```

### 3. Start the Server

```bash
npm start / bun start
```

## Authentication

* JWT tokens are issued during login and are required for accessing all `/api/todos` routes.
* Passwords are hashed using bcrypt before storing in the in-memory array.


## Testing the Endpoints

Used **Postman**.

### 🔏 `POST /register`

**Register a new user (password is hashed).**

![Screenshot 2025-06-29 212320](https://github.com/user-attachments/assets/fcf82056-07fc-4a85-8eb6-1b2449363de9)

![Screenshot 2025-06-29 212358](https://github.com/user-attachments/assets/b739353a-43ed-45af-bb71-4e22fe42df23)


### `POST /login`

![Screenshot 2025-06-29 212501](https://github.com/user-attachments/assets/3366a8d4-7230-4dd6-a922-3fa5fea322e6)

### `POST /api/todos`

![Screenshot 2025-06-29 212709](https://github.com/user-attachments/assets/098932d8-ba0c-4bbd-a418-f97ede77c488)


### `GET /api/todos`

![Screenshot 2025-06-29 212856](https://github.com/user-attachments/assets/588db583-cdda-4d30-b39a-9df639193939)


### `DELETE /api/todos/:id`

![Screenshot 2025-06-29 213853](https://github.com/user-attachments/assets/370eeef9-1141-40de-a3d7-88a31a423c87)


### `GET /api/admin/all-todos`

![Screenshot 2025-06-29 213910](https://github.com/user-attachments/assets/f0d39fb9-3cf7-4f52-88f2-cc764b87e502)

*   If **Not Admin**:
    ![Screenshot 2025-06-29 213242](https://github.com/user-attachments/assets/1e71e3ee-2979-4366-a65b-a0a8a4255256)

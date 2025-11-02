# 📚 Library Management Backend API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

A **Library Management System Backend API** built with **Node.js**, **Express**, **TypeScript**, and **MongoDB**.
It provides RESTful CRUD operations for books and borrowing management.

---

## 🧾 Table of Contents

- [⚙️ Setup Instructions](#-setup-instructions)
- [🧩 API Endpoints](#-api-endpoints)
- [🧠 API Details](#-api-details)
- [🧱 Folder Structure](#-folder-structure)
- [⚠️ Error Handling](#-error-handling-example)
- [📜 Summary](#-summary)
- [👨‍💻 Author](#-author)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/ismailjosim/library-management-backend.git
cd library-management-backend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4️⃣ Run Server

```bash
npm run dev
```

Server runs at:
👉 `http://localhost:5000`

---

## 🧩 API Endpoints

| Method     | Endpoint             | Description                |
| ---------- | ------------------  | --------------------------|
| **POST**   | `/api/books`         | ➕ Add a new book          |
| **GET**    | `/api/books`         | 📚 Get all books          |
| **GET**    | `/api/books/:bookId` | 🔍 Get a single book by ID|
| **PATCH**  | `/api/books/:bookId` | ✏️ Update book by ID      |
| **DELETE** | `/api/books/:bookId` | 🗑️ Delete book by ID     |
| **POST**   | `/api/borrow`        | 📥 Borrow a book          |
| **GET**    | `/api/borrow`        | 📊 Borrowed book summary  |

---

## 🧠 API Details

### 🟢 Add Book

**POST** `/api/books`

**Request Body**

```json
{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "copies": 10
}
```

**Response**

```json
{
  "success": true,
  "message": "Book added successfully",
  "data": {
    "_id": "654321abcde12345",
    "title": "The Theory of Everything",
    "author": "Stephen Hawking",
    "copies": 10
  }
}
```

---

### 🔵 Get All Books

**GET** `/api/books`

**Response**

```json
{
  "success": true,
  "message": "Books retrieved successfully",
  "data": [
    {
      "_id": "654321abcde12345",
      "title": "The Theory of Everything",
      "author": "Stephen Hawking",
      "copies": 10
    }
  ]
}
```

---

### 🟢 Borrow Book

**POST** `/api/borrow`

**Request Body**

```json
{
  "bookId": "654321abcde12345",
  "quantity": 2,
  "dueDate": "2025-07-18"
}
```

**Response**

```json
{
  "success": true,
  "message": "Book borrowed successfully",
  "data": {
    "book": "654321abcde12345",
    "quantity": 2,
    "dueDate": "2025-07-18"
  }
}
```

---

### 🔵 Borrowed Summary

**GET** `/api/borrow`

**Response**

```json
{
  "success": true,
  "message": "Borrow summary retrieved successfully",
  "data": [
    {
      "book": "The Theory of Everything",
      "totalBorrowed": 8
    }
  ]
}
```

---

### 🔵 Get Single Book

**GET** `/api/books/:bookId`

**Response**

```json
{
  "success": true,
  "message": "Book retrieved successfully",
  "data": {
    "_id": "654321abcde12345",
    "title": "The Theory of Everything",
    "author": "Stephen Hawking",
    "copies": 10
  }
}
```

---

### 🟡 Update Book

**PATCH** `/api/books/:bookId`

**Request Body**

```json
{
  "copies": 12
}
```

**Response**

```json
{
  "success": true,
  "message": "Book updated successfully",
  "data": {
    "_id": "654321abcde12345",
    "title": "The Theory of Everything",
    "copies": 12
  }
}
```

---

### 🔴 Delete Book

**DELETE** `/api/books/:bookId`

**Response**

```json
{
  "success": true,
  "message": "Book deleted successfully"
}
```

---

## 🧱 Folder Structure

```text
library-management-backend/
├── src/
│   ├── app.ts
│   ├── controllers/
│   ├── middlewares/
│   ├── model/
│   ├── routes/
│   ├── utils/
├── .env
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── README.md
```

---

## ⚠️ Error Handling Example

```json
{
  "success": false,
  "message": "Book not found",
  "error": {
    "statusCode": 404
  }
}
```

---

## 📜 Summary

- ✅ Clean and modular code structure
- ✅ RESTful API standards
- ✅ Validation & error handling implemented
- ✅ Mongoose integration
- ✅ Ready for extension (authentication, admin features, etc.)

---

## 👨‍💻 Author

**Developer:** [MD Ismail Josim](https://github.com/ismailjosim)
**Repository:** [library-management-backend](https://github.com/ismailjosim/library-management-backend)

---

# ✅ Task Manager Web App

A full-stack Task Manager web application built with **React.js** for the frontend, **Node.js** and **Express.js** for the backend, and **MongoDB** as the database. This app allows users to create, read, update, and delete tasks with a beautiful UI and persistent backend.

---

## ✨ Features

### 🚀 Frontend

* Add, view, update, and delete tasks
* Responsive, dark-themed UI with blur and shadow effects
* Real-time form updates and smooth UX

### ⚙️ Backend

* RESTful API with Express.js
* MongoDB integration for task storage
* Environment variables for secure config

---

## 🧰 Tech Stack

| Frontend     | Backend    | Database |
| ------------ | ---------- | -------- |
| React.js     | Node.js    | MongoDB  |
| Tailwind CSS | Express.js |          |

---

## 📁 Folder Structure

```
task-manager-app/
├── task-manager-backend/
│   ├── controllers/
│   │   └── taskController.js
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
├── task-manager-frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskList.jsx
│   │   ├── api.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.css
│   │   ├── index.js
│   │   └── tailwind.config.js
│   ├── package.json
│   └── package-lock.json
```

---

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository

```bash
(https://github.com/pnitya2600/Task-Manager-Web-App.git)
cd task-manager-app
```

### 2️⃣ Backend Setup

```bash
cd task-manager-backend
npm install
npm start  # or use `node server.js` if no start script is defined
```

### 3️⃣ Frontend Setup

```bash
cd ../task-manager-frontend
npm install
npm run dev  # or `npm start` depending on setup
```

Ensure your backend is running on `http://localhost:5000` and frontend on `http://localhost:5173` (default for Vite).

---

## 🧾 Commit History (Recommended Style)

```bash
git init
git add .
git commit -m "Initial project setup for full-stack task manager"
git commit -m "Add backend: task model, controller, and routes"
git commit -m "Set up Express server and MongoDB connection"
git commit -m "Create frontend layout with TaskForm and TaskList"
git commit -m "Integrate API with frontend using Axios"
git commit -m "Add dark theme and responsive styles"
git commit -m "Implement update and delete task functionality"
git commit -m "Improve error handling and input validation"
git commit -m "Polish UI and update README"
```

---

## ⚠️ Known Limitations

* No user authentication
* Tasks are public to all users
* No deployment instructions yet

---

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/5c778368-29ff-4f68-a01d-b15702ed4780)

![image](https://github.com/user-attachments/assets/88941ae7-171f-413b-8a90-9fa1c3840074)



---

## 📄 License

MIT License

---

## 🙌 Acknowledgements

Built as a project to demonstrate full-stack development with MERN and clean UI design.

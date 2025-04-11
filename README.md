# 📸 Photo Explorer

Welcome to **Photo Explorer**, a fun and interactive React app where users can explore profiles, albums, and photos! Built with ❤️ using **TypeScript**, **Material-UI**, **Firebase Authentication**, and the **JSONPlaceholder API**, this app showcases modern frontend skills in a clean and intuitive interface.

🌐 **[Live Demo](https://photoexplorerer.web.app)**

---

## 🚀 Features

- 🔍 **User Exploration** – Browse users pulled from the JSONPlaceholder API.
- 📂 **Albums & Photos** – Explore user albums and view/edit photo titles (simulated saves).
- 🔐 **Authentication** – Google Sign-In powered by Firebase Authentication.
- 🧠 **Smart Page Titles** – Dynamic titles via `react-helmet-async` (e.g., "Photo Explorer - Welcome").
- 🎨 **Material-UI Theming** – Sleek orange-accented UI with background imagery.
- 🧪 **Type Safety** – Built with TypeScript for strong typing and reliability.
- ☁️ **Firebase Hosting** – Deployed on Firebase for fast, secure, and live access.

---

## 💠 Tech Stack

| Purpose       | Technology                            |
|---------------|----------------------------------------|
| Frontend      | React 18.2.0, TypeScript 4.9.5         |
| UI Framework  | Material-UI 5.15.0                     |
| Routing       | React Router DOM 6.22.3                |
| Auth          | Firebase 10.11.0 (Google Sign-In)      |
| API           | JSONPlaceholder                        |
| SEO           | react-helmet-async 2.0.5               |
| Build         | create-react-app (react-scripts 5.0.1) |
| Hosting       | Firebase Hosting                       |
| Tooling       | ESLint, Prettier                       |

---

## ⚙️ Prerequisites

- [Node.js](https://nodejs.org/en/) v16 or later
- Firebase CLI:
  ```bash
  npm install -g firebase-tools
  ```
- A Google Account (for testing Firebase Authentication)

---

## 🧑‍💻 Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ChrisOnsando/gallery-explorer
   cd photo-explorer
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the App Locally**:
   ```bash
   npm start
   ```

4. **Create `.env` File**:
   Create a `.env` file at the root of the project with your Firebase config:
   ```
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

5. **Build for Production**:
   ```bash
   npm run build
   ```

6. **Deploy to Firebase**:
   ```bash
   firebase login
   firebase init
   firebase deploy
   ```

---
## 👨‍💻 Author

**[Chris Onsando](https://github.com/ChrisOnsando/)** – Full Stack Developer | Tech Enthusiast

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).


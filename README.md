# React Redux Shopping List App

## Project Overview

This is a Shopping List Web Application built with React, TypeScript, and Redux for state management. Users can sign up, sign in, and manage their shopping list by adding, editing, deleting, and searching items. The app uses a local JSON server as a mock backend for user authentication and list persistence.

---

## Technologies Used

- React (Vite)
- TypeScript
- Redux Toolkit
- Tailwind CSS
- Axios
- JSON Server (mock backend)
- ESLint

---

## Features

- User sign up and sign in
- Protected routes (home only accessible when logged in)
- Add, edit, and delete shopping list items
- Search and filter items by category
- Modal popups for add/edit actions
- Responsive navbar
- Profile page showing logged-in user info

---

## Project Structure

```
src/
├── assets/
│   ├── icons/
│   └── images/
├── components/
│   ├── ItemRow.tsx
│   ├── ListCard.tsx
│   ├── Modal.tsx
│   ├── Navbar.tsx
│   ├── SigninButton.tsx
│   ├── SignupButton.tsx
│   └── SortSearchBar.tsx
├── pages/
│   ├── LandingPage.tsx
│   ├── SignupPage.tsx
│   ├── SigninPage.tsx
│   ├── HomePage.tsx
│   └── ProfilePage.tsx
├── redux/
│   ├── authSlice.ts
│   ├── listSlice.ts
│   └── store.ts
├── App.tsx
├── main.tsx
├── App.css
└── index.css
```

---

## How to Run the Project

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd task5-react-redux-shopping-list
```

### 2. Install dependencies

```bash
npm install
```

### 3. Make sure `db.json` exists in the project root

This file acts as the mock database. If it doesn't exist, create it with the following content:

```json
{
  "users": [],
  "lists": []
}
```

### 4. Start the JSON Server (mock backend)

Open a **separate terminal** and run:

```bash
npx json-server --watch db.json --port 5005
```

Keep this terminal running. The server must be active for sign up, sign in, and list operations to work.

### 5. Start the development server

In your **original terminal**, run:

```bash
npm run dev
```

### 6. Open the app in your browser

```
http://localhost:5173
```

---

## Usage

1. Open the app — you will land on the Landing Page
2. Click **Sign Up** to create an account
3. After signing up you will be redirected to **Sign In**
4. Sign in with your username and password
5. You will be taken to the **Home Page** where you can manage your shopping list
6. Use the **Add** button to create new list items
7. Use the search bar to filter items
8. Click edit or delete on any item to modify it

---

## Screenshots

### Landing Page
![Landing Page](src/assets/screenshots/screenshot1.png)

### Sign Up Page
![Sign Up](src/assets/screenshots/screenshot2.png)

### Sign In Page
![Sign In](src/assets/screenshots/screenshot3.png)
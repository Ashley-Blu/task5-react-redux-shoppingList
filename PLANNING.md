# Shopping List App (Task 5)

A responsive React-Redux + TypeScript application for creating and managing shopping lists.  
The app uses Redux Toolkit for state management, JSON Server for persistent storage, and Tailwind CSS for styling.  

---

## Project Overview

The Shopping List App allows users to:

- Register and log in with encrypted credentials
- Manage user profiles (like, editing their details)
- Create, update, delete, and view multiple shopping lists
- Add, edit, delete, search, and sort items in shopping lists
- Share shopping lists with other users
- Experience a responsive and user-friendly interface 

The app demonstrates:

- ReactTS features (components, props, hooks)
- Redux for state management
- URL-driven search and sort
- Protected routing for security
- Responsive design across multiple screen sizes

---

## Moodboard

Design is inspired by clean, modern, desktop-first interfaces:

- Primary Colors: Green, White, Black
- Typography: Sans-serif (Inter / Poppins), bold titles, medium body text
- UI Components: Cards for lists and items, icons for actions (add/edit/delete/share), top navigation bar
- Accessibility: High contrast, keyboard navigation, alt text on images

---

## Pages and Routing

| Route          | Page           | Access       |
|----------------|----------------|--------------|
| `/login`       | Signin Page    | Public       |
| `/register`    | Signup Page    | Public       |
| `/`            | Home page      | Protected    |
| `/list`        | Shopping List  | Protected    |
| `/profile`     | Profile Page   | Protected    |
| `*`            | 404 Page       | Public       |

**Routing Rules:**

- Authenticated users cannot access `/login` or `/register`
- Non-authenticated users cannot access protected pages

---

## Features
**User Management**

Register: Email, password (hashed), name, surname, cell number

Login: Verify credentials against hashed password

Protected Routes: Only logged-in users can access certain pages

Profile Management: View and update personal information

**Shopping List Management**

Create, read, update, delete shopping lists

Add, update, delete items in shopping lists

Search by name (URL-driven query)

Sort by name, category, date added (URL-driven)

Categories or tags for better organization

Share shopping lists with other users

**Redux State Structure**

authSlice: Manages current user, token, status, errors

listsSlice: Manages shopping lists, items, status, errors

uiSlice (optional): Manages loading, notifications, modals

---

**URL-driven Search and Sort**

Search query example: ?q=milk

Sort query example: ?sort=name_asc or ?sort=category_desc

Components listen to URL changes using useSearchParams()

UI updates dynamically when URL parameters change

**Authentication and Authorization**

Registration: Password hashed using bcryptjs before sending to JSON Server

Login: Password verified client-side against stored hash

Protected routes: <ProtectedRoute> component checks Redux state or localStorage

Security note: Client-side hashing is acceptable for the assignment but not suitable for production

**Sharing Shopping Lists**

sharedWith array contains IDs of users who have access

Owner can add users by email

Only shared users or owner can view and edit a list

**Components**

Navbar.tsx — Navigation bar

AuthForm.tsx — Login/Register form

ProtectedRoute.tsx — Guarded routes

ListCard.tsx — Shopping list card

ListDetail.tsx — Shopping list items management

ItemRow.tsx — Single item row

Modal.tsx — Reusable modal for edit/delete confirmation

SearchSortBar.tsx — Search input and sort dropdown

ProfileForm.tsx — User profile view and edit

**Development Workflow**

main branch: Planning only

development branch: Active development

---

**How to Run**

1. Clone repo and switch to development branch:
git clone [<repo-url>](https://github.com/Ashley-Blu/task5-react-redux-shoppingList)
git checkout -b development

2. Install dependencies:
npm install

3. Start JSON Server:
npx json-server --watch db.json --port 5000

4. Start development server:
npm run dev  # or npm start

5. Visit the app at http://localhost:5173 or your provided locat url

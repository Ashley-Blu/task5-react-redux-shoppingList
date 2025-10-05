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

## Data Model (`db.json`)

Example structure for JSON Server:

```json
{
  "users": [
    {
      "id": 1,
      "email": "ashley@example.com",
      "passwordHash": "<hashed-password>",
      "name": "Ashley",
      "surname": "Matsekoleng",
      "username": "Bluey",
      "cell": "+27XXXXXXXXX",
    }
  ],
  "shoppingLists": [
    {
      "id": 1,
      "ownerId": 1,
      "name": "Weekly Groceries",
      "category": "Meat",
      "notes": "For Friday braai",
      "sharedWith": [2],
      "items": [
        { "id": 1, "name": "Wors", "quantity": "2", "image": "url"},
        { "id": 2, "name": "Chicken", "quantity": "2", "image": "url" }
      ]
    }
  ]
}

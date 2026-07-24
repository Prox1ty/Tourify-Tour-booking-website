# 🌍 Tourify

[Tourify](https://tourify-tour-booking-website.vercel.app/) is a modern travel and tour discovery web application built with **React**, **Vite**, and **Tailwind CSS**. It allows users to browse destinations, search for tours, filter them based on different criteria, save favorites, and explore travel information through a clean and responsive interface.

---

## ✨ Features

- 🏝️ Beautiful landing page with immersive hero section
- 🔍 Live search functionality
- 🎯 Advanced filtering
  - Category
  - Continent
  - Maximum Price
  - Maximum Duration
  - Minimum Rating
- ❤️ Save favorite tours (stored in Local Storage)
- ⭐ Featured destinations carousel with smooth animations
- 📱 Fully responsive layout
- 🌙 Dark / Light theme support
- ⚡ Fast performance using Vite
- 🎨 Modern UI built with Tailwind CSS
- 🎞️ Smooth animations using Framer Motion

---

## 📸 Pages

### Home
- Hero section
- Popular Destinations
- Why Choose Us
- Search tours

### Tours
- Search tours
- Filter tours
- Browse all available destinations
- Favorite tours

### About
Learn about Tourify, its mission, and travel philosophy.

### Contact
Simple contact page with company information and contact form.

---

## 🛠️ Built With

- React
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- React Icons
- Context API

---

## 📂 Project Structure

```
src/
│
├── assets/
├── components/
│   ├── cards/
│   ├── home/
│   ├── searchFilters/
│   └── ...
│
├── contexts/
│
├── data/
│
├── layouts/
│
├── pages/
│
├── shared/
│
└── App.jsx
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/yourusername/tourify.git
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

---

## 🎨 Technologies Used

| Technology | Purpose |
|------------|---------|
| React | Frontend Framework |
| Vite | Build Tool |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| React Router | Routing |
| React Icons | Icons |
| Context API | Global State Management |
| Local Storage | Persisting Favorites |

---

## 🧠 State Management

Tourify uses the React Context API for global state management.

The global state includes:

- Available tours
- Search query
- Filters
- Sorting
- Favorites

---

## 🔎 Filtering

Tours can currently be filtered by:

- Category
- Continent
- Maximum Price
- Maximum Duration
- Minimum Rating

Filters update the displayed tours instantly.

---

## ❤️ Favorites

Users can save their favorite tours.

Favorites are stored in the browser using Local Storage so they remain available after refreshing the page.

---

## 🎯 Future Improvements

- Tour Details page
- Booking functionality
- User authentication
- Backend integration
- Reviews & Ratings
- Pagination
- Wishlist synchronization
- Map integration
- Weather API
- Multi-language support

---

## 📜 License

This project is intended for educational purposes.

---

## 👨‍💻 Author

Developed by **Prox1ty** as a React frontend project.
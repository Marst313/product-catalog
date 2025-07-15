# 🏍️ Product Catalog + Review Form

A simple and modern product catalog application built using **React + TypeScript + Vite**, styled with **Tailwind CSS** and **shadcn/ui**. Features include product listing, filtering, detailed view, wishlist management (with localStorage), and a review form.

## ✨ Features

- ✅ Fetch product list from [Fake Store API](https://fakestoreapi.com/)
- 🔍 Product search by name
- 🧹 Filter products by category
- ✍️ Product detail page with review form (with validation)
- ❤️ Wishlist system using `localStorage`
- 💅 Responsive UI using `Tailwind CSS` + `shadcn/ui`
- 🔔 Toast notifications via `sonner`

---

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/your-username/product-catalog-app.git
cd product-catalog-app
```

### 2. Install dependencies

```bash
pnpm install
# or
npm install
```

### 3. Run the development server

```bash
pnpm dev
# or
npm run dev
```

---

## 🗂️ Project Structure

```
src/
│
├── components/             # Reusable UI & layout components
│   ├── ProductCard.tsx
│   ├── ProductDetailSkeleton.tsx
│   ├── Navbar.tsx
│   └── ui/                 # shadcn-based UI components
│
├── context/                # Global state (wishlist)
│   └── WishlistContext.tsx
│
├── hooks/                  # Custom hooks
│   ├── useProductDetail.ts
│   └── useProductList.ts
│   └── useReviewForm.ts
│
├── lib/                    # API calls & helpers
│   ├── api.ts              # fetchProducts, fetchCategories, fetchProductById
│   ├── localstorage.ts     # wishlist storage helpers
│   └── validation.ts       # review form validation logic
│   └── utils.ts            # merge classname
│
├── pages/                  # Page components (routed)
│   ├── ProductDetail.tsx
│   ├── ProductList.tsx
│   ├── ProductNotFound.tsx
│   └── Wishlist.tsx
│
├── types/                  # Shared TypeScript types
│   └── product.ts
│
├── App.tsx                 # App entry, routing
└── main.tsx                # ReactDOM entry
```

---

## 🔑 Core Logic

### 🛒 Wishlist System

- `WishlistContext` uses React Context to manage wishlist state globally.
- Data is persisted to `localStorage`.
- `isInWishlist`, `addToWishlist`, and `removeFromWishlist` are exposed via context and used throughout the app.

### 🧾 Review Form

- Controlled form using a custom `useReviewForm` hook.
- Validated manually via `validation.ts` before submission.
- Shows error messages for `name`, `email`, and `rating`.

### 📦 Product Data Fetching

- Products and categories are fetched via `lib/api.ts` from `https://fakestoreapi.com/`.
- Product details are fetched by ID using `fetchProductById`.

---

## 💻 Tech Stack

- **React 18 + Vite**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Sonner (for toast notifications)**
- **React Router DOM**

---

## 🧑‍💻 Author

Made with ❤️ by [I Nyoman Karma Dharma Nalendra Wardana](https://inyomandharma.vercel.app/)

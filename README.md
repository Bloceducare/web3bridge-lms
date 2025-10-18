# 🧩 Icon Management — SVG Imports

The `assests/icons/index.ts` directoryx contains all the **SVG icons** used across the **Web3Bridge LMS** project.  
It provides a **centralized and organized** way to manage and import icons efficiently.

---

## 📦 Purpose

The `index.ts` file serves as a **single export hub** for all SVG assets.  
By consolidating imports here, you can easily use icons anywhere in the app **without repetitive imports** from individual files.

---

## ⚙️ How It Works

Each SVG is imported using the `?url` suffix so that it can be referenced as an image URL in your React components:

```ts
import Logo from "./logo.svg?url";
```

This approach keeps the icons lightweight, cacheable, and easy to manage in both development and production.

---

## 🪄 Example Usage

Once configured, you can import and use any icon directly from this module:

```tsx
import { Logo, SearchIcon, Filter } from "@/assets/icons";

export default function Header() {
  return (
    <header className="flex items-center gap-4">
      <img src={Logo} alt="Logo" className="w-10 h-10" />
      <img src={SearchIcon} alt="Search" className="w-5 h-5" />
      <img src={Filter} alt="Filter" className="w-5 h-5" />
    </header>
  );
}
```

---

## 🗂️ Benefits of This Approach

- ✅ **Centralized Management** — all icons live in one place.  
- ⚡ **Simplified Imports** — no need to remember file paths.  
- 🧱 **Reusable & Consistent** — same icon assets used across components.  
- 🚀 **Optimized for Next.js** — uses the built-in asset loader for performance.

---

## 🧠 Tip for Developers

Whenever you add a new SVG file:
1. Place it in the `icons` directory.  
2. Import it in `index.ts` using `?url`.  
3. Add it to the export list at the bottom of the file.

That’s it — you can now use it anywhere in your codebase!

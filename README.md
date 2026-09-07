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

# 🎨 Tailwind CSS Color Variables

This project uses **CSS custom properties (variables)** to define a flexible color system that integrates seamlessly with **Tailwind CSS**.  
All colors are defined in `tailwind.config.ts` and reference their respective CSS variables declared in the global stylesheet (e.g. `globals.css` or `:root`).

This allows easy theming and dynamic color updates without editing the Tailwind configuration directly.

---

## 🧩 Color Structure Overview

| Category | Key | Variable | Description |
|-----------|-----|-----------|-------------|
| **Base** | `background` | `--background` | Default background color used across the app. |
|  | `foreground` | `--foreground` | Primary text or surface foreground color. |
| **Brand Colors** | `primary` | `--color-primary` | The brand’s main color (used for highlights, buttons, etc.). |
|  | `secondary` | `--color-secondary` | A supporting brand color. |
|  | `tertiary` | `--color-tertiary` | Tertiary accent or highlight color. |
| **Text Colors** | `primary-red` | `--text-primary-red` | Main red text color. |
|  | `primary-black` | `--text-primary-black` | Standard black text color. |
|  | `vibrant-grey` | `--text-vibrant-grey` | Neutral gray text color for secondary content. |
|  | `light-red` | `--text-light-red` | Lighter red tone for text highlights. |
| **Status Colors** | `danger` | `--color-danger` | Used for error states and alerts. |
|  | `warning` | `--color-warning` | Used for warning messages or caution areas. |
|  | `success` | `--color-success` | Indicates successful actions or confirmations. |
| **Background Colors** | `primary-white` | `--bg-primary-white` | Primary white background (main container). |
|  | `secondary-white` | `--bg-secondary-white` | Secondary white background (panels, cards). |
|  | `dark-white` | `--bg-dark-white` | Slightly darker white shade. |
|  | `gray-white` | `--bg-gray-white` | Gray-tinted background white. |
|  | `tertiary-white` | `--bg-tertiary-white` | Used for tertiary background surfaces. |
|  | `primary-red-bg` | `--bg-primary-red` | Red background variant for branding or alerts. |
| **Buttons** | `button-primary-bg` | `--button-primary-bg` | Default background color for primary buttons. |
|  | `button-primary-text` | `--button-primary-text` | Text color for primary buttons. |
| **Borders** | `border-light` | `--border-light` | Light border color for surfaces or components. |
|  | `border-button` | `--button-border` | Border color for buttons and inputs. |

---

## 🧠 Usage Examples

### Using Tailwind Classes:
```tsx
<div className="bg-primary text-primary-white border-border-light">
  Button Example
</div>
```

### Using CSS Variables Directly:
```css
.my-button {
  background-color: var(--button-primary-bg);
  color: var(--button-primary-text);
  border: 1px solid var(--button-border);
}
```

---

## 💡 Theming
You can easily switch themes (e.g., light/dark mode) by redefining these variables in your CSS:

```css
:root {
  --color-primary: #AE0730;
  --color-secondary: #6D031D;
  --color-tertiary: #FCF7F2;
  --background: #ffffff;
  --foreground: #000000;
}

[data-theme="dark"] {
  --background: #0a0a0a;
  --foreground: #f1f1f1;
}
```
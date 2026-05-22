# Getreelax – Checkout Review Page

Frontend Developer Intern Assignment  
Built with **React JS + Vite**

---

## Project Structure

```
src/
├── components/
│   ├── icons/
│   │   └── index.jsx          # All SVG icons as named exports
│   ├── ui/
│   │   ├── InputField.jsx      # Reusable text input component
│   │   └── SelectField.jsx     # Reusable dropdown select component
│   ├── BillingForm.jsx         # Billing information form panel
│   ├── Navbar.jsx              # Top navigation bar
│   └── OrderSummary.jsx        # Order summary + coupon + price panel
├── pages/
│   └── CheckoutReview.jsx      # Main page composing all components
├── styles/
│   └── global.css              # Global reset + responsive breakpoints
├── App.jsx
└── main.jsx
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

---

## Features

- **Pixel-perfect** match to Figma design
- **Component-based** architecture — every section is a separate reusable component
- **Responsive** — adapts gracefully to tablet and mobile screens
- **Interactive Order Summary**
  - Toggle wallet balance (₹500)
  - Select / deselect coupon codes (WELCOME20, ANNUAL50)
  - Enter coupon manually with validation
  - Live price recalculation (discount + 18% GST)
- **Billing Form** with dropdown-linked State → City fields
- Clean, structured, readable code throughout

---

## Tech Stack

| Tool | Version |
|------|---------|
| React | 18 |
| Vite  | 4  |
| CSS   | Inline styles + global.css |

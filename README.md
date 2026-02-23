# 🧮 Simple Calculator — JavaScript Project

A clean, responsive, and fully functional **web-based calculator** built using **HTML, CSS, and Vanilla JavaScript**.
This project focuses on core JavaScript logic, DOM manipulation, and UI interaction while maintaining a minimal and modern design.

---

## ✨ Features

* 🔢 Basic arithmetic operations

  * Addition (+)
  * Subtraction (−)
  * Multiplication (×)
  * Division (÷)
  * Modulus (%)

* 🧹 **AC (All Clear)** — Reset entire display

* ⌫ **Backspace** — Remove last character

* 🔘 Double zero (`00`) input support

* 🔵 Decimal calculations

* 🚫 Prevents multiple operators in sequence

* ⚠️ Handles invalid expressions (`Undefined`)

* 📱 Fully responsive layout

---

## 🖥️ Tech Stack

* **HTML5** → Structure
* **CSS3** → Styling & responsiveness
* **JavaScript (Vanilla)** → Logic & calculations
* **Material Symbols** → Backspace icon

---

## 📂 Project Structure

```
calculator-project/
│
├── index.html     # Calculator layout
├── style.css     # UI styling & responsiveness
└── script.js     # Calculation logic
```

---

## ⚙️ How It Works

* Each button contains a `data-value` attribute.
* JavaScript captures button clicks via event listeners.
* Inputs are appended to the display dynamically.
* Operators are validated to avoid duplicates.
* Final expressions are evaluated using `eval()`.

---

## 🧠 Input Handling Logic

| Case                          | Behavior               |
| ----------------------------- | ---------------------- |
| Operator on empty display     | Ignored                |
| Multiple operators            | Replaces last operator |
| Decimal at start              | Converts to `0.`       |
| Backspace                     | Removes last character |
| Invalid ending operator + `=` | Shows `Undefined`      |

---

## 🎨 UI Highlights

* Circular modern buttons
* Hover & click animations
* Responsive grid layout
* Scrollable display for long expressions
* Dark theme calculator body

---

## 🚀 Getting Started

1. Clone the repository

```bash
git clone https://github.com/your-username/calculator-project.git
```

2. Open `index.html` in your browser.

No build tools or dependencies required.

---

## 📸 Preview

A minimal, mobile-friendly calculator interface with smooth button interactions and real-time display updates.

![Screenshot](Calculator SS.png)

---

## 🔮 Future Improvements

* Keyboard input support
* Scientific calculator functions
* History panel
* Theme switcher
* Safer expression parser (without `eval`)

---

## 📜 License

This project is open-source and free to use for learning and development purposes.

---

**If you like this project, consider giving it a ⭐ on GitHub.**

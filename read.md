# JobTrack Dashboard

## Features
- Responsive dashboard layout
- Tab filtering (All / Interview / Rejected)
- Dynamic job count updates
- Toggle Interview & Rejected
- Delete job functionality
- Empty state UI

---

## Answers to Questions

### 1. Difference between getElementById, getElementsByClassName, querySelector / querySelectorAll?

- getElementById: Selects a single element by ID.
- getElementsByClassName: Returns a live HTMLCollection of elements with a class.
- querySelector: Returns the first matching CSS selector.
- querySelectorAll: Returns a static NodeList of all matching elements.

---

### 2. How do you create and insert a new element into the DOM?

Use document.createElement() and appendChild().

Example:
```javascript
const div = document.createElement("div");
div.innerText = "New Element";
document.body.appendChild(div);
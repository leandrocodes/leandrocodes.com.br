# Tailwind Color Usage Guide

## Custom Colors Available

### Primary Colors (Teal/Cyan Accent)
```html
<!-- Backgrounds -->
<div class="bg-primary-500">Main accent background</div>
<div class="bg-primary-600">Darker accent (hover states)</div>

<!-- Text -->
<h1 class="text-primary-500">Accent text</h1>
<button class="text-primary-600 hover:text-primary-500">Button text</button>
```

### Dark Theme Colors
```html
<!-- Main background -->
<body class="bg-dark-700">Main page background</body>

<!-- Card/section backgrounds -->
<div class="bg-dark-600">Card background</div>
<div class="bg-dark-800">Darker surface</div>

<!-- Text colors -->
<p class="text-white">Primary white text</p>
<p class="text-text-secondary">Secondary gray text</p>
<p class="text-text-muted">Muted text</p>
```

## Example Component Classes

### Hero Section (like in your design)
```html
<section class="bg-dark-700 min-h-screen text-white">
  <h1 class="text-primary-500 text-6xl font-light">
    Frontend<br>Developer
  </h1>
  <p class="text-text-secondary">based in Brazil.</p>
  <button class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded transition-colors">
    Resume
  </button>
</section>
```

### Section Headers
```html
<h2 class="text-primary-500 text-5xl font-light mb-8">about.</h2>
<h2 class="text-primary-500 text-5xl font-light mb-8">work.</h2>
<h2 class="text-primary-500 text-5xl font-light mb-8">contact.</h2>
```

### Cards/Content Areas
```html
<div class="bg-dark-600 p-6 rounded-lg shadow-dark">
  <h3 class="text-white text-xl mb-4">Some Case Study</h3>
  <p class="text-text-secondary">Lorem ipsum dolor sit amet...</p>
</div>
```

### Buttons
```html
<!-- Primary button -->
<button class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded transition-colors">
  Primary Action
</button>

<!-- Secondary button -->
<button class="border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-6 py-3 rounded transition-colors">
  Secondary Action
</button>
```

### Gradients
```html
<div class="bg-gradient-dark">Dark gradient background</div>
<div class="bg-gradient-accent">Accent gradient background</div>
```

## Direct Color References
- **Main Background**: `bg-dark-700` (#2C3E50)
- **Card Background**: `bg-dark-600` (#2D3748)  
- **Darker Surface**: `bg-dark-800` (#1A252F)
- **Main Accent**: `bg-primary-500` or `text-primary-500` (#52C4B0)
- **Primary Text**: `text-white` (#FFFFFF)
- **Secondary Text**: `text-text-secondary` (#BDC3C7)
- **Muted Text**: `text-text-muted` (#95A5A6)

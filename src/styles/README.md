# CrabLabs CSS Architecture

## Overview

The CSS has been refactored into a modular structure for better maintainability and to maximize reusability of global styles across components.

## File Structure

```
src/styles/
├── global.css              # Main entry point (imports all modules)
└── modules/
    ├── variables.css       # CSS custom properties (colors, fonts, transitions)
    ├── base.css           # Reset and base styles
    ├── typography.css     # Typography styles (headings, paragraphs)
    ├── layout.css         # Layout utilities (containers, page structure)
    ├── buttons.css        # Button system (all button variants)
    ├── forms.css          # Form inputs and controls
    ├── components.css     # Reusable components (cards, sections, icons)
    ├── patterns.css       # Design patterns (industry cards, pricing, CTAs)
    └── utilities.css      # Utility classes (accessibility, print)
```

## Module Descriptions

### `variables.css`
CSS custom properties for consistency across the site:
- Typography: `--font-display`, `--font-body`, `--font-mono`
- Colors: `--neutral-*`, `--brand-*`
- Transitions: `--transition-fast`, `--transition-base`

### `base.css`
Foundational styles and resets:
- Box-sizing reset
- HTML/body defaults
- Smooth scrolling

### `typography.css`
Text-related styles:
- Heading defaults (h1-h6)
- Paragraph styles
- Font utility classes

### `layout.css`
Page structure:
- `.page-container` - Main page wrapper with top padding
- `.content-container` - Centered content container

### `buttons.css`
Complete button system:
- `.btn-brand` - Primary orange button
- `.btn-primary` - Dark button
- `.btn-secondary` - Outlined button
- `.btn-secondary-dark` - Dark background variant
- Size modifiers: `.btn-sm`, `.btn-lg`

### `forms.css`
Form elements:
- `.form-input`, `.form-select`, `.form-textarea`
- `.form-label`
- Focus states and validation

### `components.css`
Reusable component patterns:
- Cards (`.card`, `.card-dark`)
- Section headers (`.section-header`, `.section-title`, `.section-label`)
- Page headers (`.page-header-*`)
- List items (`.list-item`)
- Icons (`.icon-sm`, `.icon-md`, `.icon-lg`)

### `patterns.css`
Complex design patterns:
- Industry cards with color variants
- Process steps with numbered circles
- Pricing cards
- CTA sections

### `utilities.css`
Utility classes and special cases:
- Accessibility (focus states, screen reader only)
- Reduced motion support
- Print styles

## Usage Guidelines

### 1. Use Global Classes First
Before writing custom styles, check if a global class exists:

```astro
<!-- ✅ Good: Use global classes -->
<button class="btn-brand btn-lg">Get Started</button>

<!-- ❌ Avoid: Custom inline styles -->
<button style="background: orange; padding: 1rem 2rem;">Get Started</button>
```

### 2. Leverage CSS Variables
Use custom properties for consistency:

```css
/* ✅ Good: Use variables */
.custom-element {
  background: var(--neutral-900);
  color: var(--brand-600);
  transition: all var(--transition-base);
}

/* ❌ Avoid: Hard-coded values */
.custom-element {
  background: #171717;
  color: #ea580c;
  transition: all 200ms ease;
}
```

### 3. Compose Classes
Combine utility classes rather than creating new ones:

```astro
<!-- ✅ Good: Compose existing classes -->
<div class="card">
  <h3 class="section-title">Title</h3>
  <p class="section-description">Description</p>
</div>

<!-- ❌ Avoid: Custom class for each variant -->
<div class="custom-card-with-title-and-description">...</div>
```

### 4. When to Create New Styles
Only create component-specific styles when:
1. The pattern is truly unique to that component
2. It can't be composed from existing classes
3. It's complex enough to warrant extraction

Place component-specific styles in a `<style>` block within the component:

```astro
---
// Component logic
---

<div class="custom-component">
  <!-- Use global classes where possible -->
  <button class="btn-brand">Click me</button>
</div>

<style>
  /* Only truly custom styles here */
  .custom-component {
    /* Unique layout that can't be achieved with globals */
  }
</style>
```

## Modifying the System

### Adding New Variables
Add to `modules/variables.css`:

```css
:root {
  --new-variable: value;
}
```

### Adding New Utility Classes
Add to the appropriate module (`buttons.css`, `components.css`, etc.)

### Creating New Modules
If you need a new category (e.g., `animations.css`):
1. Create `src/styles/modules/animations.css`
2. Add `@import './modules/animations.css';` to `global.css`

## Performance Notes

- CSS imports are resolved at build time by Astro
- No runtime performance impact from modular structure
- Unused CSS is automatically tree-shaken by Astro
- Total CSS size remains minimal (~15KB minified + gzipped)

## Benefits of This Structure

1. **Maintainability**: Changes are isolated to specific modules
2. **Discoverability**: Easy to find where styles are defined
3. **Reusability**: Global classes reduce code duplication
4. **Consistency**: CSS variables ensure design system compliance
5. **Scalability**: New modules can be added without affecting existing code

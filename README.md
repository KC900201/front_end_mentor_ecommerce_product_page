# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Design specifications](#design-specifications)
  - [Layout](#layout)
  - [Colors](#colors)
  - [Typography](#typography)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![Desktop View](./public/design/desktop-design.jpg)
![Mobile View](./public/design/mobile-design.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/KC900201/front_end_mentor_ecommerce_product_page)
- Live Site URL: [Netlify Deployment](https://fe-mentor-ecommerce-product-page.netlify.app/#)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React 19.1.1](https://reactjs.org/) - JS library
- [TypeScript 5.9.3](https://www.typescriptlang.org/) - For type safety
- [Vite 7.1.7](https://vitejs.dev/) - Build tool
- [Tailwind CSS v4.1.16](https://tailwindcss.com/) - For styling
- [HeroUI 2.8.5](https://heroui.com/) - UI component library (NextUI fork)
- [Framer Motion 12.23.24](https://www.framer.com/motion/) - For animations
- [Lucide React](https://lucide.dev/) - Icon library
- [React Context API](https://react.dev/reference/react/createContext) - For state management

### What I learned

During this project, I gained significant experience with:

1. **React 19 Compatibility Issues**: Encountered and resolved compatibility challenges between React 19 and UI libraries, particularly with HeroUI Modal components. Learned to debug rendering issues using browser DevTools and understanding how React's rendering lifecycle changed.

2. **Tailwind CSS v4 Migration**: Successfully migrated from Tailwind v3 to v4, learning the new `@theme` directive syntax and understanding how utility classes are generated differently in v4.

3. **Modal Implementation Challenges**: Overcame complex modal rendering issues including:
   - Removing render prop patterns that caused ARIA attribute conflicts
   - Fixing positioning issues with CSS custom properties (`--visual-viewport-height`)
   - Using `!important` modifiers to override framework defaults
   - Implementing proper backdrop blur effects

4. **Component Architecture**: Structured the application using atomic design principles:
   - Atoms: Basic UI elements (Buttons, Images, Icons)
   - Molecules: Composite components (ProductModal, CartCard, Navigation menus)
   - Organisms: Complex sections (Header, ProductGallery, Cart)
   - Pages: Full page compositions

5. **Context API for Cart Management**: Implemented a robust shopping cart using React Context with features like:
   - Adding/removing items
   - Quantity management
   - Persistent cart state
   - Type-safe operations with TypeScript

```tsx
// Example: Fixed Modal positioning issue
<Modal
  isOpen={isOpen}
  onOpenChange={onOpenChange}
  disableAnimation
  classNames={{
    wrapper: "!fixed !inset-0 !h-full !w-full items-center justify-center",
    backdrop: "bg-black/90 backdrop-blur-lg",
  }}
>
```

```css
/* Example: Custom sr-only utility for Tailwind v4 */
@layer utilities {
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
}
```

### Continued development

Areas I want to focus on in future projects:

- **Testing**: Implement comprehensive unit and integration tests using Vitest and React Testing Library
- **Accessibility**: Further improve keyboard navigation and screen reader support
- **Performance Optimization**: Implement code splitting and lazy loading for better performance
- **Animation Refinement**: Create smoother transitions and micro-interactions
- **State Management**: Explore Zustand or Redux Toolkit for more complex state management scenarios
- **Backend Integration**: Connect to a real API for product data and cart persistence

## Design specifications

### Layout

The designs were created to the following widths:

- **Mobile**: 375px
- **Desktop**: 1440px

The implementation is fully responsive and meets WCAG requirements across all screen sizes from 320px to large screens.

### Colors

#### Primary Colors

- **Orange**: `hsl(26, 100%, 55%)` - Primary brand color, used for CTAs and accents
- **Pale Orange**: `hsl(25, 100%, 94%)` - Secondary brand color, used for backgrounds

#### Neutral Colors

- **Very Dark Blue**: `hsl(220, 13%, 13%)` - Primary text color (foreground)
- **Dark Grayish Blue**: `hsl(219, 9%, 45%)` - Muted text color
- **Grayish Blue**: `hsl(220, 14%, 75%)` - Border and input colors
- **Light Grayish Blue**: `hsl(223, 64%, 98%)` - Muted backgrounds
- **White**: `hsl(0, 0%, 100%)` - Background and card colors
- **Black**: `hsl(0, 0%, 0%)` - Used with 75-90% opacity for modal backdrop

These colors are implemented using CSS custom properties in Tailwind v4's `@theme` directive:

```css
@theme {
  --color-primary: hsl(26 100% 55%);
  --color-secondary: hsl(25 100% 94%);
  --color-foreground: hsl(220 13% 13%);
  --color-muted-foreground: hsl(219 9% 45%);
  --color-border: hsl(220 14% 75%);
  --color-muted: hsl(223 64% 98%);
  --color-background: hsl(0 0% 100%);
}
```

### Typography

#### Font Family

- **Primary**: [Kumbh Sans](https://fonts.google.com/specimen/Kumbh+Sans) - Used throughout the application
- **Fallback**: `sans-serif`

#### Font Weights

- **Regular**: 400 - Used for body text and secondary content
- **Bold**: 700 - Used for headings, prices, and emphasized text

#### Font Sizes

- **Body Copy**: 16px (1rem) - Base font size for paragraph text
- **Responsive sizing**: Implemented using Tailwind's responsive utilities

Implementation in Tailwind v4:

```css
@theme {
  --font-family-sans: "Kumbh Sans", sans-serif;
}
```

## Author

- GitHub - [@KC900201](https://github.com/KC900201)
- Frontend Mentor - [@KC900201](https://www.frontendmentor.io/profile/KC900201)

---
name: GLIIMMER
colors:
  surface: '#faf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#faf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1a'
  on-surface-variant: '#544244'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#877273'
  outline-variant: '#dac0c2'
  surface-tint: '#9a414e'
  primary: '#3b000e'
  on-primary: '#ffffff'
  primary-container: '#5a1020'
  on-primary-container: '#dd7683'
  inverse-primary: '#ffb2b9'
  secondary: '#b4243d'
  on-secondary: '#ffffff'
  secondary-container: '#fc5b6d'
  on-secondary-container: '#600017'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cca830'
  on-tertiary-container: '#4f3e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdadc'
  primary-fixed-dim: '#ffb2b9'
  on-primary-fixed: '#400010'
  on-primary-fixed-variant: '#7c2a38'
  secondary-fixed: '#ffdada'
  secondary-fixed-dim: '#ffb3b6'
  on-secondary-fixed: '#40000c'
  on-secondary-fixed-variant: '#920128'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#faf9f6'
  on-background: '#1a1c1a'
  surface-variant: '#e3e2e0'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max-width: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

The design system is engineered for a high-end, feminine luxury e-commerce experience. It captures the essence of a premium editorial magazine, blending the sophistication of professional nail artistry with the accessibility of digital shopping.

The visual style is **Minimalist-Glamour**: a marriage of expansive white space (using warm ivory tones) and high-contrast, "glossy" UI elements. It evokes an emotional response of indulgence, precision, and timeless beauty. Every interaction should feel intentional and smooth, mirroring the application of a perfect coat of lacquer. Surfaces should leverage subtle gradients and high-specular highlights to simulate the reflective quality of wet nail polish.

## Colors

The palette is anchored in depth and warmth. The **Deep Wine** (#5A1020) serves as the primary brand anchor, used for headers, high-level navigation, and primary call-to-actions to establish authority and luxury. **Ruby Red** (#A71935) acts as a vibrant secondary color for interactive states and highlighting curated collections.

The **Champagne Gold** (#D4AF37) is reserved strictly for accents—borders, icons, and subtle dividers—providing a metallic "jewelry" feel to the interface. The background is a **Warm Ivory** (#FAF9F6) rather than a pure white, softening the visual experience and providing a more "organic" and premium skin-tone-adjacent canvas for the product colors to pop.

## Typography

This design system utilizes a high-contrast typographic pairing. **Bodoni Moda** is the "Display" face, bringing high-fashion editorial authority. It should be used for product names, section headers, and promotional banners. Its high-contrast strokes reflect the precision of beauty tools.

**Montserrat** provides a clean, functional counterpoint for functional text. Body copy should use generous line height to maintain "airiness." Labels and small metadata should use Montserrat in a semi-bold weight with increased letter spacing and uppercase styling to mimic the labeling found on high-end cosmetics packaging.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to ensure an editorial, "lookbook" feel. Content is centered with significant outer margins to emphasize the premium nature of the brand—nothing should feel crowded.

A 12-column grid is used for desktop (1280px max-width), transitioning to a 4-column grid for mobile. Spacing rhythm is strictly based on 8px increments. Use exaggerated vertical padding (80px–120px) between homepage sections to allow each "collection" to breathe. For product grids, use a 24px gutter to maintain a clean distinction between high-resolution product imagery.

## Elevation & Depth

This design system avoids traditional heavy shadows in favor of **Tonal Layers** and **Glossy Reflectivity**. Depth is communicated through:
1.  **Glassmorphism:** Use subtle backdrop blurs (10px–16px) on navigation bars and floating quick-buy panels to simulate high-shine glass containers.
2.  **Inner Glows:** Instead of drop shadows, use thin (1px) inner borders in Champagne Gold or a slightly lighter Wine tint to create a "beveled" or "domed" effect on buttons and cards, mimicking a cured top-coat finish.
3.  **Soft Ambient Shadows:** When a surface must be elevated (e.g., a cart drawer), use a very diffused #5A1020 tint shadow at 5% opacity to maintain color harmony.

## Shapes

The shape language is **Soft** and architectural. While the brand is feminine, it avoids overly "bubbly" or circular elements to maintain its luxury status. 

Rectangular elements (cards, inputs) use a 0.25rem (4px) corner radius, providing a hint of softness while maintaining sharp, professional edges. Buttons and interactive chips may use a slightly more pronounced radius (8px) to signify touchability, but never a full pill-shape, which can appear too casual for this aesthetic.

## Components

-   **Buttons:** Primary buttons are solid Deep Wine with a 1px Champagne Gold border. Hover states should include a subtle "gloss" sweep animation (a diagonal white gradient moving across the surface).
-   **Product Cards:** Cards are borderless with a Warm Ivory background. On hover, the image should scale slightly, and a "Quick Add" button should fade in using a glassmorphic blur background.
-   **Input Fields:** Use "Ghost" style inputs—only a bottom border in Gold (1px). Labels should be in the `label-sm` Montserrat style, floating above the line.
-   **Chips/Swatches:** Color swatches must be circular and rendered with a custom "gloss" shader to represent the finish (Cream, Shimmer, or Matte) of the nail paint.
-   **Navigation:** The main header is minimal, featuring centered branding in Bodoni Moda. Icons (Cart, Account) are thin-stroke (1.5pt) gold-tinted vectors.
-   **Personalization Trays:** A dedicated component for "Virtual Try-On" should use a floating, frosted-glass panel that docks at the bottom of the viewport.
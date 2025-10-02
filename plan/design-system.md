# Design System - Marketing Agency Website

## Theme Selection

**CUSTOM THEME: Electric Agency**

A bold, vibrant design system for professional marketing agencies. Combines electric purple, teal, and coral accents on a sophisticated dark background to create attention-grabbing yet trustworthy experiences.

**Light Mode Colors:**
- Background: hsl(222, 47%, 11%) (deep navy - #0F172A)
- Card: hsl(217, 33%, 17%) (dark slate)
- Primary: hsl(258, 82%, 63%) (electric purple - #8B5CF6)
- Secondary: hsl(172, 82%, 40%) (vibrant teal - #14B8A6)
- Accent: hsl(0, 100%, 70%) (coral - #FF6B6B)
- Text: hsl(210, 40%, 98%) (almost white)
- Muted: hsl(215, 20%, 65%) (muted blue-gray)
- Border: hsl(217, 33%, 25%) (subtle dark border)

**Dark Mode Colors:**
- Background: hsl(222, 47%, 8%) (deeper navy)
- Card: hsl(217, 33%, 12%) (darker slate)
- Primary: hsl(258, 82%, 63%) (electric purple - same)
- Secondary: hsl(172, 82%, 40%) (vibrant teal - same)
- Accent: hsl(0, 100%, 70%) (coral - same)
- Text: hsl(210, 40%, 98%) (almost white)
- Muted: hsl(215, 20%, 55%) (darker muted)
- Border: hsl(217, 33%, 18%) (darker border)

**Preview Colors:**
- Color 1: hsl(258, 82%, 63%) - Electric purple
- Color 2: hsl(172, 82%, 40%) - Teal
- Color 3: hsl(0, 100%, 70%) - Coral

---

## Foundations

### Color Tokens & Usage

**Primary Palette:**
- `primary`: Electric purple (#8B5CF6) - CTAs, main actions, links, key highlights
- `secondary`: Teal (#14B8A6) - Supporting actions, icons, accents in sections
- `accent`: Coral (#FF6B6B) - Urgent CTAs, special highlights, testimonial accents

**Neutral Palette:**
- `background`: Deep navy (#0F172A) - Page background, creates bold foundation
- `card`: Dark slate - Content containers, service cards, testimonial boxes
- `text`: Almost white - Primary text, headings, body content
- `muted`: Blue-gray - Secondary text, captions, metadata
- `border`: Subtle dark - Card borders, dividers, input fields

**Semantic Colors:**
- `success`: hsl(142, 76%, 45%) - Success states, positive feedback
- `warning`: hsl(45, 100%, 60%) - Warning states, attention
- `error`: hsl(0, 84%, 60%) - Error states, validation
- `info`: hsl(200, 98%, 48%) - Info messages, tooltips

### Typography

**Font Family:**
- Primary: 'Inter' - Clean, modern, professional for body and UI
- Heading: 'Poppins' - Bold, attention-grabbing for headlines
- Monospace: 'JetBrains Mono' - Code snippets, technical content

**Type Scale:**
- `text-xs`: 0.75rem (12px) - Captions, labels
- `text-sm`: 0.875rem (14px) - Secondary text, metadata
- `text-base`: 1rem (16px) - Body text
- `text-lg`: 1.125rem (18px) - Emphasized text
- `text-xl`: 1.25rem (20px) - Small headings
- `text-2xl`: 1.5rem (24px) - Section subheadings
- `text-3xl`: 1.875rem (30px) - Card headings
- `text-4xl`: 2.25rem (36px) - Page headings
- `text-5xl`: 3rem (48px) - Hero headings (desktop)
- `text-6xl`: 3.75rem (60px) - Large hero text

**Font Weights:**
- `font-normal`: 400 - Body text
- `font-medium`: 500 - Emphasized text, labels
- `font-semibold`: 600 - Subheadings, buttons
- `font-bold`: 700 - Headings, strong emphasis
- `font-extrabold`: 800 - Hero text, major headings

**Line Heights:**
- `leading-tight`: 1.25 - Headlines, compact text
- `leading-normal`: 1.5 - Body text, comfortable reading
- `leading-relaxed`: 1.75 - Long-form content, blog posts

### Spacing & Grid

**Spacing Scale (Tailwind):**
- `space-1`: 0.25rem (4px)
- `space-2`: 0.5rem (8px)
- `space-3`: 0.75rem (12px)
- `space-4`: 1rem (16px)
- `space-6`: 1.5rem (24px)
- `space-8`: 2rem (32px)
- `space-12`: 3rem (48px)
- `space-16`: 4rem (64px)
- `space-24`: 6rem (96px)

**Grid System:**
- Container max-width: 1280px
- Columns: 12-column grid
- Gutters: 24px (space-6)
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

**Section Spacing:**
- Hero: py-24 (96px top/bottom)
- Content sections: py-16 (64px top/bottom)
- Cards: p-6 (24px padding)
- Compact sections: py-12 (48px top/bottom)

### Iconography

**Icon System:**
- Library: Lucide React (installed)
- Size scale: 16px, 20px, 24px, 32px, 48px
- Stroke width: 2px (standard), 2.5px (bold emphasis)
- Style: Outline icons for consistency with modern aesthetic

**Icon Usage:**
- Service cards: 32px icons with secondary color
- Navigation: 24px icons
- CTAs: 20px icons inline with text
- Social media: 24px icons with hover effects

---

## Theming

**Light/Dark Mode Strategy:**
This design uses a dark-first approach where the primary experience is dark mode (reflecting the bold, modern agency vibe). Dark mode is the default.

**Color Mapping:**
- Dark mode (default): Deep navy background with vibrant accent colors
- Light mode (optional): Lighter navy with adjusted text contrast
- Both modes maintain the same vibrant purple, teal, and coral accents

**Contrast Requirements:**
- Text on background: minimum 7:1 ratio
- Interactive elements: minimum 4.5:1 ratio
- Focus indicators: high contrast with 3px outline

---

## Animation & Micro-interactions

**Transition System:**
- Default: 300ms ease-in-out - Standard state changes
- Fast: 150ms ease-out - Hover states, small interactions
- Slow: 500ms ease-in-out - Page transitions, major changes

**Hover Effects:**
- Buttons: Scale 1.05, brightness increase, subtle shadow
- Cards: Lift effect (translateY -4px), shadow increase
- Links: Color shift to lighter tint, underline animation
- Images: Subtle zoom (scale 1.1), overlay fade

**Loading States:**
- Pulse animation for skeleton screens
- Spinner with primary color for async actions
- Progressive image loading with blur-up effect

**Scroll Animations:**
- Fade-in with translateY for section reveals
- Stagger children animations for lists (100ms delay between items)
- Parallax effect for hero backgrounds (subtle)

**Micro-interactions:**
- Button click: Scale down to 0.95, then spring back
- Form focus: Border color shift with glow effect
- Success states: Check icon with bounce animation
- Toast notifications: Slide in from top-right

**CTA Animations:**
- Primary CTAs: Gradient shift animation on hover
- Pulse effect on hero CTA to draw attention
- Shimmer effect on special offer buttons

---

## Dark Mode & Color Contrast Rules (Critical)

- Always use explicit colors - never rely on browser defaults or component variants like 'variant="outline"'
- Force dark mode with CSS: 'html { color-scheme: dark; }' and 'meta name="color-scheme" content="dark"'
- Use high contrast ratios: minimum 4.5:1 for normal text, 3:1 for large text
- Override browser defaults with '!important' for form elements: 'input, textarea, select { background-color: #0F172A !important; color: #ffffff !important; border-color: #334155 !important; }'
- Test in both light and dark system modes - system dark mode can override custom styling
- Use semantic color classes instead of component variants: 'className="bg-slate-800 text-gray-100 border border-slate-700"' not 'variant="outline"'
- Create CSS custom properties for consistency across components
- Quick debugging: check if using 'variant="outline"', add explicit colors, use '!important' if needed, test system modes

### Color Contrast Checklist (apply to all components):

□ No 'variant="outline"' or similar browser-dependent styles
□ Explicit background and text colors specified
□ High contrast ratios (4.5:1+ for text, 3:1+ for large text)
□ Tested with system dark mode ON and OFF
□ Form elements have forced dark styling with !important
□ Badges and buttons use custom classes, not default variants
□ Placeholder text has proper contrast (use text-gray-400)
□ Focus states are visible and accessible (3px outline with primary color)
□ Card backgrounds use explicit bg-slate-800 or bg-card
□ All interactive elements have clear hover states

---

## Component Patterns

### Hero Section
- Full viewport height on desktop (min-h-screen)
- Electric purple gradient background with animated particles
- Large heading (text-5xl/text-6xl) with Poppins font
- Subheading in muted color with normal weight
- Primary CTA (electric purple) + Secondary CTA (teal outline)
- Animated scroll indicator at bottom

### Service Cards
- Dark slate background (bg-card) with border
- 32px teal icon at top
- Bold heading (text-2xl Poppins)
- Description text with leading-relaxed
- Hover: Lift effect with shadow increase
- Optional: Coral accent line at bottom

### Testimonial Component
- Card background with coral accent border-left (4px)
- Quote text in larger size (text-lg)
- Client avatar (rounded-full, 48px)
- Client name (font-semibold) and company (text-muted)
- Star rating with teal icons

### Portfolio Card
- Image with overlay on hover
- Gradient overlay from transparent to background
- Project title appears on hover with slide-up animation
- Tags displayed as small teal badges
- Click reveals project details

### Blog Card
- Featured image with aspect-ratio-video
- Category badge (coral background)
- Heading (text-2xl) with hover underline
- Excerpt text (text-muted, leading-relaxed)
- Read time and date metadata
- "Read More" link with arrow icon

### Contact Form
- Dark slate input backgrounds with explicit colors
- Focus states with purple glow (ring-primary)
- Labels in text-sm font-medium
- Error messages in error color
- Submit button: Electric purple with hover scale
- Success state: Teal checkmark animation

### Navigation
- Fixed header with blur backdrop
- Logo with electric purple accent
- Links with hover underline animation (teal)
- Mobile: Hamburger menu with slide-in drawer
- CTA button in header (coral background)

---

## Responsive Breakpoints

**Mobile First Approach:**
- Base: 320px - 640px (mobile)
- sm: 640px+ (large mobile/small tablet)
- md: 768px+ (tablet)
- lg: 1024px+ (desktop)
- xl: 1280px+ (large desktop)

**Key Adjustments:**
- Hero: text-4xl mobile → text-6xl desktop
- Section padding: py-12 mobile → py-24 desktop
- Grid: 1 column mobile → 2 columns tablet → 3-4 columns desktop
- Cards: full width mobile → grid layout desktop
- Navigation: hamburger menu mobile → horizontal nav desktop

---

## Accessibility Guidelines

- WCAG 2.1 AA compliance minimum
- Keyboard navigation for all interactive elements
- Focus indicators with 3px outline in primary color
- ARIA labels for icon-only buttons
- Alt text for all images
- Semantic HTML5 structure
- Skip to content link for screen readers
- Color is never the only means of conveying information

---

## Notes for Implementation

**Priority Elements:**
1. Hero section with attention-grabbing CTAs - highest conversion priority
2. Service cards with clear value propositions
3. Social proof (testimonials) positioned early
4. Contact form with minimal friction (name + email only)
5. Portfolio showcase with filtering

**Performance Targets:**
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total Blocking Time: < 300ms
- Cumulative Layout Shift: < 0.1

**Conversion Optimization:**
- Hero CTA uses action-oriented copy ("Get Started" not "Learn More")
- Multiple conversion points throughout page
- Trust signals (testimonials, portfolio) before main CTA
- Form is short and non-intimidating
- Clear value propositions in every section

**Image Guidelines:**
- WebP format with fallbacks
- Lazy loading for below-fold images
- Aspect ratios maintained with placeholder
- Optimize for < 100KB per image where possible

**This design system balances bold, attention-grabbing aesthetics with professional credibility - perfect for a marketing agency that needs to demonstrate both creativity and trustworthiness.**

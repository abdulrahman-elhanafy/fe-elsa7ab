# Design System Spec: Fi El-Sahab (في السحاب) Media Agency

## 0. Instructions for the AI coding agent

You are applying this brand design system to an existing web project.

1. **First, inspect the project.** Identify the framework (Next.js, Angular, React, plain HTML, etc.), the styling approach (Tailwind, CSS Modules, SCSS, styled-components, etc.) and where global styles live. Adapt this spec to what is already there. Do not introduce a new styling library.
2. **Define tokens once, use them everywhere.** Put the CSS variables from Section 7 in the global stylesheet. Replace hardcoded colors and font families across the project with these tokens.
3. **Do not invent brand values.** Every hex code and font name in Sections 1 and 2 comes from the official brand guidelines. Sections marked **(recommended)** or **(inferred)** are design decisions made to make the system usable on the web, and you may adjust them to fit existing components.
4. **The site is Arabic-first (RTL).** Use `dir="rtl"` and `lang="ar"` unless a page is explicitly English. Use CSS logical properties (`margin-inline-start`, `padding-inline`, `text-align: start`) instead of left/right.
5. **Make changes incrementally.** Start with tokens and fonts, then base styles, then shared components (Button, Card, Navbar, Footer, Heading, Label), then pages. Do not rewrite application logic.
6. **Report back** with a short list of files changed and anything in the existing UI that conflicts with this spec.

---

## 1. Color palette

Brand ratio: **Primary 60% / Secondary 38% (10% yellow + 28% white) / Help 2%**.

### 1.1 Primary: blue (60%)
Used for backgrounds and text. The gradient of blues represents the sky.

| Token | HEX |
|---|---|
| `blue-900` | `#032559` |
| `blue-800` | `#074190` |
| `blue-700` | `#0B4FA9` |
| `blue-600` | `#1061C9` |
| `blue-500` | `#1678F0` |
| `blue-400` | `#4E96F9` |
| `blue-300` | `#80B6FF` |
| `blue-200` | `#ACCDFC` |
| `blue-100` | `#CFE2FD` |
| `blue-50` | `#E6EFFE` |
| `blue-25` | `#F3F8FF` |

### 1.2 Secondary: yellow and white (38%)

| Token | HEX | Official usage |
|---|---|---|
| `yellow-600` | `#E5B30E` | Darker shade for strokes and shapes |
| `yellow-500` | `#FFC70F` | Main yellow for text and key accents |
| `yellow-400` | `#FFD344` | Helper color for fills and glows |
| `white` | `#FFFFFF` | Headings, spacing and empty areas (like the white of clouds in the sky) |

Yellow represents the sun in the sky. It may be used for text but **not as the main text color**. It can also color patterns and elements.

### 1.3 Help color (2%)

| Token | HEX |
|---|---|
| `help` | `#4584D2` |

Note: in the original PDF the swatch looks brighter than this hex code. Verify visually.

### 1.4 Meaning of colors
- **Blue:** professionalism, trust, safety.
- **Yellow:** innovation, vitality, a bright future.
- **White:** modernity, purity, professionalism.

### 1.5 Semantic mapping (recommended)

| Role | Token |
|---|---|
| Page background (dark sections) | `blue-900` to `blue-700`, gradient allowed |
| Page background (light sections) | `blue-25` or `white` |
| Card / surface | `white` |
| Body text on light | `blue-900` |
| Body text on dark | `white` |
| Muted text on light | `blue-700` |
| Link on light | `blue-600` |
| Primary CTA background | `yellow-500` (hover `yellow-400`, active `yellow-600`) |
| Primary CTA text | `blue-900` |
| Secondary button | `blue-600` background, `white` text |
| Border / divider on light | `blue-100` |
| Focus ring | `yellow-500` on dark, `blue-500` on light |
| Info / accent | `help` |

---

## 2. Typography

| Font | Use | Notes |
|---|---|---|
| **Handjet** | Main headings (Arabic and English) and the agency word | Pixel-style variable digital font, supports Arabic and English, many weights |
| **Cairo** | Arabic body text, sub-headings, descriptions, long reading | Modern geometric screen font, multiple weights |
| **Poppins** | English body text, descriptions, heavy-weight English headings | Large family of 9 weights |
| **Zeal V2** | Logo wordmark only | **Do not use on the website** |

Rules:
- Headings use `Handjet`. If a heading contains English text, Handjet can be used for it too.
- Arabic body and sub-headings use `Cairo`. English body uses `Poppins`.
- Set `--font-body` to Cairo for Arabic pages, with Poppins as the English fallback.
- Verify that the Handjet build you load actually renders Arabic glyphs. If it does not, fall back to Cairo bold for Arabic headings and tell the user.

### 2.1 Type scale (recommended)

| Role | Font | Size | Weight | Line height |
|---|---|---|---|---|
| Display / H1 | Handjet | `clamp(2.5rem, 6vw, 4.5rem)` | 700 | 1.1 |
| H2 | Handjet | `clamp(2rem, 4vw, 3rem)` | 700 | 1.15 |
| H3 | Cairo | `1.5rem` | 700 | 1.3 |
| H4 | Cairo | `1.25rem` | 600 | 1.4 |
| Body | Cairo / Poppins | `1rem` | 400 | 1.7 |
| Small | Cairo / Poppins | `0.875rem` | 400 | 1.6 |
| Label | Handjet | `1rem` | 600 | 1.2, letter-spacing `0.12em`, uppercase for English |

---

## 3. Logo

| Variant | Description | Where to use |
|---|---|---|
| **Logo 1: Primary mark** | Arabic wordmark "في السحاب" in the cubic Arabic display font, with the horizontal yellow bar and "MEDIA AGENCY" | Official communication and websites. Use in Navbar, Hero and Footer |
| **Logo 2: Cloud icon** | Simplified cloud icon (figure lying on a cloud with a studio light for a head). Symbol of creativity and freedom | Favicon, social media avatars, small brand marks |
| **Logo 3: Horizontal integrated** | Photography element merged into the agency name | Limited spaces or as a secondary mark |

Available color versions: full color, white with blue stroke, yellow only, with or without "MEDIA AGENCY".

Rules (recommended):
- Navbar: Logo 1 on top-left of the page in the original layouts, Logo 2 on top-right. In RTL, mirror this sensibly and keep the two marks on opposite sides.
- Use the white/blue-stroke version on dark and photographic backgrounds. Use the colored version on light backgrounds only if contrast is good.
- Keep clear space around the logo of at least the height of the yellow bar.
- Do not stretch, recolor outside the approved versions, or redraw the logo. Use the provided asset files. If the files are missing, leave a clearly named placeholder and tell the user.

---

## 4. Patterns and elements

| Element | Description | Usage |
|---|---|---|
| **Clouds** | Cloud photos/cutouts | Primary element across all brand materials. Optional **motion blur** for aesthetics |
| **Grid** | Grouped squares, slightly warped | Background texture giving a design and technology feel |
| **Extra elements** | Camera, clapperboard, pen tool, mouse cursor | Any element that reflects what the agency does. Prefer motion blur to match the identity |

Implementation hints (recommended):
- Hero and section backgrounds: a blue sky gradient (`blue-900` to `blue-500`) with blurred cloud images using `background-image` plus `filter: blur()` or pre-blurred assets.
- Grid: a subtle repeating or SVG grid at low opacity (5% to 15%) in `blue-200` or white over dark blue.
- Keep decorative images `aria-hidden="true"` and `loading="lazy"`.

---

## 5. Visual style (inferred from the guideline pages)

This section is an interpretation of the layout of the PDF pages, not an official rule.

- Layout: sky gradient background with clouds, content in **white cards** on top.
- Headings: white fill, light blue outline, and a lower offset shadow that gives a **pixel 3D** look (can be done with `text-shadow` or `-webkit-text-stroke` plus layered shadows).
- Labels: dark blue (`blue-900`) rectangles with white uppercase text.
- Cards: white surface, thin `blue-900` or `blue-100` border, small radius (about 8px), minimal shadow.
- Accents: yellow reserved for CTAs, highlights, underlines, and small details.
- Mood: energetic, modern, tech-creative, but clean and trustworthy.

Example heading effect:

```css
.heading-pixel {
  font-family: var(--font-display);
  color: var(--white);
  -webkit-text-stroke: 2px var(--blue-400);
  text-shadow:
    0 3px 0 var(--blue-600),
    0 6px 0 var(--blue-800);
}
```

---

## 6. Components (recommended baseline)

| Component | Spec |
|---|---|
| **Button, primary** | bg `yellow-500`, text `blue-900`, font Cairo 700, radius 8px, padding `0.75rem 1.5rem`; hover `yellow-400`; active `yellow-600`; focus ring 3px |
| **Button, secondary** | bg `blue-600`, text white; hover `blue-500`; active `blue-700` |
| **Button, ghost** | transparent bg, 2px border white (on dark) or `blue-600` (on light) |
| **Card** | bg white, text `blue-900`, border 1px `blue-100`, radius 8px to 12px |
| **Label / Badge** | bg `blue-900`, text white, Handjet, uppercase, letter-spacing `0.12em` |
| **Input** | bg white, border 1.5px `blue-200`, focus border `blue-500` + ring, text `blue-900`, placeholder `blue-400` |
| **Navbar** | dark blue gradient or transparent over hero, Logo 1 on one side, links in white, CTA button in yellow |
| **Footer** | `blue-900` background, white text, Logo 1, small cloud-icon mark |

---

## 7. Tokens

### 7.1 CSS variables

```css
:root {
  /* Primary */
  --blue-900: #032559;
  --blue-800: #074190;
  --blue-700: #0B4FA9;
  --blue-600: #1061C9;
  --blue-500: #1678F0;
  --blue-400: #4E96F9;
  --blue-300: #80B6FF;
  --blue-200: #ACCDFC;
  --blue-100: #CFE2FD;
  --blue-50:  #E6EFFE;
  --blue-25:  #F3F8FF;

  /* Secondary */
  --yellow-600: #E5B30E;
  --yellow-500: #FFC70F;
  --yellow-400: #FFD344;
  --white: #FFFFFF;

  /* Help */
  --help: #4584D2;

  /* Semantic (recommended) */
  --bg-dark: var(--blue-900);
  --bg-light: var(--blue-25);
  --surface: var(--white);
  --text-on-light: var(--blue-900);
  --text-on-dark: var(--white);
  --link: var(--blue-600);
  --cta-bg: var(--yellow-500);
  --cta-bg-hover: var(--yellow-400);
  --cta-text: var(--blue-900);
  --border: var(--blue-100);

  /* Fonts */
  --font-display: 'Handjet', 'Cairo', sans-serif;
  --font-ar: 'Cairo', sans-serif;
  --font-en: 'Poppins', sans-serif;
  --font-body: 'Cairo', 'Poppins', sans-serif;

  /* Shape */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
}

html { font-family: var(--font-body); color: var(--text-on-light); }
h1, h2 { font-family: var(--font-display); }
```

### 7.2 Google Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&family=Handjet:wght@400..900&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

If the project uses Next.js, prefer `next/font/google` for these three families instead of the link tags.

### 7.3 Tailwind (only if the project already uses Tailwind)

```js
// tailwind.config.js (v3). For v4, define the same values in @theme.
module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#032559', 800: '#074190', 700: '#0B4FA9', 600: '#1061C9',
          500: '#1678F0', 400: '#4E96F9', 300: '#80B6FF', 200: '#ACCDFC',
          100: '#CFE2FD', 50: '#E6EFFE', 25: '#F3F8FF',
        },
        yellow: { 600: '#E5B30E', 500: '#FFC70F', 400: '#FFD344' },
        help: '#4584D2',
      },
      fontFamily: {
        display: ['Handjet', 'Cairo', 'sans-serif'],
        ar: ['Cairo', 'sans-serif'],
        en: ['Poppins', 'sans-serif'],
      },
    },
  },
};
```

---

## 8. Accessibility

Approximate contrast ratios:

| Pair | Ratio | Verdict |
|---|---|---|
| `#FFC70F` on white | ~1.6:1 | Fails. Never use yellow text on white |
| `#FFC70F` on `#032559` | ~9.5:1 | Excellent |
| `#032559` on `#FFC70F` (button) | ~9.5:1 | Excellent |
| White on `#1678F0` | ~4.2:1 | Large text only (18px+ or 14px+ bold) |
| `#1061C9` on white | ~5.9:1 | Passes for body text |

Also:
- Keep visible focus states on all interactive elements.
- Pixel-style headings must remain readable. Do not use Handjet for long paragraphs.
- Respect `prefers-reduced-motion` for any cloud or grid animation.

---

## 9. Do and Don't

**Do**
- Keep roughly 60% blue, 28% white, 10% yellow, 2% help color on each page.
- Use yellow for CTAs, highlights and small details.
- Use white cards on top of sky backgrounds.
- Use official logo files only.

**Don't**
- Don't use yellow text on a white background.
- Don't use Zeal V2 on the website.
- Don't introduce new brand colors or fonts.
- Don't hardcode hex values in components. Use tokens.
- Don't copy the typos from the guideline PDF ("SOCENDRY" means Secondary, "MOKUPS" means Mockups).

---

## 10. Implementation checklist

- [ ] Detect framework and styling approach
- [ ] Add tokens to the global stylesheet (and Tailwind config if used)
- [ ] Load Handjet, Cairo and Poppins; verify Arabic rendering in Handjet
- [ ] Set `dir="rtl"` and `lang="ar"` on the root layout
- [ ] Replace hardcoded colors and fonts with tokens
- [ ] Update shared components: Button, Card, Label, Input, Navbar, Footer
- [ ] Add logo assets (Logo 1 in Navbar/Hero, Logo 2 as favicon)
- [ ] Add sky/cloud and grid backgrounds to hero/section wrappers
- [ ] Check contrast on every text/background pair
- [ ] Summarize the changes and list any conflicts found

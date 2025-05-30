# CLAUDE.md - yamanoku.net Development Guidelines

This document outlines the development guidelines, code style rules, review criteria, and project-specific patterns for the yamanoku.net portfolio site.

## Project Overview

This is a personal portfolio site built with **Astro.js** and **TypeScript**, featuring:
- Multi-language support (Japanese/English)
- Static site generation
- Modern CSS with TailwindCSS v4
- Web accessibility compliance
- Performance optimization

## Technology Stack

- **Framework**: Astro.js 5.x
- **Language**: TypeScript with strict mode
- **Styling**: TailwindCSS v4 with custom design tokens
- **Package Manager**: pnpm (required)
- **Linting**: Biome + Markuplint
- **Deployment**: GitHub Pages

## Development Commands

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Linting and formatting
pnpm lint              # Run all linting (Biome + Markuplint)
pnpm biome             # Format and lint TypeScript/Astro files
pnpm biome:ci          # CI-friendly linting (no writes)
pnpm markuplint        # HTML validation

# Deploy (maintainer only)
pnpm deploy
```

## Code Style Guidelines

### General Principles

1. **TypeScript First**: All new code should be written in TypeScript
2. **Strict Type Safety**: Use TypeScript strict mode, avoid `any`
3. **Accessibility First**: Follow WCAG 2.1 AA guidelines
4. **Performance Conscious**: Optimize for Core Web Vitals
5. **I18n Ready**: Consider translation support in all user-facing text

### File Organization

```
src/
├── components/
│   ├── BaseHead.astro              # Common head elements
│   ├── global/                     # Site-wide components
│   │   ├── GlobalHeader.astro
│   │   ├── GlobalFooter.astro
│   │   └── GlobalTypes.ts          # Shared type definitions
│   └── page-[name]/                # Page-specific components
│       └── sections/               # Page sections
├── i18n/                           # Internationalization
│   ├── [lang]/
│   │   └── dictionary.ts           # Translation dictionaries
│   ├── languages.ts                # Supported languages
│   ├── translation-checkers.ts     # Type safety for translations
│   └── util.ts                     # I18n utilities
├── layouts/
│   └── BaseLayout.astro            # Base page layout
├── pages/                          # File-based routing
├── presentations/                  # Presentation data
└── styles/
    └── global.css                  # Global styles with CSS layers
```

### Naming Conventions

#### Files and Directories
- **Astro Components**: PascalCase (e.g., `BaseHead.astro`, `GlobalHeader.astro`)
- **TypeScript Files**: camelCase (e.g., `util.ts`, `listPresentation.ts`)
- **Directories**: kebab-case (e.g., `page-index`, `page-status-404`)
- **Global Components**: Prefix with `Global` (e.g., `GlobalHeader.astro`)

#### Code
- **Variables/Functions**: camelCase (e.g., `pageTitle`, `getLanguageFromURL`)
- **Types/Interfaces**: PascalCase (e.g., `LinkItem`, `DictionaryKeys`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `fallbackLang`)

### Astro Component Guidelines

#### Component Structure
```astro
---
// 1. Imports (external libraries first, then local)
import { useTranslations } from "../i18n/util";

// 2. Props interface (if needed)
export interface Props {
  title: string;
  description?: string;
}

// 3. Script logic
const { title, description } = Astro.props;
const t = useTranslations(Astro);
---

<!-- 4. Template with semantic HTML -->
<section aria-labelledby="heading">
  <h2 id="heading">{title}</h2>
  {description && <p>{description}</p>}
</section>

<!-- 5. Scoped styles (if needed) -->
<style>
  section {
    /* Component-specific styles */
  }
</style>
```

#### Best Practices
- Use semantic HTML elements
- Include proper ARIA attributes
- Prefer composition over complex props
- Keep components focused and single-purpose
- Use TypeScript for prop validation

### TypeScript Guidelines

#### Type Definitions
- Define types in separate `.ts` files when shared
- Use `type` for unions and primitives, `interface` for objects
- Export types that might be used elsewhere
- Use strict null checks

```typescript
// Good: Explicit and type-safe
export type LinkItem = {
  url?: string;
  title?: string;
  rel?: string;
};

export type ListItem = LinkItem & {
  datetime?: string;
};
```

#### I18n Type Safety
- Use `DictionaryKeys` type for translation keys
- Leverage TypeScript for translation validation
- Follow the established pattern for new translations

```typescript
// Good: Type-safe translations
const t = useTranslations(Astro);
const title = t("header.title"); // Type-checked key

// Bad: Untyped string
const title = t("some.random.key"); // Runtime error
```

### CSS and Styling

#### TailwindCSS Usage
- Use Tailwind utility classes for layout and spacing
- Leverage custom design tokens (y-rhythm-*, y-color-*)
- Follow mobile-first responsive design
- Use CSS layers for organization

```astro
<!-- Good: Using design tokens -->
<div class="gap-y-rhythm-1 my-y-rhythm-2 fill-[#36465d] dark:fill-y-white-base">

<!-- Avoid: Magic numbers -->
<div class="gap-4 my-8 fill-gray-700">
```

#### CSS Layer Structure
```css
@layer theme, base, components, utilities;
```

1. **theme**: Design tokens and custom properties
2. **base**: Normalize and reset styles
3. **components**: Component-specific styles
4. **utilities**: Utility classes

### Internationalization (i18n)

#### Adding New Translations
1. Add keys to `src/i18n/ja/dictionary.ts` (source of truth)
2. Add corresponding translations to `src/i18n/en/dictionary.ts`
3. TypeScript will enforce consistency via `DictionaryKeys`

#### Translation Best Practices
- Use descriptive, hierarchical keys (e.g., `header.navigation.home`)
- Keep fallback language (Japanese) complete
- Use the `Dictionary` helper for type safety
- Consider accessibility text in translations

```typescript
// src/i18n/ja/dictionary.ts
export default {
  "header.title": "山田のポートフォリオ",
  "meta.description": "フロントエンドエンジニア山田のポートフォリオサイトです"
};

// Usage in components
const t = useTranslations(Astro);
const pageTitle = t("header.title");
```

## Review Criteria

### Code Review Checklist

#### Functionality
- [ ] Code accomplishes the intended functionality
- [ ] Edge cases are handled appropriately
- [ ] No console errors or warnings
- [ ] Performance implications considered

#### TypeScript
- [ ] Proper type annotations used
- [ ] No `any` types without justification
- [ ] Types are exported when reusable
- [ ] Strict type checking passes

#### Astro.js Specific
- [ ] Component props are properly typed
- [ ] Astro globals used correctly (`Astro.url`, `Astro.site`)
- [ ] Static optimization opportunities utilized
- [ ] No unnecessary client-side hydration

#### Accessibility
- [ ] Semantic HTML used appropriately
- [ ] ARIA attributes included where needed
- [ ] Keyboard navigation works
- [ ] Color contrast meets WCAG AA standards
- [ ] Images have alt text
- [ ] Headings follow logical hierarchy

#### Internationalization
- [ ] All user-facing text uses translation system
- [ ] Translation keys follow naming convention
- [ ] Both languages have corresponding translations
- [ ] Language-specific formatting considered

#### Performance
- [ ] Images optimized and properly sized
- [ ] CSS/JS bundles minimized
- [ ] Core Web Vitals impact assessed
- [ ] No unnecessary dependencies added

#### Styling
- [ ] TailwindCSS utilities used appropriately
- [ ] Custom design tokens utilized
- [ ] Responsive design implemented
- [ ] Dark mode support (if applicable)

### Security Considerations
- No hardcoded secrets or API keys
- External links use appropriate `rel` attributes
- User input properly sanitized (if any)
- Dependencies kept up to date

## Project-Specific Rules

### Must Follow
1. **pnpm Only**: Use pnpm for package management, never npm or yarn
2. **Japanese First**: Japanese is the primary language, English translations follow
3. **Accessibility Compliance**: Must meet WCAG 2.1 AA standards
4. **Performance Budget**: Core Web Vitals must remain in green
5. **SEO Optimization**: Proper meta tags, structured data, sitemap
6. **Biome Formatting**: All code must pass Biome checks

### Preferred Patterns

#### Component Organization
- Group page-specific components in `page-[name]/` directories
- Place reusable components in `global/`
- Keep section components in `sections/` subdirectories

#### URL Structure
- Japanese: `/` (root)
- English: `/en/`
- Use canonical URLs and hreflang attributes

#### Performance Optimizations
- Use Astro's static generation by default
- Minimize client-side JavaScript
- Optimize images with proper formats (WebP, AVIF)
- Leverage browser caching

### Anti-Patterns to Avoid
- ❌ Client-side routing (use Astro's file-based routing)
- ❌ Heavy JavaScript frameworks (this is a static site)
- ❌ Inline styles in HTML (use TailwindCSS or CSS files)
- ❌ Hardcoded strings in components (use i18n system)
- ❌ Non-semantic HTML (use proper elements)

## Testing and Quality Assurance

### Pre-commit Checklist
1. Run `pnpm lint` and fix all issues
2. Test in multiple browsers (Chrome, Firefox, Safari)
3. Verify accessibility with screen reader
4. Check mobile responsiveness
5. Validate HTML with Markuplint
6. Test both language versions

### Deployment
- All changes merge to `dev` branch first
- Main branch deploys automatically to GitHub Pages
- Use semantic commit messages
- Update documentation when needed

## Additional Resources

- [Web Accessibility Policy](./WEB_ACCESSIBILITY_POLICY.md)
- [Portfolio Site Explanation (EN)](./EXPLAINING_PORTFOLIO_SITE_EN.md)
- [Portfolio Site Explanation (JP)](./EXPLAINING_PORTFOLIO_SITE_ja.md)
- [Astro Documentation](https://docs.astro.build/)
- [TailwindCSS v4 Documentation](https://tailwindcss.com/docs/v4-beta)
- [Biome Documentation](https://biomejs.dev/)

---

This document should be updated as the project evolves. When making significant architectural changes, please update these guidelines accordingly.
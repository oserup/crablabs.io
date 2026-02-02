# UI/UX Review: Crab Labs About Page

**Reviewer:** Senior UI/UX Designer
**Date:** 2026-02-01
**File:** `/home/orion/Documents/Work/CrabLabs/crablabs.io/src/pages/about.astro`
**URL:** http://localhost:4321/about

---

## Executive Summary

The About page is functional and communicates key information, but suffers from **design inconsistency** with the rest of the site, **excessive inline CSS**, and several missed opportunities for visual polish that would elevate it from "good enough" to "premium." The page looks competent but not memorable.

**Overall Grade: B-**

---

## Pass 1: Visual Hierarchy & Typography

### Hero Section (Lines 397-427)

**What Works:**
- Strong headline with good contrast between "Engineers who build" and the orange accent "what others can't."
- Clear value proposition in the lead paragraph
- Stats grid provides good scannable proof points

**What Doesn't Work:**

1. **Inconsistent Typography System** (CRITICAL)
   - The hero uses custom CSS `hero-title` class (line 84-95) with `clamp(2.5rem, 8vw, 4.5rem)`
   - The homepage hero uses Tailwind's `text-5xl sm:text-6xl lg:text-7xl font-display`
   - This creates a jarring difference in visual weight between pages

   ```css
   /* Current - about.astro line 84-95 */
   .hero-title {
     font-size: clamp(2.5rem, 8vw, 4.5rem);
     font-weight: 700;
     letter-spacing: -0.03em;
   }

   /* Should match index.astro pattern */
   /* Use Tailwind: text-5xl sm:text-6xl lg:text-7xl font-display font-semibold */
   ```

2. **Hero Label Formatting** (MEDIUM)
   - `.hero-label` (line 74-82) uses custom styling instead of the site's `text-sm font-mono text-brand-600` pattern used elsewhere
   - Creates subtle but noticeable inconsistency

3. **Stats Numbers Missing Display Font** (LOW)
   - `.stat-number` uses `ui-monospace, monospace` (line 130)
   - Should use the defined `--font-mono` variable or `font-mono` class for consistency

### Values Section (Lines 429-445)

**What Works:**
- Clear "How We Work" / "What makes us different" hierarchy
- Compact cards work well for the four value props

**What Doesn't Work:**

1. **Section Header Inconsistency** (HIGH)
   - Uses custom `.section-label` and `.section-title` classes (lines 155-170)
   - Rest of site uses `text-sm font-mono text-brand-600 mb-2` pattern (see index.astro line 109)
   - Creates visual fragmentation

2. **Card Titles Lack Font-Display** (MEDIUM)
   - `.value-card h3` (line 204-208) doesn't use `font-display` like other headings
   - Minor inconsistency but noticeable in aggregate

### Lab Section (Lines 448-473)

**What Works:**
- Equipment grid is scannable and informative
- Orange accent specs create good visual interest
- Two-column layout works well

**What Doesn't Work:**

1. **Equipment Specs Too Subtle** (MEDIUM)
   - `.equipment-spec` (lines 290-294) at 0.75rem/12px is quite small
   - On mobile, these become hard to read
   - Consider 0.8125rem/13px minimum

2. **Lab Text Line Height** (LOW)
   - `.lab-text` has `line-height: 1.8` (line 263) which is generous
   - Rest of site uses `1.5` or `1.6` for body text
   - Creates a "looser" feel in this section

### Industries Section (Lines 475-501)

**What Works:**
- Progress bar visualization is clear and effective
- Color coding per industry is consistent with homepage

**What Doesn't Work:**

1. **Progress Bars Lack Animation** (MEDIUM)
   - `.industry-fill` has `transition: width 1s ease` (line 357) but there's no intersection observer or scroll trigger
   - Bars appear immediately filled, missing the "reveal" moment
   - Homepage has similar patterns that could be leveraged

2. **Percentages Don't Sum to 100%** (LOW)
   - 42% + 35% + 23% = 100% (correct, but visually the bars stop short of full width)
   - The 42% bar looks like it could be 50-60% of the track
   - Consider adding scale context or adjusting visualization

### Testimonial Section (Lines 503-517)

**What Works:**
- Warm yellow gradient provides good contrast with previous sections
- Quote formatting is clean

**What Doesn't Work:**

1. **Missing Quote Marks Treatment** (HIGH)
   - The quote has literal `"` characters around it (line 509)
   - Better practice: Use CSS `::before` with a large decorative quote mark or icon
   - Looks amateur compared to the rest of the site

2. **Section Feels Thin** (MEDIUM)
   - Only testimonial section on the page; feels like an afterthought
   - No visual indicator this is a testimonial (no quotation icon, no photo)
   - Compare to homepage which uses `TestimonialCard` component

3. **Background Color Clashes** (MEDIUM)
   - The warm yellow (`#fef3c7` to `#fde68a`) feels out of brand
   - Orange brand color on this yellow background creates muddy contrast
   - Consider a more neutral warm or stay with neutral-950 like homepage

---

## Pass 2: Spacing, Alignment & Grid

### Container Issues

1. **Inconsistent Max-Width Behavior** (HIGH)
   - Container component sets `max-w-[90rem]` (1440px)
   - But sections like `.hero` (line 50-60) use their own full-width backgrounds
   - Content alignment jumps between sections

   ```astro
   <!-- Current pattern - content width varies -->
   <section class="hero">
     <Container> <!-- Constrained -->

   <!-- Better: Use consistent inner widths -->
   <section class="hero w-full">
     <div class="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
   ```

2. **Stats Grid Spacing Inconsistent** (MEDIUM)
   - `.stats-grid` uses `gap: 1px` with colored background (lines 106-118)
   - Creates a "divider" effect that's clever but doesn't match card patterns elsewhere
   - Consider using consistent `gap-1` or border pattern

### Section Padding Inconsistency

| Section | Desktop Padding | Pattern Used |
|---------|-----------------|--------------|
| Hero | 8rem top, 5rem bottom | Custom CSS (line 57-60) |
| Values | 6rem top/bottom | Custom CSS (line 149-152) |
| Lab | 6rem top/bottom | Custom CSS (line 223-226) |
| Industries | 6rem top/bottom | Custom CSS (line 303-306) |
| Testimonial | 6rem top/bottom | Custom CSS (line 367-369) |
| **Index Services** | py-16 lg:py-24 | Tailwind classes |

**Recommendation:** Standardize on `py-16 lg:py-24` (4rem/6rem) Tailwind pattern to match rest of site.

### Equipment Grid Mobile Collapse (Line 270-274)

```css
.equipment-grid {
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}
```

- On mobile, 2-column grid creates cramped cards
- No breakpoint adjustment (unlike `.values-grid` which goes 1-col on mobile)
- **Fix:** Add `grid-cols-1 sm:grid-cols-2` equivalent

---

## Pass 3: Responsiveness & Mobile Experience

### Mobile Screenshots Analysis (375px viewport)

1. **Hero Text Cramped** (HIGH)
   - At 375px, hero title clamps to ~2.5rem which is appropriate
   - BUT: Lead paragraph at `clamp(1.125rem, 3vw, 1.375rem)` becomes 18px
   - Combined with 540px max-width, text block feels constrained
   - **Screenshot evidence:** Text fills full width with no breathing room

2. **Stats Grid on Mobile** (CRITICAL)
   - Currently shows 2x2 grid on mobile (line 106-118)
   - Cards are too small to read comfortably
   - "30+" and "Years Experience" stack awkwardly
   - **Fix:** Make 1-column on mobile, 2-column on sm+, 4-column on md+

3. **Values Cards Stack Nicely** (WORKS WELL)
   - 1-column mobile layout works
   - Cards have appropriate padding

4. **Equipment Grid on Mobile** (HIGH)
   - 2-column grid persists on mobile (no responsive breakpoint)
   - "EMC Test Equipment" card text overflows
   - "Antennas, LISN, TEM cell" wraps awkwardly
   - **Fix:** Single column on mobile

5. **Industry Bars Mobile** (WORKS WELL)
   - Full-width bars work well
   - Labels are readable

6. **Testimonial Quote Mobile** (MEDIUM)
   - Font size clamps appropriately
   - Generous padding works
   - Quote marks look clunky (literal `"` characters)

### Tablet View (768px)

1. **Lab Section Two-Column Breaks** (MEDIUM)
   - At exactly 768px-1023px, layout is single column (correct per CSS)
   - But the equipment grid stays 2x3 while text is full width
   - Visual weight is unbalanced - text feels orphaned

2. **Industries Grid Side-by-Side** (WORKS WELL)
   - 1fr 1fr split works at tablet
   - Bars have good visual weight

---

## Pass 4: Color Contrast & Accessibility

### WCAG Compliance Check

1. **Hero Section** (PASS)
   - White text (#ffffff) on dark background (#171717 to #262626)
   - Contrast ratio: >16:1 (excellent)
   - Orange accent (#fb923c) on dark: ~5.4:1 (passes AA for large text)

2. **Stat Labels** (BORDERLINE)
   - `.stat-label` uses #e5e5e5 on #262626 background
   - Contrast ratio: ~10:1 (passes)
   - BUT: Font size is 0.875rem (14px) which is on the edge

3. **Values Section** (PASS)
   - `.value-card p` uses #525252 on #fafafa
   - Contrast ratio: ~7:1 (passes AA)

4. **Equipment Specs Orange** (CONCERN)
   - `.equipment-spec` uses #fb923c on rgba(255,255,255,0.08) over #171717
   - Effectively orange on near-black
   - At 12px font size, this may be hard for users with low vision
   - **Recommendation:** Increase to 13px minimum

5. **Testimonial Section** (FAIL for links/interactive)
   - If brand orange (#ea580c) were used on the yellow background (#fef3c7)
   - Contrast would be only ~2.5:1 (fails)
   - Currently no interactive elements, but a risk

### Focus States

- **Missing custom focus states** for value cards
- Cards have `:hover` but no `:focus-visible` for keyboard navigation
- **Add:**
  ```css
  .value-card:focus-visible {
    outline: 2px solid var(--brand-500);
    outline-offset: 2px;
  }
  ```

### Screen Reader Concerns

1. **Stats Grid Semantics** (LOW)
   - Stats are in divs, not a definition list or similar semantic structure
   - Consider `<dl><dt>Engineers</dt><dd>5</dd></dl>` pattern

2. **Equipment List Not a List** (LOW)
   - Equipment items are divs in a grid
   - Screen readers won't announce "6 items" or allow list navigation

---

## Pass 5: Design System Consistency

### CSS Architecture Issues

1. **Massive Inline Style Block** (CRITICAL)
   - Lines 40-394 contain 354 lines of scoped CSS
   - This defeats the purpose of the design system in `/src/styles/modules/`
   - Creates maintenance nightmare
   - Leads to drift from established patterns

   **Evidence of drift:**
   ```css
   /* about.astro uses */
   .hero { padding: 6rem 0 4rem; }

   /* While index.astro uses */
   .py-16.lg:py-24 /* 4rem / 6rem via Tailwind */
   ```

2. **Color Values Hardcoded** (HIGH)
   - `#171717`, `#262626`, `#fb923c`, etc. appear directly in CSS
   - Should use CSS custom properties from variables.css
   - Makes brand color updates a search-and-replace nightmare

   ```css
   /* Current */
   background: #171717;
   color: #fb923c;

   /* Should be */
   background: var(--neutral-900);
   color: var(--brand-400);
   ```

3. **Duplicate Pattern Definitions** (HIGH)
   - `.section-label` in about.astro duplicates the `text-sm font-mono uppercase tracking-wide text-brand-600` pattern
   - `.hero-label` duplicates similar
   - These should be utility classes or a shared component

### Component Reuse Opportunities

| Pattern | About Page | Available Component |
|---------|------------|---------------------|
| Section headers | Custom CSS | Could use `SectionHeader.astro` |
| Testimonial | Inline HTML | `TestimonialCard.astro` exists |
| Equipment cards | Custom styling | Could be `CapabilityCard.astro` variant |
| Stats display | Custom grid | Could be `MetricCard.astro` |

### Visual Language Comparison

| Element | About Page | Index/Services |
|---------|------------|----------------|
| Hero bg | Linear gradient with glow | Solid `neutral-950` |
| Section labels | Inline styled spans | `font-mono text-brand-600` |
| Card borders | `1px solid #e5e5e5` | `border border-neutral-200` |
| Card radius | `0.75rem` / `0.5rem` mixed | `rounded-lg` (0.5rem) consistent |

---

## Micro-Interactions & Polish

### What's Missing

1. **No Scroll Animations** (MEDIUM)
   - The site has `.scroll-reveal` CSS in components.css
   - Not utilized on About page
   - Content appears static; misses "quality" feel

2. **No Loading States** (LOW)
   - Equipment grid could benefit from skeleton loading
   - Less critical for static content

3. **Industry Bar Animation** (MEDIUM)
   - Transition is defined but never triggered
   - Add intersection observer to animate on scroll:
   ```javascript
   const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.style.width = entry.target.dataset.width;
       }
     });
   });
   ```

4. **Card Hover States Inconsistent** (LOW)
   - `.value-card:hover` has transform + shadow
   - `.equipment-item` has no hover state
   - Creates uneven interactivity expectations

---

## Does It Look AI-Generated?

### Signs That Suggest Template/AI Origin:

1. **Overly Systematic Color Alternation**
   - Dark -> Light -> Dark -> Light -> Warm
   - Feels formulaic rather than purposeful

2. **Generic Section Names**
   - "How We Work", "The Lab", "Industries"
   - Could be on any B2B site

3. **Lack of Brand Personality**
   - No subtle "crab" visual motifs that could tie to brand
   - No photography or unique illustrations
   - Pure text + geometric shapes

### Signs That Suggest Human Crafting:

1. **"0 Project Managers" Stat**
   - Clever, memorable differentiator
   - Shows understanding of target audience pain points

2. **Specific Equipment Specs**
   - "8 GHz", "6 GHz", "Antennas, LISN, TEM cell"
   - Real technical details, not lorem ipsum

3. **Industry Split with Actual Numbers**
   - 42/35/23 split shows real business knowledge

**Verdict:** The content is clearly human-written, but the visual design has a "premium template" feel. It works but doesn't stand out.

---

## Priority Improvements

### Critical (Do First)
1. **Refactor inline CSS to use design system** - Extract to modules or use Tailwind
2. **Fix mobile stats grid** - Currently unreadable on small screens
3. **Fix equipment grid mobile breakpoint** - Cards overflow

### High Priority
4. **Standardize section headers** - Use consistent pattern with rest of site
5. **Replace testimonial section** - Use `TestimonialCard` component
6. **Use CSS custom properties** - Replace hardcoded hex values
7. **Add focus-visible states** - Accessibility requirement

### Medium Priority
8. **Add scroll reveal animations** - Match site quality bar
9. **Animate industry progress bars** - On scroll trigger
10. **Standardize border-radius** - Pick `0.5rem` or `0.75rem`, not both
11. **Review equipment spec readability** - Increase font size on mobile

### Low Priority
12. **Semantic HTML for stats** - Use `<dl>` lists
13. **Add subtle brand motifs** - Consider crab/circuit patterns
14. **Photo/illustration** - Add visual interest to lab or team section

---

## Code Examples for Top Fixes

### Fix 1: Replace Stats Grid CSS with Tailwind

```astro
<!-- Replace lines 408-425 -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-700 rounded-xl overflow-hidden mt-8">
  <div class="bg-neutral-800 p-6 text-center">
    <div class="text-4xl font-bold font-mono text-white">5</div>
    <div class="text-sm text-neutral-400 mt-1">Engineers</div>
  </div>
  <!-- ... -->
</div>
```

### Fix 2: Use Existing Testimonial Component

```astro
<!-- Replace lines 504-517 -->
{featuredTestimonial && (
  <section class="py-16 lg:py-24 bg-neutral-950">
    <Container>
      <TestimonialCard
        quote={featuredTestimonial.quote}
        author={featuredTestimonial.author}
        role={featuredTestimonial.role}
        company={featuredTestimonial.company}
        logo={featuredTestimonial.logo}
        variant="featured"
      />
    </Container>
  </section>
)}
```

### Fix 3: Standardize Section Header Pattern

```astro
<!-- Create consistent pattern -->
<div class="mb-10">
  <p class="text-sm font-mono text-brand-600 mb-2">The Lab</p>
  <h2 class="text-3xl lg:text-4xl font-display font-semibold text-white mb-4">
    What we work with
  </h2>
</div>
```

---

## Conclusion

The About page communicates its message but feels disconnected from the rest of the site. The main issues are:

1. **Technical debt:** 354 lines of inline CSS that should be in the design system
2. **Inconsistency:** Different patterns for elements that should match
3. **Mobile gaps:** Two critical mobile layout issues
4. **Missed polish:** Available components and animations not utilized

Estimated refactor time: **4-6 hours** to bring to parity with index/services pages.

---

*Review completed. Screenshots saved to `/reviews/` directory.*

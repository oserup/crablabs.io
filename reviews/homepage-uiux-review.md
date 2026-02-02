# UI/UX Expert Review: Crab Labs Homepage

**Reviewer:** Senior UI/UX Designer (10+ years B2B/SaaS experience)
**Page:** `/` (Homepage)
**Review Date:** February 2026
**Overall Grade:** B+

---

## Executive Summary

The homepage is well-structured with a clear visual hierarchy and good use of the design system. The page flows logically from hero → services → industries → pricing → differentiators → insights → testimonial. However, there are opportunities to improve mobile experience, reduce redundancy, and strengthen the visual impact of key sections.

---

## Section-by-Section Analysis

### 1. Hero Section

**What Works:**
- Strong typographic hierarchy with clear headline
- "Medical & Industrial" positioning is immediately clear
- Subtle gradient glow and trace animation add visual interest without distraction
- CTA placement is prominent and clear
- Secondary CTA ("send project details") provides alternative path

**Issues:**
1. **Gray subtext on dark background** — "electronics." in `text-neutral-400` may have contrast issues for some users
2. **Mobile hero feels sparse** — The trace animation is hidden on mobile (`hidden lg:flex`), leaving only text
3. **Differentiators line feels disconnected** — "No middlemen. Fixed pricing. You own the IP." sits alone with no visual treatment

**Recommendations:**
- Consider `text-neutral-300` for the gray "electronics." text
- Add a subtle visual element for mobile to replace the hidden animation
- Give the differentiators line more visual weight (badges, icons, or distinct styling)

**Accessibility:**
- ✅ Good heading structure (single H1)
- ⚠️ Check contrast ratio on neutral-400/neutral-500 text
- ✅ Link purposes are clear

---

### 2. Services Section

**What Works:**
- Clean list-style layout with clear pricing
- Hover states are well-implemented
- Sticky left column on desktop is nice touch
- Consistent visual language (orange dots, arrows)

**Issues:**
1. **Four nearly identical items** — Visual monotony; hard to distinguish at a glance
2. **Price alignment inconsistent** — "from $10k" vs "from $1k" vs "hourly" — different formats
3. **No visual differentiation for primary service** — Product Development is likely the main offering but looks the same as others

**Recommendations:**
- Consider highlighting Product Development differently (larger, featured card)
- Standardize price format or add visual hierarchy to prices
- Add subtle icons to each service for faster scanning

---

### 3. Industries Section

**What Works:**
- Excellent use of color coding (blue/purple/red)
- Top gradient bar is a nice touch
- Compliance badges add credibility
- Cards are well-balanced and equal height

**Issues:**
1. **Order seems arbitrary** — Industrial → Scientific → Medical, but Medical is 42% of business (from About page)
2. **No visual indication of priority** — All three look equally weighted
3. **Icons are generic** — The SVG icons don't clearly represent the industries

**Recommendations:**
- Consider ordering by business priority: Medical → Industrial → Scientific
- Make Medical card slightly larger or featured if it's the primary vertical
- Consider more distinctive iconography

---

### 4. Pricing Section

**What Works:**
- Dark section creates good visual break
- Rate card is clean and scannable
- Three billing options are clearly differentiated
- Good use of visual hierarchy (featured vs secondary options)

**Issues:**
1. **Dense information** — Lots of pricing details in a small space
2. **"Fixed price" explanation is vague** — "Set scope, set price. Flexibility for changes." doesn't explain the model
3. **Rush rate math** — Users have to calculate $150 + 50% = $225
4. **Materials note is buried** — "Parts and materials at cost + 10%" is easy to miss

**Recommendations:**
- Consider expanding the fixed price explanation
- Pre-calculate the rush rate (already showing $225, which is good)
- Give the materials note slightly more visual weight

---

### 5. What Makes Us Different Section

**What Works:**
- Clean 4-column grid
- Consistent card styling
- Icons are appropriate
- Copy is concise

**Issues:**
1. **Redundant with hero** — "No middlemen" is stated in hero and again here
2. **Generic section title** — "What makes us different" is overused
3. **Cards lack depth** — Very brief descriptions, could expand on benefits
4. **"30-day support" is underwhelming** — Compared to test lab and IP ownership, this feels minor

**Recommendations:**
- Remove redundant points or make them fresh
- Consider more specific section title ("How we work" or "Our approach")
- Expand card descriptions or remove weaker points

---

### 6. Latest Insights Section

**What Works:**
- Clean 3-column grid
- Good card structure with image, title, description, date
- "View all posts" link is appropriately placed
- Hover states work well

**Issues:**
1. **Images may or may not exist** — Conditional rendering means inconsistent card heights if some have images and some don't
2. **Date/Read link row is cramped** — Very small text at bottom
3. **Line clamp on descriptions** — May cut off mid-sentence awkwardly

**Recommendations:**
- Ensure all blog posts have hero images, or remove the image container entirely
- Give the card footer slightly more breathing room
- Consider showing full descriptions or better truncation

---

### 7. Testimonial Section

**What Works:**
- Clean centered layout
- Dark background creates good visual break
- TestimonialCard component is reusable

**Issues:**
1. **Only one testimonial** — Same issue as About page
2. **Generic client description** — "Clients include medical device startups, university research labs..." is filler
3. **No client logos** — Despite logo property existing in testimonial data

**Recommendations:**
- Add more testimonials or client logos
- Remove generic client description if not adding value
- Show the client logo if available

---

## Mobile Responsiveness Analysis

### Hero (Mobile)
- ✅ Text scales well with clamp()
- ⚠️ Trace animation hidden — mobile hero is text-only
- ✅ CTAs stack appropriately

### Services (Mobile)
- ✅ Single column layout works
- ✅ Touch targets are adequate
- ⚠️ Sticky sidebar becomes regular element — fine

### Industries (Mobile)
- ✅ Single column stack
- ✅ Cards maintain structure
- ✅ Badges wrap appropriately

### Pricing (Mobile)
- ⚠️ Two-column layout becomes single column, but rate card may feel long
- ✅ Billing options stack well

### Differentiators (Mobile)
- ✅ Grid collapses to 2-column then 1-column
- ✅ Cards maintain readability

### Insights (Mobile)
- ✅ Single column works
- ⚠️ Consider limiting to 2 posts on mobile to reduce scroll

### Testimonial (Mobile)
- ✅ Centered layout works at all sizes
- ✅ Quote text scales with clamp()

---

## Technical Quality

### Positive
- Uses Tailwind utility classes consistently
- Proper semantic HTML structure
- Schema.org structured data included
- Component composition is clean (Container, TraceAnimation, TestimonialCard)
- Proper loading="lazy" on blog images

### Areas for Improvement
1. **Inline SVGs are verbose** — Consider icon component or sprite
2. **Some class strings are very long** — Could extract to component variants
3. **Blog post filtering in frontmatter** — Works but could be cleaner

---

## Accessibility Checklist

| Criterion | Status | Notes |
|-----------|--------|-------|
| Heading hierarchy | ✅ | Single H1, proper H2/H3 structure |
| Color contrast | ⚠️ | Check neutral-400/500 on dark backgrounds |
| Focus states | ✅ | Tailwind defaults handle this |
| Link purposes | ✅ | All links have clear context |
| Alt text | ⚠️ | Blog hero images use title as alt — could be more descriptive |
| Skip link | ❌ | No skip-to-content link |
| ARIA labels | ⚠️ | SVG icons lack aria-label or aria-hidden |

---

## Performance Considerations

1. **Multiple SVG icons inline** — Consider sprite or icon component
2. **Blog post collection query** — Runs at build time, so no runtime impact
3. **TraceAnimation component** — Check if this is JS-heavy
4. **No image optimization visible** — Ensure Astro image optimization is enabled

---

## Priority Recommendations

### High Priority
1. Add skip-to-content link for accessibility
2. Verify color contrast on gray text
3. Add aria-hidden to decorative SVGs

### Medium Priority
4. Strengthen mobile hero with visual element
5. Reduce redundancy between hero and differentiators section
6. Add more testimonials or client logos
7. Consider reordering Industries by business priority

### Lower Priority
8. Extract inline SVGs to icon component
9. Improve blog card image handling
10. Expand differentiator card descriptions

---

## Comparison to About Page

| Aspect | Homepage | About Page |
|--------|----------|------------|
| Visual variety | Better | Good |
| Information density | Higher | Lower |
| Mobile experience | Good | Good (after fixes) |
| CTA presence | Strong | None (by design) |
| Redundancy | Some | Minimal |
| Social proof | Weak (1 testimonial) | Weak (1 testimonial) |

---

## Final Assessment

The homepage is solid and functional, with good visual hierarchy and clear information architecture. The main weaknesses are:

1. **Social proof is thin** — Single testimonial, no logos
2. **Some redundancy** — Differentiators repeat hero claims
3. **Mobile hero is sparse** — Hidden animation leaves text-only experience
4. **Industries ordering** — Doesn't reflect business priorities

Overall, this is a B+ homepage that could become an A- with focused improvements to social proof and mobile experience.

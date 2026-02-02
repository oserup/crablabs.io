# Sales & Marketing Review: About Page

**Reviewer:** B2B Marketing Executive Analysis
**Page:** `/about`
**Date:** 2026-02-01
**Overall Assessment:** The page has strong foundational elements but leaves significant conversion value on the table.

---

## Executive Summary

The About page effectively communicates the "no middlemen" differentiator and has clean, professional design. However, it fails to adequately address buyer concerns, lacks compelling proof points, and has **zero calls-to-action** on the entire page. For a page that represents the final "trust validation" step in most B2B buyer journeys, this is a critical oversight.

**Conversion Impact Score: 4/10**

---

## Pass 1: Messaging & Value Proposition

### What's Working

1. **Hero headline is memorable**: "Engineers who build what others can't" is confident without being arrogant. The orange accent on "what others can't" draws the eye.

2. **The "0 Project Managers" stat is brilliant**: This is the single most differentiated message on the page. It immediately tells prospects this isn't a typical consultancy.

3. **Stats grid is scannable**: Four key numbers (5, 30+, 0, 100%) communicate the core value prop in 2 seconds.

4. **Industry breakdown with percentages**: Shows specialization without excluding anyone. Smart way to say "we focus on regulated industries" without turning away edge cases.

### What's Hurting Conversion

1. **"Engineers who build what others can't" needs proof**
   - This is a bold claim with zero evidence on the page
   - Where are the examples of "impossible" projects completed?
   - Competitor firms say similar things - why should prospects believe it?

   **Fix:** Add 1-2 specific examples below the hero. "We rescued a medical device that failed EMC testing 3 times" or "Built a 4kW GaN motor controller smaller than a smartphone."

2. **The lead paragraph is weak**
   > "Five senior engineers. One lab in Long Beach. No salespeople, no project managers, no layers between you and the work."

   This is features, not benefits. So what? Why should a VP of Engineering care?

   **Fix:** Add the benefit: "Five senior engineers. Direct access. No layers between you and the work - which means faster answers, fewer miscommunications, and lower costs."

3. **"How We Work" section is generic**
   - "Direct Access" / "Talk to engineers, not account managers"
   - "Fixed Pricing" / "We absorb overruns, not you"
   - "Full Ownership" / "Your IP from day one"
   - "In-House Lab" / "Prototype to test in days"

   Every boutique consultancy could claim this. Where's the specificity?

   **Fix:** Add numbers and timeframes:
   - "Direct Access: Average response time under 2 hours during business days"
   - "Fixed Pricing: 23 projects delivered on-budget in 2025"
   - "In-House Lab: Turn around board revisions in 48 hours, not 2 weeks"

4. **No origin story**
   - Why did these 5 engineers start Crab Labs?
   - What's the founding insight?
   - This is the About page - people want to know WHO you are

   Technical buyers often want to know: "Were these people at companies I respect?" "Did they work on products I've heard of?" "What drove them to start this?"

### Missing Messaging Elements

- **No "who we're NOT for" section** - This actually builds trust. "We're not the right fit if you need high-volume consumer electronics or have a $2k budget."
- **No mention of team backgrounds** - Where did these 5 engineers come from?
- **No philosophy/approach statement** - What's the Crab Labs engineering philosophy?

---

## Pass 2: Trust Signals & Social Proof

### What's Working

1. **Single testimonial with name/title/company**: Good that it exists. Real name, real company.

2. **Lab equipment list is credible**: Specific equipment specs (8 GHz oscilloscopes, 6 GHz spectrum analyzers) demonstrate legitimacy to technical buyers.

3. **Industry percentages feel honest**: 42/35/23 split looks like real data, not marketing round numbers.

### What's Hurting Conversion

1. **Only ONE testimonial**
   - On the About page, which is supposed to build trust, there's a single quote
   - The company config shows placeholder spots for more testimonials - they're not being used
   - One testimonial looks like "this is all we could get"

   **Fix:** Add 2-3 more testimonials, ideally from each industry vertical (medical, industrial, scientific).

2. **No client logos**
   - The testimonial references "Atmos Research & Development" - where's their logo?
   - No visual proof of client relationships
   - Technical buyers want to see who else trusts you

   **Fix:** Add a client logo bar, even if it's just 4-5 logos.

3. **No project numbers**
   - How many projects completed?
   - How many prototypes built?
   - What's the first-pass certification success rate?

   **Fix:** Add concrete metrics: "47 projects completed" or "92% first-pass EMC certification rate"

4. **No certifications or credentials shown**
   - Is anyone MISRA certified?
   - ISO 13485 consultants?
   - Any IEEE or professional affiliations?

   Technical buyers in regulated industries want to see credentials.

5. **"Founded 2024" is buried in schema.org data**
   - Being new isn't necessarily bad, but it needs to be addressed
   - "30+ years combined experience" helps, but doesn't address company youth

   **Fix:** Own it. "Founded in 2024 by veterans of [notable companies/projects]" turns a potential weakness into a strength.

### Missing Trust Signals

- **No case study links from About page** - The site has case studies, but About doesn't reference them
- **No press mentions or publications**
- **No conference presentations or speaking**
- **No open source contributions or technical blog mentions**
- **No office/lab photos** - Real workplace photos dramatically increase trust

---

## Pass 3: CTAs & Conversion Path

### Critical Problem: Zero CTAs

**The About page has NO call-to-action anywhere.**

A visitor who is convinced by this page has to:
1. Scroll to navigation
2. Find "Get a Quote" button
3. Click through

This is conversion suicide. The About page is typically a late-stage validation page - visitors are close to reaching out but want to verify the company is legitimate. By not giving them an easy next step, you're losing warm leads.

### What Needs to Be Added

1. **CTA after hero section**
   - After convincing intro, offer next step
   - "Discuss your project" or "See our work" (link to case studies)

2. **CTA after testimonial**
   - This is peak trust moment
   - "Schedule a 20-minute call" with link to Cal.com

3. **Footer CTA section**
   - Dedicated conversion block before the actual footer
   - Similar to case studies page: "Have a project in mind?"

### Recommended CTA Block (to add before footer)

```html
<!-- Similar to case studies page CTA -->
<section class="mt-8 pt-12 border-t border-neutral-200">
  <div class="bg-neutral-50 border border-neutral-200 rounded-lg p-8 text-center">
    <h2 class="text-2xl font-display font-semibold text-neutral-900 mb-3">
      Ready to work with engineers directly?
    </h2>
    <p class="text-neutral-600 mb-6 max-w-xl mx-auto">
      No salespeople, no gatekeepers. Book a 20-minute call and talk to the people who'll actually do the work.
    </p>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a href="https://cal.com/crablabsllc/consultation" class="btn-brand btn-lg">
        Schedule a Call
      </a>
      <a href="/quote" class="btn-secondary btn-lg">
        Get a Quote
      </a>
    </div>
  </div>
</section>
```

---

## Buyer Journey Alignment

### Where About Page Fits

Based on the site structure:
1. Homepage (awareness) -> Services (interest) -> Case Studies (proof) -> **About (trust)** -> Quote (action)

The About page is the "final check" before conversion. Buyers are asking:
- "Are these people legit?"
- "Will they understand my industry?"
- "Can I trust them with my project?"

### Current Page Fails This Test

- **Legitimacy:** Partial - equipment list helps, but no company history or team backgrounds
- **Industry understanding:** Good - industry percentages and specialization messaging works
- **Trust:** Weak - one testimonial, no client logos, no CTAs

### Questions Prospects Have (Not Answered)

1. "What happens if something goes wrong during a project?"
2. "How do you handle scope changes?"
3. "What's your typical project timeline?"
4. "Can I talk to a reference?"
5. "What's the first step?"
6. "Do you sign NDAs?"
7. "What makes these 5 engineers qualified?"

---

## Competitive Differentiation Analysis

### Current Differentiators (Page Claims)

1. No middlemen/direct access
2. Fixed pricing
3. IP ownership
4. In-house lab
5. Small team (5 engineers)

### How Competitors Position

Most electronics consultancies claim:
- Expert engineers
- Quality work
- Industry experience
- Modern equipment

### Crab Labs' Actual Differentiators (Not Leveraged)

Based on site review, these are undersold:

1. **In-house EMC pre-compliance** - Most consultancies outsource this. This is a huge speed/cost advantage.
2. **Medical device experience with specific regulatory knowledge** - IEC 60601, IEC 62304, FDA 510(k)
3. **GaN power electronics capability** - Cutting-edge, not many firms do this
4. **Automated test scripting** - Equipment automation for overnight testing
5. **Same-week PCB turnaround** - The about page mentions "days" but doesn't emphasize this

**Recommendation:** Lead with concrete capabilities that competitors can't match.

---

## Priority Action Items

### High Priority (Do This Week)

1. **Add CTA section before footer** - Critical for conversion
2. **Add 2-3 more testimonials** - Even placeholder structure is better than one lonely quote
3. **Add contextual CTA after hero** - "See our work" linking to case studies

### Medium Priority (Do This Month)

4. **Add team background section** - Where did the founders come from? What notable projects?
5. **Add client logo bar** - At least 4-5 logos
6. **Add specific metrics to "How We Work"** - Numbers instead of generic claims
7. **Add "Who we work with" / "Who we don't" section** - Qualification builds trust

### Lower Priority (Do This Quarter)

8. **Add office/lab photos** - Real workplace imagery
9. **Add mini case study snippets** - 2-3 sentence project highlights with links
10. **Add FAQ section** - Address common About page questions
11. **Consider founder story** - Brief origin narrative

---

## Specific Copy Suggestions

### Hero Lead (Current)
> "Five senior engineers. One lab in Long Beach. No salespeople, no project managers, no layers between you and the work."

### Hero Lead (Suggested)
> "Five senior engineers. Direct access to the people doing the work. That means faster decisions, fewer miscommunications, and projects that stay on budget."

---

### Value Card: Direct Access (Current)
> "Talk to engineers, not account managers"

### Value Card: Direct Access (Suggested)
> "Email answered in under 2 hours. Technical questions answered by the person writing the code."

---

### Value Card: In-House Lab (Current)
> "Prototype to test in days"

### Value Card: In-House Lab (Suggested)
> "Board revisions assembled in-house. EMC pre-scan before you ship. Iteration cycles in 48 hours, not 2 weeks."

---

### Lab Section Title (Current)
> "What we work with"

### Lab Section Title (Suggested)
> "Test before you ship" or "Why we built our own lab"

---

## Metrics to Track

After implementing changes, measure:

1. **Time on page** - Should increase with more content
2. **Scroll depth** - Are people reaching the CTA?
3. **Click-through rate to quote/call** - Primary conversion metric
4. **Bounce rate** - Should decrease with better content flow
5. **Exit rate** - Where do people leave?

---

## Summary

The About page has the right bones but lacks the muscle needed for conversion. The core differentiators are present but underproved. The biggest issues are:

1. **Zero CTAs** - Inexcusable for a conversion-focused page
2. **Insufficient social proof** - One testimonial isn't enough
3. **Generic claims without evidence** - "What others can't" needs proof
4. **No clear next step** - Visitor who's convinced has no path forward

The good news: these are all fixable without a redesign. The page structure is sound; it just needs more substance and conversion optimization.

**Bottom Line:** This page is currently a trust builder that doesn't convert. With the recommended changes, it could become one of the highest-converting pages on the site.

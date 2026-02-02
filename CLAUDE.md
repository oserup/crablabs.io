# CLAUDE.md - CrabLabs Website Context

## Project Overview

This is the marketing website for **CrabLabs**, a boutique electronics engineering consultancy based in Long Beach, CA. The site is built with Astro, Tailwind CSS, and Preline UI components.

## About CrabLabs

### Who We Are
- **5 senior engineers** with 30+ years combined experience
- Founded 2024, based in Long Beach, CA
- Specialize in embedded systems, PCB design, and regulatory compliance
- **No middlemen** - clients work directly with engineers (no PMs, no salespeople)

### What We Do
- **Product Development** ($10k+): Concept-to-production hardware, firmware, enclosures, manufacturing
- **Design Rescue & Review** ($1k+): Independent expert assessment of schematics/layouts, risk identification
- **Testing & Compliance** ($2.5k+): EMC pre-compliance in our in-house lab

### Target Markets
- Medical devices (42%) - FDA 510(k), IEC 60601, IEC 62304
- Industrial automation (35%) - Legacy modernization, rugged hardware
- Scientific instrumentation (20%) - Precision data acquisition, metrology

### Business Model
- Fixed-price projects ($1k - $100k range)
- Clients own 100% of IP from Day 1
- 30 days support included after delivery

## Pricing (DO NOT MODIFY WITHOUT EXPLICIT APPROVAL)

```
Standard Rate: $150/hour
Startup/Academic: $135/hour
Non-Profit: $140/hour
Rush Premium: +50%
Materials: Cost + 10%
```

These rates are fixed. Do not change pricing values without explicit user approval.

## Tech Stack

- **Framework:** Astro 5.x (static site)
- **Styling:** Tailwind CSS 3.x + Preline UI
- **Language:** TypeScript
- **Deployment:** Vercel (static)

### Commands
```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build
```

## Content Guidelines

### Voice & Tone
- **Professional and direct** - no fluff, no hype
- **Matter-of-fact** - state capabilities plainly, let work speak for itself
- **"Show don't tell"** - use specifics, numbers, and examples over adjectives
- **Not salesy** - avoid superlatives, pressure tactics, or marketing speak

### Do
- Use specific numbers and metrics when available
- Reference actual capabilities and equipment
- Be honest about what we do and don't do
- Use technical terminology appropriately (audience is technical)
- Keep copy concise and scannable

### Don't
- Use empty phrases like "best-in-class", "cutting-edge", "world-class"
- Make unsubstantiated claims
- Sound desperate or pushy
- Use excessive exclamation points or emojis
- Over-promise or exaggerate capabilities

### Example Tone
```
❌ "Our amazing team of world-class engineers will revolutionize your product!"
✅ "5 senior engineers. 30+ years combined experience. Direct access, no middlemen."
```

## Technical Capabilities (Reference)

### Hardware
- PCB Design: Altium Designer, KiCad
- Simulation: LTSpice/NGSpice, ANSYS HFSS
- Processors: Nordic nRF52/53, STM32, ESP32, TI MSP430/C2000
- Mechanical: SolidWorks, Fusion 360

### Firmware
- Languages: C/C++ (MISRA compliant), Rust, Python
- RTOS: FreeRTOS, Zephyr, bare metal
- Standards: IEC 62304, MISRA C:2012, CERT C

### Lab Equipment
- 8 GHz oscilloscopes, 6 GHz spectrum/network analyzers
- EMC tent with calibrated antennas, LISN, TEM cell
- Temperature/humidity chamber
- SMT rework, 3D printers

### Regulatory Experience
- Medical: IEC 60601-1, IEC 62304, ISO 13485, FDA 510(k)
- EMC/Radio: FCC Part 15, CE RED, IEC 61000 series
- Industrial: UL 508A, IEC 61508

## Design System

### Colors
- **Primary accent:** Orange (`#D97706` / Tailwind `amber-600` range)
- **Background:** Dark/neutral tones
- **Text:** High contrast for readability

### Typography
- Clean sans-serif for body text
- Monospace (`font-mono`) for technical content, pricing, specs

### Components
- Use Preline UI components where available
- Maintain consistent spacing and grid alignment
- Keep layouts clean and minimal - engineering aesthetic

## Content That Requires Approval

The following should NOT be modified without explicit approval:
- Hourly rates and pricing structure
- Team size claims (5 senior engineers, 30+ years)
- Specific regulatory claims (FDA submissions count, certifications)
- Case study data and metrics
- Contact information

## Content That Can Be Freely Edited

- Blog posts and technical content
- Service descriptions and copy (maintain accuracy)
- UI/UX improvements
- Code refactoring and optimization
- SEO improvements
- Adding new pages or sections

## Blog Content

### Appropriate Topics
- Technical tutorials (PCB design, firmware, EMC)
- Industry insights (medical device development, compliance)
- Engineering best practices
- Tool comparisons and recommendations
- Project retrospectives (anonymized if needed)

### Content Standards
- Technically accurate and educational
- Demonstrates expertise without being self-promotional
- Practical value for readers (engineers, startup founders, product managers)
- Well-structured with clear headings and code examples where relevant

## Key Differentiators to Emphasize

1. **Direct engineer access** - No layers of management
2. **Fixed pricing** - We absorb cost overruns, not clients
3. **Full IP ownership** - Clients own everything from Day 1
4. **In-house lab** - Fast iteration, no outsourcing delays
5. **Regulatory expertise** - Deep FDA/CE/FCC experience
6. **In-house pre-compliance testing** - Affordable EMC testing catches issues before expensive test labs
7. **30 days free support** - Post-delivery tweaks included, clients aren't abandoned
8. **Extensive documentation** - Clients can walk away with everything they need

## Brand Positioning & Messaging Strategy

### Core Value Proposition
**"Product development without the headaches."**

CrabLabs makes product development **easy** for clients — especially those who aren't engineers themselves. The primary feeling we want prospects to have: **"These people will make my life easier."**

### The CrabLabs Experience (What We Actually Sell)
1. **Fast start** — Quote same day, contract signed within a week
2. **Fixed pricing** — No surprise bills, no change order battles
3. **Your way** — Calls, email, text — we adapt to client preferences
4. **Full visibility** — Weekly updates, test results, videos/photos of product in motion
5. **Catch problems early** — Constant communication so nothing surprises anyone at the end
6. **Pre-compliance testing in-house** — Affordable way to catch EMC issues before expensive test lab
7. **Clean handoff** — Documentation clients can actually use, 30 days free support
8. **Compliance built in** — Especially for medical, so clients don't fail regulatory

### Ideal Client Profile
- **Primary target:** Class 2-3 medical device startups or SMBs
- **Project type:** New product development (preferred) or modernization/scale-up
- **Client profile:** Have an idea of what needs to be done, need guidance on execution
- **Relationship goal:** Long-term partner, not one-off vendor

### Why Clients Choose Us Over Alternatives

**vs. Large Design Houses (Jabil, Flex, etc.):**
- They have high minimums (often $500k+)
- Slow — layers of PMs and process
- You get assigned whoever's available, not senior people
- They nickel-and-dime on changes
- **Our counter:** Direct senior engineer access, fixed pricing, faster iteration

**vs. In-House Hiring:**
- Senior embedded engineer costs $180-250k/year fully loaded
- Takes 3-6 months to hire
- Need multiple disciplines (hardware, firmware, compliance)
- Retention risk
- **Our counter:** Full team for the cost of one hire, no recruiting, no ramp-up

### Client Pain Points We Solve
Clients (especially less technical ones) have experienced:
- Endless meetings that go nowhere
- Fighting over change requests
- Bad communication and documentation
- Overall poor quality work
- Being left in the dark about progress

**We solve this through:** Constant communication, weekly updates with videos/demos, catching discrepancies early, clear documentation, flexibility on changes without fuss.

### How We Build Trust with Non-Technical Clients
Non-technical decision-makers can't evaluate schematics or firmware. They know things are going well because:
- We document thoroughly and share along the way
- We show test procedures and results
- We run regular demos
- We send photos/videos of the product working
- We communicate in plain English
- We hit milestones on time

### Sales Process
- **Consultation:** 30 minutes — learn about client, their problem, goals, timeline, budget, communication preferences
- **Qualification:** We assess fit and say no if it's not right (budget too low, unrealistic timeline, difficult personality, outside expertise)
- **Quote:** Same day or next day
- **Contract:** Typically signed within a week if client is ready
- **Scope flexibility:** If budget doesn't match scope, we either offer reduced scope or educate client on what it actually takes

### Messaging Principles

**Lead with experience, not capabilities:**
- ❌ "We do PCB design, firmware, and compliance"
- ✅ "Product development without the headaches. Fixed pricing. Weekly updates. Documentation you can actually use."

**Speak to non-technical decision-makers:**
- "You'll actually understand what's happening"
- "No jargon-filled reports that sit in a drawer"
- "See your product come to life with regular video updates"

**Address "burned before" clients without negativity:**
- "Tired of chasing your engineering firm for updates?"
- "We believe you should know what's happening with your product"
- "No surprises at the end — we catch issues early"

**Make consultation feel low-risk:**
- "30 minutes. No sales pitch. We'll tell you if we're the right fit."
- "Most clients get a quote the same day."

### Homepage Recommendations
- Lead with the experience/feeling, not technical capabilities
- Prominent "How We Work" section spelling out the CrabLabs experience
- Social proof from non-technical clients who felt informed throughout
- Clear, low-risk CTA for consultation

## What We Are NOT

- Not a staffing agency (we do projects, not body shop)
- Not for high-volume consumer gadgets
- Not for hobbyist budgets
- Not for pure software without custom hardware
- Not available for on-site work (we work from our Long Beach lab)

## Contact Information

- **Address:** 235 E Broadway Ste 210, Long Beach, CA 90803
- **Phone:** +1-424-271-5569
- **Email:** contact@crablabs.io
- **Booking:** cal.com/crablabsllc/consultation

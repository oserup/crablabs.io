# Crab Labs Homepage Vendor Evaluation

**Evaluator:** Sarah Chen, VP Engineering
**Company:** MedDevice Innovations (Class II/III medical devices, $75M revenue, 180 employees)
**Project Context:** Patient monitoring device, ~$200k budget, 18-month timeline
**Regulatory Requirements:** FDA 21 CFR Part 820, IEC 60601-1, IEC 62304
**Date:** February 2026

---

## Executive Summary

**Would I book a call? Yes, conditionally.**

Crab Labs presents a credible case for medical device engineering capability, but with significant caveats that require validation. The homepage demonstrates technical understanding of my domain (correctly listing IEC 60601, IEC 62304, FDA 510(k)), and the case studies show relevant project experience. The "no middlemen" positioning is refreshing after dealing with firms where I never meet the engineers until three weeks into the project.

However, for a $200k engagement representing 18 months of my product timeline, I have concerns about capacity, depth of regulatory expertise, and business stability that the website does not adequately address. I would book a 20-minute discovery call, but this firm would not make my shortlist without satisfactory answers to several critical questions.

**Key Decision Factors:**
- (+) Correctly identifies medical device regulatory standards
- (+) Case studies show actual medical device experience (ultrasound controller, neonatal patch)
- (+) Fixed pricing model reduces my budget risk
- (+) In-house lab could accelerate prototype iterations
- (-) Team of 5 is concerning for an 18-month engagement
- (-) Founded 2024 - extremely young company
- (-) Only one testimonial, and it's not from a medical device company
- (-) No mention of QMS, DHF/DMR, or design controls
- (-) "15+ projects" claim needs verification - what class? What outcomes?

---

## Pass 1: First 30 Seconds - Initial Credibility Assessment

### What I See Immediately
- **Hero headline:** "Medical & Industrial Electronics" - okay, they lead with medical, that's intentional
- **Key stats visible:** 5 engineers, 30+ years experience, $150/hr, 100% IP ownership
- **Industry breakdown:** Medical at 42% - this is positioned as a primary focus, not an afterthought
- **Standards listed:** FDA 510(k), IEC 60601, IEC 62304 - these are correct and specific

### Initial Impression
The site does not look like a typical marketing-heavy consultancy page. No stock photos of handshakes, no "synergy" language. This is either genuinely engineering-focused or very good at appearing so. The immediate display of hourly rate ($150) is unusual - most firms hide this until you're on a sales call. This transparency is either confidence or a sign they're targeting smaller projects.

### Credibility Signals (Positive)
- Technical terminology used correctly
- Specific regulatory standards mentioned, not vague "regulatory expertise"
- Rates published openly
- No superlatives like "world-class" or "cutting-edge"

### Credibility Concerns
- "Founded 2024" visible in structured data - this is a one-year-old company
- "5 senior engineers" with "30+ years experience" means average of 6 years each - that's not senior in my book
- No client logos immediately visible
- No certifications or accreditations shown

**30-Second Verdict:** Worth investigating further, but skepticism warranted.

---

## Pass 2: Technical Capability Assessment

### Hardware Capabilities (from Capabilities page)

**Claimed:**
- PCB design up to 20 layers, 10 GHz
- Materials: FR-4, Rogers, Teflon
- Domains: High-speed digital, analog, power electronics, mixed-signal
- Analysis: Thermal, signal integrity, mechanical, EMI/EMC

**My Assessment:**
This covers what I'd need for a patient monitoring device. 20-layer capability is overkill for most medical devices (we typically use 4-8 layers), but shows they can handle complexity. Rogers and Teflon experience matters for RF sections. EMI/EMC analysis capability is critical for IEC 60601-1-2.

**Gaps:**
- No mention of IPC standards compliance (IPC-A-600, IPC-2221)
- No mention of design for manufacturing (DFM) or design for testability (DFT)
- No mention of biocompatibility considerations for patient-contact devices

### Firmware Capabilities

**Claimed:**
- Languages: C, C++, Rust, Python
- Platforms: FreeRTOS, Zephyr, Bare metal
- MCUs: Nordic nRF5x, Silabs BGM, STM32, ESP32, TI MSP430
- Connectivity: BLE, WiFi, LoRa, Thread, Cellular

**My Assessment:**
Nordic nRF5x and BLE are highly relevant for our patient monitoring project. FreeRTOS and Zephyr experience matters for IEC 62304 compliance. C++ with MISRA would be expected, but MISRA is not mentioned on the homepage (it is in the CLAUDE.md internal docs, but clients don't see that).

**Gaps:**
- No mention of IEC 62304 software lifecycle process
- No mention of MISRA compliance
- No mention of static analysis tools
- No mention of software validation protocols
- No mention of cybersecurity (FDA premarket guidance)

### Lab Capabilities

**Claimed:**
- 8 GHz oscilloscopes, 6 GHz spectrum/network analyzers
- EMC test equipment (shielded tent, LISN, TEM cell, ESD generator)
- Thermal chamber
- SMT line for prototyping

**My Assessment:**
The EMC pre-compliance capability is legitimately valuable. Running radiated emissions pre-scans before going to a test lab saves significant time and money. The spectrum analyzer frequency range is adequate for most conducted/radiated emissions work.

**Gaps:**
- No mention of electrical safety test equipment (hipot, ground bond, leakage current)
- No mention of calibration status/schedules
- Lab size of 1,000 sq ft is modest - workable for prototyping but not extensive testing
- No mention of whether tent is semi-anechoic or just shielded

### Regulatory Experience

**Claimed:**
- Medical: IEC 60601-1, IEC 62304, ISO 13485
- "15+ projects" in medical devices
- "FDA 510(k) support"

**My Assessment:**
The standards listed are correct. IEC 60601-1 (electrical safety), IEC 62304 (software lifecycle), ISO 13485 (QMS) - these are the big three for Class II medical devices.

**MAJOR GAPS:**
- No mention of 21 CFR Part 820 (Quality System Regulation)
- No mention of design controls (820.30)
- No mention of DHF (Design History File)
- No mention of DMR (Device Master Record)
- No mention of risk management (ISO 14971)
- No mention of usability engineering (IEC 62366)
- No mention of clinical evaluation requirements
- "Support" is vague - do they prepare submissions or just provide documentation?

**Technical Capability Score: 6/10**

They have the hardware and firmware skills. The regulatory depth is questionable. For a Class II device with FDA submission, I need more than "support."

---

## Pass 3: Risk Evaluation

### Red Flags

1. **Company Age**
   - Founded 2024 means approximately one year of operating history
   - No track record to verify during due diligence
   - High risk of business discontinuity during an 18-month project
   - What happens if they fail or key engineers leave?

2. **Team Size vs. Project Scope**
   - 5 engineers for a $200k, 18-month project
   - At $150/hr, $200k buys ~1,333 hours = roughly 8 months of one FTE
   - Who else are they working for during those 18 months?
   - What's their capacity model? How many concurrent projects?
   - "We take on 8-10 projects per year" (from case studies CTA) - that's a lot for 5 engineers

3. **Experience Claims Need Verification**
   - "30+ years combined" across 5 engineers = 6 years average
   - In medical devices, I'd want at minimum 10 years for "senior"
   - "15+ projects" - what class? What classification? What outcomes?
   - No named engineers, no bios, no LinkedIn links

4. **Single Testimonial Problem**
   - Only one testimonial visible: Atmos Research & Development (scientific, not medical)
   - CEO quote is generic: "played a key role in refining and validating"
   - No testimonials from medical device companies
   - No testimonials from regulatory professionals

5. **Case Study Limitations**
   - Medical case studies: Ultrasound controller, Neonatal patch
   - No Class II/III device case studies visible
   - No FDA clearance numbers mentioned
   - "IEC 60601 pre-compliance on first attempt" - pre-compliance, not actual certification
   - Neonatal patch was for "investigational study" - did it ever get cleared?

6. **Missing Business Fundamentals**
   - No mention of insurance (professional liability, E&O)
   - No mention of NDA/confidentiality protocols
   - No mention of IP assignment procedures beyond "you own 100%"
   - No mention of conflict of interest policies

### Amber Flags

1. **Pricing Structure**
   - $150/hr is below market for senior medical device engineering ($175-250 typical)
   - Either they're underpriced (sustainability concern) or less senior than claimed
   - Fixed-price model is appealing but "we absorb overruns" - can a 5-person shop afford that?

2. **Geographic Limitation**
   - "Not available for on-site work" could be problematic for design reviews
   - Some milestones benefit from in-person collaboration
   - Long Beach, CA location - no mention of remote work capabilities

3. **Quality System Gaps**
   - No mention of their own ISO 13485 certification
   - Do they operate under a quality management system?
   - How do they handle document control?
   - Who handles CAPA if issues arise?

**Risk Score: 7/10 (significant concerns)**

---

## Pass 4: Regulatory Depth Check

### What My Regulatory Affairs Director Would Ask

**Question 1: Do you have experience preparing FDA 510(k) submissions?**
- Website says "FDA 510(k) support" - what does that mean?
- Have they prepared substantial equivalence arguments?
- Have they written predicate device analyses?
- Do they understand the difference between Traditional, Special, and Abbreviated 510(k)?

**Question 2: How do you implement IEC 62304?**
- No mention of software safety classification (Class A/B/C)
- No mention of software development lifecycle documentation
- No mention of software verification and validation protocols
- No mention of SOUP (Software of Unknown Provenance) management
- No mention of anomaly management procedures

**Question 3: What risk management methodology do you use?**
- ISO 14971 is not mentioned anywhere
- No mention of FMEA, FTA, or other risk analysis methods
- Risk management is fundamental to 510(k) - this gap is concerning

**Question 4: How do you handle design controls?**
- 21 CFR Part 820.30 is the foundation of medical device development
- No mention of design inputs, design outputs, design verification, design validation
- No mention of design transfer or design reviews

**Question 5: What documentation do you deliver?**
- Services page mentions: "Design documentation, Test documentation"
- But no specifics on: DHF contents, traceability matrices, protocol/report formats
- For a $200k project, I need to know exactly what documentation I'm getting

### Regulatory Assessment

**Claim Analysis:**
| Standard | Claimed | Evidence Level | Confidence |
|----------|---------|---------------|------------|
| IEC 60601-1 | Yes | Pre-compliance mentioned | Medium |
| IEC 62304 | Yes | No implementation details | Low |
| ISO 13485 | Listed | No operational details | Low |
| FDA 510(k) | "Support" | No submission experience evident | Low |
| ISO 14971 | Not mentioned | N/A | Very Low |
| IEC 62366 | Not mentioned | N/A | N/A |

**Regulatory Depth Score: 4/10**

They know the names of the standards. There's no evidence they understand the implementation depth required for a compliant Class II device development.

---

## Pass 5: Business Stability Assessment

### Size Analysis

**For My Project:**
- $200k budget over 18 months
- Need consistent engagement, likely 2-3 engineer-months of effort
- Need availability for design reviews, prototype iterations, compliance testing

**Their Capacity:**
- 5 engineers
- "8-10 projects per year"
- At $200k average, that's $1.6-2M annual revenue
- That's viable for a small consultancy but thin margins

**Concerns:**
- What's their backlog? Can they start when I need?
- What happens if two clients have simultaneous urgent needs?
- Key person dependency risk is extreme with 5 people
- No succession planning for an 18-month engagement

### Financial Stability

**Unknown:**
- Profitability
- Cash reserves
- Payment terms (do they require upfront payment?)
- Client concentration risk
- Insurance coverage

**Positive Signals:**
- Fixed-price model suggests confidence in estimation
- Transparent pricing suggests stable rate structure
- $150/hr is sustainable if utilization is high

**Negative Signals:**
- One year of history is insufficient for financial stability assessment
- No mention of business insurance
- No mention of payment terms or milestone structure

### Continuity Risk

For an 18-month project, I need assurance that:
- The company will exist in 18 months
- Key personnel will be available
- Source code and documentation are continuously escrowed or accessible
- There's a transition plan if the engagement ends badly

**None of this is addressed on the website.**

**Business Stability Score: 4/10**

---

## Pass 6: Comparison to Alternatives

### How Crab Labs Compares

| Criteria | Crab Labs | Large Consultancy (e.g., EPIQ, Jabil) | Specialist Medical (e.g., StarFish) |
|----------|-----------|--------------------------------------|-------------------------------------|
| Team Size | 5 | 500+ | 20-50 |
| Medical Focus | 42% of work | 10-20% | 100% |
| Rate | $150/hr | $200-300/hr | $175-250/hr |
| Regulatory Depth | Standards listed | Full regulatory team | Deep regulatory integration |
| Project Approach | Direct engineers | PM + team | PM + dedicated engineers |
| Track Record | 1 year | 10-30 years | 5-15 years |
| Risk Profile | High | Low | Medium |
| Flexibility | High | Low | Medium |
| FDA Experience | Unknown | Extensive | Extensive |

### Comparative Positioning

**Crab Labs Best For:**
- Early-stage prototyping where regulatory complexity is manageable
- Design rescue/review where an independent opinion is valuable
- Small scope engagements where direct engineer access matters
- Budget-constrained projects where lower rates offset higher risk

**Crab Labs Risky For:**
- Full Class II/III development programs
- Projects requiring extensive FDA submission support
- Multi-year engagements requiring business continuity
- Projects requiring deep regulatory expertise

### For My Specific Project

A $200k patient monitoring device with FDA 510(k) submission intent:

| Option | Pros | Cons | Fit |
|--------|------|------|-----|
| Crab Labs | Lower cost, direct access, fixed pricing | Regulatory depth, business risk, capacity | Partial |
| Large Consultancy | Stability, regulatory team, scale | Cost, layers, less agile | Full |
| Specialist | Medical focus, regulatory depth, proven | Higher cost, may have backlog | Full |

**I would NOT choose Crab Labs as my sole partner for this project.**

However, they could play a role:
- Design review of our internal work ($5-10k engagement)
- EMC pre-compliance testing (in-house lab is valuable)
- Specialized firmware development as a sub-scope

---

## Pass 7: Questions for Discovery Call

### Must-Ask Questions (Deal Breakers)

1. **FDA Submission Experience**
   - How many 510(k) submissions have you directly contributed to?
   - Can you provide reference contacts from those projects?
   - Have any devices you've worked on received FDA clearance? Which ones?

2. **IEC 62304 Implementation**
   - Walk me through how you implement software safety classification
   - What tools do you use for requirements traceability?
   - How do you handle software unit testing and code coverage?
   - What's your process for SOUP management?

3. **Team Composition**
   - Can I see bios/resumes of engineers who would work on my project?
   - What's the experience level specifically in medical devices?
   - Will the same engineers be available for the full 18 months?
   - Who is your regulatory lead? What's their background?

4. **Business Continuity**
   - What happens to my project if Crab Labs dissolves?
   - What's your IP escrow or continuous access arrangement?
   - Do you carry professional liability insurance? What coverage?
   - Can you provide financial references (bank, accountant)?

5. **Capacity**
   - How many concurrent projects are you running right now?
   - What's your availability for an 18-month engagement starting Q2?
   - Who would be my primary contact? Secondary?
   - What's your policy if I need more resources mid-project?

### Important Questions (Strongly Preferred Answers)

6. **Quality System**
   - Do you operate under ISO 13485 or equivalent QMS?
   - How do you handle document control?
   - What's your CAPA process?
   - How do you manage design changes?

7. **Design Controls**
   - How do you structure design inputs and outputs?
   - How do you conduct design reviews?
   - What's your verification and validation approach?
   - How do you handle design transfer to manufacturing?

8. **Deliverables**
   - What specifically is included in "design documentation"?
   - Will I receive a complete DHF at project end?
   - How is traceability maintained?
   - What format are deliverables in?

9. **Risk Management**
   - Do you follow ISO 14971?
   - What risk analysis methods do you use?
   - How do you integrate risk management into design?
   - Who performs risk assessment?

10. **Pricing and Terms**
    - How do you handle scope changes?
    - What's your payment milestone structure?
    - What's included in the 30 days post-delivery support?
    - What are your terms for project termination?

---

## Section-by-Section Homepage Analysis

### Hero Section

**Content:**
- "Medical & Industrial Electronics"
- "Hardware, firmware, and compliance testing. Senior engineers, fixed pricing, no middlemen."
- Stats: 5 engineers, 30+ years, $150/hr, 100% IP

**Buyer Perspective:**
- Leading with medical is strategic and correct for my audience
- "No middlemen" resonates - I've been burned by layers of PMs
- Stats are specific but unverifiable
- "100% Your IP" is standard but worth stating

**Missing:**
- Regulatory credentials (FDA experience, certifications)
- Social proof (client logos, case study count)
- Any mention of quality systems

**Grade: B-** (Functional but lacks trust signals for medical buyers)

### Services Section

**Content:**
- Product Development ($10k+)
- Design Review ($1k+)
- Testing & Compliance ($2.5k+)
- Team Augmentation ($150/hr)

**Buyer Perspective:**
- Fixed pricing model is attractive for budget certainty
- Starting prices are clear but seem low for medical-grade work
- "You own everything we create" is reassuring
- No mention of what's included in each tier

**Missing:**
- Deliverables by service tier
- Typical project duration/scope examples
- Medical device-specific services
- Regulatory support as a distinct offering

**Grade: C+** (Clear but lacks medical-specific positioning)

### Industries Section

**Content:**
- Medical 42%: FDA 510(k), IEC 60601, IEC 62304
- Industrial 35%: IEC 61508, UL 508A, CE
- Scientific 23%: ISO 17025, FCC Part 15

**Buyer Perspective:**
- Medical being largest segment is reassuring
- Standards are correctly named (this is rare for marketing sites)
- Percentages suggest portfolio balance, not medical specialists
- "Class I-III devices" claim is notable

**Missing:**
- Number of projects per category
- Example outcomes/clearances
- Client types (startups vs. enterprises)
- Therapeutic areas

**Grade: B** (Good positioning but needs proof points)

### Lab Section

**Content:**
- 8 GHz oscilloscopes, 6 GHz spectrum/network analyzers
- EMC test equipment
- Thermal chamber
- SMT line

**Buyer Perspective:**
- In-house EMC capability is genuinely differentiating
- Specific equipment specs add credibility
- "Find problems before certification" is the right message
- Prototyping capability accelerates iteration

**Missing:**
- Lab photos
- Calibration status
- Specific EMC test standards supported
- Electrical safety test capability

**Grade: B+** (Concrete and differentiating)

### Pricing Section

**Content:**
- $150/hr standard
- $135/hr startups/academia
- $140/hr non-profits
- +50% rush

**Buyer Perspective:**
- Transparency is unusual and appreciated
- Rates are below market for senior medical device work (concern)
- Fixed-price option with "we absorb overruns" is attractive
- No mention of materials markup or equipment costs

**Missing:**
- Project examples with pricing
- Payment terms
- Change order policy specifics
- What's included vs. billable extras

**Grade: B** (Transparent but rates raise questions)

### Testimonial Section

**Content:**
- Single quote from Myles Ainley, CEO, Atmos Research & Development
- "Crab Labs played a key role in refining and validating our product development. We couldn't have done it without them."

**Buyer Perspective:**
- One testimonial is weak
- It's from a scientific company, not medical
- Quote is generic, not results-focused
- No company logo, no photo, minimal credibility

**Missing:**
- Medical device testimonials
- Regulatory professional quotes
- Specific outcomes ("passed FDA clearance", "reduced time to market by X")
- Multiple testimonials

**Grade: D** (Insufficient for a medical device buyer)

---

## Deal Breakers and Must-Haves

### Absolute Deal Breakers

1. **No FDA submission experience** - If they've never contributed to a cleared 510(k), they cannot lead our regulatory preparation
2. **No engineer resumes** - I need to verify claimed experience levels
3. **No professional liability insurance** - Non-negotiable for medical device work
4. **Key person unavailability** - If the right engineers aren't available for 18 months, no deal

### Must-Haves for Shortlisting

1. Demonstrated IEC 62304 software development experience
2. At least 2-3 medical device references I can contact
3. Clear QMS or equivalent quality practices
4. Ability to deliver DHF-ready documentation
5. Defined project structure with milestones and deliverables

### Nice-to-Haves

1. ISO 13485 certification (or operating under client's QMS)
2. FDA clearance numbers for past work
3. Named regulatory consultant or partner for submission support
4. Prior experience with patient monitoring devices specifically

---

## Recommendation to My Board

### Executive Summary for Board Discussion

**Vendor:** Crab Labs LLC, Long Beach, CA
**Consideration:** Engineering partner for patient monitoring device
**Budget:** $200k over 18 months

**Recommendation: CONDITIONAL CONSIDERATION**

Crab Labs demonstrates relevant technical capabilities in hardware and firmware for medical devices, with an attractive pricing model and direct engineer access that could improve communication and reduce bureaucracy compared to larger consultancies.

However, for a project of this scope and regulatory complexity, I have significant concerns:

1. **Regulatory depth is unverified** - The website lists correct standards but shows no evidence of actual FDA submission experience
2. **Business stability is uncertain** - One year of operating history is insufficient for an 18-month critical-path engagement
3. **Team size creates capacity and continuity risks** - 5 engineers managing 8-10 projects/year leaves little buffer
4. **Social proof is weak** - One non-medical testimonial does not validate medical device capabilities

**I recommend:**
- Booking a discovery call to validate regulatory experience claims
- Requesting references from past medical device projects
- Considering them for a smaller initial engagement (design review, $5-10k) as a trial
- NOT selecting them as sole partner for the full development program

**If validation is successful:**
- Consider for PCB design and firmware development subcomponents
- Partner with a regulatory-focused firm for 510(k) preparation
- Implement milestone-based payments with deliverable gates

**Likelihood to recommend to board for full engagement: 3/10**
**Likelihood to recommend for limited scope trial: 7/10**

---

## Final Assessment

### Strengths
- Genuine technical depth in hardware and firmware
- Transparent pricing model
- Direct engineer access eliminates PM overhead
- In-house lab accelerates prototyping and EMC work
- Fixed-price model transfers estimation risk to vendor
- Correct understanding of relevant medical device standards

### Weaknesses
- Insufficient regulatory depth for FDA submission support
- Young company with no track record for long-term engagement
- Small team creates capacity and continuity risks
- Weak social proof (one non-medical testimonial)
- No visible quality management system
- Rates below market (sustainability concern)

### Bottom Line

Crab Labs appears to be a competent small electronics consultancy that has correctly identified medical devices as a strategic market. They have the hardware and firmware skills to contribute to a medical device project. What they lack - and what the website fails to demonstrate - is the regulatory depth and operational maturity required to lead a Class II device development program through FDA clearance.

For my specific project, I would not engage them as the primary partner. However, they could add value as a specialized contributor for specific technical work products, particularly if paired with a regulatory-focused firm or used after we've completed the regulatory strategy internally.

The "no middlemen" positioning is genuinely attractive after my experiences with large consultancies. If they can demonstrate the regulatory depth in a discovery call and provide solid medical device references, my assessment could change. But based solely on what the website presents, they don't make my shortlist for a $200k FDA-bound project.

---

*This evaluation reflects the perspective of an experienced medical device executive evaluating a potential vendor. Individual project needs may vary.*

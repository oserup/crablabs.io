---
title: "When Certification Costs More Than Development"
description: "Regulatory compliance can exceed engineering costs. How to budget for it and avoid surprises."
pubDate: 2025-01-08
author: "Orion Serup"
heroImage: "/images/blog/emc-testing.jpg"
tags: ["compliance", "regulatory", "medical-devices", "budget"]
contentType: "article"
featured: false
draft: false
---

Consider a wireless patient monitor: a few sensors, BLE radio, small display. Development and prototyping might run $45k.

Certification is another matter. FDA 510(k). IEC 60601 electrical safety. IEC 60601-1-2 EMC. Wireless certifications. Biocompatibility testing. Software documentation to IEC 62304.

Certification budget for this device: approximately $180k. Four times the development cost.

This ratio is common. For regulated products, compliance frequently exceeds engineering as the largest line item.

## Where the Money Goes

### Medical Devices (FDA 510(k) pathway)

| Category | Typical Cost |
|----------|--------------|
| Predicate device research | $5-15k |
| Design controls documentation | $20-50k |
| Risk management (ISO 14971) | $15-30k |
| Software documentation (IEC 62304) | $25-60k |
| Electrical safety testing (IEC 60601-1) | $25-45k |
| EMC testing (IEC 60601-1-2) | $20-40k |
| Biocompatibility (ISO 10993) | $15-80k |
| Usability engineering (IEC 62366) | $10-25k |
| 510(k) submission preparation | $20-40k |
| FDA review fees | $15-20k |
| **Total** | **$170-405k** |

And that's for a Class II device with a clear predicate. Class III or novel devices cost 2-5x more.

### Wireless Products (FCC/CE)

| Category | Typical Cost |
|----------|--------------|
| FCC Part 15 testing | $5-15k |
| FCC certification fees | $2-5k |
| CE RED testing | $8-20k |
| CE documentation | $3-8k |
| International certs (IC, MIC, etc.) | $3-10k each |
| **Total** | **$21-58k** |

Wireless adds cost everywhere. Each new market requires its own certification. A product sold in US, EU, Canada, Japan, and Australia might spend $80k+ just on radio certifications.

### Industrial Equipment (CE/UL)

| Category | Typical Cost |
|----------|--------------|
| CE LVD testing | $5-12k |
| CE EMC testing | $8-18k |
| CE documentation | $3-8k |
| UL/CSA listing | $15-40k |
| Functional safety (if applicable) | $30-100k |
| **Total** | **$31-178k** |

## Why It Spirals

**Scope creep through standards.** One standard references another, which references another. IEC 60601-1 points to IEC 62368-1 for certain requirements, which points to other standards. You can end up buying $5k in standards documents just to understand what you're required to do.

**Testing failures.** First-time pass rates for EMC testing are often around 60%. Each failure means redesign, retest. Budget for at least one round of rework.

**Documentation requirements.** Regulators want evidence. That means traceability matrices, design history files, risk analyses, test protocols, test reports. Documentation can take longer than the engineering work it documents.

**Consultant dependency.** Unless you've done this before, you'll likely need regulatory consultants. Good ones cost $200-400/hour. They can be worth it, but the hours add up.

**Lab scheduling.** Accredited test labs book 4-8 weeks out. Rush fees add 50-100%. Your timeline gets held hostage by lab availability.

## The Hidden Multipliers

### Changes After Testing

Made a minor firmware update? Some certifications need to be repeated. Changed a component? Might need retesting. "Minor" changes cascade into major costs.

### Multi-Region Sales

Every market has its own requirements:

- **US**: FCC, FDA (if medical), UL (if needed)
- **EU**: CE (RED, LVD, EMC, MDR if medical)
- **Canada**: ISED, Health Canada (if medical)
- **Australia**: RCM, TGA (if medical)
- **Japan**: MIC, PMDA (if medical)
- **China**: CCC, NMPA (if medical)

A global product launch can spend more on regulatory than on the entire engineering effort.

### Ongoing Compliance

Certification isn't one-time. Medical devices require:

- Annual registration fees
- Adverse event reporting systems
- Post-market surveillance
- Periodic audits
- Recertification when standards update

Budget 10-20% of initial certification cost annually for maintenance.

## Planning for Reality

### Early Regulatory Engagement

Bring in a regulatory consultant during the requirements phase, not after design is done. $5k in early advice can save $50k in redesign.

### Design for Compliance

- Choose components with existing certifications
- Use pre-certified wireless modules
- Follow reference designs that have passed testing
- Build in design margin for EMC fixes

### Pre-Compliance Testing

Do informal EMC and safety testing during development. Finding problems early is 10x cheaper than finding them at the certification lab.

### Realistic Budgets

| Product Type | Development | Certification | Ratio |
|--------------|-------------|---------------|-------|
| Simple consumer electronics | $30-60k | $15-30k | 0.5x |
| Wireless consumer device | $50-100k | $40-80k | 0.8x |
| Industrial equipment | $80-150k | $50-120k | 0.8x |
| Medical device (Class II) | $100-200k | $150-350k | 1.5-2x |
| Automotive component | $150-300k | $100-250k | 0.8x |

Medical devices frequently see certification exceed development. Other categories tend to stay below 1:1, but wireless and multi-region sales push the ratio up.

### Timeline Reality

| Phase | Typical Duration |
|-------|------------------|
| Development | 4-9 months |
| Pre-compliance testing | 2-4 weeks |
| Design fixes | 2-6 weeks |
| Certification testing | 4-8 weeks |
| Report preparation | 2-4 weeks |
| Regulatory review | 4-16 weeks |
| **Total to market** | **8-18 months** |

The certification phase can take as long as development. For FDA submissions, regulatory review alone may exceed total development time.

## When to Walk Away

Sometimes the math doesn't work:

- If certification costs exceed your first-year revenue projection, reconsider the market
- If you can't afford a failed test round, you can't afford to certify
- If you're entering a regulated market "to test demand," budget for full compliance anyway

Compliance costs don't scale with volume. A product selling 100 units and one selling 100,000 units pay the same certification fees. Low-volume products in regulated markets tend to be structurally disadvantaged.

## The Bottom Line

Budget for certification from day one. Not as an afterthought. Not as a line item to cut when development runs over. As a core cost that will likely match or exceed engineering.

The companies that get this wrong run out of money between "working prototype" and "sellable product." Don't be one of them.

---
title: "Scaling from Prototype to Production"
description: "What changes at 100, 1000, and 10000 units: costs, suppliers, and process shifts."
pubDate: 2025-11-03
author: "Orion Serup"
heroImage: "/images/blog/smt-assembly.jpg"
tags: ["manufacturing", "production", "scaling", "hardware"]
contentType: "article"
featured: false
draft: false
---

Building 10 units and building 10,000 units are completely different problems. The prototype you hand-assembled on your bench won't survive contact with a production line. Different suppliers, different processes, different documentation, different economics.

This article walks through what actually changes at each volume threshold.

## The Volume Ladder

| Volume | Stage | Per-Unit Cost | Key Challenge |
|--------|-------|---------------|---------------|
| 1-10 | Prototype | $200-1000+ | Make it work |
| 10-100 | Pilot | $80-300 | Make it manufacturable |
| 100-1000 | Low Volume | $40-150 | Make it repeatable |
| 1000-10000 | Medium Volume | $20-80 | Make it cheaper |
| 10000+ | High Volume | $10-40 | Make it scalable |

Each transition breaks something. The part that was available in prototype quantities has a 12-week lead time at production volumes. The test procedure that took 30 minutes per unit doesn't scale. The assembly house that built your pilot can't hit your target cost.

## 1-10 Units: Prototype Stage

At this stage you're buying from [Digi-Key](https://www.digikey.com/) or [Mouser](https://www.mouser.com/) at retail pricing. PCBs come from quick-turn shops like [PCBWay](https://www.pcbway.com/) or [JLCPCB](https://jlcpcb.com/). You might hand-assemble, or use a prototype service.

Cost breakdown looks roughly like:

| Item | Typical Cost |
|------|--------------|
| PCB (quick-turn) | $50-200 per board |
| Assembly (hand or prototype SMT) | $100-500 per board |
| Components (distributor) | Full price |
| **Total** | **$200-1000+ per unit** |

**Focus:** Does it work? Don't optimize cost yet.

## 10-100 Units: Pilot Production

This is where the transition pain starts. Production assembly houses like [MacroFab](https://www.macrofab.com/) or [Tempo Automation](https://www.tempoautomation.com/) need proper documentation. That means a real BOM with manufacturer part numbers, centroid files for pick-and-place, and assembly drawings showing polarity.

Component packaging matters now. Cut tape costs more than reels per part. First article inspection (FAI) reveals design issues that hand assembly masked.

| Item | Typical Cost |
|------|--------------|
| PCB | $15-50 per board |
| Assembly | $30-100 per board |
| Components | 10-20% savings |
| **Total** | **$80-300 per unit** |

**Focus:** Can someone else build this reliably? Find problems before committing to volume.

## 100-1000 Units: Low Volume Production

Now you need real test fixtures. Automated test equipment (ATE) starts making economic sense. You start tracking yield and finding the marginal failures that random hand testing missed.

| Item | Typical Cost |
|------|--------------|
| PCB | $5-20 per board |
| Assembly | $15-50 per board |
| Components | 20-40% savings |
| **Total** | **$40-150 per unit** |

**Focus:** Yield optimization. Get your test coverage up. Start looking at cost.

## 1000-10000 Units: Medium Volume

At this scale, component cost dominates your BOM. You negotiate with contract manufacturers (CMs). You qualify second sources so a single supplier problem doesn't shut down production. Statistical process control starts mattering.

| Item | Typical Cost |
|------|--------------|
| PCB | $2-10 per board |
| Assembly | $5-20 per board |
| Components | 40-60% savings |
| **Total** | **$20-80 per unit** |

**Focus:** Cost reduction. Supply chain resilience. Your margins depend on this phase.

## 10000+ Units: High Volume

You're now buying direct from component manufacturers. Design changes for cost reduction become worthwhile (can you eliminate a part? Use a cheaper connector?). Regional manufacturing decisions matter. Some companies bring final assembly in-house at this point.

| Item | Typical Cost |
|------|--------------|
| PCB | $1-5 per board |
| Assembly | $2-10 per board |
| Components | Near-wholesale pricing |
| **Total** | **$10-40 per unit** |

## What Changes at Scale

### Component Sourcing

**Prototype:** Buy from distributors. Pay list price. Accept any lead time.

**Production:** Multiple changes:

| Volume | Source | Pricing | Lead Time |
|--------|--------|---------|-----------|
| <100 | Distributor | List | Stock |
| 100-1000 | Distributor volume | -10-20% | 2-4 weeks |
| 1000-10000 | Direct/franchise | -30-50% | 6-12 weeks |
| >10000 | Manufacturer direct | -50-70% | 8-16 weeks |

**Key transitions:**

- Minimum order quantities become relevant around 500-1000 units
- Tape-and-reel packaging required for automated assembly
- Manufacturer relationships provide allocation priority during shortages
- Payment terms change (net-30 to net-60 typical)

### PCB Fabrication

**Prototype:** Quick-turn shops. Premium pricing for speed.

**Production:**

| Volume | Typical Source | Lead Time | Cost Reduction |
|--------|---------------|-----------|----------------|
| <50 | Quick-turn (US/EU) | 3-5 days | Baseline |
| 50-500 | Standard fab (US/EU) | 2-3 weeks | -30-50% |
| 500-5000 | Asian fab | 3-4 weeks | -50-70% |
| >5000 | Asian fab + volume | 4-6 weeks | -60-80% |

**Considerations:**

- Quality varies significantly between fabricators
- IPC class requirements matter for reliability
- Import logistics add time and complexity
- Minimum panel quantities apply

### Assembly

**Prototype:** Hand assembly or low-volume SMT house.

**Production:**

| Volume | Assembly Type | NRE | Per-Unit |
|--------|--------------|-----|----------|
| <10 | Hand | $0 | High |
| 10-100 | Low-volume SMT | $500-2000 | Medium |
| 100-1000 | Production SMT | $2000-5000 | Lower |
| >1000 | High-volume SMT | $5000-15000 | Lowest |

**NRE includes:** Stencils, programming, test fixture setup, first article inspection.

**Scaling considerations:**

- Test fixture investment justified around 100-500 units
- Automated optical inspection (AOI) adds cost but catches defects
- X-ray inspection needed for BGAs, adds per-board cost
- Conformal coating adds $1-5 per board

### Testing

**Prototype:** Manual testing, often informal.

**Production testing evolution:**

| Volume | Test Approach | Investment | Coverage |
|--------|--------------|------------|----------|
| <100 | Manual functional | Low | Variable |
| 100-500 | Basic fixture + manual | $2-5k | Moderate |
| 500-2000 | Automated functional | $10-30k | Good |
| >2000 | Full ICT + functional | $30-100k | High |

**Test economics:**

- Manual testing costs $5-20 per unit in labor
- Automated testing costs $0.50-2 per unit after fixture investment
- Break-even typically 200-500 units for basic automation
- In-circuit test (ICT) justified at higher volumes or for complex boards

## Documentation Requirements

### Prototype Level

Minimal formal documentation. Design files sufficient.

### Production Level

**Required documentation:**

- Bill of materials with approved alternates
- Assembly drawing with all callouts
- Test procedure with pass/fail criteria
- Inspection criteria and acceptance standards
- Packaging and labeling specifications

**Quality documentation (if required):**

- First article inspection report
- Process flow diagram
- Control plan
- Certificate of conformance template

### Regulated Products

Medical devices, automotive, and aerospace add:

- Design history file
- Risk analysis documentation
- Traceability requirements
- Supplier qualification records
- Change control procedures

## Common Scaling Problems

### Component Obsolescence

A component available during prototype may be discontinued before production.

**Prevention:**

- Check lifecycle status during design
- Avoid single-source components for critical functions
- Design in second sources from the start
- Consider last-time-buy for end-of-life parts

### Yield Issues at Volume

Problems hidden in small samples appear at scale.

**Common causes:**

- Marginal designs that work sometimes
- Process variations across production lots
- Component tolerance stacking
- Environmental sensitivity

**Prevention:**

- Design with margin (don't use components at their limits)
- Pilot production validates process capability
- Statistical analysis of pilot results
- Design of experiments (DOE) for marginal parameters

### Supplier Transitions

Moving from prototype suppliers to production suppliers introduces risk.

**Transitions to manage:**

- Distributor to direct component sourcing
- Quick-turn to standard PCB fabrication
- Prototype to production assembly house
- US/EU to Asian manufacturing (if applicable)

**Each transition requires:**

- Qualification testing
- First article inspection
- Process validation
- Documentation updates

### Cost Surprises

**Hidden costs at scale:**

- Minimum order quantities force excess inventory
- Tooling and NRE not anticipated
- Test fixture development
- Packaging and shipping materials
- Quality documentation and inspection
- Yield loss and rework

**Budget guidance:**

- Add 20-30% to BOM cost for hidden manufacturing costs
- NRE typically $5-20k for first production run
- Quality costs 5-10% of production cost

## Transition Gates

| Stage | Prerequisites |
|-------|---------------|
| Pilot (10-100) | BOM with MPNs, assembly docs, test procedure, lead times checked |
| Production (100-1000) | FAI passed, test fixtures working, yield targets set |
| Volume (1000+) | Second sources qualified, supply agreements, inventory strategy |

## Cost Trajectory Example

For a moderately complex IoT device (4-layer board, 150 components, BLE radio):

| Volume | Per-Unit Cost | Setup/NRE | Total Investment |
|--------|--------------|-----------|------------------|
| 10 | $180 | $500 | $2,300 |
| 100 | $85 | $3,000 | $11,500 |
| 1000 | $45 | $8,000 | $53,000 |
| 10000 | $28 | $15,000 | $295,000 |

The per-unit cost drops roughly 50% at each 10x volume increase, but total investment grows significantly. Understanding this trajectory helps with pricing and funding decisions.

---
title: "Technical Debt in Hardware"
description: "How shortcuts compound in physical products and strategies for managing them."
pubDate: 2025-12-08
author: "Orion Serup"
heroImage: "/images/blog/hardware-debt.jpg"
tags: ["hardware", "engineering", "design", "best-practices"]
contentType: "opinion"
featured: false
draft: false
---

Technical debt is familiar in software: shortcuts taken for speed that create future maintenance burden. Hardware has the same concept, but the consequences are different. Software debt can be refactored incrementally. Hardware debt often requires a board respin or tooling change.

## What Hardware Technical Debt Looks Like

### Design Shortcuts

**Using what's available instead of what's right:**

A development board had a 3.3V regulator on hand, so it went into the prototype. The product needs 1.8V for the sensor rail. Now there's a bodge wire and a linear regulator dropping 1.5V, wasting power and adding heat.

**Copying without understanding:**

A reference design gets copied directly. It works, but includes components the product doesn't need, is sized for different requirements, or uses obsolete parts. The design works but carries unnecessary cost and complexity.

**Deferring difficult decisions:**

"We'll figure out the thermal management later." Later arrives when the product overheats in testing, requiring enclosure redesign.

### Process Shortcuts

**Skipping design reviews:**

The schedule is tight. The design goes to fabrication without peer review. Issues found in testing could have been caught on paper.

**Inadequate testing:**

Functional testing passes. Environmental testing deferred. First field returns reveal the product fails at temperature extremes that functional testing didn't cover.

**Missing documentation:**

The engineer who designed the power supply left. Nobody documented why certain component values were chosen. The next revision introduces a problem the original design avoided.

### Supply Chain Shortcuts

**Single-source critical components:**

The project uses a specialized part from one manufacturer. That part becomes unavailable. Redesign required.

**No second source validation:**

Alternative parts are listed in the BOM but never tested. When substitution becomes necessary, the alternative doesn't work.

**Components at end of life:**

A design uses a part marked "not recommended for new designs." The product ships. The part is discontinued. Forced redesign follows.

## Why Hardware Debt Is Different

### The Respin Problem

In software, debt can be paid incrementally. Refactor one module at a time. In hardware, many types of debt require a board respin: new layout, new fabrication, new assembly.

**Respin costs:**

- PCB redesign: $2-10k engineering time
- New fabrication: $1-5k for prototypes
- Re-testing: $2-10k
- Schedule delay: 4-8 weeks typical

A software refactoring might take a few days. A hardware respin often costs $5-25k and a month or more.

### The Inventory Problem

Software ships continuously. Hardware ships in batches. When hardware debt gets paid, existing inventory becomes obsolete or requires rework.

**Scenario:** A design flaw is discovered after 500 units are built. Options:

1. Ship flawed units (if the flaw isn't critical)
2. Rework all units (expensive)
3. Scrap and rebuild (very expensive)
4. Live with the flaw until inventory depletes

None of these options are good. Software doesn't have warehouses full of product waiting to ship.

### The Tooling Problem

Hardware often involves tooling: injection molds, test fixtures, enclosure tooling, programming fixtures. Debt embedded in tooling is expensive to address.

**Example:** A connector placement makes the enclosure difficult to mold. The decision was made to simplify PCB routing. Fixing it requires new enclosure tooling ($10-50k for injection molds) plus PCB redesign.

### The Certification Problem

Certified products (FCC, CE, UL, FDA) have a frozen design. Changes trigger re-certification.

**Design change costs:**

| Type of Change | Certification Impact |
|----------------|---------------------|
| Component value | May require retesting |
| Layout change | Likely requires EMC retest |
| New component | May require full recertification |
| Firmware change | Varies by product type |

A simple firmware update on a medical device might trigger FDA submission. The same update on consumer electronics might require only internal testing.

## Common Sources of Hardware Debt

### Schedule Pressure

**"We'll fix it in the next revision":**

The schedule doesn't allow proper design time. Known issues are documented and deferred. The next revision never happens (product is successful enough), or the issues persist because they're "not critical."

**Prototype-grade design in production:**

A prototype design ships because there's no time for production design. Wire gauges are marginal. Thermal design is inadequate. Test points are missing. The product works, but yields are poor and field reliability suffers.

### Cost Pressure

**Design to a BOM target:**

The BOM target is $15. Proper design would cost $18. Features get cut, margins shrink, or the design uses components at their limits. The product ships at $15 BOM but with higher warranty costs or shorter field life.

**Skipping validation:**

EMC pre-compliance testing costs $5k. "We'll just try certification and see." Failure costs $10-20k in redesign and retesting, but there was budget pressure to skip the pre-compliance step.

### Knowledge Gaps

**Unknown unknowns:**

The design team lacks experience in a particular area (RF design, power integrity, thermal management). The design is adequate but not robust. Problems appear under conditions the team didn't anticipate.

**Cargo cult design:**

Design patterns are copied without understanding. "We've always used a 10K pullup here." Sometimes that's right. Sometimes it's wrong for the new application but nobody knows why the original value was chosen.

## Measuring Hardware Debt

Hardware debt is harder to quantify than software debt, but some indicators help:

### Design Debt Indicators

- Number of bodge wires or ECOs per board revision
- Components operating above 70% of rated limits
- Single-source components without alternates
- Known issues documented but not addressed
- Design rules violations waived without analysis

### Process Debt Indicators

- Test coverage gaps
- Missing or outdated documentation
- No design review records
- Manual processes that should be automated
- Calibration or maintenance procedures not followed

### Supply Chain Debt Indicators

- Components on end-of-life notice
- Suppliers with long lead times and no alternates
- Custom or modified parts without second source
- Inventory of obsolete or rework-required units

## Strategies for Managing Hardware Debt

### Accept Some Debt Intentionally

Not all debt is bad. Prototype shortcuts that enable learning are reasonable. The key is:

1. **Acknowledge the debt** - Document what shortcuts were taken
2. **Understand the cost** - Estimate what paying it back requires
3. **Plan to address it** - Include debt paydown in product roadmaps

Unacknowledged debt is the problem. Known, managed debt is a tool.

### Pay Debt Before It Compounds

Some debt gets more expensive over time:

**Address early:**

- Single-source components (before they become unavailable)
- End-of-life parts (before discontinuation)
- Certification issues (before production volume)
- Thermal problems (before enclosure tooling)

**Can wait:**

- Minor cost optimizations
- Documentation improvements
- Non-critical test coverage gaps
- Cosmetic issues

### Design for Debt Reduction

**Build in flexibility:**

- Component footprints that accept multiple package sizes
- Test points and debug access for future troubleshooting
- Modular designs that allow partial updates
- Firmware-configurable parameters instead of hardcoded values

**Avoid debt magnifiers:**

- Custom components when standard parts work
- Aggressive space constraints that eliminate options
- Tooling committed before design validation
- Certification before design is mature

### Allocate Resources for Debt Paydown

**Budget for respins:**

Most hardware projects need at least one unplanned revision. Budget for it. The "final" design is often revision B or C.

**Continuous improvement:**

Even shipping products need maintenance. Allocate engineering time for:

- Alternate component qualification
- Test coverage improvement
- Documentation updates
- Process improvements

## When to Accept Debt

Debt isn't inherently bad. It's a trade-off.

**Accept debt when:**

- Time to market has clear value
- The debt is bounded and understood
- There's a plan to address it
- The product might not survive to need the fix

**Avoid debt when:**

- Safety or reliability is affected
- The debt will compound (certification, tooling)
- The cost of paying it back is unclear
- Nobody acknowledges it's debt

The goal isn't zero debt. It's informed decisions about which trade-offs are worth making.

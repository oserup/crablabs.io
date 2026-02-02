---
title: "Design for Manufacturing: Avoiding Production Problems"
description: "Component selection, layout decisions, and documentation that prevent assembly issues."
pubDate: 2025-04-28
author: "Orion Serup"
heroImage: "/images/blog/manufacturing.jpg"
tags: ["PCB-design", "manufacturing", "DFM", "assembly"]
contentType: "article"
featured: false
draft: false
---

A board that works perfectly on the bench can have 15% yield loss in production. The difference is usually DFM: decisions made during design that either help or fight the assembly process.

Most DFM problems trace back to three causes. Component choices that don't match assembly capabilities. Spacing that's technically possible but practically marginal. Documentation gaps that force the assembly house to guess.

## Component Selection

### Package Choices

The package you choose affects yield more than most engineers realize. 0402 passives are the sweet spot for most assembly houses. Small enough for density, large enough for reliable placement. 0201 works but defect rates climb. 0603 is safer when space permits.

QFN and QFP packages allow visual inspection of solder joints. BGAs require X-ray, which adds cost and still misses some defects. For low volume production, QFN variants often exist for chips also offered in BGA. The density trade-off is usually worth it below 1000 units.

### Connectors

Polarized connectors prevent assembly errors. If a connector can be inserted backwards, someone will insert it backwards. Maybe during production, maybe during field service. The $0.10 premium for a keyed connector is cheap insurance.

Check that your connectors come in tape-and-reel for pick-and-place. Some only ship in tubes or trays, which adds handling cost or forces manual placement.

### Sourcing Reality

Before finalizing any design, check actual availability. The datasheet shows six package options; distributors stock two. The part you spec'd has 52-week lead time. The manufacturer discontinued the industrial temperature variant last quarter.

Second-source every critical component during design, not after. Pin-compatible alternates with identical footprints make substitution straightforward. Document them in the BOM. Your future self will thank you when the primary source goes on allocation.

## PCB Layout for Assembly

### Component Placement

**Orientation consistency:**

- Align polarized components (diodes, capacitors, ICs) in consistent directions
- Pin 1 indicators should face the same way across similar components
- Consistent orientation reduces placement errors and simplifies inspection

**Spacing requirements:**

| Component Type | Minimum Spacing | Preferred |
|----------------|-----------------|-----------|
| 0402 to 0402 | 0.15mm | 0.25mm |
| 0603 to 0603 | 0.2mm | 0.3mm |
| QFN to passives | 0.5mm | 1.0mm |
| Connectors | 2.0mm | 3.0mm |

Tighter spacing reduces assembly yield. When space permits, use preferred values.

**Keep-out zones:**

- 3mm minimum from board edge for components
- 5mm from tooling holes and fiducials
- Clear area around test points for probe access
- Space for pick-and-place nozzle clearance

### Thermal Considerations

**Thermal relief:** Large copper pours make hand soldering difficult. Use thermal relief patterns on power connections. For production, thermal relief may still be needed to prevent tombstoning.

**Component placement for heat:** Place heat-generating components (regulators, power transistors) away from temperature-sensitive parts. Consider airflow direction in enclosed products.

**Reflow compatibility:** All components on a side must tolerate the same reflow profile. Mixing temperature-sensitive parts with high-temperature requirements may require selective soldering or multiple passes.

### Fiducials and Tooling

**Global fiducials:** Place at least two (preferably three) global fiducials on each side requiring assembly. Position at opposite corners for maximum accuracy.

**Local fiducials:** Fine-pitch components (< 0.5mm pitch) benefit from local fiducials near each component.

**Fiducial specifications:**

- 1.0mm diameter copper circle
- 2.0mm soldermask opening
- No silkscreen within 3mm
- Asymmetric placement to prevent 180-degree rotation errors

**Tooling holes:** If panelized, include tooling holes per manufacturer requirements. Standard sizes are 2.0mm or 3.0mm.

## Panelization

### Panel Design

Most assembly houses prefer panels over individual boards. Common approaches:

**Tab routing:** Boards connected by breakaway tabs. Leaves rough edges at tab locations but works for most geometries.

**V-scoring:** Partial cuts through the panel. Cleaner break but requires straight edges. May stress components near score lines during depanelization.

**Combination:** V-score on straight edges, tab routing on curves.

**Panel size considerations:**

- Maximum panel size varies by manufacturer (typically 250x300mm to 400x500mm)
- Larger panels reduce handling but increase risk from single-panel defects
- Balance panel utilization against assembly house preferences

### Rails and Handling

**Panel rails:** 5-10mm borders on panel edges provide handling area and space for tooling holes. Rails don't become product, so cost is amortized across the panel.

**Breakaway stress:** Components within 5mm of breakaway tabs or V-scores may experience stress during depanelization. Avoid placing BGAs, crystals, and ceramic capacitors in these zones.

## Documentation Requirements

### Assembly Drawings

Beyond Gerber files, assembly houses need:

**Component placement data:**

- Centroid file (X, Y, rotation for each component)
- Reference designator mapping
- Component side indication (top/bottom)

**Bill of materials:**

- Manufacturer part number
- Distributor part number (helps sourcing)
- Quantity per board
- Reference designators
- Package/footprint name
- Approved alternates

**Assembly notes:**

- Special handling requirements
- Selective soldering callouts
- No-populate components
- Polarity and orientation details
- Conformal coating areas (if applicable)

### Fabrication Specifications

**Stackup definition:**

- Layer count and order
- Copper weights per layer
- Dielectric materials and thicknesses
- Impedance requirements with target values

**Finish and materials:**

- Surface finish (HASL, ENIG, OSP, etc.)
- Soldermask color and type
- Silkscreen color
- Board material (FR4 grade, Rogers, etc.)

**Tolerances:**

- Minimum trace/space
- Minimum hole size
- Impedance tolerance
- Board thickness tolerance

## Common DFM Issues

### Tombstoning

Small passive components can stand upright during reflow if solder wets unevenly on the two pads.

**Prevention:**

- Balanced copper on both pads (same thermal mass)
- Consistent pad sizes
- Orient passives perpendicular to reflow direction
- Avoid placing passives near large thermal masses on one side

### Solder Bridging

Adjacent pads short together when solder spreads between them.

**Prevention:**

- Adequate pad-to-pad spacing
- Proper stencil aperture design
- Solder mask between pads where possible
- Reduced paste volume for fine-pitch parts

### Insufficient Solder

Joints appear dry or have visible copper.

**Prevention:**

- Correct stencil aperture sizing
- Adequate paste volume for component
- Proper pad sizing per manufacturer recommendations
- Verify stencil thickness matches component requirements

### BGA Voiding

Air pockets under BGA balls reduce reliability.

**Prevention:**

- Via-in-pad with filled and capped vias (adds cost)
- Dog-bone routing to move vias away from pads
- Proper reflow profile
- Adequate soak time for flux activation

## DFM Review Summary

Before releasing to manufacturing, verify these items:

| Category | Check | Why It Matters |
|----------|-------|----------------|
| Components | All parts available from distributors | Prevents schedule delays |
| Components | Lead times under 8 weeks | Production timing |
| Components | Second sources for critical parts | Supply chain resilience |
| Components | No EOL parts | Future production viability |
| Layout | Spacing meets assembly minimums | Yield and rework |
| Layout | Consistent component orientation | Inspection speed |
| Layout | 3mm+ from board edges | Panelization, handling |
| Layout | Fiducials at opposite corners | Placement accuracy |
| Docs | BOM with MPN and alternates | Sourcing clarity |
| Docs | Centroid file verified | Pick and place programming |
| Docs | Assembly drawing with polarity | Reduces errors |
| Process | Single reflow profile compatible | Assembly simplicity |
| Process | Test point access verified | Testability |

## Cost Impact

DFM decisions affect manufacturing cost:

| Decision | Cost Impact |
|----------|-------------|
| 0201 vs 0402 passives | +10-20% assembly cost |
| BGA vs QFN | +$50-200 for X-ray inspection |
| Via-in-pad (filled) | +$2-5 per board |
| 4-layer vs 6-layer | +40-60% board cost |
| Selective soldering | +$0.50-2 per board |
| Mixed SMT and through-hole | +$0.30-1 per board |

Early DFM review is cheaper than redesign. A $500 review can prevent a $5,000 respin.

---
title: "Comprehesive PCB Design Review Checklist"
description: "47-point PCB design review checklist covering common failure modes."
pubDate: 2024-10-28
author: "Orion Serup"
heroImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
tags: ["PCB-design", "checklist", "manufacturing", "quality"]
featured: true
draft: false
---

This checklist covers the most common things that go wrong in PCB designs based on tracking respin causes and production failures.

## Checklist Overview

| Review Category | Points | Common Failures | Time Required |
|-----------------|--------|-----------------|---------------|
| **Schematic Review** | 15 | Power issues, signal integrity | 45-60 min |
| **Layout Review** | 20 | Routing, mechanical, EMC | 60-90 min |
| **Manufacturing** | 7 | Fab specs, assembly docs | 30-45 min |
| **Final Validation** | 5 | Documentation sync | 15-30 min |
| **Total** | **47** | **Most common respin causes** | **2.5-3.5 hours** |


## Schematic Review (Points 1-15)

### Power and Ground (Critical)

**☐ 1. Power supply sequencing is correct**
- Core voltages come up before I/O voltages
- Enable signals control power-up sequence
- No shoot-through conditions during startup

**☐ 2. All power rails have proper bypass capacitors**
- 0.1µF ceramic caps at every IC power pin
- 10µF+ bulk capacitors at power entry points
- Low ESR capacitors for switching regulators

**☐ 3. Ground connections are intentional, not accidental**
- Digital and analog grounds properly separated/connected
- No ground loops in sensitive circuits
- Shield connections properly handled

**☐ 4. Power consumption calculations are realistic**
- All operating modes accounted for
- Thermal dissipation calculated
- Battery life estimates realistic (if applicable)

**☐ 5. Voltage regulators are properly sized**
- 20% minimum headroom on current capacity
- Thermal derating considered
- Input/output voltage ranges verified

### Signal Integrity

**☐ 6. High-speed signals have proper termination**
- Transmission line impedance calculated
- Termination resistors sized correctly
- Clock signals properly driven

**☐ 7. Crystal/oscillator circuits follow best practices**
- Load capacitors correctly sized
- Crystal drive level appropriate
- Ground guard rings provided

**☐ 8. I/O voltage levels are compatible**
- 3.3V devices don't drive 1.8V inputs
- Level shifters included where needed
- Pull-up/pull-down resistors properly sized

**☐ 9. Unused inputs are properly handled**
- All inputs either connected or pulled to valid levels
- Unused sections of ICs properly disabled
- No floating CMOS inputs

### Component Selection

**☐ 10. All components are available and qualified**
- No obsolete or hard-to-source parts
- Second sources identified for critical components
- Automotive/medical grade parts specified if required

**☐ 11. Component packages are manufacturable**
- No 0201 components unless absolutely necessary
- BGA parts only if required (and assembly house can handle them)
- Connector pinouts verified against datasheet

**☐ 12. Capacitor voltage ratings have adequate margin**
- Minimum 2x voltage derating for ceramics
- Temperature coefficient considered
- DC bias effects accounted for

**☐ 13. Resistor power ratings are adequate**
- Minimum 2x power derating
- Pulse power handling considered
- Temperature coefficient appropriate

### Design Validation

**☐ 14. Critical timing requirements are met**
- Setup and hold times verified
- Clock-to-output delays calculated
- Propagation delays through logic accounted for

**☐ 15. ESD protection is provided where needed**
- TVS diodes on external connections
- Series resistors on I/O lines
- ESD protection doesn't interfere with signal integrity

## Layout Review (Points 16-35)

### Layer Stackup and Routing

**☐ 16. Layer stackup is optimized for manufacturing**
- Even number of layers for warpage control
- Copper weight appropriate for current carrying
- Dielectric thickness standard values

**☐ 17. Trace widths meet current carrying requirements**
- 10°C rise per IPC-2221 guidelines
- Internal vs external layer derating applied
- Via current capacity considered for high-current paths

**☐ 18. Differential pairs are properly routed**
- Matched length within tolerance
- Consistent spacing maintained
- Proper via transitions

**☐ 19. High-speed signals follow routing rules**
- Avoid layer changes where possible
- Minimize stubs and discontinuities
- Return path continuity maintained

**☐ 20. Analog circuits are properly isolated**
- Sensitive circuits away from switching noise
- Analog power properly filtered
- Kelvin connections for precision measurements

### Power Distribution

**☐ 21. Power distribution is robust**
- Multiple vias for power connections
- Adequate copper area for current density
- Voltage drop calculations verify performance

**☐ 22. Ground planes are continuous**
- No slots or splits under high-speed circuits
- Return current paths are clear
- Thermal relief connections appropriate

**☐ 23. Bypass capacitors are optimally placed**
- As close as possible to IC power pins
- Via placement minimizes inductance
- Different value capacitors don't fight each other

### Mechanical Considerations

**☐ 24. Component placement considers mechanical constraints**
- Tall components clear enclosure
- Heat-generating components have thermal path
- Connectors accessible and properly oriented

**☐ 25. Board flex and vibration are considered**
- Large/heavy components adequately supported
- Board thickness appropriate for span
- Critical circuits away from high-stress areas

**☐ 26. Thermal management is adequate**
- Thermal vias under power components
- Copper pour for heat spreading
- Temperature-sensitive components in cool areas

### Manufacturing Constraints

**☐ 27. Minimum trace/space rules are followed**
- Manufacturing capabilities verified with fab house
- Consistent design rules throughout board
- Soldermask expansion adequate

**☐ 28. Via sizes are manufacturable**
- Drill size to finished hole relationship correct
- Aspect ratio within manufacturer capability
- Via-in-pad approach verified if used

**☐ 29. Soldermask and silkscreen are correct**
- Component reference designators clear and readable
- Pin 1 indicators on all polarized components
- Revision number and date on silkscreen

### Test and Debug

**☐ 30. Test points are provided where needed**
- Critical power rails accessible
- High-speed signals have test points where safe
- Test points sized for manufacturing test

**☐ 31. Debug access is maintained**
- JTAG/SWD connectors accessible
- Programming interfaces available
- Reset and boot mode pins accessible

**☐ 32. Component orientations are consistent**
- Polarized components follow consistent orientation
- IC pin 1 locations clearly marked
- Reduces assembly errors

### EMC Considerations

**☐ 33. EMC guidelines are followed**
- High-speed traces kept short
- Return paths minimize loop areas
- Shielding provisions included if needed

**☐ 34. I/O filtering is provided**
- Ferrite beads on digital I/O
- Common-mode chokes on differential signals
- Power supply filtering adequate

**☐ 35. Cable and connector shielding is considered**
- Shield connections properly handled
- 360-degree shield termination where appropriate
- Cable routing away from sensitive circuits

## Manufacturing Review (Points 36-42)

### Fabrication Requirements

**☐ 36. Gerber files are complete and correct**
- All layers included and properly named
- Drill files match via definitions
- Aperture definitions complete

**☐ 37. Board specifications are clearly documented**
- Material specifications (FR4 grade, glass style)
- Copper weights for each layer
- Surface finish requirements (HASL, ENIG, etc.)

**☐ 38. Panelization requirements are defined**
- Panel size within manufacturing limits
- Fiducials and tooling holes included
- Breakaway tabs or V-scoring specified

### Assembly Requirements

**☐ 39. Pick and place files are accurate**
- Component positions match layout
- Rotation angles correct for all components
- Polarized components properly oriented

**☐ 40. Bill of materials is complete**
- Manufacturer part numbers specified
- Quantity calculations correct
- Alternate parts identified

**☐ 41. Assembly notes address special requirements**
- Press-fit connectors installation force
- Heatsink mounting torque specifications
- Special handling for sensitive components

**☐ 42. Stencil design is optimized**
- Aperture sizes appropriate for component pitch
- Paste release characteristics considered
- No-populate components excluded

## Final Validation (Points 43-47)

### Design Documentation

**☐ 43. Schematic and layout are synchronized**
- Component values match between schematic and BOM
- Reference designators consistent
- No orphaned components or nets

**☐ 44. Design review sign-off is complete**
- Electrical review completed and documented
- Mechanical review completed
- EMC review completed (if applicable)

### Manufacturing Readiness

**☐ 45. Supplier quotes obtained and reviewed**
- Lead times compatible with project schedule
- Pricing within budget expectations
- Quality certifications verified (if required)

**☐ 46. First article inspection plan is defined**
- Critical dimensions identified
- Electrical test plan prepared
- Acceptance criteria established

**☐ 47. Risk mitigation plans are in place**
- Component shortage backup plans
- Manufacturing delay contingencies
- Design change procedures established

## Industry-Specific Additions

### Medical Devices (Add These 5 Points)

**☐ M1. Patient isolation meets IEC 60601 requirements**
- 4kV isolation verified in design
- Creepage and clearance distances adequate
- Safety agency approval for isolation components

**☐ M2. Leakage current paths are minimized**
- Y-capacitor values appropriate
- Earth ground connections intentional
- Patient-connected circuits properly isolated

**☐ M3. Risk management documentation is complete**
- Failure modes analysis conducted
- Single fault safety verified
- Risk controls implemented in design

**☐ M4. Software-controlled safety functions are validated**
- Hardware watchdog timers implemented
- Safe states defined for all failure modes
- Software architecture follows IEC 62304

**☐ M5. EMC immunity meets medical standards**
- IEC 60601-1-2 requirements considered
- Conducted and radiated immunity designed in
- Essential performance maintained during EMC stress

### Automotive (Add These 3 Points)

**☐ A1. Automotive operating conditions are met**
- -40°C to +125°C temperature range
- Automotive-grade components specified
- Load dump and other automotive transients considered

**☐ A2. Functional safety requirements are implemented**
- ASIL level requirements met
- Diagnostic coverage adequate
- Fail-safe behaviors defined

**☐ A3. Automotive quality standards are followed**
- PPAP documentation requirements planned
- Manufacturing process capability verified
- Long-term availability confirmed

## Pre-Manufacturing Final Check

Before releasing your design for manufacturing, perform this final 5-minute sanity check:

1. **Power-up sequence:** Trace through power-up from cold start
2. **Critical signals:** Verify your three most important signals have clean paths
3. **Component accessibility:** Ensure programmable devices can be accessed
4. **Manufacturing notes:** Confirm special assembly requirements are documented
5. **Change control:** Verify this is the correct revision being released

## Common Failure Points (What This Checklist Prevents)

**Power Supply Issues (35% of respins):**
- Inadequate bypass capacitors
- Wrong power sequencing
- Insufficient current capacity

**Signal Integrity Problems (25% of respins):**
- Poor high-speed layout
- Incorrect terminations
- Ground plane issues

**Manufacturing Problems (20% of respins):**
- Unmanufacturable features
- Component placement errors
- Assembly documentation errors

**Component Issues (15% of respins):**
- Obsolete or unavailable parts
- Wrong footprints
- Inadequate specifications

**EMC Failures (5% of respins):**
- Poor grounding strategy
- Inadequate filtering
- Layout radiation issues

## When to Use This Checklist

**Always Use For:**
- First-time designs
- Modified existing designs
- High-volume production
- Safety-critical applications
- Tight schedule projects

**Abbreviated Version For:**
- Simple modifications to proven designs
- Prototype iterations
- Very low volume applications

**Extended Version For:**
- Medical device designs
- Automotive applications
- Aerospace/defense projects
- High-reliability applications

## The Bottom Line

This 47-point checklist takes 2-3 hours to complete but prevents weeks of delays and thousands of dollars in respin costs.

**Note:** Don't just check the boxes. Understand why each item matters for your specific design.

**Remember:** Every item on this list exists because someone, somewhere, shipped a design without checking it and paid the price. Learn from their mistakes, not your own.
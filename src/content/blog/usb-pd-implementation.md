---
title: "USB-C Power Delivery Implementation"
description: "Hardware and firmware considerations for adding USB PD to embedded products."
pubDate: 2025-06-09
author: "Orion Serup"
heroImage: "/images/blog/usb-c-orange.jpg"
tags: ["usb", "power-electronics", "hardware", "firmware"]
contentType: "article"
featured: false
draft: false
---

USB Power Delivery is becoming a requirement for many product categories. The EU now requires USB-C charging for consumer electronics. Customers expect it. Here's what's involved in implementing it.

## The Basics

USB PD allows negotiation of voltage and current over the CC (Configuration Channel) lines. Standard fixed PDOs:

| PDO | Voltage | Max Current | Max Power |
|-----|---------|-------------|-----------|
| 5V  | 5V      | 3A          | 15W       |
| 9V  | 9V      | 3A          | 27W       |
| 15V | 15V     | 3A          | 45W       |
| 20V | 20V     | 5A          | 100W      |

**The 12V Question:** You'll notice 12V isn't a standard fixed PDO. This causes headaches if your design expects 12V (common in industrial, automotive, and LED applications). There are three ways to get 12V:

1. **PPS (PD 3.0+)**: Request exactly 12V from a PPS range. Most PD 3.0 chargers advertise a 3.3-11V or 3.3-21V programmable range. This is the cleanest solution.

2. **12V Alternate PDO**: Some chargers advertise 12V as an optional fixed PDO beyond the standard set. This is spec-compliant but not guaranteed. You can't assume every charger will offer it.

3. **Buck from 15V/20V**: If 12V isn't available, request 15V or 20V and regulate down. Adds efficiency loss and BOM cost, but works with any charger.

For products requiring 12V, design for case 3 as the fallback, but try PPS first if available. Your firmware should walk through available PDOs and APDOs to find the best match.

## PD Versions and Features

**PD 2.0**: The baseline. Fixed PDOs only. Still common in budget chargers.

**PD 3.0**: Adds PPS (Programmable Power Supply) for voltage adjustment in 20mV steps and current limiting in 50mA steps. Useful for efficient battery charging. Also adds extended messaging and fast role swap.

**PD 3.1**: Extended Power Range (EPR) adds 28V, 36V, and 48V for up to 240W. Requires EPR-rated cables and connectors. Most embedded applications stay within SPR (Standard Power Range, the original 100W limit).

**PPS in Practice**: For lithium battery charging, PPS matters. Instead of requesting 9V and dissipating excess voltage as heat, you request the voltage your battery needs (say, 8.4V) at the current it can accept. This can improve charging efficiency by 10-20% and reduce thermal management requirements.

## Power and Data Roles

USB-C separates power and data roles, which creates complexity:

**Power Role:**

- **Source**: Provides VBUS power
- **Sink**: Receives VBUS power
- **DRP (Dual-Role Power)**: Can be either, negotiated at connection

**Data Role:**

- **DFP (Downstream Facing Port)**: Acts as USB host
- **UFP (Upstream Facing Port)**: Acts as USB device
- **DRD (Dual-Role Data)**: Can be either

These are independent. A device can be a power sink (receiving power) while being a DFP (acting as USB host). Think of a laptop: it sinks power from a charger while hosting USB devices.

**Role Swap**: PD allows dynamic swapping of both power and data roles without disconnecting. Your firmware needs to handle PR_Swap and DR_Swap requests.

**Try.SRC / Try.SNK**: For DRP devices, these settings determine the preferred role. A power bank might be Try.SRC (prefers to provide power). A laptop might be Try.SNK (prefers to receive power). Getting this wrong causes connection failures between two DRP devices.

## Sink vs Source

**Sink** (your device receives power): Simpler. You request a voltage, the source provides it. Most battery-powered devices are sinks.

**Source** (your device provides power): More complex. You advertise capabilities, respond to requests, handle fault conditions. Power tools, docking stations, battery packs.

**Dual-Role Power (DRP)**: Can be either, negotiated at connection. Adds complexity but enables peer-to-peer power sharing.

## Hardware Options

### Dedicated PD Controllers

A common approach for most designs. A separate IC handles PD negotiation:

- **STUSB4500** (ST): Standalone sink controller. No MCU required for fixed voltage output. Program via I2C or NVM. Good for simple "give me 15V" applications.

- **FUSB302** (onsemi): Requires MCU to run PD stack. More flexible, supports DRP. Common in Linux systems.

- **TPS65987/TPS65988** (TI): Full-featured controllers with integrated power path. Handles PD, alt modes, power switching. Higher cost but reduces external components.

- **CYPD3177** (Infineon): Standalone sink with configurable power profiles. I2C programmable.

### What to Look for in Controller Selection

**For sink-only applications:**

- Does it support the PDOs you need? Not all chips support PPS or high voltages.
- Standalone vs MCU-controlled? Standalone is simpler but less flexible.
- NVM programmable? Useful for setting default behavior without MCU.
- Power path integration? Some chips include the VBUS switch, reducing BOM.

**For source applications:**

- Adjustable PDO advertising? You need to tell sinks what you can provide.
- Current limiting and fault detection? Important for safety.
- Dead battery support? Can you charge a completely dead device?

**For DRP applications:**

- Try.SRC/Try.SNK configurable? Important for proper role resolution.
- Fast role swap support? Needed for seamless power transitions.
- PR_Swap and DR_Swap handling? Must respond to partner requests.
- Alt mode support? If you need DisplayPort or Thunderbolt, check compatibility.

**PD version support:**

- PD 2.0 only chips are cheaper but lack PPS
- PD 3.0 chips add PPS and extended features
- PD 3.1 chips support EPR (240W) but cost more

### Integrated Solutions

Some MCUs include PD PHY:

- **STM32G0/G4** with UCPD peripheral: Runs PD stack in firmware. Saves a chip but consumes MCU resources.

- **ESP32-S3**: No native PD, but people bit-bang it. Not recommended for production.

For new designs, dedicated controllers are often worth the extra $1-2 in BOM cost. They handle edge cases that can take months to debug in firmware.

## Firmware Considerations

If using an MCU-based approach:

**PD Stack Options:**

- Vendor stacks (ST's X-CUBE-TCPM, TI's stack): Well-tested but sometimes inflexible
- USB-IF certified stacks: Required for logo certification, typically licensed
- Open source (libtypec, tcpm): Community-maintained, varies in quality

**Key State Machines:**

1. **Type-C state machine**: Handles attach detection, orientation, role resolution
2. **PD state machine**: Handles capability exchange, power negotiation, messaging
3. **Policy engine**: Your application logic for accepting/rejecting power contracts

These need to run with reasonable timing (messages have 15-20ms response windows). An RTOS task or high-priority polling loop works. Bare metal superloops can work but get tricky with other timing-sensitive code.

## PCB Layout

**CC line routing:**

- Keep traces short (<50mm recommended)
- Route as differential pair if possible
- 5.1k pulldown resistors close to connector (within 5mm)
- ESD protection on CC1/CC2 (TVS diodes rated for the voltage)

**VBUS considerations:**

- Wide traces or planes for high current (100W = 5A at 20V)
- Current sensing for overcurrent protection
- Soft-start to limit inrush current
- Proper decoupling at connector and load

**Connector selection:**

- Use USB-IF certified connectors
- Check current rating matches your max power
- Consider waterproofing requirements
- Mid-mount vs top-mount affects thermal dissipation

## Common Implementation Mistakes

**Ignoring cable resistance.** A 2m USB-C cable has significant IR drop at 5A. Your 20V source might only deliver 18.5V at the load. Design for worst-case cable drop.

**Skipping PPS for battery charging.** Programmable Power Supply (PPS) allows voltage adjustment in 20mV steps. If you're charging a battery, this enables much more efficient charging than fixed PDOs.

**Forgetting about Try.SRC/Try.SNK.** These determine which role a DRP device prefers. Get it wrong and two DRP devices might fail to connect or negotiate incorrectly.

**Inadequate fault handling.** PD requires responding to hard resets, detecting overcurrent, handling cable disconnects gracefully. The happy path is easy; robust error handling takes effort.

**Not testing with multiple chargers.** Every charger interprets the spec slightly differently. Test with at least 5-10 different chargers/sources before production.

## Certification

USB-IF certification is optional but recommended for consumer products:

- **Compliance testing:** ~$10-15k for a full test suite
- **Logo license:** Annual fee based on volume
- **Pre-compliance:** Consider renting test equipment or using a consultant for early validation

Without certification, you can still use USB-C physically, but you can't use the USB logos and some retailers require certification.

## Development Approach

1. **Start with an eval board.** Every major PD controller vendor has one. Get negotiation working before designing custom hardware.

2. **Use a PD analyzer.** Tools like Total Phase Beagle or Teledyne LeCroy decoders show what's happening on the CC lines. Useful for debugging.

3. **Test with a programmable PD source/sink.** Devices from Plugable, Acroname, or Qoitech let you simulate different power scenarios.

4. **Build margin into power budgets.** If you need 45W, design for 60W capability. You'll appreciate the headroom.

## Cost Estimate

For a USB PD sink (receive power):

| Component | Typical Cost |
|-----------|--------------|
| USB-C connector | $0.50-2.00 |
| PD controller IC | $1.50-4.00 |
| ESD protection | $0.30-0.80 |
| Power path FET | $0.50-1.50 |
| Passives | $0.20-0.50 |
| **Total BOM** | **$3.00-9.00** |

Development time: 2-6 weeks depending on complexity and prior experience.

For source or DRP applications, expect 1.5-2x the BOM cost and development time.

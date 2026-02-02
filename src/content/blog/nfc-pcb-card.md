---
title: "NFC PCB Business Card Design"
description: "Complete guide to designing and manufacturing NFC business cards in KiCad."
pubDate: 2024-07-08
author: "Orion Serup"
heroImage: "/images/BusinessCardFront.jpg"
tags: ["nfc", "pcb", "rfid", "kicad", "tutorial"]
contentType: "tutorial"
featured: false
draft: false
---

An NFC PCB business card can be a fun and unique way to promote yourself or your business.

Crab Labs designed and built these NFC PCB Business cards, the source files are [here](https://github.com/CrabLabsLLC/BusinessCard)

![Business Card Back](/images/BusinessCardBack.jpg)

I will show you how to design and build one using [KiCad](https://www.kicad.org/) and [JLCPCB](https://jlcpcb.com/)

## Prerequisites

- Understanding of basic circuit theory and electronics (video [here](https://youtu.be/uXr4lXYjXuU?si=g8Fv1T-dVMoQe0k7))
- Working knowledge of KiCad (Tutorial [here](https://youtube.com/playlist?list=PLZNH6jlLeFXsg9ohRMbJ0qqSfUrRyAn7b&si=z17BisQiM9Pfdlvw))

## Primer on NFC (Near Field Communication)

Near Field Communication is a standardized series of protocols which define communication between two devices utilizing a 13.56 MHz carrier frequency ([reference](https://nfc-forum.org/learn/nfc-technology/)).

NFC devices need to be within several centimeters to communicate with each other.

Common NFC protocols are [ISO 14443](https://www.thalesgroup.com/en/markets/digital-identity-and-security/technology/iso14443) (Most Common, faster data rates up to 848 kbps, shorter range ~10cm) and [ISO 15693](https://www.rfidlabel.com/understanding-the-iso15693-protocol-an-in-depth-look/) (Longer range up to 1.5m, but slower data rates ~26-53 kbps). Most devices, including smartphones, natively support ISO 14443 communication; support for ISO 15693 is less consistent.

There are two main classes of NFC devices, Tags and Readers. This business card will be a tag and a smartphone or other device will be a reader.

NFC Tags store information that is procedurally read by a reader device when it gets close enough to be powered by it. The format and type of data that is read and interpreted is standardized but may or may not be supported based on the reader.

## Preliminary Design

The first step in the design is deciding the big picture details of the design such the general shape of the card and what it will contain.

NFC Tags can have a large amount of data stored on then, some reader devices have less compatibility than others in regards to acting on the data in the tag. For example, contact cards (vCards) can be stored on NFC Tags but Apple IPhones are not able to automatically import or read them in to your contacts while most Android devices have native support.

The most universal data form is a simple url, it is recommended to store either a URL or phone number. If you or your company has a website or landing page that would be ideal.

As for the size and shape of the card there are very few limitations, the main limitation is in regards to the antenna. There should be an unbroken area of at least 2cm x 2cm which is dedicated for the NFC antenna, the larger the antenna is, the greater the range. You can and should create an interesting outline using tools such as Adobe Illustrator, Inkscape, or other Vector Graphics or CAD tools. Crab Labs recommends having no dimension greater than 3.5 inches (90 mm) in the x or y direction (a standard business card is 3.5" x 2" (90 x 50mm))

Crab Labs designed our version as a circle in order to use them as coasters or decor as well as to stand out.

## Creating the Schematic

The following circuit is what was designed and used by Crab Labs

![Schematic](/images/CardSchematic.jpg)

The circuit is relatively simple, it revolves around a NFC IC which handles all of the NFC communication.

More circuitry can be added as desired.

For a detailed breakdown of the schematic see the docs portion of the source repository located [here](https://github.com/CrabLabsLLC/BusinessCard/blob/develop/docs/Specification.md).

Open KiCad and create a new project using Command+N or Ctrl+N

Find a location to create the project and name it something appropriate, such as "BusinessCard"

Once the project has been created, navigate to and open the schematic (the file called *.kicad_sch), it will look like this:

### Selecting an NFC Tag IC

The most crucial decision in designing an NFC business card if the choice of NFC transponder or tag IC. It is generally recommended to chose a ISO 14443 chip as it is the most compatible.

There are a number of popular ISO 14443 NFC Tag ICs, such as:

- [NT2H1x](https://octopart.com/datasheet/nt2h1311f0dtlh-nxp+semiconductors-30332213) by NXP (x = 3, 6)
- M24SRx by ST Microelectronics (x = [02](https://octopart.com/datasheet/m24sr02-ymn6t%2F2-stmicroelectronics-31443741), [04](https://octopart.com/datasheet/m24sr04-ydw6t%2F2-stmicroelectronics-31443742), [16](https://octopart.com/datasheet/m24sr16-ymn6t%2F2-stmicroelectronics-31443747), [64](https://octopart.com/datasheet/m24sr64-ymn6t%2F2-stmicroelectronics-31443750))

Some of the most popular ISO 15693 NFC Tag ICs are:

- [ST25DVx](https://octopart.com/datasheet/st25dv04k-ier6t3-stmicroelectronics-80826716) by ST Microelectronics (x = 04K, 16K, 64K)
- M24LRx by ST Microelectronics (x = [04](https://octopart.com/datasheet/m24lr04e-rmc6t%2F2-stmicroelectronics-22275304), [16](https://octopart.com/datasheet/m24lr16e-rmc6t%2F2-stmicroelectronics-20571336), [64](https://octopart.com/datasheet/m24lr64e-rmc6t%2F2-stmicroelectronics-24437452))
- N24RFx by onsemi (x = [04](https://octopart.com/datasheet/n24rf04edwpt3g-onsemi-96588362), [16](https://octopart.com/datasheet/n24rf16edtpt3g-onsemi-96588363), [64](https://octopart.com/datasheet/n24rf64edwpt3g-onsemi-96588366))

The most important factor in finding the right transponder chip is the memory size, you generally want as much memory as you can afford.

Note: _Crab Labs recommends using the M24S or ST25DV series of transponders, they are plentiful, affordable, and easy to work with._

#### Sourcing NFC Tag ICs

If you are comfortable hand soldering components you can look for components from any source ([Octopart](https://octopart.com) searches multiple sources around the web at once). Chose tags with SO-8 or similar packages if you plan to hand assemble unless you have access to advanced tools or have significant experience.

If you can't or don't want to hand assemble PCBAs, then it is recommended to look for components on [LCSC](https://lcsc.com). If the component is available on LCSC then your design can be fully built and assembled at JLCPCB in a timely manner. If you do not chose a component that is available on LCSC you will either have to hand assemble that component or have the part be ordered on the side (this is more expensive, takes longer, and is more difficult).

Open KiCad and create a new project using Command+N or Ctrl+N

Find a location to create the project and name it something appropriate, such as "BusinessCard"

Once the project has been created, navigate to and open the schematic (the file called *.kicad_sch), it will look like this:

### Placing the Components

Once you have selected an NFC IC, you need to create symbols for it in KiCad. For information on how to import external components, see our guide on [importing external libraries in KiCad](/insights/kicad-external-libraries).

Place the NFC IC symbol on your schematic and connect the antenna pins according to the datasheet specifications.

### Antenna Design

The antenna is the most critical part of an NFC design. It must resonate at 13.56 MHz when combined with the IC's internal capacitance and any external tuning components.

#### Resonance Fundamentals

The antenna and capacitors form an LC tank circuit. The resonant frequency is:

`f = 1 / (2 * pi * sqrt(LC))`

For 13.56 MHz operation with a 1 uH antenna, you need approximately 138 pF total capacitance. The NFC IC contributes some internal capacitance (typically 25-50 pF); you add external capacitors to reach the target.

**Important:** Design for ~13.8 MHz resonance initially. The FR4 substrate, solder mask, and environmental factors will shift the frequency down by 200-400 kHz once assembled.

#### Antenna Geometry

Key parameters for a PCB loop antenna:

- **Number of turns:** 3-5 turns typical for smartphone read range
- **Trace width:** 0.3-0.5 mm (wider = lower resistance, better Q)
- **Trace spacing:** 0.2-0.5 mm (tighter spacing increases inductance per area)
- **Total inductance:** Target 1-1.5 uH for most NFC ICs
- **Antenna area:** Larger area = better coupling and range

#### Layout Rules

- **No ground plane under the antenna** - This kills performance entirely
- **Maintain 10mm+ clearance** between antenna coil and any ground copper
- **Use 45 degree miters** at corners, not 90 degree bends
- **Keep traces consistent** - Variations affect inductance
- **2 oz copper** improves Q factor and range vs standard 1 oz

#### Tuning Capacitors

Most NFC ICs require two capacitors: one in series (Cs) for impedance matching and one in parallel (Cp) for frequency tuning. The datasheet provides formulas and reference values.

Example for a typical 1 uH antenna with 30 pF IC internal capacitance:

- Target total C: ~138 pF
- External Cp: ~100-110 pF
- Cs: Varies by IC, typically 10-50 pF

#### Verification

Ideally, measure the antenna with a VNA (Vector Network Analyzer) or impedance analyzer before assembly. Check:

- Resonant frequency (target ~13.8 MHz bare PCB)
- Q factor (target >20 for the antenna alone)
- Impedance at 13.56 MHz

Without test equipment, use the IC manufacturer's reference design dimensions as closely as possible, then adjust tuning capacitors based on read range testing.

For detailed antenna design guidance, see ST's application note [AN2866](https://www.st.com/resource/en/application_note/an2866-how-to-design-a-1356-mhz-customized-antenna-for-st25-nfc--rfid-tags-stmicroelectronics.pdf) or NXP's antenna design tools.

## PCB Layout

Once your schematic is complete, it's time to move to the PCB layout. In KiCad:

1. Update the PCB from the schematic
2. Define your board outline (import your custom shape if you created one)
3. Place components strategically
4. Route the antenna coil
5. Add any decorative elements or silkscreen artwork

### Antenna Layout Tips

- Keep the antenna traces away from other components and ground planes
- Maintain consistent trace width and spacing
- Use smooth curves instead of sharp corners
- Consider using multiple PCB layers for complex designs

## Manufacturing

For manufacturing, we recommend JLCPCB as they offer competitive prices for small batches of PCBs.

### Preparing Files for JLCPCB

1. Generate Gerber files from KiCad
2. Create a drill file
3. Generate pick-and-place files if using SMT assembly
4. Create a BOM (Bill of Materials) if using assembly services

### Ordering Process

1. Upload your Gerber files to JLCPCB
2. Select PCB specifications:
   - 2 or 4 layer board
   - 1.6mm thickness (standard business card thickness)
   - HASL or ENIG surface finish
   - Your choice of solder mask color
3. If using assembly services, upload BOM and pick-and-place files
4. Review and place your order

## Programming the NFC Tag

Once you receive your manufactured PCB business cards, you'll need to program the NFC tags with your data.

### Tools for Programming

- **NFC Tools** (Mobile app for Android/iOS)
- **TagWriter** by NXP (Mobile app)
- **Proxmark3** or similar NFC reader/writer for advanced users

### Programming Steps

1. Power on the NFC tag (if it has active components)
2. Use your chosen tool to connect to the tag
3. Write your data:
   - URL to your website
   - vCard with contact information
   - Custom NDEF messages
4. Lock the tag if desired (prevents overwriting)

## Testing and Validation

After programming, test your NFC business cards with various devices:

- Different smartphone models (iPhone and Android)
- Various NFC reader applications
- Test read range and reliability
- Verify data integrity

## Cost Analysis

Typical costs for a batch of 100 NFC PCB business cards:
- PCB manufacturing: $50-100
- NFC ICs: $0.50-2.00 per chip
- Assembly (if not hand-soldering): $50-100
- Total: ~$1-3 per card for 100 units

## Troubleshooting Common Issues

### Poor Read Range
- Check antenna tuning
- Verify proper impedance matching
- Ensure no metal objects are interfering

### Inconsistent Reading
- Verify NFC IC is properly soldered
- Check for damaged antenna traces
- Test with multiple reader devices

### Data Corruption
- Ensure proper NDEF formatting
- Verify memory isn't corrupted
- Check power stability (for active tags)

## Advanced Features

Consider adding these features to make your business card stand out:

- LED indicators that light up when read
- E-ink display for dynamic information
- Multiple NFC chips for different functions
- Environmental sensors with data logging
- Energy harvesting from the NFC field

From design to finished cards takes about 2-3 weeks. The RF antenna design skills carry over to other NFC and RFID projects. Iterate based on testing - read range is usually the first thing to tweak.

For the complete source files, visit our [GitHub repository](https://github.com/CrabLabsLLC/BusinessCard).

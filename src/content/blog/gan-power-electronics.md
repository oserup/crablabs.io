---
title: "Working with GaN FETs"
description: "Practical guidance for designing with gallium nitride transistors: gate drive, protection, and layout."
pubDate: 2024-06-21
author: "Orion Serup"
heroImage: "/images/blog/gan-transistor-diagram.png"
tags: ["gan", "power electronics", "semiconductors", "design"]
contentType: "article"
featured: false
draft: false
---

Gallium Nitride (GaN) based semiconductor devices are the future of power and high frequency electronics and are only just now starting to become economically viable for everyday projects. Here is an interesting [post](https://epc-co.com/epc/gallium-nitride/why-gan) by EPC (one of the largest designers of GaN technology) which breaks down the main benefits and applications of GaN.

GaN devices are better in almost every way compared to current silicon-based technology. They are able to handle more power in the same area as well as turn on and off faster than comparable silicon-based devices. This combination of speed and power density leads to vast increases in efficiency as well as significant decreases in the size of circuitry.

## Why GaN Matters for Modern Electronics

### Superior Material Properties

GaN's fundamental material properties make it ideal for power applications:

- **Higher breakdown voltage** - Can handle much higher voltages in smaller packages
- **Lower on-resistance** - Reduces conduction losses and heat generation
- **Faster switching** - Enables higher frequency operation with lower switching losses
- **Better thermal conductivity** - Handles heat dissipation more effectively than silicon

### Real-World Performance Benefits

In practical applications, GaN devices typically deliver:

- **30-50% reduction in power losses** compared to silicon MOSFETs
- **3-5x smaller form factor** for equivalent power handling
- **10x faster switching speeds** enabling MHz switching frequencies
- **Reduced cooling requirements** due to lower losses

## Driving GaN Devices

The goal when driving a GaN device is to switch it on and off as fast as possible. The faster you can switch the device on and off, the more efficiently it will operate.

GaN devices generally have a low Gate Threshold Voltage (Turn On Voltage) of less than 2V or so, which makes turning them on significantly easier than their silicon-based counterparts which typically require 5 volts or more.

![GaN Threshold Voltage](/images/GaNVgsth.png)

This image shows the threshold voltage characteristics of a very high power GaN FET, the [EPC2302](https://epc-co.com/epc/products/gan-fets-and-ics/epc2302).

**Important Note:** It is not advisable to drive a GaN device with GPIO directly in most cases due to the relatively high output impedance delivered by the GPIO pins. Doing so will result in poor switching performance and possible damage to the MCU in a fault scenario.

### GaN Gate Drivers

The best way to drive the gate of a GaN device is to use a specialized driver IC. EPC has a comprehensive list of gate drivers for every application [here](https://epc-co.com/epc/products/gan-drivers-and-controllers).

When choosing a gate driver, there are several factors to keep in mind:

#### 1. Current Source and Sink Ability
**The higher the better generally**
- Look for drivers that can source/sink 4A or more for fast switching
- Higher drive current reduces switching losses and improves efficiency
- Consider the gate charge (Qg) of your GaN device when sizing the driver

#### 2. Propagation Delay
**The lower the better generally**
- Target delays under 50ns for high-frequency applications
- Matched delays between high-side and low-side drivers prevent shoot-through
- Consider temperature variations in delay specifications

#### 3. Isolation
**Not strictly necessary but significantly increases system safety**
- Galvanic isolation protects control circuits from power stage faults
- Digital isolators offer fast switching with good noise immunity
- Isolated supplies may be required for floating high-side drivers

### Advanced Driver Considerations

#### Bootstrap vs. Isolated Supply
For high-side gate drive:
- **Bootstrap circuits** are simple and cost-effective for most applications
- **Isolated supplies** provide better performance for continuous operation
- Consider duty cycle limitations with bootstrap approaches

#### Dead Time Management
- GaN devices switch so fast that traditional dead time becomes critical
- Adaptive dead time controllers can optimize efficiency
- Consider using integrated half-bridge drivers with built-in logic

## Protecting GaN Devices

GaN devices, while robust, require careful protection due to their fast switching and high power density.

### Overvoltage Protection
- **TVS diodes** on drain connections for voltage spikes
- **Gate clamping** to prevent gate oxide damage
- **Snubber networks** to control dv/dt during switching

### Overcurrent Protection
- **Current sensing** with fast response times
- **Desaturation detection** for short-circuit protection  
- **Thermal monitoring** to prevent overheating

### Layout Considerations for Protection
- **Low inductance layouts** to minimize voltage spikes
- **Proper grounding** to avoid ground bounce issues
- **Adequate thermal management** for sustained operation

## PCB Design Guidelines for GaN

### Critical Layout Rules

#### 1. Minimize Loop Inductance
- Keep gate drive loops as small as possible
- Use wide traces and short connections
- Consider four-layer boards with dedicated power/ground planes

#### 2. Thermal Management
- Use thermal vias under GaN devices
- Consider copper pour for heat spreading
- Plan for adequate airflow or heatsinking

#### 3. EMI Considerations
- GaN's fast switching can create EMI challenges
- Use proper filtering on input/output connections
- Consider shielding for sensitive circuits

### Component Selection

#### Gate Drive Components
- **Low-ESR ceramic capacitors** for gate drive supply bypassing
- **Fast recovery diodes** if using bootstrap supplies
- **Quality resistors** for gate drive current limiting

#### Power Stage Components
- **Low-ESL capacitors** for DC bus filtering
- **High-frequency capable inductors** for switching applications
- **Fast diodes** for freewheeling (though GaN often eliminates this need)

## Application Examples

### DC-DC Converters
GaN excels in:
- **Buck converters** for voltage regulation
- **Boost converters** for power factor correction
- **LLC resonant converters** for isolated supplies

**Design Tips:**
- Switch at 500kHz-2MHz for optimal efficiency
- Use synchronous rectification to eliminate diode losses
- Consider continuous conduction mode for best efficiency

### Motor Drives
GaN enables:
- **Higher switching frequencies** for better motor control
- **Smaller filter components** due to higher frequency
- **Improved efficiency** especially at light loads

**Design Tips:**
- Dead time optimization is critical for efficiency
- Consider sine wave reconstruction quality
- Plan for adequate gate drive isolation

### Wireless Power Transfer
GaN's high frequency capability enables:
- **Smaller coil designs** at higher frequencies
- **Better efficiency** over distance variations
- **Faster charging** with higher power density

## Common Design Pitfalls

### 1. Inadequate Gate Drive
**Problem:** Using weak gate drivers or long gate traces
**Solution:** Use dedicated gate drivers with sufficient current capability

### 2. Poor Thermal Design
**Problem:** Underestimating thermal requirements
**Solution:** Proper thermal modeling and heat dissipation planning

### 3. Layout Issues
**Problem:** High inductance layouts causing voltage spikes
**Solution:** Follow GaN-specific layout guidelines from manufacturers

### 4. Insufficient Protection
**Problem:** Assuming GaN devices are indestructible
**Solution:** Implement comprehensive protection schemes

## Cost Considerations

### When GaN Makes Economic Sense
- **High-volume applications** where efficiency savings justify cost
- **Size-constrained designs** where volume reduction has value
- **High-frequency applications** where silicon performance is inadequate

### Cost Reduction Strategies
- **Use proven reference designs** to reduce development time
- **Partner with suppliers** for application support
- **Consider total system cost** including magnetics and cooling

## Future Trends

### Technology Improvements
- **Lower cost manufacturing** making GaN more accessible
- **Integrated solutions** combining GaN with drivers and protection
- **Higher voltage ratings** expanding application range

### Market Adoption
- **Automotive applications** driving volume and cost reduction
- **Data center efficiency** requirements accelerating adoption
- **Consumer electronics** adopting GaN for fast charging

## Getting Started with GaN

### Recommended First Steps
1. **Start with evaluation boards** from established suppliers
2. **Use reference designs** as starting points
3. **Focus on thermal and layout** considerations early
4. **Plan for comprehensive testing** including EMI and thermal

### Supplier Resources
- **EPC** - Comprehensive application notes and design tools
- **GaN Systems** - Automotive and industrial focus
- **Navitas** - Integrated GaN solutions
- **Infineon** - CoolGaN family for various applications

## The Bottom Line

GaN requires more careful design than dropping in a silicon MOSFET, but the performance gains are real. Get the gate drive right, plan your thermal management, and follow the manufacturer's layout guidelines.

The technology is mature enough now that you don't need to be a GaN specialist to use it successfully. Start with an eval board, use reference designs, and you'll likely wonder why you didn't switch sooner.

## Additional Resources

- [EPC GaN Design Resources](https://epc-co.com/epc/products/gan-fets-and-ics)
- [GaN Systems Application Notes](https://gansystems.com/design-center/)
- [Infineon CoolGaN Documentation](https://www.infineon.com/cms/en/product/power/gan-hemt/)
- [IEEE Power Electronics Society](https://www.ieee-pels.org/) - Technical papers and conferences
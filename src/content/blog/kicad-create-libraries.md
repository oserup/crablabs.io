---
title: "Creating KiCad Libraries"
description: "Learn how to create custom symbol and footprint libraries in KiCad for your PCB design projects."
pubDate: 2024-07-12
author: "Orion Serup"
heroImage: "/images/kicad_logo_paths.svg"
tags: ["pcb", "kicad", "schematics", "tutorial"]
featured: false
draft: false
---

When creating projects in KiCad it is often necessary to create symbols and footprints that are not a part of the KiCad standard library.

## Prerequisites

- Basic Circuit Theory
- Baseline understanding of KiCad UI/Workflow

## Creating Symbol Libraries

Creating symbol libraries is done from the Symbol Editor, which can be navigated into from the Schematic Editor or the KiCad project main page.

From the Schematic Editor: navigate to Tools -> Symbol Editor

From the KiCad Project Menu: click into "Symbol Editor" under "Schematic Editor"

![Symbol Editor](/images/SymbolEditor.jpg)

To create a new library, go to File -> New Library

![Create New Library](/images/CreateNewLib.jpg)

Global Libraries are available for any project that is done on the same system while Project libraries are only available in the current project. It is usually preferred to use Project Libraries over Global Libraries to maintain portability.

Find a location to place the kicad_sym file, which is your library. For project libraries it is recommended to place this file in a project local directory, Crab Labs usually places this in a "lib" folder in the project folder.

Once the library is created and placed, then symbols can be created and added to it.

## Creating Custom Symbols

### The Symbol Editor

All of this process will take place in the Symbol Editor, it is complex and feature rich.

On the right hand side there will be a toolbox, these are all of the tools that are available for use during the process

![Symbol Editor Toolbox](/images/SymbolEditorTools.png)

Once in the Symbol editor a new symbol can be created by using Command+N or Ctrl+N

### Naming the Symbol

![Symbol Creation](/images/SymbolCreation.jpg)

Name the symbol the name of the component you want to add. The reference designator must be added to indicate the type of component, these are standardized in IEC 60617 or [IEEE Std 35](https://www.academia.edu/35118268/Graphic_Symbols_for_Electrical_and_Electronics_Diagrams_IEEE_Standard):

- **AT**: Attenuator
- **BR**: Bridge rectifier
- **BT**: Battery
- **C**: Capacitor
- **CN**: Capacitor network
- **D**: Diode (including zeners, thyristors and LEDs)
- **DL**: Delay line
- **DS**: Display
- **F**: Fuse
- **FB** or FEB: Ferrite bead
- **FD**: Fiducial
- **J**: Jack connector (female)
- **JP**: Link (Jumper)
- **K**: Relay
- **L**: Inductor
- **LS**: Loudspeaker or buzzer
- **M**: Motor
- **MK**: Microphone
- **MP**: Mechanical part (including screws and fasteners)
- **P**: Plug connector (male)
- **PS**: Power supply
- **Q**: Transistor (all types)
- **R**: Resistor
- **RN**: Resistor network
- **RT**: Thermistor
- **RV**: Varistor
- **S**: Switch (all types, including push-buttons)
- **T**: Transformer
- **TC**: Thermocouple
- **TUN**: Tuner
- **TP**: Test point
- **U**: Integrated circuit
- **V**: Vacuum Tube
- **VR**: Variable Resistor (potentiometer or rheostat)
- **X**: Transducer not matching any other category
- **Y**: Crystal or oscillator
- **Z**: Zener Diode

Once that has been done it will look like this:

![NT3H Symbol Created](/images/NT3HSymbolCreated.jpg)

### Defining the Symbol Shape

The first step in creating a symbol is defining the shape or the outline of the symbol, you can use any of the polygon tools or the oval tools to draw a shape in which to add pins to. This can be any shape but rectangular bodies are generally standard.

![Symbol Body Drawn](/images/SymbolRectDrawn.png)

### Adding Pins

The next step is to add the pins, if there are a lot of pins the body shape may need to be changed in order to be appropriately sized for the number of pins.

There are a number of different pin types in KiCad:

- **Power Input**: This pin receives power from an external source (e.g. a VDD pin on a micro controller)
- **Power Output**: This pin supplies power to an external sink (e.g. VIN pin on a DC Jack)
- **Input**: This pin receives digital signals from an external source (e.g. Reset pin on an MCU)
- **Output**: This pin sends digital signals to an external sink (e.g. Status pin on an MCU)
- **Bidirectional**: This pin sends and receives digital signals (e.g. USB D+ and D- pins on an MCU)
- **Tri-State**: This pin can be input, output, or high-Z (floating) (e.g. GPIO in general)
- **Passive**: This pin does not strongly interact with anything (e.g. A pin on a resistor)
- **Free**: This pin is floating (e.g. Extraneous pins)
- **Unspecified**: It is not known what this pin does
- **Open Collector**: This pin needs a pull up resistor to operate correctly (e.g. SDA and SCL on I2C)
- **Open Emitter**: This pin needs a pull down resistor to operate correctly
- **Unconnected**: This pin should not be connected to anything (e.g. Some thermal pads)

For every pin in your symbol, the type must be defined. These definitions help KiCad figure out how the design fits together. These definitions allow for ERC (Electrical Rules Checking) to check the connection logic of your circuitry, which catches errors early.

It is important to check the data sheet for this information about the pins of the device you are designing the symbol for. The data sheet will include the pin number for all of the pins, use this in creating the pins.

Once you have created a Pin, move it and rotate it (using "R") so that the pin name is inside of the design:

![Symbol Pin Placed](/images/SymbolPinPlaced.png)

Crab Labs highly recommends following these pin placement guidelines:

- All Input Power (VCC, VDD, VIN, etc) should be either on the top of the symbol or the left side
- All Ground (VSS, VEE, GND, etc) should be either on the bottom or the left side of the symbol
- All Inputs should be on the left side of the symbol
- All Outputs should on the right side of the symbol (this includes power outputs)
- Pins should be organized logically rather than numerically (i.e. put related pins next to each other)
- Pins should be separated by class (i.e. put extra spacing between groups of related pins)

If these guidelines are followed, symbols should be easier to parse as well as to work with in the schematic.

Once you have defined and placed all your pins, you should modify the symbol properties. This can be done by pressing "E" while not selecting anything in the Symbol Editor

### Defining Symbol Properties

![Symbol Properties](/images/SymbolProperties.png)

It is recommended to insert the name in value field, a link to the datasheet in the datasheet field, a small description in the description field, as well as the footprint if it is fixed and exists.

![Symbol Properties Filled](/images/ExampleSymbolFields.png)

Once the symbol fields are defined and the symbol has been cross checked against the data sheet, then the finishing touches should be applied.

### Finishing Symbols

Apply coloring to the symbol by clicking the outline polygon and pressing "E"

![Set Symbol Background Color](/images/SetSymbolBGColor.jpg)

The default coloring for KiCad symbols is "Fill With Body Background Colors". This is recommended in most cases.

Once the coloring is set, then press "Ctrl+S" or "Command+S" to save the symbol into a library.

### Custom Symbol Example

A symbol will be created for a new component, the [NT3H2](https://octopart.com/datasheet/nt3h2211w0fttj-nxp+semiconductors-71112038) NFC Tag by NXP. Looking at the datasheet we can find a pin-out diagram for the available packages, I will be picking the TSSOP-8 Package at random.

![NT3H Pinout](/images/NT3H2SOP.jpg)

Paired with the pin description we can begin to create a symbol for it.

![NT3H Pin Description](/images/NT3HPinDesc.jpg)

We see that the pin-out is the same (same pin number has same function) across all packages. This mean that this symbol can be used for any of the different footprints.

A symbol is created with the name "NT3H2x11" which reflects full name of the chip, the x represents the different variants with different memory

![NT3H Symbol Created](/images/NT3HSymbolCreated.jpg)

The symbol properties will be modifed to include information about the component and the pins will be added. First to be added is VCC (Pin 6, Power Input), next is VSS (Pin 2, Power Input), these are both provided power from some other source, so they are inputs.

![NT3H Power Pins Added](/images/NT3HPowerPinsAdded.jpg)

Next to be added are the I2C pins (SDA and SCL), these are bi-directional but could also be open collector

![NT3H I2C Pins Added](/images/NT3HI2CAdded.jpg)

After that, the RF circuitry needs to be added (FD, LA, LB, and VOUT). LA and LB are passive since they are analog signals, FD is Open-Drain (Open Collector), and VOUT is Power Output.

![NT3H All Pins Added](/images/NT3HAllPinsAdded.jpg)

Now we fix the coloration of the rectangle:

![Change Symbol Background Color](/images/NT3HSymbolDone.jpg)

We can then save the symbol and use it in a project.

## Creating Footprint Libraries

Creating footprint libraries is similar to creating symbol libraries, but the process happens in the Footprint Editor instead.

### Opening the Footprint Editor

From the PCB Editor: navigate to Tools -> Footprint Editor

From the KiCad Project Menu: click into "Footprint Editor" under "PCB Editor"

### Creating a New Footprint Library

In the Footprint Editor:

1. Go to File -> New Library
2. Choose between Global and Project libraries (Project is recommended)
3. Save the .pretty folder in your project directory

### Creating Custom Footprints

#### Basic Footprint Creation Steps

1. **Create a new footprint**: Use Ctrl+N or Command+N
2. **Name the footprint**: Follow IPC naming conventions when possible
3. **Add pads**: Place and configure pads according to the datasheet
4. **Add silkscreen**: Draw component outline and reference designator
5. **Add courtyard**: Define the component's keep-out area
6. **Add 3D model**: Optional but helpful for visualization

#### Pad Properties

Important pad properties to configure:

- **Pad type**: Through-hole, SMD, or NPTH (non-plated through-hole)
- **Shape**: Circular, rectangular, oval, or custom
- **Size**: Follow datasheet recommendations
- **Drill size**: For through-hole components
- **Layers**: Which copper layers the pad appears on
- **Clearance**: Spacing from other copper features
- **Thermal relief**: For connections to planes

#### Design Rules

Follow these guidelines for reliable footprints:

- **Pad size**: Generally 0.2-0.3mm larger than lead dimensions
- **Courtyard**: Minimum 0.25mm clearance around component body
- **Silkscreen**: Keep 0.15mm away from pads
- **Reference designator**: Should be clearly visible after assembly
- **Pin 1 marking**: Always indicate pin 1 orientation

### Footprint Wizard

KiCad includes footprint wizards for common package types:

1. In Footprint Editor, go to File -> Footprint Wizard
2. Select the appropriate wizard (QFP, SOIC, etc.)
3. Enter package dimensions from datasheet
4. Review and adjust the generated footprint
5. Save to your library

### Verifying Footprints

Always verify your footprints before use:

1. **Print at 1:1 scale**: Place actual component on printout
2. **Check against datasheet**: Verify all dimensions
3. **3D viewer**: Use View -> 3D Viewer to check appearance
4. **DRC check**: Run design rules check in PCB editor
5. **Test board**: Consider ordering a test PCB for critical designs

## Managing Libraries

### Library Tables

KiCad uses library tables to manage symbol and footprint libraries:

- **Global libraries**: Available to all projects
- **Project libraries**: Specific to current project

Access library tables through:
- Preferences -> Manage Symbol Libraries
- Preferences -> Manage Footprint Libraries

### Library Organization Tips

1. **Separate by function**: Group related components
2. **Version control**: Track library changes
3. **Documentation**: Include datasheets and notes
4. **Naming convention**: Use consistent, descriptive names
5. **Backup regularly**: Libraries represent significant work

### Sharing Libraries

To share libraries with team members:

1. Use relative paths in library tables
2. Include libraries in version control
3. Document any special requirements
4. Consider using library management tools

## Advanced Topics

### Multi-Unit Symbols

For complex components with multiple functional units:

1. Create symbol with multiple units
2. Define power pins as common to all units
3. Use unit suffixes (U1A, U1B, etc.)

### Alternate Pin Functions

For microcontrollers with multiple pin functions:

1. Use stacked pin names (e.g., "PA0/TXD/INT0")
2. Consider creating alternate symbol versions
3. Document pin functions in symbol fields

### Custom Pad Shapes

For special requirements:

1. Use pad primitives to build complex shapes
2. Consider thermal and mechanical requirements
3. Verify with manufacturer capabilities

### Library Automation

For large-scale library creation:

1. Use KiCad's Python scripting API
2. Import from manufacturer data
3. Consider tools like KiPart or csv2kicad
4. Validate automated results carefully

## Common Pitfalls to Avoid

1. **Incorrect pin numbering**: Always verify against datasheet
2. **Wrong pad dimensions**: Can cause assembly issues
3. **Missing courtyard**: Causes DRC errors
4. **Incorrect layer assignments**: Check pad and silkscreen layers
5. **No 3D model**: Makes visualization difficult
6. **Poor organization**: Makes libraries hard to maintain

## Best Practices Summary

1. **Always use datasheets**: Primary source of truth
2. **Follow standards**: IPC for footprints, IEEE for symbols
3. **Document everything**: Future you will thank you
4. **Test before production**: Verify with prototypes
5. **Keep it simple**: Don't over-complicate designs
6. **Maintain consistency**: Within and across projects
7. **Version control**: Track all changes
8. **Regular backups**: Protect your work

## Conclusion

Creating custom KiCad libraries is an essential skill for PCB design. While it requires attention to detail and careful verification, the process becomes faster with practice. Well-organized, accurate libraries are an investment that pays dividends across multiple projects.

Remember that the quality of your libraries directly impacts the success of your designs. Take the time to create them properly, and you'll avoid costly mistakes in production.
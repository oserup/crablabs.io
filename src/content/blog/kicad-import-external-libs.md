---
title: "Importing External Part Libraries into KiCad"
description: "Learn how to find, download, and import external component libraries into your KiCad projects"
pubDate: 2024-07-12
author: "Orion Serup"
heroImage: "/images/kicad_logo_paths.svg"
tags: ["pcb", "kicad", "schematics", "tutorial"]
featured: false
draft: false
---

If a component is not available in the KiCad standard library it can either be created from scratch using the symbol and footprint editor or imported from an external source.

Many times manufacturers or distributors will provide libraries for their components and make them available online, this guide will show how to find and utilize these libraries in your projects.

## Finding External Part Libraries

The largest and most centralized repository for finding components and their libraries is [Octopart](https://octopart.com)

Let's say we are developing an NFC product and are looking for the N24RF NFC Tag, we can search for it on Octopart

![N24RF04 on Octopart](/images/N24RFOctopart.jpg)

Octopart will indicate if there is a footprint/symbol available for the part by displaying "CAD Models". Let's select one of the variants at random and click in to it.

![N24RF04 Page](/images/N24RF04Page.jpg)

At the bottom of the page there will be a selection which details which footprints, 3D models, as well as symbols they have available for download

![CAD Models](/images/CADModelSelection.jpg)

If Octopart does not have the component or does not have library it is often worthwhile to look at the manufacturer's website. Sometimes there are similar component libraries that can be used with slight modification.

If all else fails then the part library has to be created from scratch. See [this tutorial](/blog/kicad-create-libraries)

## Downloading External Part Libraries

It is best to find a source to download the footprint, symbol, as well as 3-D model at once, in this case we should download from "Component Search Engine". You can preview the component to check against the datasheet. Proceed to download if the preview looks correct.

Various providers have different procedures for accessing files, most of them require a login (some providers will have you select the PCB software). Download the data package from the provider.

Extract the package and enter in to the folder, there will be several files we want to look for:

- *.stp or *.step, this is the 3-D model of the component
- *.kicad_mod, this is the KiCad footprint definition file
- *.kicad_sym, this is the KiCad schematic symbol definition file

Those 3 files are the only files that are needed, if the footprint is standardized then the footprint and 3-D model are often not necessary but are recommended to download if available to ensure compatibility.

## Creating Local Libraries

In the folder containing the project you should create a folder that will be used as a place to store external library files. Crab Labs officially calls this folder "lib" but any name will do.

Enter this folder and create 3 separate sub-folders (one for 3-D models, one for symbols, and the last for footprints). The folder for the footprints must be named *.pretty to be recognized by KiCad. Crab Labs calls these folders "models", "footprints.pretty", and "symbols"

Copy the 3-D model of the component in to the 3-D model folder in the project library. Copy the kicad_sym file in to the symbol folder in the project library. Copy the kicad_mod file into the footprint folder in the project library.

Once all of the files are copied to the project local directory we want to make them available to use in the project.

## Importing Libraries into Project

Go in to the schematic editor. In the "Preferences" drop down menu there will be an option to "Manage Symbol Libraries", click in to it.

![Symbol Library Manager](/images/SymLibraryManager.jpg)

Navigate to "Project Specific Libraries"

![Project Specific Libraries](/images/ProjectSpecificLibraries.jpg)

Click on the folder icon which is "Add From Existing File" and navigate to the kicad_sym that you just added in the library folder, click OK

![Library Added](/images/LibraryAdded.jpg)

The symbol library is now added and available for use in your design. This process much be done for all kicad_sym files individually.

The procedure for adding the footprint library is the same.

Go to the PCB editor, go to Preferences -> Manage Footprint Libraries

Go to "Project Specific Libraries", add from an existing file the "*.pretty" folder in the library folder.

Any footprint files added in to that folder will be available after that point.

## Best Practices for External Libraries

### Verification is Critical

Always verify external libraries before using them in production:

1. **Check against datasheet**: Dimensions, pin assignments, and pad sizes
2. **Print at 1:1 scale**: Place actual component on printout
3. **Review in 3D viewer**: Check for obvious errors
4. **Test with prototype**: Order test boards for critical components

### Organization Tips

Keep your external libraries organized:

1. **Consistent folder structure**: Use the same layout across projects
2. **Document sources**: Note where each library came from
3. **Version control**: Track changes to libraries
4. **Backup regularly**: External sources may disappear

### Common Sources for Libraries

Beyond Octopart, consider these sources:

- **SnapEDA**: Large collection of verified symbols and footprints
- **Ultra Librarian**: Free registration, extensive database
- **SamacSys**: Component Search Engine, good coverage
- **Manufacturer websites**: TI, ST, Microchip often provide libraries
- **GitHub**: Community-created libraries (verify carefully!)

### When to Create vs Import

Consider creating your own library when:

- The component is critical to your design
- You need specific customizations
- Available libraries look questionable
- You'll use the component frequently

Import external libraries when:

- Time is limited
- The component is standard
- The source is reputable
- It's for prototyping only

## Troubleshooting Common Issues

### Library Not Showing Up

If your imported library doesn't appear:

1. Check file extensions (.kicad_sym, .kicad_mod)
2. Verify library table paths are correct
3. Restart KiCad after adding libraries
4. Ensure files aren't corrupted

### Footprint Association

To link symbols with footprints:

1. Edit symbol properties
2. Add footprint field
3. Browse and select correct footprint
4. Use "Footprint Library Browser" to verify

### 3D Model Issues

If 3D models don't display:

1. Check file path in footprint properties
2. Ensure model format is supported (.step, .wrl)
3. Verify model orientation and position
4. Scale model if necessary (some are in different units)

## Advanced Library Management

### Using Environment Variables

For portable projects:

1. Define KIPRJMOD variable for project path
2. Use ${KIPRJMOD}/lib/... in paths
3. Libraries work regardless of project location

### Git Submodules

For team projects:

```bash
git submodule add https://github.com/your-libs/kicad-libs lib
git submodule update --init --recursive
```

### Library Validation Scripts

Consider automated checking:

- Pin count verification
- Courtyard overlap detection
- Naming convention enforcement
- Datasheet link validation

## Conclusion

Importing external libraries can significantly speed up your KiCad workflow, but it requires careful verification and organization. Always validate external libraries against datasheets and physical components before committing to production. With proper management, external libraries become a valuable resource that enhances your design productivity without compromising reliability.
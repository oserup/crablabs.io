/**
 * Centralized company information
 * Used across footer, contact page, structured data, etc.
 */

export const company = {
  name: 'Crab Labs',
  legalName: 'Crab Labs LLC',

  contact: {
    email: 'contact@crablabs.io',
    emailHref: 'mailto:contact@crablabs.io',
    phone: '(424) 271-5569',
    phoneHref: 'tel:+14242715569',
    phoneInternational: '+1-424-271-5569',
  },

  address: {
    street: '235 E Broadway Ste 210',
    city: 'Long Beach',
    state: 'CA',
    zip: '90803',
    country: 'US',
    full: '235 E Broadway Ste 210, Long Beach, CA 90803',
  },

  links: {
    consultation: 'https://cal.com/crablabsllc/consultation',
    website: 'https://crablabs.io',
  },

  social: {
    // Add social links as needed
  },
} as const;

/**
 * Pricing - DO NOT MODIFY WITHOUT EXPLICIT APPROVAL
 * Per CLAUDE.md guidelines
 */
export const pricing = {
  hourlyRates: {
    standard: 150,
    startup: 135,
    nonprofit: 140,
  },
  rushPremium: 0.5, // +50%
  materialsMarkup: 0.1, // +10%

  serviceMinimums: {
    productDevelopment: 10000,
    designReview: 1000,
    testingCompliance: 2500,
    designRetooling: 5000,
    reverseEngineering: 5000,
  },
} as const;

/**
 * Team stats
 */
export const team = {
  engineerCount: 5,
  yearsExperience: 30,
} as const;

/**
 * Client testimonials
 */
export const testimonials = [
  {
    id: 'atmos-rnd',
    quote: "Crab Labs played a key role in refining and validating our product development. We couldn't have done it without them.",
    author: 'Myles Ainley',
    role: 'CEO',
    company: 'Atmos Research & Development',
    logo: '/clients/atmos-rnd.png',
    industry: 'scientific',
    featured: true,
  },
  // Placeholder testimonials - fill in with actual client quotes
  // {
  //   id: 'placeholder-medical',
  //   quote: "[Client quote here]",
  //   author: "[Client name]",
  //   role: "[Title]",
  //   company: "[Company]",
  //   industry: 'medical',
  //   featured: false,
  // },
] as const;

/**
 * Expertise areas - emphasizes collective team experience by domain
 */
/**
 * Lab capabilities - what makes our in-house lab special
 */
export const labCapabilities = [
  {
    id: 'hil-testing',
    title: 'Automated Testing',
    description: 'We script our test equipment. Set up a test suite, run it overnight, come back to results. Good for regression testing and burn-in.',
    icon: 'zap',
  },
  {
    id: 'rf-analysis',
    title: 'RF & EMC Gear',
    description: 'Scopes and spectrum analyzers up to 8 GHz. We can do EMC pre-scans in-house so you don\'t waste money at the test lab.',
    icon: 'radio',
  },
  {
    id: 'smt-prototyping',
    title: 'Board Assembly',
    description: 'Pick-and-place, stencil printer, reflow oven. Not production-scale, but fast for prototypes. Usually same-week turnaround.',
    icon: 'cpu',
  },
] as const;

/**
 * Lab equipment - specific tools we use
 */
export const labEquipment = [
  { name: 'Oscilloscopes', spec: 'Up to 8 GHz', category: 'measurement' },
  { name: 'Spectrum Analyzers', spec: 'Up to 6 GHz', category: 'rf' },
  { name: 'Network Analyzers', spec: 'Up to 6 GHz', category: 'rf' },
  { name: 'EMC Test Equipment', spec: 'Antennas, LISN, TEM cell', category: 'compliance' },
  { name: 'Thermal Chamber', spec: 'Temperature & humidity', category: 'environmental' },
  { name: 'SMT Line', spec: 'Pick & place, reflow, rework', category: 'assembly' },
] as const;

export const expertiseAreas = [
  {
    id: 'medical',
    title: 'Medical Device Experience',
    stats: '15+ projects',
    description: 'FDA 510(k) support, IEC 60601 pre-compliance, IEC 62304 firmware development. Class I-III devices.',
    color: 'red' as const,
  },
  {
    id: 'industrial',
    title: 'Industrial Automation',
    stats: '20+ systems',
    description: 'Modbus, BACnet, SNMP integration. Rugged hardware for manufacturing and building automation.',
    color: 'blue' as const,
  },
  {
    id: 'scientific',
    title: 'Scientific Instrumentation',
    stats: '10+ instruments',
    description: 'Precision data acquisition, sensor interfaces, and metrology equipment.',
    color: 'purple' as const,
  },
  {
    id: 'power',
    title: 'Power Electronics',
    stats: '4kW+ designs',
    description: 'GaN/SiC motor controllers, battery management, and power distribution systems.',
    color: 'green' as const,
  },
] as const;

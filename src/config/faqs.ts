/**
 * FAQ content for service pages
 * Organized by service type
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export const serviceFAQs: Record<string, FAQItem[]> = {
  'product-development': [
    {
      question: 'What does fixed-price include?',
      answer: 'The quoted price covers all engineering work to deliver the agreed scope: schematic design, PCB layout, firmware development, prototype builds, and documentation. Parts and manufacturing are billed at cost + 10%. If scope changes mid-project, we discuss and quote a change order before proceeding.',
    },
    {
      question: 'What if the project takes longer than expected?',
      answer: "That's our risk, not yours. Fixed-price means we absorb overruns. We scope carefully upfront specifically so this doesn't happen often.",
    },
    {
      question: 'Do I own the IP?',
      answer: 'Yes, 100% from day one. You receive all source files, manufacturing files, and documentation. No licensing, no royalties, no restrictions.',
    },
    {
      question: 'What does post-delivery support include?',
      answer: '30 days of support after final delivery is included. This covers questions, minor adjustments, and help getting your design into production. Major changes are quoted separately.',
    },
    {
      question: 'Can you help with certification?',
      answer: 'We design for certification and can run pre-compliance testing in our lab. We work with accredited test houses for final certification but can guide you through the process.',
    },
  ],

  'design-review': [
    {
      question: 'What files do you need for a review?',
      answer: 'Schematic and layout source files (Altium, KiCad, or Eagle preferred), BOM, and any existing test data. For firmware reviews, source code with build instructions.',
    },
    {
      question: 'How detailed is the review report?',
      answer: 'We provide a prioritized list of findings ranked by severity (critical, major, minor). Each finding includes the issue, why it matters, and a specific recommendation to fix it.',
    },
    {
      question: "What if you find something we can't fix ourselves?",
      answer: 'We can quote the fix work separately, or you can take our recommendations to your existing team. The review is independent—no pressure to hire us for fixes.',
    },
  ],

  'testing-compliance': [
    {
      question: 'What equipment do you have in-house?',
      answer: 'Our in-house lab includes 8 GHz oscilloscopes, 6 GHz spectrum/network analyzers, EMC tent with calibrated antennas, LISN, TEM cell, and a temperature/humidity chamber.',
    },
    {
      question: 'Is pre-compliance testing as good as going to a test house?',
      answer: 'Pre-compliance catches the same issues at a fraction of the cost. You iterate quickly in our lab, then go to an accredited house for the official test with high confidence you\'ll pass.',
    },
    {
      question: 'Can you help if we fail certification?',
      answer: 'Yes. We can diagnose the failure, recommend fixes, and verify them in our lab before you return to the test house.',
    },
  ],

  'team-augmentation': [
    {
      question: 'How do you integrate with our team?',
      answer: 'We join your standups, use your tools (Git, Jira, Slack, etc.), and follow your processes. You get senior engineers who ramp quickly and require minimal management.',
    },
    {
      question: 'What are the billing terms?',
      answer: 'Hourly at $150/hr ($135 for startups/academia, $140 for non-profits). We provide detailed time logs. Retainer arrangements available for ongoing work.',
    },
    {
      question: 'Can we scale up or down?',
      answer: 'Yes. Team augmentation is flexible—add hours when you need them, reduce when you don\'t. No long-term commitment required.',
    },
  ],
} as const;

/**
 * General FAQs for homepage or contact page
 */
export const generalFAQs: FAQItem[] = [
  {
    question: 'What industries do you work with?',
    answer: 'We specialize in medical devices (42% of projects), industrial automation (35%), and scientific instrumentation (20%). These require regulatory knowledge and reliability that we\'ve built over 30+ years of combined experience.',
  },
  {
    question: 'What\'s your minimum project size?',
    answer: 'Design reviews start at $1k. Product development projects typically range from $10k-$100k. We\'re not the right fit for budgets under $1k or pure software without custom hardware.',
  },
  {
    question: 'Where are you located?',
    answer: 'Long Beach, California. We work with clients across the US and have shipped products to manufacturers worldwide. All engineering work happens in our in-house lab.',
  },
  {
    question: 'Do you require an NDA?',
    answer: 'We\'re happy to sign your NDA before any detailed discussions. We treat all client information as confidential regardless.',
  },
];

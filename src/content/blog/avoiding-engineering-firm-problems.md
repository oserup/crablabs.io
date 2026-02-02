---
title: "Red Flags When Hiring Engineering Firms"
description: "Warning signs, contract terms, and due diligence to protect your project and budget."
pubDate: 2025-01-15
author: "Orion Serup"
heroImage: "/images/blog/contract-signing.jpg"
tags: ["consulting", "business", "contracts", "due-diligence"]
contentType: "article"
featured: false
draft: false
---

About half of hardware consulting engagements end badly. Not catastrophically, but with budget overruns, missed deadlines, or deliverables that don't quite work. The patterns are predictable. The fixes are known. Most clients don't apply them.

This article covers what to watch for.

## Red Flags During Selection

### Vague Technical Responses

Specific technical questions during evaluation tend to reveal capability gaps. "How would you approach the power management for a battery-powered BLE device?" should yield concrete answers: sleep mode strategies, current budgets, regulator selection criteria.

Potential warning signs:

- Responses heavy on buzzwords, light on specifics
- Difficulty discussing trade-offs or alternatives
- Deflection to "we'll figure that out during development"
- Few questions about your constraints or requirements

### Limited Relevant Portfolio

Request examples of similar work. A firm claiming medical device expertise should generally be able to show medical device projects with relevant certifications. Claims of "we can do anything" sometimes indicate limited experience with the specific domain.

Ways to verify claims:

- Ask for references from similar projects
- Request technical details about past work (within NDA limits)
- Check if portfolio projects actually shipped or stalled in development
- Look for consistency between claimed expertise and actual project history

### Unusually Low Quotes

If one quote is 50% below others, it may be worth investigating why. Some possible explanations:

- **Junior staff**: Lower rates often mean less experienced engineers. Development may take longer, quality may suffer, and rework costs can exceed initial savings.
- **Scope misunderstanding**: The firm may not have understood the full requirements. Change orders may follow.
- **Aggressive bidding**: Low initial quote to win the contract, followed by scope expansion claims.
- **Cash flow pressure**: Firm needs work and may deprioritize the project when better opportunities appear.

### Resistance to Fixed Pricing

Firms confident in their estimates often offer fixed-price contracts. Firms that insist on hourly-only billing may lack experience with similar projects or prefer open-ended scope.

Legitimate reasons for hourly billing exist (R&D, ongoing support, unclear requirements), but well-defined projects can often support fixed pricing.

## Contract Terms That Matter

### IP Ownership

Contracts typically should state that intellectual property transfers to the client upon payment. Terms to review carefully:

- **Retained licenses**: Firm keeps rights to use your designs in other projects
- **Background IP carve-outs**: Broadly defined "background IP" that the firm claims ownership of
- **Delayed transfer**: IP transfers only after final payment, creating leverage
- **Joint ownership**: Sounds fair, but means neither party has full control

Example language: "All work product, including designs, documentation, source code, and data, becomes the exclusive property of Client upon creation."

### Payment Structure

Reasonable structures tie payments to deliverables:

- 20-30% at project start
- 40-50% at defined milestones (design review, prototype, etc.)
- 20-30% at final delivery and acceptance

Warning signs:

- Large upfront payments (>50%) with no milestones
- Final payment due before acceptance testing
- No holdback for defect correction
- Vague milestone definitions ("design complete" without acceptance criteria)

### Change Order Process

Requirements change. The contract should define how changes are handled:

- How are out-of-scope items identified?
- Who approves changes and at what dollar threshold?
- How are change costs estimated and agreed upon?
- What happens if parties disagree on whether something is in-scope?

Without clear process, ambiguities can become negotiations or disputes.

### Warranty and Support

Deliverables should include a warranty period (typically 30-90 days) covering defects in the delivered work. Clarify:

- What constitutes a defect vs. a new feature request
- Response time expectations during warranty
- Support costs after warranty expires
- Source code and documentation deliverables for self-support

### Termination Rights

Both parties generally benefit from clear exit options:

- **For cause**: Material breach, missed deadlines, quality failures
- **For convenience**: Either party can exit with notice (typically 30 days)
- **Payment on termination**: What's owed for work completed
- **Deliverable handover**: All work product transfers regardless of completion

Contracts where termination forfeits all deliverables or requires paying the full contract value may warrant careful review.

## During the Project

### Communication Frequency

Establish regular check-ins (weekly minimum for active projects). Warning signs during execution:

- Missed meetings without notice
- Vague status updates ("making progress")
- Resistance to sharing work-in-progress
- Key personnel changes without notification
- Invoices that don't match reported progress

### Milestone Reviews

Each milestone should include:

- Defined deliverables with acceptance criteria
- Technical review opportunity before payment
- Working demonstrations where applicable
- Documentation of design decisions and trade-offs

"Design complete" may mean little without a design review meeting where the client can ask questions and request changes.

### Scope Management

Track scope carefully:

- Document all requirements at project start
- Log every change request with estimated impact
- Require written approval for out-of-scope work
- Review scope alignment at each milestone

Scope creep works both directions. Firms may gold-plate features, or clients may request additions without recognizing the cost.

## Common Failure Patterns

### The Endless Prototype

The firm delivers working demos but struggles to reach production-ready state. Each review reveals new issues. The project stretches indefinitely.

Prevention:

- Define "done" explicitly in the contract
- Include production-readiness criteria (DFM review, test coverage, documentation)
- Set firm deadlines with consequences
- Require a production transition plan

### The Knowledge Hostage

Documentation is sparse. Source code is poorly commented. Key decisions live only in engineers' heads. The client may become dependent on the firm for any changes.

Prevention:

- Require documentation deliverables at each milestone
- Include documentation quality in acceptance criteria
- Request code reviews during development, not just at delivery
- Ensure development environment setup is documented

### The Scope Explosion

The original $50k project becomes $150k through change orders. Each new issue reveals another required change. The original contract becomes less relevant.

Prevention:

- Invest in thorough requirements before contracting
- Include contingency in project budget (20-30%)
- Cap change orders without formal contract amendment
- Review change order patterns; frequent changes suggest poor initial scoping

### The Disappearing Team

Key engineers leave mid-project. Replacements lack context. Progress may stall while new staff ramps up. The firm may bill for relearning time.

Prevention:

- Identify key personnel in the contract
- Require notification of personnel changes
- Include knowledge transfer provisions
- Maintain project documentation independent of individuals

## Due Diligence Summary

Before signing any contract:

| Area | Verify |
|------|--------|
| Technical | Portfolio includes similar projects. Technical questions get specific answers. References confirm delivery. |
| Business | Insurance current. No major litigation. Financially stable for the engagement duration. |
| Contract | IP transfers on payment. Milestones trigger payments. Change process defined. Warranty specified. |
| Setup | Requirements documented. Acceptance criteria for each milestone. Communication schedule agreed. |

## When Things Go Wrong

If a project starts failing:

1. **Document everything**: Keep records of all communications, deliverables, and issues.

2. **Address early**: Small problems become large problems. Raise concerns at the first sign of trouble.

3. **Escalate within the firm**: If the project team isn't responsive, escalate to management.

4. **Review the contract**: Understand your rights before making demands.

5. **Consider mediation**: Before litigation, third-party mediation can resolve disputes faster and cheaper.

6. **Plan for transition**: If termination is likely, prepare to move work to another firm or in-house.

## The Short Version

Most failures trace to the same causes: vague requirements, bad contracts, and not paying attention during execution. Time spent on due diligence before signing costs far less than fixing a failed project afterward.

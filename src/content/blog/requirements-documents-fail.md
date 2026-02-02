---
title: "Why Requirements Documents Fail"
description: "Common patterns that make specs useless and approaches that work better."
pubDate: 2025-05-05
author: "Orion Serup"
heroImage: "/images/blog/requirements-docs.jpg"
tags: ["engineering", "requirements", "project-management", "best-practices"]
contentType: "opinion"
featured: false
draft: false
---

Requirements documents are supposed to prevent misunderstandings. Instead, they often become a source of conflict: "That's not what I meant." "The spec didn't say that." "You should have known."

The problem isn't that requirements are unnecessary. The problem is how they're typically written.

## Common Failure Patterns

### The Novel

A 50-page document that describes everything in exhaustive detail. Every stakeholder added their concerns. Nobody will read it completely.

**Symptoms:**

- Multiple contradictions buried in the text
- Important requirements hidden among trivial ones
- Revision history longer than some projects
- Engineers skim it, miss critical details

**Why it happens:** Requirements gathering becomes a checklist exercise. More content feels thorough. Nobody wants to leave something out.

### The Wishlist

Requirements describe an ideal world without constraints. Performance targets have no basis. Feature lists grow without prioritization.

**Examples:**

- "System shall respond in under 1ms" (no analysis of what's achievable)
- "Battery life shall exceed 5 years" (with features that prevent it)
- "Device shall support all Bluetooth profiles" (nobody needs this)

**Why it happens:** Requirements written by people not building the system. No feedback loop between specification and feasibility.

### The Vague Spec

Requirements so general they don't constrain anything.

**Examples:**

- "System shall be reliable"
- "Interface shall be user-friendly"
- "Device shall have adequate performance"
- "Power consumption shall be low"

**Why it happens:** Specificity requires understanding the problem. Vagueness hides uncertainty.

### The Implementation Spec

Requirements that describe how to build the system instead of what the system should do.

**Examples:**

- "System shall use FreeRTOS"
- "Database shall be PostgreSQL"
- "Communication shall use JSON over HTTPS"

**Why it happens:** Conflating requirements with design decisions. Often written by engineers who've already picked solutions.

### The Frozen Document

Requirements written once, then treated as immutable. Reality changes; the document doesn't.

**Symptoms:**

- Engineers reference a version nobody updates
- Verbal changes override written requirements
- Final product doesn't match spec (intentionally)
- Post-project arguments about what was "really" required

**Why it happens:** Changing requirements feels like failure. Change control processes discourage updates.

## What Goes Wrong

### Disconnected Authorship

Requirements written by one group (product management, customers, marketing) and implemented by another (engineering). The authors don't understand implementation constraints. The implementers don't understand user needs.

**Result:** Requirements that are either impossible or miss the actual problem.

### Wrong Level of Detail

Too much detail: Constrains implementation unnecessarily. Becomes obsolete quickly. Engineers ignore it.

Too little detail: Engineers make assumptions. Assumptions differ from expectations. Arguments ensue.

**The sweet spot:** Specific enough to verify, abstract enough to allow design flexibility.

### Missing Context

Requirements list what the system should do but not why. Without context, engineers can't make reasonable trade-offs when requirements conflict or prove infeasible.

**Example:**

*Without context:* "Sampling rate shall be 1000 Hz"

*With context:* "Sampling rate shall be 1000 Hz to capture vibration frequencies up to 400 Hz per Nyquist requirements. Application is condition monitoring for bearings with expected defect frequencies in the 50-300 Hz range."

The second version allows intelligent discussion if 1000 Hz proves difficult to achieve.

### No Prioritization

Every requirement listed as mandatory. When trade-offs become necessary, there's no guidance on what matters most.

**Categories that help:**

- **Must have:** Product doesn't ship without this
- **Should have:** Important but can be deferred
- **Could have:** Nice to have, drop first
- **Won't have:** Explicitly out of scope

The last category matters. Documenting what you're not building prevents scope creep.

### Untestable Requirements

If you can't verify a requirement was met, it's not useful.

**Untestable:** "Device shall have good thermal performance"

**Testable:** "Internal temperature shall not exceed 70C when operating at maximum load in 40C ambient for 1 hour"

Every requirement should have an implied or explicit test.

## What Works Better

### Iterative Refinement

Don't try to specify everything upfront. Start with high-level goals. Refine as understanding grows.

**Process:**

1. Initial requirements capture big picture
2. Design exploration reveals constraints
3. Requirements updated with feasibility input
4. Prototype exposes additional needs
5. Requirements refined before production commitment

Each cycle adds detail where it matters.

### Conversation Over Documentation

A requirements document is a record of agreement, not a substitute for discussion. The discussions that create the document matter more than the document itself.

**Good signs:**

- Engineering involved in requirements definition
- Stakeholders available for clarification
- Disagreements surfaced early
- Trade-offs discussed, not avoided

**Bad signs:**

- Document thrown over the wall
- Questions answered with "read the spec"
- No access to requirements authors
- Changes require formal process for trivial items

### Acceptance Criteria Focus

Instead of describing the system, describe how you'll know it works. Each feature gets acceptance criteria that define "done."

**Format:**

```
Feature: Battery status indication

Acceptance criteria:
- LED shows green when battery above 50%
- LED shows yellow when battery between 20-50%
- LED shows red when battery below 20%
- LED blinks red when battery below 5%
- Status updates within 5 seconds of charge level change
```

This format is specific, testable, and focused on behavior rather than implementation.

### Living Documentation

Requirements that evolve with the project. Version controlled, linked to design decisions, updated when reality changes.

**Tools that help:**

- Requirements in version control (not Word documents)
- Traceability from requirements to tests
- Change history showing why requirements evolved
- Links between related requirements

The goal isn't to prevent change but to make change visible.

### Structured Communication

Some teams replace requirements documents with structured templates that capture essential information without encouraging bloat.

**Example template:**

```
Requirement ID: PWR-003
Title: Sleep mode current consumption
Description: Device shall consume less than 10uA in sleep mode
Rationale: Required for 5-year battery life with 2000mAh cell
Priority: Must have
Verification: Measure current with Keithley 6485 in sleep state
Dependencies: PWR-001 (sleep mode entry), PWR-002 (wake sources)
```

Structured format makes requirements reviewable and traceable without encouraging prose.

## Requirements for Hardware vs Firmware

### Hardware Requirements Challenges

Hardware requirements lock in earlier and cost more to change. Emphasis on:

- Physical constraints (size, weight, thermal)
- Environmental requirements (temperature, humidity, vibration)
- Interface specifications (connectors, pinouts)
- Performance margins (design with headroom)

**Common mistake:** Under-specifying environmental requirements. The default assumption shouldn't be benign office conditions.

### Firmware Requirements Challenges

Firmware can change after hardware is fixed, which creates flexibility but also risk of scope creep. Emphasis on:

- Performance requirements (timing, throughput, latency)
- Resource constraints (memory, CPU, storage)
- Interface behavior (protocols, error handling)
- Safety and reliability requirements

**Common mistake:** Treating firmware as infinitely flexible. Firmware on constrained hardware has real limits.

## When to Invest in Requirements

### High Investment Appropriate

- Regulated products (medical, automotive, aerospace)
- Safety-critical systems
- Multi-party development (separate hardware, firmware, software teams)
- Contract work with external clients
- Long-lived products with maintenance requirements

### Lower Investment Appropriate

- Internal tools
- Prototypes and proofs of concept
- Small team with direct communication
- Rapidly evolving products
- Research projects

The cost of requirements formality should match the cost of misunderstanding.

## Summary

Requirements documents fail when they:

- Try to replace communication with documentation
- Specify too much or too little
- Ignore feasibility constraints
- Lack prioritization and context
- Become frozen artifacts instead of living agreements

Requirements work when they:

- Evolve through iteration
- Focus on testable outcomes
- Include context and rationale
- Support trade-off decisions
- Stay connected to the people who wrote them

The document matters less than the shared understanding it represents. If the team disagrees about what "the spec says," the spec has failed regardless of what it actually contains.

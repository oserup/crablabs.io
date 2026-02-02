---
title: "The Case Against Over-Engineering"
description: "When 'good enough' is the right call and gold-plating hurts more than it helps."
pubDate: 2025-01-28
author: "Orion Serup"
heroImage: "/images/blog/complexity.jpg"
tags: ["engineering", "design", "best-practices"]
contentType: "opinion"
featured: false
draft: false
---

Engineers tend toward elegant solutions. The instinct to solve problems completely, handle every edge case, build systems that never fail. This instinct has value. It's also dangerous.

Over-engineering kills projects. Not dramatically, but gradually. A feature that should take a week takes a month. A simple product becomes complex. Costs grow. Schedules slip. Sometimes the product never ships at all.

## What Over-Engineering Looks Like

**Premature abstraction.** Building a generic framework for something that only needs to work one way. "We might need to support other protocols later" means "I want to build something more interesting than the actual requirement."

**Excessive configurability.** Making everything a parameter when the values will never change. Now you have twice the code, twice the testing, and configuration bugs on top of logic bugs.

**Gold-plated reliability.** Designing for 20-year life when the product will be obsolete in 5. Using automotive-grade components for a consumer device. Triple-redundancy for non-safety systems.

**Theoretical edge cases.** Handling situations that can't actually occur in the real system. "But what if someone sends 4GB of data over this serial port that only ever transfers 100-byte packets?"

**Technology for technology's sake.** Using a complex RTOS when a superloop would work. Choosing a 1GHz processor when 48MHz is plenty. Implementing machine learning when a lookup table solves the problem.

## Why It Happens

**Fear of looking incompetent.** Simple solutions can feel amateur. Complex solutions can feel professional. This perception is often backwards. Simple solutions that work are frequently harder to achieve than complex solutions that sort of work.

**Resume-driven development.** Engineers want to use new technologies, learn new skills, build impressive systems. The project becomes a vehicle for career development rather than a means to ship a product.

**Unclear requirements.** When you don't know exactly what you need, you build flexibility. Flexibility is expensive. Better to clarify requirements than to build for every possibility.

**Past trauma.** You got burned once by a limitation in a previous project. Now you over-engineer to prevent that specific problem, even when it doesn't apply.

**Billable hours incentive.** In some consulting models, more hours means more revenue. This creates subtle pressure toward complexity. Fixed-price contracts align incentives better.

## The Cost

Every unnecessary feature has ongoing costs:

- **Development time**: Building it
- **Testing time**: Verifying it works
- **Documentation**: Explaining it
- **Maintenance**: Fixing bugs in it
- **Cognitive load**: Understanding the system
- **Attack surface**: More code, more vulnerabilities
- **Power consumption**: More code running, more energy used
- **BOM cost**: Components you didn't need

A rough estimate: every line of code costs $10-50 to maintain over its lifetime. That "might be useful someday" feature can cost thousands of dollars even if it's never used.

## How to Recognize It

Ask these questions:

**Is there a requirement for this?** Not "could someone want this" but "did someone ask for this specific thing."

**What's the simplest solution that meets the requirement?** If you're not building that, why not?

**Would I bet my own money on this feature being used?** If the answer is no, reconsider building it.

**Can I remove this without breaking anything that matters?** If yes, maybe remove it.

**Am I solving a problem or preventing a problem I imagined?** Real problems deserve solutions. Imaginary problems don't.

## Finding the Right Level

"Good enough" doesn't mean sloppy. It means appropriate to the application.

A medical device needs extensive error handling, validation, and fault tolerance. That's not over-engineering; that's meeting requirements.

A prototype for investor demos needs to work for 10 minutes at a time, in a controlled environment, operated by people who know its limitations. Building it like a medical device is over-engineering.

Match the solution to the actual need:

| Application | Appropriate Engineering Level |
|-------------|-------------------------------|
| Proof of concept | Works in demo conditions |
| Prototype | Works reliably for testing |
| Pilot production | Works in real conditions |
| Volume production | Works reliably at scale |
| Safety-critical | Works despite failures |

Each level costs 2-5x more than the previous one. Don't pay for levels you don't need.

## Practical Guidelines

**Start minimal, add when needed.** It's easier to add a feature when you discover you need it than to remove one you built but don't use.

**Prototype with real constraints.** If you're targeting an M0, prototype on an M0. You'll naturally build simpler solutions when you can feel the resource limits.

**Review with someone outside the project.** Fresh eyes spot unnecessary complexity. "Why does this exist?" is a valuable question.

**Set time budgets.** If a feature should take 2 days and it's taking 2 weeks, you're probably over-engineering it. Stop, reassess, simplify.

**Ask customers, not engineers.** Engineers will always want more features, more flexibility, more robustness. Customers want it to work and ship on time.

## The Uncomfortable Truth

Many experienced engineers spend significant time deciding what not to build. They push back on requirements. They simplify architectures. They delete code.

This feels wrong. We're paid to build things, not to not-build things. But the value isn't in the building. It's in the shipping. Everything that makes shipping harder without making the product better is waste.

The right answer is often the boring answer. The lookup table instead of the neural network. The state machine instead of the behavior tree. The hardcoded value instead of the configuration parameter.

Boring tends to work. Boring ships. Boring is underrated.

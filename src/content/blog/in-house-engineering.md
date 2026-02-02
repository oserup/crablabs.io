---
title: "The Hidden Costs of Outsourced Engineering"
description: "Many firms outsource to cut costs. What that actually means for quality and communication."
pubDate: 2025-08-18
author: "Orion Serup"
heroImage: "/images/blog/outsourcing.jpg"
tags: ["engineering", "consulting", "quality"]
contentType: "opinion"
featured: false
draft: false
---

A lot of engineering firms outsource chunks of their work. Layout goes overseas. Firmware gets contracted out. Testing happens somewhere else.

On paper it saves money. In practice it usually costs more than the savings.

## The Math That Doesn't Work

The calculation looks obvious:

- US engineer: $150/hour
- Overseas contractor: $30/hour
- Savings: 80%

But it ignores everything else.

Every handoff needs documentation, review, and iteration. A question that takes 5 minutes in the same room becomes a multi-day email chain across time zones.

Contractors don't know your project history. They don't know your constraints. They execute to spec, and if the spec is wrong, you get exactly what you asked for instead of what you needed.

You don't get anyone's A-team at $30/hour. You get whoever's available.

Someone has to manage the relationship. That's overhead.

When outsourced work doesn't meet standards, it needs rework. Sometimes the contractor fixes it and you wait. Sometimes you fix it yourself and pay twice.

## Where It Usually Happens

**PCB layout** - Schematic stays in-house because that's "engineering." Layout goes to contractors. But layout decisions affect signal integrity, EMC, manufacturability. A contractor following DRC rules doesn't know why certain traces matter.

**Firmware** - Architecture stays in-house, implementation gets farmed out. You get code that works but doesn't integrate well, isn't maintainable, and needs significant cleanup.

**Documentation** - Technical writing gets outsourced to save engineering time. Result is documents written by people who don't understand the product.

**Testing** - Pre-compliance goes to third parties. Adds weeks to schedule and means engineers aren't there when failures happen. That debugging info is valuable.

## The Communication Problem

Typical outsourced flow:

1. Write requirements document
2. Send to contractor
3. Contractor has questions (24 hour turnaround)
4. Answer, clarify
5. Contractor builds to their understanding
6. Review, find issues
7. Request revision
8. Repeat 2-3 times

Compare to in-house: Build while asking questions in real-time. Done.

The outsourced version looks cheaper per hour but takes 3-5x the hours. And the result is usually worse because context never fully transfers.

## What In-House Means

Same team from start to finish. The engineer doing the schematic does the layout or closely supervises it. The person writing firmware understands the hardware.

Questions go to the person doing the work, not through intermediaries.

Everyone working on the project knows the goals and constraints. Nobody's working from a spec document in isolation.

Changes happen when needed. No waiting for time zones, no handoff documents.

When something goes wrong, there's no finger-pointing between teams. Clear accountability.

## Why It's Usually Better

Feedback loops are tight. The person making decisions sees consequences immediately. Layout choices get tested in the lab. Bugs get debugged by the author.

Standards stay consistent across all work. Same practices, review processes, quality gates.

Knowledge accumulates. Every project makes the team better. That doesn't happen when work is distributed to contractors who do one project and move on.

People who see projects through are invested in outcomes. Contractors completing tasks don't have the same stake.

## When Outsourcing Makes Sense

When something is genuinely outside core competency. I'm not going to do injection mold design - that's a specialist job.

Final regulatory certification needs accredited labs. No way around that.

Production goes to contract manufacturers. Design and prototyping are different.

The distinction: outsourcing because you can't do something vs. outsourcing to save labor costs. The first makes sense. The second usually backfires.

## Questions to Ask

Who does PCB layout? If outsourced, how is quality controlled?

Where is firmware developed? "Our team" should mean employees, not contractors.

Who answers technical questions? Extra layers between you and engineers add friction.

How is testing handled? In-house pre-compliance is a good sign.

What happens when something changes mid-project? Easy changes mean tight integration. Complicated change processes mean distributed teams.

## The Real Math

$80k quote from an outsource-heavy firm vs. $100k from in-house:

The $80k project ends up at $105k after rework, plus six weeks of delays, plus quality issues found late in testing.

The $100k project finishes at $100k, on schedule, working correctly.

The "expensive" option costs less. And ships faster. And works.

## Takeaway

Outsourcing optimizes for the firm's costs, not your outcomes. Communication overhead, quality variance, and coordination complexity eat the labor savings.

In-house keeps feedback loops tight, communication direct, and accountability clear. The people building your product are invested in it working.

When you're building something that matters, that investment shows up in the result.

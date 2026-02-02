---
title: "AI Tools in Engineering: Use Without Dependence"
description: "AI tools accelerate engineering work when used responsibly. A practical approach to AI-assisted development."
pubDate: 2025-10-14
author: "Orion Serup"
heroImage: "/images/blog/ai-code.jpg"
tags: ["engineering", "AI", "firmware", "best-practices"]
contentType: "opinion"
featured: true
draft: false
---

There's a lot of noise about AI in engineering right now. Some people think it'll replace engineers entirely. Others won't touch it. Both camps are wrong.

I use AI tools constantly. But I don't rely on them for anything that matters. That distinction is important.

## The Hype Is Overblown

You've heard the pitch: "AI writes code now! Just describe what you want!"

Sure, it generates code that compiles. Sometimes it even works. But it doesn't understand physical reality. It doesn't know that your trace routing affects EMC performance. It can't reason about thermal dissipation or catch edge cases in safety-critical firmware.

For a quick script or a web form? Fine, let the AI take a first pass. For a medical device that needs to work when someone's life depends on it? Every line needs human review.

## Where It Actually Helps

I've found AI genuinely useful for the boring stuff:

**Documentation** - First drafts, formatting, translating technical specs into user-facing docs. Still needs editing, but saves hours of staring at a blank page.

**Test scaffolding** - Generating unit test boilerplate from function signatures. It suggests boundary conditions I might miss. I still decide which tests actually matter.

**Boilerplate code** - Filling in templates, generating repetitive structures. The stuff I'd copy-paste anyway.

**Admin work** - Meeting notes, status updates, invoice formatting. Things that don't need engineering judgment.

That last one is the big win. Probably 80% of administrative overhead can be automated. That's time I'd rather spend on actual engineering.

## Where It Has No Business

Architecture decisions. Safety-critical code. Hardware design. Regulatory strategy.

I'm not letting an AI decide how to partition a system or what safety architecture to use. It doesn't understand my constraints, my manufacturing reality, or my regulatory pathway. It just pattern-matches against whatever it was trained on.

For anything where someone could get hurt if it fails - medical firmware, industrial controllers, safety interlocks - humans write it and humans review it. Full stop.

Hardware design is the same story. PCB layout affects signal integrity and EMC performance in ways an AI can't reason about. Component selection requires understanding supply chains and reliability data that changes constantly. There's no "quick iteration" when you're waiting on a board spin.

## The Template Approach

Here's what actually works: AI fills in templates, it doesn't create from scratch.

I've built up templates over years - hardware design patterns, firmware architectures, test procedures, documentation structures. When AI helps, it's working within those proven frameworks. It's accelerating implementation of approaches I know work, not inventing new ones.

The workflow looks like:
1. I pick the right template and define constraints
2. AI helps with implementation details
3. I review and refine
4. Standard verification

AI speeds up steps 2 and 3. It doesn't touch steps 1 and 4.

## What to Ask Firms About AI

If you're hiring an engineering firm, ask them:

Where specifically do they use AI? Vague answers are a red flag.

What's off-limits? If they can't articulate what AI doesn't touch, they haven't thought about it.

How do they verify AI-assisted work? There should be human review on everything.

Do they use it for safety-critical code? The only good answer is "no" or "only for test generation."

## The Point

AI is a tool. Like any tool, you can use it well or poorly.

Used well, it eliminates tedious work so you can focus on decisions that matter. Used poorly, it introduces errors into systems that can't afford them.

I use it heavily for the former. I avoid it completely for the latter. That's the whole philosophy.

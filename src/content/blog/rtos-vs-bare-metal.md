---
title: "RTOS vs Bare Metal: A Decision Framework"
description: "When an operating system helps and when it just adds complexity."
pubDate: 2025-05-19
author: "Orion Serup"
heroImage: "/images/blog/microcontroller.jpg"
tags: ["firmware", "RTOS", "embedded-systems", "architecture"]
contentType: "article"
featured: false
draft: false
---

The question comes up on most embedded projects: RTOS or bare metal? The answer depends on your specific constraints, not on which approach feels more "professional."

## When Bare Metal Wins

**Ultra-low power applications.** If you're counting microamps and need multi-year battery life, an RTOS adds overhead that may be hard to justify. Sleep modes, interrupt handling, and power state transitions are generally simpler to optimize when you control every instruction.

**Hard real-time with tight margins.** When you need sub-microsecond determinism, RTOS context switching becomes a liability. Motor control loops, high-speed ADC sampling, and precision timing are often better served by bare metal.

**Simple state machines.** If your firmware is essentially "wait for interrupt, do thing, go back to sleep," an RTOS is overhead without benefit. A superloop or interrupt-driven architecture is simpler and smaller.

**Minimal flash/RAM.** On 8-bit MCUs or constrained Cortex-M0 parts, an RTOS might consume 10-30% of your available resources. That's fine if you need the features. It's waste if you don't.

**Cost-sensitive high-volume.** When you're shipping millions of units, every byte of flash and every microamp matters. Bare metal lets you optimize for exactly what you need.

## When RTOS Wins

**Multiple concurrent activities.** Once you have 3+ independent tasks that need to run simultaneously (USB stack, sensor polling, display updates, radio communication), scheduling them manually becomes error-prone. An RTOS makes this tractable.

**Complex communication stacks.** TCP/IP, BLE, USB device classes, and similar protocols expect to run in their own context. Fighting against that assumption creates more bugs than it solves.

**Team development.** When multiple engineers work on the same firmware, task isolation prevents one subsystem from breaking another. Clear boundaries between tasks reduce integration pain.

**Soft real-time requirements.** If "respond within 10ms" is fine but "respond within 10us" isn't required, RTOS overhead doesn't matter. You get the organizational benefits without hitting timing limits.

**Middleware dependencies.** Many vendor stacks (wireless, filesystems, graphics) assume an RTOS. Running them bare metal means either porting effort or living with their polling-based alternatives.

## The Hybrid Approach

Most real projects don't fit cleanly into either category. A common pattern:

- **Time-critical ISRs** handle hard real-time requirements (motor commutation, ADC sampling, precision timing)
- **RTOS tasks** handle everything else (communication, UI, logging, state management)
- **DMA** moves data between ISRs and tasks without CPU intervention

This gives you determinism where you need it and convenience everywhere else.

## Choosing an RTOS

If you decide you need one:

**FreeRTOS** tends to be the go-to choice for many teams. Large ecosystem, runs on most platforms, well-documented, MIT licensed. Most vendor SDKs support it. Often a reasonable starting point unless you have specific reasons to look elsewhere.

**Zephyr** is gaining momentum for IoT projects. Better driver model, built-in networking, device tree configuration. Steeper learning curve but more modern architecture. Good choice for Nordic, STM32, or new greenfield projects.

**ThreadX** (now Azure RTOS) is solid for commercial products. Safety certifications available. Recently open-sourced but ecosystem is smaller.

**Bare metal with a scheduler** is an underrated option. A simple cooperative scheduler (no preemption) gives you task organization without the complexity of a full RTOS. Good for projects that are "almost" simple enough for bare metal.

## Common Mistakes

**Using an RTOS because it seems professional.** If your project doesn't need the features, you're adding complexity for no benefit. Simple projects should stay simple.

**Avoiding an RTOS because "real embedded engineers don't need one."** This is ego talking. If your state machine has 47 states and you're manually implementing priority inversion avoidance, you're just reimplementing an RTOS poorly.

**Underestimating stack sizes.** Every task needs its own stack. If you guess wrong, you get silent memory corruption. Measure actual usage and add margin.

**Blocking in ISRs.** Generally a bad idea, but RTOS primitives can make it tempting. Signal from ISR, process in task.

**Priority inversion without protection.** If a high-priority task waits on a resource held by a low-priority task, and a medium-priority task preempts the low-priority one, your high-priority task is effectively demoted. Use priority inheritance mutexes or avoid the pattern.

## Quick Decision Guide

| Factor | Bare Metal | RTOS |
|--------|------------|------|
| Battery life | Multi-year required | Months acceptable |
| Memory | <32KB flash, <8KB RAM | More available |
| Timing | <10us response needed | >1ms acceptable |
| Complexity | Single loop, interrupt-driven | 3+ independent subsystems |
| Team size | 1-2 developers | 3+ developers |
| Stacks | Simple protocols | TCP/IP, BLE, USB |

## Cost Implications

Bare metal typically costs less in development time for simple projects but more for complex ones. The crossover point is usually around 5,000-10,000 lines of application code.

RTOS can add 2-4 weeks to initial bring-up (learning curve, configuration, debugging race conditions) but often saves time as complexity grows.

If you're unsure, consider prototyping both approaches for a week. The better fit tends to become apparent fairly quickly.

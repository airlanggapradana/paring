---

name: ios-uiux-design
description: Design high-quality, native-feeling iOS interfaces using Apple’s Human Interface Guidelines principles. Use this skill when the user asks to design mobile apps, iOS components, flows, or UX systems that feel truly native, polished, and aligned with Apple’s ecosystem.
license: Complete terms in LICENSE.txt
--------------------------------------

This skill guides the creation of **production-grade iOS UI/UX designs** that feel authentically native, avoiding generic cross-platform or “web-like” mobile interfaces. It emphasizes deep alignment with Apple’s design philosophy, interaction patterns, and ecosystem behaviors.

The user provides requirements for an app, screen, feature, or experience. They may include context such as audience, product goals, or platform constraints (iPhone, iPad, etc.).

---

## iOS Design Thinking

Before designing, fully internalize Apple’s philosophy and commit to a **clear experiential direction**:

* **Purpose**: What is the core user goal? What task should feel effortless?
* **Platform Context**: iPhone vs iPad, portrait vs landscape, touch-first interaction
* **Tone**: Choose a refined Apple-aligned direction:

  * Ultra-minimal clarity
  * Soft, layered depth (glassmorphism)
  * Content-first editorial
  * Utility-focused system UI
  * Playful but restrained
* **System Alignment**: How does this integrate with iOS conventions?
* **Differentiation**: What subtle detail makes it feel premium and memorable?

**CRITICAL**: iOS design is not about visual flash — it’s about *precision, restraint, and behavior*. Every element must feel intentional, fluid, and system-aware.

---

## Core iOS Principles (Non-Negotiable)

### 1. Clarity

* Prioritize legibility and hierarchy
* Remove unnecessary decoration
* Use whitespace intentionally

### 2. Deference

* UI should never compete with content
* Let content be the hero
* Avoid heavy visual noise

### 3. Depth

* Use layers, blur, and motion to communicate hierarchy
* Maintain spatial logic (foreground vs background)

---

## Layout & Spatial System

* Respect **safe areas** (notch, home indicator)
* Use consistent margins (16pt / 20pt baseline)
* Prefer **vertical flow** with natural scrolling
* Avoid dense layouts — embrace breathing space
* Use **large titles** for hierarchy in navigation

---

## Typography

* Use Apple’s **San Francisco (SF Pro)** system font
* Leverage:

  * Dynamic Type (accessibility scaling)
  * Clear hierarchy (Title, Headline, Body, Caption)
* Avoid excessive font mixing — consistency is key
* Let typography carry structure, not decoration

---

## Color & Materials

* Use semantic colors:

  * Label, Secondary Label, System Background, etc.
* Support **Dark Mode by default**
* Use:

  * Blur effects (frosted glass)
  * Vibrancy
  * Subtle shadows
* Avoid harsh gradients or overly saturated palettes

---

## Components & Patterns

Follow native components unless there is a strong reason not to:

* Navigation Bar (large → inline collapse)
* Tab Bar (primary navigation)
* Sheets / Modals (contextual tasks)
* Lists (grouped, inset, plain)
* Buttons (system styles, not custom-heavy)

**Rule**: Reinvent behavior = break user expectations

---

## Interaction & Motion

* Motion must feel **natural and physics-based**
* Use:

  * Spring animations
  * Smooth transitions
  * Gesture-driven navigation (swipe back, pull to dismiss)

Focus on:

* Continuity between screens
* Clear feedback for every action
* Subtle micro-interactions over flashy effects

---

## Gesture-First UX

* Design for:

  * Tap (primary)
  * Swipe (navigation/actions)
  * Long press (contextual menus)
* Reduce reliance on visible buttons when gestures suffice

---

## Navigation Architecture

Use Apple-standard flows:

* **Hierarchical navigation**

  * Push → detail → back
* **Tab-based navigation**

  * 3–5 primary sections
* **Modal presentation**

  * Temporary tasks

Avoid:

* Deep, confusing navigation stacks
* Hidden or unpredictable flows

---

## Feedback & System Communication

* Provide immediate feedback:

  * Haptics
  * Visual state changes
  * Loading indicators
* Use system patterns:

  * Alerts (sparingly)
  * Toast-like feedback (non-intrusive)

---

## Accessibility (Essential)

* Support:

  * VoiceOver
  * Dynamic Type
  * High contrast
* Ensure:

  * Minimum touch targets (44pt)
  * Clear labels and semantics

Accessibility is not optional — it’s part of the design quality.

---

## Visual Refinement

Focus on micro-details:

* Perfect alignment and spacing
* Consistent corner radii
* Subtle separators instead of borders
* Optical balance (not just mathematical)

**Premium iOS design = attention to invisible details**

---

## What to Avoid (Common Mistakes)

* Web-style UI inside iOS apps
* Over-designed interfaces (too many colors, shadows)
* Ignoring safe areas and system spacing
* Custom navigation patterns that break expectations
* Heavy, slow animations
* Inconsistent iconography

---

## Implementation Expectations

Design outputs should be:

* Component-based and reusable
* Adaptive across screen sizes
* Fully compatible with Light & Dark Mode
* Consistent with Apple ecosystem behaviors

---

## Final Philosophy

A great iOS interface should feel:

* Effortless
* Invisible
* Predictable (in a good way)
* Elegant under scrutiny

If users notice the design too much, it’s probably wrong.

The goal is not to impress visually —
it’s to create an experience that feels like it *belongs on the device*.

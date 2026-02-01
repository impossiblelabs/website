export type Project = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  fullImage: string;
  markdown: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Magna Feugiat Lorem",
    description: "A stunning visual exploration of modern design",
    thumbnail: "/images/thumbs/01.jpg",
    fullImage: "/images/fulls/01.jpg",
    markdown: `# Magna Feugiat Lorem

## Project Overview

This project explores the intersection of **modern design** and **functional aesthetics**. Created as part of our ongoing commitment to pushing creative boundaries.

### Key Features

- Responsive design system
- Custom typography integration
- Advanced color theory application
- Motion design elements

### Technologies Used

\`\`\`
- Figma for design
- React for implementation
- Tailwind CSS for styling
- Framer Motion for animations
\`\`\`

### Results

The project achieved a **40% increase** in user engagement and received recognition at the 2025 Design Awards.

> "A masterful blend of form and function." — Design Weekly

---

*Completed: January 2026*
`,
  },
  {
    id: "2",
    title: "Nisl Adipiscing",
    description: "Brand identity redesign for a tech startup",
    thumbnail: "/images/thumbs/02.jpg",
    fullImage: "/images/fulls/02.jpg",
    markdown: `# Nisl Adipiscing

## Brand Identity Project

A comprehensive brand refresh for an emerging technology company seeking to establish market presence.

### Challenge

The client needed a visual identity that communicated:
- Innovation and forward-thinking
- Trustworthiness and reliability
- Accessibility and approachability

### Solution

We developed a complete brand system including:

1. **Logo Design** — Geometric mark with dynamic variations
2. **Color Palette** — Bold primary with sophisticated accents
3. **Typography** — Custom font pairing for digital and print
4. **Brand Guidelines** — 60-page comprehensive manual

### Deliverables

| Item | Format | Status |
|------|--------|--------|
| Logo Suite | SVG, PNG | ✓ |
| Style Guide | PDF | ✓ |
| Social Templates | Figma | ✓ |
| Stationery | Print-ready | ✓ |

---

*Completed: December 2025*
`,
  },
  {
    id: "3",
    title: "Tempus Aliquam Veroeros",
    description: "Interactive data visualization dashboard",
    thumbnail: "/images/thumbs/03.jpg",
    fullImage: "/images/fulls/03.jpg",
    markdown: `# Tempus Aliquam Veroeros

## Data Visualization Dashboard

An interactive platform for visualizing complex datasets with intuitive controls and beautiful representations.

### Features

- **Real-time Updates** — Live data streaming with WebSocket connections
- **Multiple Chart Types** — Bar, line, scatter, heatmap, and custom visualizations
- **Export Options** — PNG, SVG, PDF, and raw data formats
- **Collaboration** — Team sharing and annotation tools

### Technical Stack

\`\`\`typescript
const stack = {
  frontend: ['React', 'D3.js', 'Tailwind CSS'],
  backend: ['Node.js', 'PostgreSQL', 'Redis'],
  infrastructure: ['AWS', 'Docker', 'Kubernetes']
};
\`\`\`

### Performance Metrics

- 100k+ data points rendered smoothly
- < 50ms interaction response time
- 99.9% uptime since launch

---

*Completed: November 2025*
`,
  },
  {
    id: "4",
    title: "Aliquam Ipsum Sed Dolore",
    description: "Mobile app design for fitness tracking",
    thumbnail: "/images/thumbs/04.jpg",
    fullImage: "/images/fulls/04.jpg",
    markdown: `# Aliquam Ipsum Sed Dolore

## Fitness Tracking App

A comprehensive mobile application designed to help users achieve their health and fitness goals.

### User Research

We conducted extensive research including:
- 50+ user interviews
- Competitive analysis of 15 apps
- 3 rounds of usability testing

### Design System

The app features a custom design system with:

- **Components** — 120+ reusable UI elements
- **Animations** — Smooth micro-interactions
- **Dark Mode** — Full theme support
- **Accessibility** — WCAG 2.1 AA compliant

### Screens Designed

1. Onboarding flow (5 screens)
2. Dashboard & home (3 variations)
3. Workout tracking (12 screens)
4. Progress analytics (8 screens)
5. Social features (6 screens)

### Impact

- 4.8★ App Store rating
- 500k+ downloads in first month
- Featured in "Apps We Love"

---

*Completed: October 2025*
`,
  },
  {
    id: "5",
    title: "Cursis Aliquam Nisl",
    description: "E-commerce platform redesign",
    thumbnail: "/images/thumbs/05.jpg",
    fullImage: "/images/fulls/05.jpg",
    markdown: `# Cursis Aliquam Nisl

## E-Commerce Redesign

A complete overhaul of an established e-commerce platform to improve conversion rates and user experience.

### Before & After

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Conversion Rate | 2.1% | 4.8% | +128% |
| Bounce Rate | 58% | 32% | -45% |
| Avg. Session | 2:30 | 5:45 | +130% |
| Cart Abandonment | 76% | 41% | -46% |

### Key Improvements

1. **Simplified Checkout** — Reduced from 5 steps to 2
2. **Product Discovery** — AI-powered recommendations
3. **Search Experience** — Instant results with filters
4. **Mobile Optimization** — Touch-friendly interface

### Testimonial

> "The redesign transformed our business. We've seen record sales every month since launch." — CEO, Client Company

---

*Completed: September 2025*
`,
  },
  {
    id: "6",
    title: "Sed Consequat Phasellus",
    description: "Corporate website for financial services",
    thumbnail: "/images/thumbs/06.jpg",
    fullImage: "/images/fulls/06.jpg",
    markdown: `# Sed Consequat Phasellus

## Financial Services Website

A professional web presence for a leading financial advisory firm, balancing trust with modern aesthetics.

### Design Principles

- **Trust** — Professional imagery, clear hierarchy
- **Clarity** — Complex services made understandable
- **Action** — Clear CTAs throughout the journey
- **Compliance** — Meeting regulatory requirements

### Pages Delivered

\`\`\`
├── Home
├── Services
│   ├── Wealth Management
│   ├── Retirement Planning
│   └── Tax Advisory
├── 
│   ├── Our Team
│   └── Our Story
├── Resources
│   ├── Blog
│   └── Calculators
└── Contact
\`\`\`

### Technical Features

- CMS integration for easy updates
- Lead capture and CRM sync
- Interactive financial calculators
- Secure document portal

---

*Completed: August 2025*
`,
  },
  {
    id: "7",
    title: "Mauris Id Tellus Arcu",
    description: "Photography portfolio with immersive galleries",
    thumbnail: "/images/thumbs/07.jpg",
    fullImage: "/images/fulls/07.jpg",
    markdown: `# Mauris Id Tellus Arcu

## Photography Portfolio

An immersive portfolio experience designed to showcase a photographer's work in the most impactful way.

### Design Focus

The portfolio prioritizes:

- **Image Quality** — Optimized delivery without compression artifacts
- **Immersion** — Full-screen galleries with minimal UI
- **Performance** — Lazy loading and progressive images
- **Navigation** — Intuitive browsing between collections

### Gallery Types

1. **Grid View** — Overview of collections
2. **Slideshow** — Cinematic presentation
3. **Comparison** — Before/after slider
4. **Lightbox** — Detailed image examination

### Technical Achievements

- **100/100** Lighthouse performance score
- **< 2s** First contentful paint
- **WebP + AVIF** Next-gen image formats
- **CDN** Global edge delivery

### Client Feedback

> "Finally, a portfolio that lets my work speak for itself."

---

*Completed: July 2025*
`,
  },
  {
    id: "8",
    title: "Nunc Vehicula Id Nulla",
    description: "SaaS product landing page",
    thumbnail: "/images/thumbs/08.jpg",
    fullImage: "/images/fulls/08.jpg",
    markdown: `# Nunc Vehicula Id Nulla

## SaaS Landing Page

A high-converting landing page for a B2B software product, designed to educate and convert.

### Conversion Strategy

The page follows a proven structure:

1. **Hero** — Clear value proposition + CTA
2. **Social Proof** — Logos and testimonials
3. **Features** — Benefits-focused presentation
4. **Demo** — Interactive product preview
5. **Pricing** — Transparent comparison table
6. **FAQ** — Objection handling
7. **Final CTA** — Strong close

### A/B Testing Results

We tested multiple variations:

| Element | Winner | Improvement |
|---------|--------|-------------|
| Headline | Version B | +23% CTR |
| CTA Color | Green | +18% clicks |
| Pricing Display | Annual toggle | +31% revenue |

### Performance

- **12%** visitor-to-trial conversion
- **45%** trial-to-paid conversion
- **$2.4M** ARR attributed to page

---

*Completed: June 2025*
`,
  },
  {
    id: "9",
    title: "Neque Et Faucibus Viverra",
    description: "Restaurant website with online ordering",
    thumbnail: "/images/thumbs/09.jpg",
    fullImage: "/images/fulls/09.jpg",
    markdown: `# Neque Et Faucibus Viverra

## Restaurant Digital Experience

A complete digital solution for a fine dining establishment, from website to ordering system.

### Scope

- Marketing website
- Digital menu system
- Online reservation
- Takeout ordering
- Gift card platform

### Design Approach

We captured the restaurant's essence through:

- **Photography** — Professional food and ambiance shots
- **Typography** — Elegant serif headings, readable body
- **Color** — Warm palette reflecting the interior
- **Motion** — Subtle animations enhancing sophistication

### Menu Features

\`\`\`
✓ Dietary filters (vegan, GF, etc.)
✓ Allergen information
✓ Wine pairing suggestions
✓ Seasonal highlighting
✓ Chef's recommendations
\`\`\`

### Results

- 300% increase in online reservations
- 40% of revenue now from digital orders
- Average check increased by 15%

---

*Completed: May 2025*
`,
  },
  {
    id: "10",
    title: "Mattis Ante Fermentum",
    description: "Educational platform interface design",
    thumbnail: "/images/thumbs/10.jpg",
    fullImage: "/images/fulls/10.jpg",
    markdown: `# Mattis Ante Fermentum

## Educational Platform

An engaging learning management system designed to make education accessible and enjoyable.

### User Types

The platform serves multiple audiences:

- **Students** — Course consumption, progress tracking
- **Instructors** — Content creation, analytics
- **Administrators** — User management, reporting

### Key Features

1. **Video Player** — Custom controls, playback speed, captions
2. **Note Taking** — Synchronized with video timestamps
3. **Quizzes** — Various question types, instant feedback
4. **Certificates** — Automated generation and verification
5. **Discussion** — Threaded conversations, instructor presence

### Accessibility

- Screen reader compatible
- Keyboard navigation
- High contrast mode
- Adjustable text sizing
- Closed captions on all videos

### Metrics

| Metric | Value |
|--------|-------|
| Course completion rate | 78% |
| Student satisfaction | 4.7/5 |
| Monthly active users | 150k+ |

---

*Completed: April 2025*
`,
  },
  {
    id: "11",
    title: "Sed Ac Elementum Arcu",
    description: "Non-profit organization website",
    thumbnail: "/images/thumbs/11.jpg",
    fullImage: "/images/fulls/11.jpg",
    markdown: `# Sed Ac Elementum Arcu

## Non-Profit Website

A mission-driven website designed to inspire action and facilitate donations for a charitable organization.

### Goals

1. Communicate the mission clearly
2. Share impact stories effectively
3. Make donating simple and secure
4. Recruit and manage volunteers
5. Build community engagement

### Emotional Design

We used storytelling techniques:

- **Hero Stories** — Personal narratives from beneficiaries
- **Impact Numbers** — Animated statistics
- **Photo Essays** — Visual documentation of work
- **Video Testimonials** — Authentic voices

### Donation Flow

Optimized for conversion:

\`\`\`
Landing → Impact Preview → Amount Selection → 
Payment → Confirmation → Thank You + Share
\`\`\`

### Results Post-Launch

- **250%** increase in online donations
- **180%** more volunteer sign-ups
- **3x** social media engagement
- Featured in "Best Non-Profit Websites 2025"

---

*Completed: March 2025*
`,
  },
  {
    id: "12",
    title: "Vehicula Id Nulla Dignissim",
    description: "Portfolio website for creative agency",
    thumbnail: "/images/thumbs/12.jpg",
    fullImage: "/images/fulls/12.jpg",
    markdown: `# Vehicula Id Nulla Dignissim

## Creative Agency Portfolio

A bold, distinctive website showcasing the work of a cutting-edge creative agency.

### Creative Direction

The site embodies the agency's philosophy:

- **Bold** — Strong typography, dramatic imagery
- **Innovative** — Unique interactions, unexpected layouts
- **Refined** — Attention to every detail
- **Memorable** — Distinctive visual identity

### Technical Innovation

\`\`\`javascript
// Custom cursor interactions
// Smooth scroll with parallax
// WebGL background effects
// Dynamic grid layouts
// Page transitions
\`\`\`

### Case Study Structure

Each project features:

1. Overview & challenge
2. Strategic approach
3. Creative process
4. Solution showcase
5. Results & metrics

### Recognition

- **Awwwards** — Site of the Day
- **CSS Design Awards** — Best UI/UX
- **FWA** — Featured Site
- **Webby Awards** — Honoree

---

*Completed: February 2025*
`,
  },
];

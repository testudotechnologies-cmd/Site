# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@0.12.5 create --template minimal --types jsdoc --install npm .
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

# Testudo Technologies Website Development Plan

Stack:

- SvelteKit
- Bootstrap
- GSAP
- Firebase
- Vercel

Goal: Build a fast, modern landing page with a strong **Testudo formation / defense systems aesthetic**.

---

# Phase 1 — Layout System

Goal: Establish the base structure of the website.

## Tasks

Create core components:


src/lib/components/
Navbar.svelte
Hero.svelte
Section.svelte
Footer.svelte


Implement:

- Responsive Navbar
- Full-screen Hero section
- Reusable section layout
- Bootstrap responsive grid

Example layout structure:


Navbar
Hero
Sections
Footer


Deliverable:

✅ Basic website skeleton running.

---

# Phase 2 — Hero Animation

Goal: Create the main landing section inspired by **Palantir-style landing pages**.

## Features

- Fullscreen background video
- Overlay text
- Call-to-action button
- Smooth entrance animations

Hero concept:

VIDEO BACKGROUND
Engineering Advantage
Engineering Resilience
Engineering Strategy

[ Learn More ]


Video concept:

- Roman soldiers forming the **Testudo formation**
- Arrows impacting shields
- Cinematic battlefield atmosphere

Technologies:

- HTML `<video>`
- GSAP animations

Deliverable:

✅ Animated hero section.

---

# Phase 3 — Content Sections

Goal: Present the company clearly.

## Sections

### Technology

Explain core technical capabilities.

Example blocks:


Detection
Resilience
Strategic Infrastructure


### Applications

Possible domains:


Defense
Critical Infrastructure
Strategic Analytics


### Philosophy

Explain the **Testudo concept**:

> coordinated defense through structured systems.

Deliverable:

✅ Full informational landing page.

---

# Phase 4 — Contact System

Goal: Capture leads.

Backend:

Firebase Firestore.

## Structure


src/lib/firebase/firebase.js


## Contact form fields


name
email
company
message


Submit → Firebase collection:


contacts


Deliverable:

✅ Working contact form storing submissions.

---

# Phase 5 — Animations

Goal: Make the site feel premium.

Using **GSAP**.

Animations:

- Section fade-in
- Scroll reveal
- Hero text entrance
- CTA animation

Example:

```javascript
gsap.from(".hero-text", {
  opacity: 0,
  y: 50,
  duration: 1
});

Deliverable:

✅ Smooth animated UX.

# Phase 6 — Branding

Goal: Establish visual identity.

Design language:

Dark background
Steel gray palette
Roman red accent
Minimalist typography

Add:

Logo
Favicon
Typography system
Color palette

Deliverable:

✅ Consistent visual brand.

# Phase 7 — Optimization

Goal: Production-ready performance.

Tasks:

Compress video

Optimize images

Add SEO metadata

Improve Lighthouse score

Lazy loading where needed

Deliverable:

✅ Fast loading site.

# Phase 8 — Deployment

Goal: Make the website public.

Recommended platform:

Vercel

Steps:

Push to GitHub
Connect repo to Vercel
Deploy automatically

Every push → automatic deployment.

Deliverable:

✅ Live website.

# Phase 9 — Future Expansion

Potential future features:

Blog
Case studies
Technology pages
Analytics dashboard
Product pages
Roadmap Summary
Phase 1 Layout System
Phase 2 Hero Animation
Phase 3 Content Sections
Phase 4 Contact Backend
Phase 5 Animations
Phase 6 Branding
Phase 7 Optimization
Phase 8 Deployment
Phase 9 Expansion




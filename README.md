#EU Tours

## Overview

This Full Stack application allows users to book tours around the European Union. It provides a user-friendly interface for browsing and booking tours while utilizing modern web development technologies on both the backend and frontend.

## UX/UI Links

- **Landing page**: [View on Dribbble](https://dribbble.com/shots/16461003-Travelious-Travelling-Services-Landing-Page-Website/attachments/11631202?mode=media)
- **UX skeleton + wireframes**: [View on Behance](https://www.behance.net/gallery/171751519/Travel-Website-Design-Landing-Page)
- **Content below the Landing page**: [View on Behance](https://www.behance.net/gallery/168961811/Travel-agency-landing-page)
- **Tour cards (second picture)**: [View on Dribbble](https://dribbble.com/shots/3532364-The-Great-Outdoors)
- **Animation slide**: [View on Dribbble](https://dribbble.com/shots/10474951-Creative-Travel-Website-Design?utm_source=pinterest&utm_campaign=pinterest_shot&utm_content=Creative+Travel+Website+Design&utm_medium=Social_Share)

## Technologies Used

### Backend

- [TypeScript](https://www.typescriptlang.org/)
- [tRPC](https://trpc.io/): Type-safe APIs
- [Zod](https://github.com/colinhacks/zod): Type checking and validation
- [Next Auth](https://next-auth.js.org/): Authentication with Google and GitHub
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Prisma](https://www.prisma.io/): Database ORM for PostgreSQL
- [ElephantSQL](https://www.elephantsql.com/): PostgreSQL Database Hosting
- [Stripe](https://stripe.com/): Payment Processing
- [SendGrid](https://sendgrid.com/): Email Service (Production)
- [MailTrap](https://mailtrap.io/): Email Service (Development)
- [Docker](https://www.docker.com/)
- [Kubernetes](https://kubernetes.io/)

### Frontend

- [React](https://reactjs.org/): User interface components
- [Tailwind CSS](https://tailwindcss.com/): Styling and design
- [MapBox](https://www.mapbox.com/): Maps and Location Services

## Features

- User registration and authentication using Google and GitHub
- Tour listing with details, images, and prices
- Booking tours with a secure checkout process
- User profile management
- Responsive design for mobile and desktop
- Semantic HTML
- Smooth interactivity
- Smooth transitions, animations, and overall UX
- User settings -> Upload different Image, add nickname, delete one or both Accounts
- CRUD / IRUN database operations
- Lead Guide has the ability to add Tours with frontend UI, which are later added to the database
- One admin, me. Multiple Lead Guides who can delete only their Tours
- Payment service with Stripe. You can book appropriate tour, and you will receive a receipt via email
- Email service with SendGrid for production, and MailTrap for development
- Unit Testing, end-to-end Testing
- Dockerized Image

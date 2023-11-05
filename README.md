### UX/UI Links

- Landing page: [link](https://dribbble.com/shots/16461003-Travelious-Travelling-Services-Landing-Page-Website/attachments/11631202?mode=media),
- UX skeleton + wireframes: [link](https://www.behance.net/gallery/171751519/Travel-Website-Design-Landing-Page),
- Content below the Landing page (image left, text right; image right, text left, etc.): [link](https://www.behance.net/gallery/168961811/Travel-agency-landing-page),
- Tour cards (second picture): [link](https://dribbble.com/shots/3532364-The-Great-Outdoors),
- Animation slide: [link](https://dribbble.com/shots/10474951-Creative-Travel-Website-Design?utm_source=pinterest&utm_campaign=pinterest_shot&utm_content=Creative+Travel+Website+Design&utm_medium=Social_Share).

This app is built using Next.js with TypeScript. I am currently working on this app, it only has few features. The goal is to design frontend first, and then implement backend services.

For frontend I've used React with TailwindCSS, and MapBox for Tour maps and locations.
For backend I've used Node.js with Express.js, where I've implemented TypeSafe APIs with tRPC combined with Zod, as well as Prisma for PostgreSQL and ElephantSQL databases. I've used Next Auth for user authentication with Google and GitHub, and Stripe for booking tours.
For infrastructure I've used Docker and Kubernetes.

This App has:

- Semantic HTML
- Responsive UI
- Smooth interactivity
- Smooth transitions, animations and overall UX
- User authentication with Google and GitHub
- User settings -> Upload different Image, add nickname, delete one or both Accounts.
- CRUD / IRUN database operations.
- Lead Guide has the ability to add Tours with frontend UI, which are later added to database.
- One admin, me. Multiple Lead Guides who can delete only their Tours.
- Payment service with Stripe. You can book appropriate tour, and you will receive receipt via email.
- Email service with SendGrid for production, and MailTrap for development.
- Unit Testing, end-to-end Testing.
- Dockerized Image.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

<p align="center">
<img src="/public/images/p3-1.png">
</p>

EnsiMeal is a recipe app that combines various technologies. Built using Next.js, Streaming SSR, Server Components, and Server Actions, along with Prisma and a PostgreSQL database, EnsiMeal offers a platform for discovering and creating delicious recipes.
The app utilizes Streaming SSR (Server-Side Rendering) to efficiently generate and deliver HTML content to users, resulting in faster page loads and improved performance. This ensures that users can quickly access recipes and related information without delay.

<p align="center">
<img src="/public/images/p3-2.png">
</p>

EnsiMeal also employs Server Components, a Next.js feature that allows for modular server-side rendering. This enables the app to render specific components on the server, reducing the amount of data transferred to the client and enhancing overall performance. The app utilizes Server Action for forms, enabling seamless and secure data submission, validation, and processing.

Prisma, coupled with a PostgreSQL database, serves as the robust backend infrastructure for EnsiMeal. Prisma's intuitive and type-safe query building capabilities simplify database operations and improve productivity. The PostgreSQL database offers reliability, scalability, and strong data integrity, ensuring a seamless recipe management experience.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started


First, clone the repo:

```bash

git clone <remote repo URl>

```
Second, Install all the Dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```
Thrid, Now create env file in the root directory with these keys:

```bash
NEXT_PUBLIC_SUPABASE_URL=""
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=""

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""

```

To get this values go to :

Clerk: https://clerk.com/,<br/>
Supabase: https://supabase.com/

Fourth,

After you got the keys you need to integrate clerk and supabse by following this documentation

<a>https://supabase.com/docs/guides/auth/third-party/overview</a>

Fifth, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


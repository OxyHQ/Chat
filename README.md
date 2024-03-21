<a href="https://Chat.earth/" target="_blank" rel="noopener">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="" />
    <img alt="Chat" src="" />
  </picture>
</a>

<div align="center">
  <h1>Peable Chat</h1>
  <h3>Peable Chat client<br />built with Next.js, React Query,<br /> Prisma, PostgreSQL, and Supabase.</h3>
  
  <br />
  <figure>
    <img src="https://raw.githubusercontent.com/PeableOfficial/Chat/main/public/ChatBanner.png" alt="Chat" />
  </figure>
</div>

<div align="center">
  <img src="https://img.shields.io/github/stars/PeableOfficial/Chat?style=flat" height="20">
  <img src="https://img.shields.io/github/commit-activity/m/PeableOfficial/Chat" height="20">
  <img src="https://img.shields.io/github/deployments/PeableOfficial/Chat/Production?label=vercel&logo=vercel&logoColor=white" height="20">
  <a href="https://twitter.com/PeableOfficial?ref_src=twsrc%5Etfw" target="_blank"><img src="https://img.shields.io/twitter/follow/PeableOfficial?style=social" height="20"></a>
</div>

<br />

## Features

Chat users can:

- 📱 View the optimal layout for the interface depending on their device's screen size
- 🎨 Tailor the interface to their preferences with custom themes and colors
- 🔑 Sign in with Google
- 📩 Send and receive direct messages

## Development workflow

Chat uses [pnpm](https://pnpm.io/) as a package manager, so make sure to [install](https://pnpm.io/installation) it first.

```bash
git clone https://github.com/PeableOfficial/Chat.git
cd Chat
pnpm install
pnpm run dev
```

### Environment Variables

Before running the development server, make sure to create `.env` and `.env.local` files in the root directory of the project and add the required environment variables. You can use the examples provided in the repository as a starting point: [.env.example](https://github.com/PeableOfficial/Chat/blob/main/.env.axample) and [.env.local.example](https://github.com/PeableOfficial/Chat/blob/main/.env.local.example).

```bash
cp .env.example .env
cp .env.local.example .env.local
```

### Prisma

Chat uses [Prisma](https://www.prisma.io/) as an ORM to interact with the database. Before running the development server, make sure to generate the Prisma client by running:

```bash
pnpm prisma generate
```

After generating the Prisma client, make sure to also push any changes to the database schema by running:

```bash
pnpm prisma db push
```

This ensures that the local database is up-to-date with any changes made to the schema in the codebase.

## Contributing

- Missing something or found a bug? [Report here](https://github.com/PeableOfficial/Chat/issues).
- Want to contribute? Check out our [contribution guide](https://github.com/PeableOfficial/Chat/blob/main/CONTRIBUTING.md) and our [TODO list](https://github.com/PeableOfficial/Chat/blob/main/TODO.md).

## License

Chat is licensed under the [MIT License](https://github.com/PeableOfficial/Chat/blob/main/LICENSE.md).

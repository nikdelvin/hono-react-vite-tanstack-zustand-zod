# Nitrozen

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A blazing-fast and robust boilerplate for building modern web applications with a powerful stack: **Hono.js, React, React Router, Vite, Tanstack React Query, Zustand, and Zod**. Nitrozen provides a streamlined developer experience and a solid foundation for high-performance, type-safe, and maintainable applications.

## 🚀 Features

* **Ultrafast Development:** Leverages Vite for lightning-fast cold starts and Hot Module Replacement (HMR).
* **Edge & Serverless Ready:** Built with Hono.js, enabling deployment to various JavaScript runtimes, including edge environments.
* **Modern React Frontend:** Utilizes the latest features of React for building dynamic user interfaces with a component-based architecture.
* **Efficient Data Management:** Implements Tanstack React Query for seamless data fetching, caching, synchronization, and background updates.
* **Centralized State Management:** Employs Zustand for a simple, lightweight, and flexible state management solution.
* **End-to-End Type Safety:** Integrates Zod for schema declaration and validation, ensuring data integrity from API to UI.
* **Optimized Production Builds:** Configured with Vite for highly optimized and performant production bundles.
* **Clean and Organized Structure:** Provides a well-defined project structure to promote maintainability and scalability.
* **Web Standards Focused:** Hono.js's adherence to Web Standards ensures compatibility and future-proofing.

## 🛠️ Technologies Used

* **Hono.js:** An ultrafast and lightweight web framework for the Edge and Node.js, built on Web Standards.
* **React:** A declarative, component-based JavaScript library for building user interfaces.
* **React Router:** A standard library for routing in React applications, enabling declarative navigation.
* **Vite:** A next-generation frontend tooling that provides an extremely fast development experience.
* **Tanstack React Query:** A powerful library for managing, caching, and synchronizing server state in React applications.
* **Zustand:** A small, fast, and scalable bearbones state-management solution using simplified flux principles.
* **Zod:** A TypeScript-first schema declaration and validation library.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed:

* Node.js (v18 or later recommended)
* npm or Yarn or pnpm

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/nikdelvin/nitrozen nitrozen
    ```

2.  Navigate to the project directory:

    ```bash
    cd nitrozen
    ```

3.  Install dependencies using your preferred package manager:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

## Running Locally

To start the development server with Hot Module Replacement:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

This will typically start the development server at `http://localhost:4321`.

## Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

This will generate a `dist` folder with the production-ready static files.

```
Project Structure
nitrozen/
├── dist/
├── app/
│   ├── client/             # Main React application folder
│   │   ├── components/     # Reusable React components
│   │   ├── layouts/        # Themed application layouts
│   │   ├── pages/          # React application routes
│   │   ├── providers/      # Hono.js and Rect Query providers
│   │   ├── states/         # Zustand states
│   │   ├── index.tsx       # Entry point for React application
│   │   ├── router.ts       # Entry point for React Router 
│   ├── server/             # Main Hono.js server folder
│   │   ├── routers/        # Hono.js API routes and handlers
│   │   ├── index.tsx       # Entry point for Hono.js server
│   │   ├── router.ts       # Entry point for API Router
│   ├── utils/              # Utility functions
│   ├── validation/         # Zod schemas
├── .env                    # ENV file
├── .gitignore              # Git Ignore file
├── package.json            # NPM Packages
├── README.md               # This file
├── vite.config.js          # Vite configuration
├── tsconfig.json           # Typescript configuration
└──  ...other config files (eslint, prettier, tsconfig, etc.)
```

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.
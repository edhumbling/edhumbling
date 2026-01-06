# Edhumbling

> **A personal portfolio and life log engineered with the "Militant Knife Edge" design system.**

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Styletron](https://img.shields.io/badge/Styletron-CSS--in--JS-orange)

## ⚡ Overview

**Edhumbling** is not just a portfolio; it's a statement. Built to reflect a sharp, technical, and tactical aesthetic, this project eschews modern rounding for a "Militant Knife Edge" design philosophy. It serves as both a showcase of professional work and a personal life log.

## 🎨 Design System: "Militant Knife Edge"

The UI is governed by a strict set of rules to maintain its unique "Japanese/Militant" aesthetic:

-   **Void Black Palette**: Built on a foundation of `#000000` (Void) and `#0a0a0a` (Gunmetal).
-   **Zero Radius**: Absolutely no rounded corners (`border-radius: 0px`).
-   **Technical Typography**: Uppercase headings, wide letter-spacing, and system-like labels.
-   **Precision**: 1px borders, grid overlays, and diagonal slice effects.

## 🛠️ Technology Stack

-   **Core**: [Next.js 16 (App Router)](https://nextjs.org/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [BaseUI](https://baseweb.design/) + [Styletron](https://styletron.org/)
-   **Testing**: [Jest](https://jestjs.io/) + React Testing Library
-   **Quality**: ESLint

## 🚀 Getting Started

### Prerequisites

-   Node.js 18+
-   npm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/edhumbling.git
    cd edhumbling
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server. |
| `npm run build` | Builds the application for production. |
| `npm run start` | Starts the production server. |
| `npm run lint` | Runs ESLint to catch code quality issues. |
| `npm test` | Runs the test suite using Jest. |
| `npm run test:watch` | Runs tests in watch mode. |

## 📂 Project Structure

```
edhumbling/
├── app/                # Next.js App Router Setup
│   ├── globals.css     # Global styles & design tokens
│   ├── layout.tsx      # Root layout & providers
│   └── page.tsx        # Home page
├── __tests__/          # Unit and Integration tests
├── public/             # Static assets
└── package.json        # Dependencies and scripts
```

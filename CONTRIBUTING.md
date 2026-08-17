# Contributing to E-Waste Eco Lab Landing Site

Thank you for your interest in contributing! To maintain code quality and a clear project history, we follow a strict **Issue-Driven Development (IDD)** workflow.

## 1. Issue-Driven Development

Every change must be associated with an open issue.

- **Find or Create an Issue:** Before starting any work, ensure there is a corresponding issue on GitHub.
- **Task Tracking:** Update `TASKS.md` to reflect the current state of the task (Backlog -> In Progress -> Completed).

## 2. Small, Surgical Changes

We prioritize small, focused contributions over large, sweeping refactors.

- **Single Responsibility:** Each Pull Request (PR) should address exactly one issue.
- **Scope Limitation:** Keep changes localized to a few files or a single component whenever possible.
- **Avoid "Just-in-case" Code:** Do not add logic or styles that are not immediately required by the task.

## 3. Branch Management

- **One Branch Per Task:** Create a new branch for every issue (e.g., `task-001-navigation-bar`).
- **Keep Branches Fresh:** Always pull the latest changes from `main` before starting your work.
- **Delete After Merge:** Branches should be deleted immediately after they are merged into `main`.

## 4. Pull Request Process

- **Descriptive Titles:** Use clear titles that reference the issue number (e.g., `feat: implement mobile nav #12`).
- **Atomic Commits:** Prefer a single, well-described commit for small tasks.
- **Review & Merge:** Once the PR is approved and CI passes, it will be merged and the branch deleted.

## 5. Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Bun](https://bun.sh/)
- [Just](https://just.systems/)

### Getting Started

```bash
# Clone the repository
git clone https://github.com/<org>/landing-website.git
cd landing-website

# Install dependencies
just install

# Start dev server
just dev
```

The app runs at `http://localhost:4200`.

## 6. Project Structure

```
landing-website/
├── frontend/                  # Angular application
│   ├── src/app/
│   │   ├── domain/            # Domain layer (pure TypeScript)
│   │   │   ├── models/        # Domain models and types
│   │   │   └── ports/         # Interfaces for infrastructure
│   │   ├── infrastructure/    # Infrastructure layer
│   │   │   └── adapters/      # Concrete implementations of ports
│   │   ├── shared/            # Reusable UI components
│   │   │   ├── components/    # Button, Card, Container, etc.
│   │   │   └── services/      # ThemeService, etc.
│   │   ├── pages/             # Page-level components
│   │   │   └── landing/       # Landing page sections
│   │   └── styles/            # CSS design system
│   │       ├── variables.css  # CSS custom properties
│   │       └── global.css     # Resets and utilities
│   ├── angular.json
│   └── package.json
├── firebase.json              # Firebase Hosting config
├── justfile                   # Task runner
└── .github/workflows/         # CI/CD pipelines
```

### Hexagonal Architecture

We use **Ports & Adapters** pattern:

- **Domain layer** (`domain/`) — pure TypeScript, no framework imports. Contains models and port interfaces.
- **Infrastructure layer** (`infrastructure/`) — concrete implementations of ports (adapters).
- **Composition root** (`app.config.ts`) — wires ports to adapters via DI tokens.

**When adding new features:**

1. Define a port interface in `domain/ports/`
2. Create an adapter in `infrastructure/adapters/`
3. Register the adapter in `app.config.ts` providers
4. Inject the port token (not the adapter) in components/services

## 7. Coding Standards

- **Angular Standards:** Use standalone components and Angular 21+ best practices.
- **Hexagonal Architecture:**
  - Domain layer must NOT import Angular or any framework
  - Always inject port tokens (`InjectionToken`), never concrete adapters
  - Adapters implement port interfaces and handle platform-specific code
- **Theming:** Use the established CSS variables in `variables.css` for consistent styling across light and dark modes.
- **Path Aliases:** Use path aliases instead of relative paths:
  - `@shared/` → `src/app/shared/`
  - `@pages/` → `src/app/pages/`
  - `@styles/` → `src/app/styles/`
  - `@app/` → `src/app/`
- **Signals:** Use Angular signals (`signal()`, `effect()`, `inject()`) for state management.
- **Formatting:** Run Prettier before committing. Config: 100 char width, single quotes.

## 8. Available Commands

| Command | Description |
|---------|-------------|
| `just install` | Install dependencies |
| `just dev` | Start dev server |
| `just build` | Production build |
| `just generate <name>` | Generate new component |

## 9. Testing

```bash
# Run unit tests
cd frontend && npm test
```

Tests use [Vitest](https://vitest.dev/) with Angular's test utilities.

## 10. Deployment

- **Production:** Push to `main` triggers auto-deploy to Firebase Hosting.
- **Preview:** PRs generate preview deployments automatically.
- **CI:** GitHub Actions runs build on every PR to catch issues early.

## Questions?

Open an issue on GitHub for any questions or clarifications.

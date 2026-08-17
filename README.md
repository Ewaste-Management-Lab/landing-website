# E-Waste Management Lab Website

Official landing website for the E-Waste Management Lab at Makerere University, Kampala, Uganda.

## Tech Stack

- **Framework:** Angular 21 (standalone components, signals)
- **Language:** TypeScript 5.9
- **Styling:** CSS custom properties (light/dark theme)
- **Icons:** Lucide Angular
- **Testing:** Vitest
- **Formatter:** Prettier
- **Deployment:** Firebase Hosting (auto-deploy via GitHub Actions)
- **Task Runner:** just (justfile)

## Project Structure

```
landing-website/
├── frontend/                  # Angular application
│   ├── src/
│   │   └── app/
│   │       ├── shared/        # Reusable UI components
│   │       ├── pages/         # Page-level components
│   │       └── styles/        # CSS design system
│   ├── angular.json
│   └── package.json
├── firebase.json              # Firebase Hosting config
├── justfile                   # Task runner commands
└── .github/workflows/         # CI/CD pipelines
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Bun](https://bun.sh/) (package manager)
- [Just](https://just.systems/) (task runner)

### Installation

```bash
just install
```

### Development

```bash
just dev
```

Opens at `http://localhost:4200`

### Build

```bash
just build
```

Output: `frontend/dist/ewaste-lab/browser/`

### Generate Components

```bash
just generate component-name
```

## Available Commands

| Command | Description |
|---------|-------------|
| `just install` | Install dependencies |
| `just dev` | Start dev server |
| `just build` | Production build |
| `just generate <name>` | Generate new component |

## Architecture

This project uses **Hexagonal Architecture** (Ports & Adapters) with Angular dependency injection.

### Structure

```
src/app/
├── domain/                    # Domain layer (pure TypeScript)
│   ├── models/                # Domain models and types
│   └── ports/                 # Interfaces (ports) for infrastructure
├── infrastructure/            # Infrastructure layer
│   └── adapters/              # Concrete implementations of ports
├── shared/                    # Reusable UI components
│   ├── components/
│   └── services/
├── pages/                     # Page-level components (driving adapters)
└── styles/                    # CSS design system
```

### Ports (Interfaces)

Ports define what the domain needs from external systems:

| Port | Purpose |
|------|---------|
| `ThemePersistencePort` | Load/save theme preference |
| `ThemeResolverPort` | Resolve system theme, listen for OS changes |
| `ThemeRendererPort` | Apply theme to DOM |
| `ContactSubmissionPort` | Submit contact form messages |
| `Logger` | Structured logging |
| `Metrics` | Telemetry and metrics |
| `EventPublisher` | Domain event publishing |

### Adapters (Implementations)

Adapters implement ports for specific platforms:

| Adapter | Implements | Platform |
|---------|------------|----------|
| `LocalStorageThemeAdapter` | `ThemePersistencePort` | Browser localStorage |
| `BrowserThemeResolverAdapter` | `ThemeResolverPort` | Window.matchMedia |
| `CssThemeRendererAdapter` | `ThemeRendererPort` | DOM data-theme attribute |
| `ConsoleContactAdapter` | `ContactSubmissionPort` | Console (stub) |
| `ConsoleLogger` | `Logger` | Console |
| `ConsoleMetrics` | `Metrics` | Console (stub) |
| `ConsoleEventPublisher` | `EventPublisher` | Console (stub) |

### Composition Root

`app.config.ts` wires ports to adapters via DI tokens:

```typescript
providers: [
  { provide: THEME_PERSISTENCE_PORT, useClass: LocalStorageThemeAdapter },
  { provide: THEME_RESOLVER_PORT, useClass: BrowserThemeResolverAdapter },
  // ...
]
```

### Key Patterns

- **Standalone components** — no NgModules
- **Signal-based reactivity** — `signal()`, `effect()`, `inject()`
- **InjectionToken for decoupling** — domain never imports adapters
- **CSS design system** — custom properties in `variables.css`
- **Path aliases** — `@shared/`, `@pages/`, `@styles/`, `@app/`

## Sections

- Hero — Tagline and call-to-action
- Partners — Supported by Makerere University
- About — Mission and focus areas
- Student Programs — Technical workshops, innovation projects, advocacy, research
- Contact — Form and contact information
- Footer — Links and branding

## License

Copyright © 2026 E-Waste Management Lab. All rights reserved.

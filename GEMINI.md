# E-Waste Eco Lab Landing Site - Development Guidelines

## 1. Issue-Driven Development
- All work must be associated with a "Task" in `TASKS.md`.
- Each task should have a clear goal and success criteria.
- When starting a task, update its status in `TASKS.md`.

## 2. Component Reusability
- Prefer creating shared components in `src/app/shared`.
- Components should be modular and configurable via `@Input()` and `@Output()`.
- Use CSS variables from `src/app/styles/variables.css` for consistent styling.

## 3. Code Quality & Reduction
- Avoid duplication. If logic or styles are used in multiple places, abstract them.
- Use standalone components (Angular 17+ pattern).
- Keep components small and focused on a single responsibility.

## 4. Styling
- Use Vanilla CSS with CSS variables.
- Follow the established design system in `variables.css`.
- Use utility classes for common patterns.

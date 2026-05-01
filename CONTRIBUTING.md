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

## 5. Coding Standards
- **Angular Standards:** Use standalone components and Angular 17+ best practices.
- **Theming:** Use the established CSS variables in `variables.css` for consistent styling across light and dark modes.
- **Path Aliases:** Use path aliases (e.g., `@shared/`, `@pages/`) instead of relative paths like `../../`.

By following these guidelines, you help us keep the codebase clean, stable, and easy to maintain.

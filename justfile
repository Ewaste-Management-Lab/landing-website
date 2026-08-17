# justfile
set shell := ["bash", "-c"]

# Commands are executed relative to frontend
ng_root := "frontend"

default:
    @just --list

# Install dependencies using Bun
install:
    cd {{ng_root}} && bun install

# Start the dev server
dev:
    cd {{ng_root}} && bun x ng serve

# Build the project
build:
    cd {{ng_root}} && bun x ng build --configuration production

# Add a new component (usage: just generate component-name)
generate name:
    cd {{ng_root}} && bun x ng generate component shared/{{name}}
# justfile
set shell := ["bash", "-c"]

# Commands are executed relative to ng_src
ng_root := "ng_src"

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

# Run a dry-run to see what the next version would be
release-check:
	cd {{ng_root}} && bun x semantic-release --dry-run

# Official release command (used by CI)
release:
	cd {{ng_root}} && bun x semantic-release
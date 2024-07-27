#!/usr/bin/make -f

.DEFAULT_GOAL := help
.PHONY: help

help: # Show help for each of the Makefile recipes.
	@echo "Fabricity Monorepo"
	@echo ""
	@grep -E '(^\S*:.*?##.*$$)|(^##)' Makefile | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

## —— Symfony app ———————————————————————————————————————————————————————————————————————————————————————————————————
demo-start: ## demo start
	symfony server:start --dir=app/demo -d
demo-stop:  ## demo stop
	symfony server:stop --dir=app/demo -d
demo-log:  ## demo logs
	symfony server:log --dir=app/demo
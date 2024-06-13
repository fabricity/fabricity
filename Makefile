#!/usr/bin/make -f

.DEFAULT_GOAL := help
.PHONY: help

help: # Show help for each of the Makefile recipes.
	@echo "FabriCity Monorepo"
	@echo ""
	@grep -E '(^\S*:.*?##.*$$)|(^##)' Makefile | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

## —— Symfony app ———————————————————————————————————————————————————————————————————————————————————————————————————
symfony-start: ## symfony start
	symfony server:start --dir=app/symfony -d
symfony-stop:  ## symfony stop
	symfony server:stop --dir=app/symfony -d
symfony-log:  ## symfony logs
	symfony server:log --dir=app/symfony
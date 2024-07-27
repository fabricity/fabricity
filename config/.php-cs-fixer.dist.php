<?php

declare(strict_types=1);

$finder = (new PhpCsFixer\Finder())
    ->in(__DIR__.'/../app/*/src')
    ->in(__DIR__.'/../src/bundle/*/config')
    ->in(__DIR__.'/../src/bundle/*/src')
;

return (new PhpCsFixer\Config())
    ->setRules([
        '@Symfony' => true,
		'no_unused_imports' => true,
		'declare_strict_types' => true,
    ])
	->setCacheFile(__DIR__.'/../.cache/.php-cs-fixer.cache')
	->setParallelConfig(PhpCsFixer\Runner\Parallel\ParallelConfigFactory::detect())
	->setRiskyAllowed(true)
    ->setFinder($finder)
;
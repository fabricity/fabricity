<?php

declare(strict_types=1);

use App\Demo\Kernel;

file_exists(dirname(__DIR__).'/vendor/autoload_runtime.php') ?
	require_once dirname(__DIR__).'/vendor/autoload_runtime.php' :
	require_once dirname(__DIR__).'/../../vendor/autoload_runtime.php';

$_SERVER['APP_RUNTIME_OPTIONS'] = [
	'disable_dotenv' => ('true' === ($_SERVER['APP_DISABLE_DOTENV'] ?? false)),
	'project_dir' => dirname(__DIR__),
];

return static function (array $context) {
    return new Kernel($context['APP_ENV'], (bool) $context['APP_DEBUG']);
};
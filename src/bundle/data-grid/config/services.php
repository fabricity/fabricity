<?php

declare(strict_types=1);

use Fabricity\Bundle\DataGridBundle\Controller\DataGridController;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;

return static function (ContainerConfigurator $container): void {
    $container->services()
        ->set(DataGridController::class)
            ->tag('controller.service_arguments')
            ->public()

    ;
};
<?php

declare(strict_types=1);

use Fabricity\Bundle\DataGridBundle\Controller\DataGridController;
use Symfony\Component\Routing\Loader\Configurator\RoutingConfigurator;

return function (RoutingConfigurator $routes) {
    $routes
        ->add('fabricity_grid_test', '/grid/test')
        ->controller([DataGridController::class, 'test'])
        ->methods(['GET'])
    ;
};
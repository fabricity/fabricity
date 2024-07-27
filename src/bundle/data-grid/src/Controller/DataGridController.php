<?php

declare(strict_types=1);

namespace Fabricity\Bundle\DataGridBundle\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class DataGridController
{
    public function test(Request $request): JsonResponse
    {
        return new JsonResponse(['test' => 'test']);
    }
}

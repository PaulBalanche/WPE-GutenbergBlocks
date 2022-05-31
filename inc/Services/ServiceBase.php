<?php

namespace Wpe_Blocks\Services;

use Wpe_Blocks\Shared\Config;

class ServiceBase {
    
    private $config;

    function __construct() {
        $this->config = Config::getInstance();
    }

    public function get_config() {
        return $this->config;
    }

}
<?php

namespace Wpe_Blocks\Services;

use Wpe_Blocks\Singleton\Config;

class ServiceBase {
    
    private $config;

    function __construct() {
        $this->config = Config::getInstance();
    }

    public function get_config() {
        return $this->config;
    }

}
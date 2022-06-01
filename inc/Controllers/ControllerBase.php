<?php

namespace Wpe_Blocks\Controllers;

use Wpe_Blocks\Singleton\Config;

class ControllerBase {
    
    private $config;

    function __construct() {
        $this->config = Config::getInstance();
    }

    public function get_config() {
        return $this->config;
    }

}
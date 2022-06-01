<?php

namespace Wpe_Blocks\Filters;

use Wpe_Blocks\Singleton\Config;

class FiltersBase {
    
    private $config;

    function __construct() {
        $this->config = Config::getInstance();
    }

    public function get_config() {
        return $this->config;
    }

}
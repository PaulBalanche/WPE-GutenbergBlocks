<?php

namespace Wpe_Blocks\Models;

use Wpe_Blocks\Share\Config;

class ModelBase {
    
    private $config;

    function __construct() {

        $this->config = Config::getInstance();
    }

    public function get_config() {
        return $this->config;
    }

}
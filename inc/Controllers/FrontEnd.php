<?php

namespace Wpe_Blocks\Controllers;

use Wpe_Blocks\Services\FrontEnd as FrontEndService;

class FrontEnd extends ControllerBase {

    private $frontEndService;

    public function __construct() {
        
        $this->frontEndService = new FrontEndService();

        parent::__construct();
    }



}
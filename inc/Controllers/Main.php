<?php

namespace Wpe_Blocks\Controllers;

class Main { 

    private $backEndController;

    function __construct() {

        $this->backEndController = new BackEnd();
        $this->backEndController->generate_components();
    }

}
<?php

namespace Wpe_Blocks\Controllers;

class Main extends ControllerBase { 

    private $backEndController;
    private $blocksController;

    function __construct() {

        // $this->blocksController = new Blocks();

        $this->backEndController = new BackEnd();
        // $this->backEndController->generate_blocks();
    }

}
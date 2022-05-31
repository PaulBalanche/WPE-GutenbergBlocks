<?php

namespace Wpe_Blocks\Controllers;

class Main extends ControllerBase { 

    function __construct() {

        new \Wpe_Blocks\Filters\Spacing();
        new BackEnd();
    }

}
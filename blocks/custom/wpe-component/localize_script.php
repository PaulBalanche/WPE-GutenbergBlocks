<?php
return [
    'current_user_can_edit_posts' => ( current_user_can('edit_posts') ) ? "1" : "0",
    'components' => \Wpextend\GutenbergBlock::get_components_frontspec( true ),
    'styles' => \Wpextend\GutenbergBlock::get_frontspec_json_file( 'styles' )
];
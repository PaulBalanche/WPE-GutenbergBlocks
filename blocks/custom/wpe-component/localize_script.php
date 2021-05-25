<?php
return [
    'frontspec_file' => get_stylesheet_directory() . '/frontspec.json',
    'current_user_can_edit_posts' => ( current_user_can('edit_posts') ) ? "1" : "0"
];
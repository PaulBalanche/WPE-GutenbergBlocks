<?php

namespace Wpe_Blocks\Singleton;

class Config {
    
    private static $_instance;

    private $front = [
        'frontspecJsonFileName' => 'frontspec.json',
        'viewsLocation' => 'src/views/',
        'componentsSubLocation' => 'sections/',
        'viewspecJsonFilename' => 'viewspec.json'
    ];

    private $back = [
        'blocksLocation' => 'blocks/',
        'customBlocksLocation' => 'blocks/custom/',
        'viewspecJsonFilename' => 'viewspec.json',
        'metadataJsonFilename' => 'block.json',
        'overrideSpecJsonFilename' => 'override.json',
        'wpDefaultBlockTypes' => [
            'core' => [
                'paragraph', 'list', 'heading', 'quote', 'audio', 'image', 'cover', 'video', 'gallery', 'file', 'html', 'preformatted', 'code', 'verse', 'pullquote', 'table', 'columns', 'column', 'group', 'button', 'more', 'nextpage', 'media-text', 'spacer', 'separator', 'calendar', 'shortcode', 'archives', 'categories', 'latest-comments', 'latest-posts', 'rss', 'search', 'tag-cloud', 'embed',
            ],
            'core-embed' => [
                'twitter', 'youtube', 'facebook', 'instagram', 'wordpress', 'soundcloud', 'spotify', 'flickr', 'vimeo', 'animoto', 'cloudup', 'collegehumor', 'crowdsignal', 'polldaddy', 'dailymotion', 'hulu', 'imgur', 'issuu', 'kickstarter', 'meetup-com', 'mixcloud', 'reddit', 'reverbnation', 'screencast', 'scribd', 'slideshare', 'smugmug', 'speaker', 'speaker-deck', 'ted', 'tumblr', 'videopress', 'wordpress-tv', 'amazon-kindle'
            ],
            'woocommerce' => [
                'handpicked-products', 'all-reviews', 'featured-category', 'featured-product', 'product-best-sellers', 'product-categories', 'product-category', 'product-new', 'product-on-sale', 'products-by-attribute', 'product-top-rated', 'reviews-by-product', 'reviews-by-category', 'product-search', 'product-tag', 'all-products', 'price-filter', 'attribute-filter', 'active-filters'
            ]
        ],
        'allowedBlockTypesJsonFileName' => 'allowed_block_types.json',
        'containerClassName' => 'container'
    ];
    
    private $both = [
        'blocksNamespace' => 'custom',
        'componentBlockName' => 'wpe-component'
    ];



    /**
     * Utility method to retrieve the main instance of the class.
     * The instance will be created if it does not exist yet.
     * 
     */
    public static function getInstance() {

        if( is_null(self::$_instance) ) {
            self::$_instance = new Config();
        }
        return self::$_instance;
    }



    /**
     * Get config
     * 
     */
    public function getFront( $id ) {   return $this->front[$id]    ??  null;    }
    public function getback( $id )  {   return $this->back[$id]     ??  null;    }
    public function get( $id )      {   return $this->both[$id]     ??  null;    }



    /**
     * Return data from "frontspec" JSON file
     * 
     */
    public function get_frontspec_json_file( $data = false, $merge_backspec = true ) {

        $front_spec = json_decode ( file_get_contents( get_stylesheet_directory() . '/' . $this->getFront('frontspecJsonFileName') ), true );

        // if( $merge_backspec ) {
        //     $back_spec = self::get_backspec_json_file();
        //     $front_spec = array_replace_recursive( $front_spec, $back_spec);
        // }

        if ( $data ) {

            if( array_key_exists($data, $front_spec) )
                return $front_spec[$data];
            else
                return null;
        }
        else
            return $front_spec;
    }
    
}
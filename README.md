# WPE-GutenbergBlocks

## Composer & Timber
```require_once( __DIR__ . '/vendor/autoload.php' );```
```$timber = new Timber\Timber();```

## Theme Support
### Wide Alignment:
Some blocks such as the image block have the possibility to define a “wide” or “full” alignment by adding the corresponding classname to the block’s wrapper ( alignwide or alignfull ).
A theme can opt-in for this feature by calling:
```add_theme_support( 'align-wide' );```
# WPE-GutenbergBlocks

## How it works ?
This package have to be included in your current Wordpress theme.
It allow you to easily design your page content with Gutenberg editor and **wpe-container**, **wpe-column** and **wpe-component**.

## Requirements
- plugins : wpextend/wpextend

## Theme configuration
### 1. Composer
```composer install```

### 2. Update theme functions file
Add theses instructions into functions.php file :
- Vendor
```require_once( __DIR__ . '/vendor/autoload.php' );```

- Timber
```$timber = new Timber\Timber();```

- Wide Alignment (Theme Support)
Some blocks such as the image block have the possibility to define a “wide” or “full” alignment by adding the corresponding classname to the block’s wrapper ( alignwide or alignfull ).
A theme can opt-in for this feature by calling:
```add_theme_support( 'align-wide' );```


## Update some variable

### SCSS
- wpe_column_container_class_name:
*-- default: bb_container*
- wpe_column_container_max_width:
*-- default:  1400px*

1. Update file ***current_theme/wpextend/_var.scss***
2.  ```npm run build```

## WPE components

### # wpe-container:

### # wpe-column:

### # wpe-component (the dynamic component):

#### label
Name of the property displayed on top of the input.
- Type: `String`
- Required: Yes

#### type
The type will influence the back-office rendering and the structure of the saved data.
- Type: `String`
- Required: Yes
- Value:
- string
- text
- boolean
- select
- array
- object
- number
- image
- file
- gallery

*__object__ type allows to have child properties.*
*In this case, __props__ property should be defined.*

#### repeatable
Set to true if the properties could be defined more than once.
- Type: `Boolean`
- Required: No
 
#### category
Allows to lighten the back-office display, and to structure the controls in tabs.
Set the category id defined in the props_categories properties.
- Type: `String`
- Required: No

#### props
Related to __object__ type. Allows to define child properties.
- Type: `Object`
- Required: No
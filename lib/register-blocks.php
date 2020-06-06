<?php

namespace gutenbergCustomBlocks;

use function gutenbergCustomBlocks\Blocks\_get_plugin_directory;
use function gutenbergCustomBlocks\Blocks\_get_plugin_url;

add_action( 'init', __NAMESPACE__ . '\register_blocks', 40 );
/**
 * Enqueue block editor only JavaScript and CSS.
 */
function register_blocks() {

    // Fail if block editor is not supported
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

    // List all of the blocks for your plugin
    $blocks = [ 'customblocks/example' ];

    // Register each block with same CSS and JS
    foreach( $blocks as $block ) {
        register_block_type( $block, [
            'editor_script' => 'gutenberg-custom-blocks-editor-js',
            'editor_style'  => 'gutenberg-custom-blocks-editor-css',
            'style' => 'gutenberg-custom-blocks-css'
         ] );
    }

}


add_action( 'init', __NAMESPACE__ . '\frontend_assets');

/**
 * Enqueue block frontend JavaScript and CSS.
 */
function frontend_assets() {

    $frontend_js_path = '/assets/js/blocks.frontend.js';

    wp_enqueue_script(
        'gutenberg-custom-blocks-frontend-js',
        _get_plugin_url() . $frontend_js_path,
        ['wp-element'],
        filemtime( _get_plugin_directory() . $frontend_js_path ),
        true
    );

}




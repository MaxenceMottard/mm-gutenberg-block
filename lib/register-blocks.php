<?php

namespace gutenbergCustomBlocks;

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
    $blocks = [ 'mmblocks/carousel', 'mmblocks/before-after-image' ];

    // Register each block with same CSS and JS
    foreach( $blocks as $block ) {
        register_block_type( $block, [
            'editor_script' => 'mmblocks-editor-js',
            'editor_style'  => 'mmblocks-editor-css',
            'style' => 'mmblocks-css'
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
        'mm-blocks-frontend-js',
        _get_plugin_url() . $frontend_js_path,
        ['wp-element'],
        filemtime( _get_plugin_directory() . $frontend_js_path ),
        true
    );

}




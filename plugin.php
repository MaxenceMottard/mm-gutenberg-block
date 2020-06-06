<?php
/**
 * Plugin Name: Carousel - Gutenberg Blocks
 * Plugin URI:  https://github.com/MaxenceMottard/mm-gutenberg-block
 * Description: Plugin that contains carousel gutenberg block
 * Version:     1.0.0
 * Author:      Maxence Mottard
 * Author URI:  https://github.com/MaxenceMottard/
 * Text Domain: mmblocks
 * Domain Path: /languages
 */

namespace gutenbergCustomBlocks;

//  Exit if accessed directly.
defined('ABSPATH') || exit;

/**
 * Gets this plugin's absolute directory path.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_directory() {
	return __DIR__;
}

/**
 * Gets this plugin's URL.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}



// Enqueue JS and CSS
include __DIR__ . '/lib/register-scripts.php';

// Register block server side
include __DIR__ . '/lib/register-blocks.php';

// Register block server side
include __DIR__ . '/lib/block-categories.php';

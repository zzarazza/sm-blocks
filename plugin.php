<?php
/**
 * Plugin Name: SM Blocks
 * Description: SM Blocks is a Gutenberg plugin created via create-guten-block.
 * Version: 1.1.2
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package SM
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';

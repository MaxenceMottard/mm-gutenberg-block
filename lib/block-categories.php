<?php

namespace gutenbergCustomBlocks;


add_filter( 'block_categories', function( $categories, $post ) {
	return array_merge(
		$categories,
		[
			[
                'slug' => 'custom-blocks',
                'icon' => 'admin-appearance',
				'title' => __( 'Advanced Custom Blocks', 'gutenbergCustomBlocks' ),
			],
		]
	);
}, 10, 2 );

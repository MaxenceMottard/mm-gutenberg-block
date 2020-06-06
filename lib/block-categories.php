<?php

namespace gutenbergCustomBlocks;


add_filter( 'block_categories', function( $categories, $post ) {
	return array_merge(
		$categories,
		[
			[
                'slug' => 'mm-blocks',
                'icon' => 'hammer',
				'title' => __( 'Blocks Customs', 'mmblocks' ),
			],
		]
	);
}, 10, 2 );
